import app from "./app.js";
import { connectDB } from "./db.js";

//cConfiguración del puerto, en este caso 5002


connectDB();
app.listen(5002);
console.log('server on port', 5002)