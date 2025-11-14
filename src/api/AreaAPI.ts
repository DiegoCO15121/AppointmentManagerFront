import api from "@/lib/axios";
import {
  AreaSchema,
  AreasSchema,
  type AreaType,
} from "@/types/area/area.types";
import { catchError } from "@/utils/error";

export async function createArea(areaData: AreaType) {
  try {
    const { data } = await api.post<string>("/area", areaData);

    return data;
  } catch (error) {
    catchError(error);
  }
}

export async function getArea(areaId: AreaType["id"]) {
  try {
    const { data } = await api.get(`/area/${areaId}`);

    const response = AreaSchema.safeParse(data);

    if (response.success) return response.data;
  } catch (error) {
    catchError(error);
  }
}

export async function getAreas() {
  try {
    const { data } = await api.get(`/area`);

    const response = AreasSchema.safeParse(data);

    if (response.success) return response.data;
  } catch (error) {
    catchError(error);
  }
}

export async function updateArea(areaData: AreaType) {
  try {
    const { data } = await api.patch<string>(`/area/${areaData.id}`);

    return data;
  } catch (error) { 
    catchError(error);
  }
}

export async function deleteArea(areaData: AreaType) {
  try {
    const { data } = await api.delete<string>(`/area/${areaData.id}`);

    return data;
  } catch (error) {
    catchError(error);
  }
}
