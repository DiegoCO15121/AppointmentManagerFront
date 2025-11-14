import { updateBoss } from "@/api/BossAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type { AddBossType, BossType } from "@/types/index";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUpdateBoss = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: updateBoss,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: { title: "Jefe de Área Actualizado Correctamente", content: "" },
        autoClose: 3000,
        theme: "colored",
      });

      queryClient.invalidateQueries({ queryKey: ["getBosses"] });
    },
    onError: onToastError,
  });

  const handleUpdateBoss = async ({
    bossData,
    bossId,
  }: {
    bossData: AddBossType;
    bossId: BossType["userId"];
  }) => {
    await toast.promise(mutateAsync({ bossId, bossData }), {
      pending: "Actualizando Administrador",
    });
  };

  return { handleUpdateBoss };
};
