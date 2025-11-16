import { getArea } from "@/api/AreaAPI";
import type { AreaType } from "@/types/area/area.types";
import { useQuery } from "@tanstack/react-query";

export const useGetAreaById = (areaId?: AreaType["id"]) => {
  const { data: areaData } = useQuery({
    queryKey: ["getArea"],
    queryFn: () => getArea(areaId as string),
    retry: false,
    enabled: !!areaId
  });

  return { areaData };
};
