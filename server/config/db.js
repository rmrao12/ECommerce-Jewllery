import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

let isConnected=false;
let url=process.env.URL
async function connectDb()
{
    if(isConnected) return;
    try{
        await mongoose.connect(url);
        isConnected=true
        console.log("Database Connected")
    }
    catch(error)
    {
        console.log("Error connecting to database",error);
    }
}

export default connectDb;