import { api } from "./api";
import { UserResponse } from "./types/";

export const getUserById = async (id: string) => {
  const response = await api.get<UserResponse>(`users/${id}/profile`);
  return response.data;
};