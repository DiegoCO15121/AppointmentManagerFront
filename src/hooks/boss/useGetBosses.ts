import { useQuery } from "@tanstack/react-query";
import { getBosses } from "@/api/BossAPI";


export const useGetBosses = ({
  page = 0,
  limit = 7,
  search,
  enabled = false
}: {
  page?: number;
  limit?: number;
  search?: string;
  enabled?: boolean
} = {}) => {
  const isEnabled = !!search && search.trim() !== ""

  const { data: bossArray } = useQuery({
    queryKey: ["getBosses"],
    queryFn: () => getBosses({ page, limit, search }),
    retry: false,
    enabled: isEnabled || enabled
  });

  return { bossArray };
};
