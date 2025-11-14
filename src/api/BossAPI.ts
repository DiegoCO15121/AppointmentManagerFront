import api from "@/lib/axios";
import { catchError } from "@/utils/error";
import {
  BossesSchemas,
  BossSchema,
  type AddBossType,
  type BossType,
} from "../types";

export async function getBosses({
  page,
  limit,
  search,
}: {
  page: number;
  limit: number;
  search?: string;
}) {
  try {
    const { data } = await api.get("/admin-accounts", {
      params: { page, limit, ...(search && { search }) },
    });
    const response = BossesSchemas.safeParse(data);

    if (response.success) return response.data;
  } catch (error) {
    catchError(error);
  }
}

export async function getBossById(bossId: BossType["userId"]) {
  try {
    const { data } = await api.get(`/admin-accounts/${bossId}`);

    const response = BossSchema.safeParse(data);

    if (response.success) return response.data;
  } catch (error) {
    catchError(error);
  }
}

export async function createBoss(bossData: AddBossType) {
  try {
    const { data } = await api.post<string>("/admin-accounts", bossData);
    return data;
  } catch (error) {
    catchError(error);
  }
}

export async function updateBoss({
  bossData,
  bossId,
}: {
  bossData: AddBossType;
  bossId: BossType["userId"];
}) {
  try {
    const { data } = await api.patch<string>(
      `/admin-accounts/${bossId}`,
      bossData
    );
    return data;
  } catch (error) {
    catchError(error);
  }
}

export async function deleteBoss(bossId: BossType["userId"]) {
  try {
    const { data } = await api.delete<string>(`/admin-accounts/${bossId}`);
    return data;
  } catch (error) {
    catchError(error);
  }
}
