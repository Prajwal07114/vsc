import express from "express"
import  ENV  from "./env.js";
const app =express();

app.get("/",(req,res)=>{
  res.send("Hello Cope");
})

app.listen (ENV.PORT,()=>console.log("Server listening",ENV.PORT)
)