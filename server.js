import express from "express";
import dbConnection from "./database/db.js";
import bodyParser from "body-parser";
const app=express();
import taskRoutes from "./dist/routes/taskRoutes.js";
import authRoutes from "./dist/routes/authRoutes.js";
import dotenv from "dotenv";

dotenv.config();


const PORT=process.env.PORT|| 4000

app.use(bodyParser.json());



dbConnection();


app.get("/",(req,res)=>{
    res.send(`Deafult api is working`);
})


app.use("/api/auth", authRoutes);
app.use("/api", taskRoutes);

app.listen(PORT,()=>{
    console.log(`Server is working on ${PORT}`)
})