

// mongodb+srv://adityawani2024main:Aditya@1003@roxi-assignment.jca1w.mongodb.net/

import mongoose from "mongoose"

const dbConnection=async()=>{

    const DB_URI="mongodb://localhost:27017"
    try {
        await  mongoose.connect(DB_URI,{dbName:"TASK_BY_WELLNESS"})
        console.log("DATABASE CONNECTED SUCCESFULLY")
    } catch (error) {
        console.log(`Error while connecting the database`,error.message)
    }
}




export default dbConnection;