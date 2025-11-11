import { catchError } from "@/utils/error";
import api from "@/lib/axios";
import { UserSchema, type LoginType, type RegisterType } from "../types";

export async function register(formData: RegisterType) {
  try {
    const { data } = await api.post<string>("/auth/register", formData);
    return data;
  } catch (error) {
    catchError(error);
  }
}

export async function login(loginData: LoginType) {
  try {
    const {data} = await api.post("/auth/login", loginData)
    const response = UserSchema.safeParse(data);

    if(response.success) return response.data
  } catch (error) {
    catchError(error)
  }
}

export async function currentUser() { 
  try {
    const {data} = await api.get("/auth/check-status");
    const response = UserSchema.safeParse(data)
    

    if(response.success) return response.data
  } catch (error) {
    catchError(error)
  }
}