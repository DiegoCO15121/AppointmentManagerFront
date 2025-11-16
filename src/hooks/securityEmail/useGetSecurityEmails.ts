import { getSecurtiyEmails } from "@/api/SecurityEmailsAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetSecurityEmails = ({
  page = 0,
  limit = 3,
  search = "",
}: {
  page?: number;
  limit?: number;
  search?: string;
  enabled?: boolean;
} = {}) => {
  const isSearching = search.trim() !== "";

  const { data: securityEmails } = useQuery({
    queryKey: ["getSecurityEmails", search],
    queryFn: () =>
      getSecurtiyEmails({
        page,
        limit,
        search: isSearching ? search : undefined,
      }),

    retry: false,
  });

  return { securityEmails };
};
