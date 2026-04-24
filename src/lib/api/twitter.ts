import { api } from "./api";
import { UserResponse, post } from "./types/";

export const getUserById = async (id: string) => {
  const response = await api.get<UserResponse>(`users/${id}/profile`);
  return response.data;
};

export const getPostById = async (id: string) => {
    const response = await api.get<Post>
}