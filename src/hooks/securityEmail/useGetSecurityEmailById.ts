import { getSecurityEmailById } from "@/api/SecurityEmailsAPI";
import type { SecurityEmailType } from "@/types/securityAccount/security.types";
import { useQuery } from "@tanstack/react-query";

export const useSecurityEmailById = (emailId: SecurityEmailType["email"]) => {
  const { data: securityEmail } = useQuery({
    queryKey: ["getSecurityEmail"],
    queryFn: () => getSecurityEmailById(emailId),
    retry: false,
  });

  return { securityEmail };
};
