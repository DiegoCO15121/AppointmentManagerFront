import { catchError } from "@/utils/error";
import api from "@/lib/axios";
import {
  UserSchema,
  type LoginType,
  type RegisterType,
  type ResetPasswordType,
} from "../types";

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
    const { data } = await api.post("/auth/login", loginData);
    const response = UserSchema.safeParse(data);

    if (response.success) return response.data;
  } catch (error) {
    catchError(error);
  }
}

export async function currentUser() {
  try {
    const { data } = await api.get("/auth/check-status");
    const response = UserSchema.safeParse(data);

    if (response.success) return response.data;
  } catch (error) {
    catchError(error);
  }
}

export async function forgottenPassword(email: LoginType["email"]) {
  try {
    const { data } = await api.post<string>("/auth/forgot-password", { email });
    return data;
  } catch (error) {
    catchError(error);
  }
}

export async function resetPassword(formData: ResetPasswordType) {
  try {
    const { data } = await api.post<string>("/auth/reset-password", formData);
    return data;
  } catch (error) {
    catchError(error);
  }
}

export async function logOut() {
  try {
    const { data } = await api.post<string>("/auth/log-out");
    return data;
  } catch (error) {
    catchError(error);
  }
}
