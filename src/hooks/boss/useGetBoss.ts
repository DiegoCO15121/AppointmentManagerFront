import { getBossById } from "@/api/BossAPI";
import type { BossType } from "@/types/index";
import { useQuery } from "@tanstack/react-query";

export const useGetBoss = (bossId?: BossType["userId"]) => {
  const { data: bossRawData } = useQuery({
    queryKey: ["getBoss"],
    queryFn: () => getBossById(bossId as string),
    retry: false,
    enabled: !!bossId,
  });

  return { bossRawData };
};
