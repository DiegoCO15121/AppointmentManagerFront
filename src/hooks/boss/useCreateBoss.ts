import { createBoss } from "@/api/BossAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type { AddBossType } from "@/types/index";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateBoss = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: createBoss,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: { title: "Jefe Creado Correctamente", content: "" },
        autoClose: 3000,
        theme: "colored",
      });
      queryClient.invalidateQueries({ queryKey: ["getBosses"] });
    },
    onError: onToastError,
  });

  const handleCreateBoss = async (bossData: AddBossType) => {
    await toast.promise(mutateAsync(bossData), {
      pending: "Agregando Administrador",
    });
  };

  return { handleCreateBoss };
};
