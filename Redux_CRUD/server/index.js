import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import UserRouter from './router/userRoute.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/", (req, res) => {
    res.send('hello world');
})
app.use("/users",UserRouter);
// const PORT = process.env.PORT||8001
app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`);
    ConnectDB()
})