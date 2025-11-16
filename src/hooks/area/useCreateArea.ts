import { createArea } from "@/api/AreaAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type { AreaType } from "@/types/area/area.types";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateArea = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: createArea,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: { title: "Área Creada", content: "Área creada correctamente" },
        autoClose: 3000,
        theme: "colored",
      });
      queryClient.invalidateQueries({ queryKey: ["getAreas"] });
    },
    onError: onToastError,
  });

  const handleCreateArea = async (areaData: AreaType) => {
    await toast.promise(mutateAsync(areaData), { pending: "Creando Área" });
  };

  return {handleCreateArea}
};
