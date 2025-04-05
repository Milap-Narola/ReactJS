import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const ConnectDB = async () => {
    try {
       await mongoose.connect(process.env.DB_URL)
        console.log('DataBase Connected');
    } catch (error) {
        console.log(error);
    }
}
export default ConnectDB;