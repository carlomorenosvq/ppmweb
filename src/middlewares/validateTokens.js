import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
export const authRequired = (req, res, next)=>{
     const {token} = req.cookies;
     if(!token)
     return res.status(401).json({message:"Autorización denegada"});

     jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).json({message: "token invalido"});
        req.user = user
        next();
     })

  

};

//Fragmento de código para verificar los token, cuando el usuario se registra se genera un token
//para acceder a las tareas necesitará ese token
