import { useQuery } from "@tanstack/react-query";
import { getBosses } from "@/api/BossAPI";

export const useGetBosses = ({
  page = 0,
  limit = 7,
  search,
}: {
  page?: number;
  limit?: number;
  search?: string;
} = {}) => {
  const isEnabled = !!search && search.trim() !== ""
  const { data: bossArray } = useQuery({
    queryKey: ["getBosses"],
    queryFn: () => getBosses({ page, limit, search }),
    retry: false,
    enabled: isEnabled
  });

  return { bossArray };
};
