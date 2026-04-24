import axios from "axios";

export const api = axios.create({
  baseURL: "https://frontend-p4.vercel.app/",
  timeout: 1000,
});