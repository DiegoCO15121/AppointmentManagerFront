import { deleteArea } from "@/api/AreaAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type { AreaType } from "@/types/area/area.types";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useDeleteArea = () => {
  const queryClient = useQueryClient();
  
  const { mutateAsync } = useMutation({
    mutationFn: deleteArea,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: {
          title: "Eliminada Correctamente",
          content: "Área eliminada correctamente",
        },
        autoClose: 3000,
        theme: "colored",
      });
      queryClient.invalidateQueries({ queryKey: ["getAreas"] });
    },
    onError: onToastError,
  });

  const handleDeleteArea = async (areaId: AreaType["id"]) => {
    await toast.promise(mutateAsync(areaId), { pending: "Elimnando Área" });
  };

  return { handleDeleteArea };
};
