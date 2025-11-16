import { updateArea } from "@/api/AreaAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type { AreaType } from "@/types/area/area.types";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUpdateArea = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: updateArea,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: {
          title: "Área Actualizada",
          content: "Área actualizada correctamente",
        },
        autoClose: 3000,
        theme: "colored",
      });

      queryClient.invalidateQueries({queryKey: ["getAreas"]})
    },
    onError: onToastError,
  });

  const handleUpdateArea = async (areaData: AreaType) => {
    await toast.promise(mutateAsync(areaData), {
      pending: "Actualizando Área",
    });
  };

  return { handleUpdateArea };
};
