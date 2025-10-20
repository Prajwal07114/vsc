import { axiosInstance } from "./axios";

export async function getStreamToken(params) {
  const response = await axiosInstance.get("/chat/token");
  return response.data;
}