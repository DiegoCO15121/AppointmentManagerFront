import { catchError } from "@/utils/error";
import api from "@/lib/axios";
import type { RegisterType } from "../types";


export async function register(formData: RegisterType) {
  try {
    console.log(formData)
    const {data} = await api.post("/auth/register", formData)
    return data


  } catch (error) {
    catchError(error);
  }
}
