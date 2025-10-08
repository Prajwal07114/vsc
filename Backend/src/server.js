import express from "express"
import  ENV  from "./config/env.js";
import { connectDB } from "./config/db.js";
const app =express();

app.get("/",(req,res)=>{
  res.send("Hello Cope");
})

console.log("mongo uri :",ENV.MONGO_URI);

app.listen (ENV.PORT,()=> {console.log("Server listening",ENV.PORT)
  connectDB()
})