import mongoose from "mongoose";

//Configuración de la base de datos de mongodb
//TryCatch por si falla

export const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://carlosmoreno:confidencial1@cluster0.hqqvj2s.mongodb.net/");
        console.log(">>> DB is conected");
    } catch (error) {
        console.log(error);
    }
};
