import {StreamChat} from "stream-chat";
import ENV from "../config/env.js";


const streamClient = StreamChat.getInstance(ENV.STREAM_API_KEY,ENV.STREAM_SECRET_KEY)


export const upsertStreamUser = async (userData)=>{
  try {
    await streamClient.upsertUser(userData)
    console.log("Stream user upserted successfully",userData.name);
    return userData
  } catch (error) {
    console.log("Error in upserting",error);
  }
}

export const deleteStreamUser = async (userId) =>{
  try {
    await streamClient.deleteUser(userId)
    console.log("User deleted succesfully",userId);
  } catch (error) {
    console.log("Error detected in stream",error);
  }
}



export const generateStreamToken = (userId) => {
  try {
    if (!userId) throw new Error("userId is missing");

    // Clerk userId is already a string, no need for .Id or .toString()
    return streamClient.createToken(userId);
  } catch (error) {
    console.log("Error generating Stream token", error);
    return null;
  }
};
