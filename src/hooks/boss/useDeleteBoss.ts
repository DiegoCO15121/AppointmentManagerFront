import { deleteBoss } from "@/api/BossAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type { BossType } from "@/types/index";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useDeleteBoss = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: deleteBoss,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: { title: "Jefe de Área Eliminado Correctamente", content: "" },
        autoClose: 3000,
        theme: "colored",
      });
      queryClient.invalidateQueries({ queryKey: ["getBosses"] });
    },
    onError: onToastError,
  });

  const handleDeleteBoss = async (bossId: BossType["userId"]) => {
    await toast.promise(mutateAsync(bossId), {
      pending: "Eliminando Administrador",
    });
  };

  return { handleDeleteBoss };
};
