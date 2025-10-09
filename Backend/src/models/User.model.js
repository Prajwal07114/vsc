import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Email:{
    type:String,
    required:true,
    unique : true
  },
   Name :{
    type : String,
    required:true,
   },
   image : {
    type : String,
    required:true,
   },
   clerkId : {
    type:String,
    required:true,
    unique:true,
   }
},
{timestamps:true}
);

export const User = mongoose.model("User",userSchema)