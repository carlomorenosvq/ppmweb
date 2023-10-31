import mongoose from "mongoose";


//Tipos de variables para el usuario, solo tendrá nombre de usuario, email y contrasñea en el registro
//Y serán todos string con el require en true para que sea obligatorio
//trim sirve para quitar espacios en blanco si los hubiese

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        trim: true
    },
    email:{
        type: String,
        require: true,
        trim: true,
        unique: true 
    },
    password:{
        type: String,
        require: true,
    }
},{
    timestamps: true,
})
export default mongoose.model('User', userSchema);