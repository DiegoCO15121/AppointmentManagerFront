import { getAreas } from "@/api/AreaAPI";
import { useQuery } from "@tanstack/react-query";

export const useGetAreas = ({
  page = 0,
  limit = 6,
}: {
  page?: number;
  limit?: number;
  search?: string;
} = {}) => {
  const { data: areasArray } = useQuery({
    queryKey: ["getAreas"],
    queryFn: () => getAreas({page, limit}),
    retry: false,
  });

  return { areasArray };
};
