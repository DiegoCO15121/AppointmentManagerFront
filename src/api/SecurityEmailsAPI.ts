import api from "@/lib/axios";
import {
  SecurtityEmailSchema,
  SecurtityEmailsSchema,
  type AddSecurityEmailType,
  type SecurityEmailType,
} from "@/types/securityAccount/security.types";
import { catchError } from "@/utils/error";
import { email } from "zod";

export async function getSecurtiyEmails({
  page,
  limit,
  search,
}: {
  page: number;
  limit: number;
  search?: string;
}) {
  try {
    const { data } = await api.get("/security-email", {
      params: { page, limit, ...(search && { search }) },
    });
    const response = SecurtityEmailsSchema.safeParse(data);

    if (response.success) return response.data;
  } catch (error) {
    catchError(error);
  }
}

export async function getSecurityEmailById(
  emailId: SecurityEmailType["email"]
) {
  try {
    const { data } = await api.get(`/security-email/${emailId}`);

    const response = SecurtityEmailSchema.safeParse(data);

    if (response.success) return response.data;
  } catch (error) {
    catchError(error);
  }
}

export async function addSecurityEmail(emailData: AddSecurityEmailType) {
  try {
    const { data } = await api.post<string>("/security-email", emailData);
    return data;
  } catch (error) {
    catchError(error);
  }
}

export async function updateSecurityEmail({
  emailId,
  emailData,
}: {
  emailId: SecurityEmailType["id"];
  emailData: AddSecurityEmailType;
}) {
  try {
    const { data } = await api.patch<string>(
      `/security-email/${emailId}`,
      emailData
    );
    return data;
  } catch (error) {
    catchError(error);
  }
}

export async function deleteSecurityEmail(emailId: SecurityEmailType["id"]) {
  try {
    const { data } = await api.delete<string>(`/security-email/${emailId}`);
    return data;
  } catch (error) {
    catchError(error);
  }
}
