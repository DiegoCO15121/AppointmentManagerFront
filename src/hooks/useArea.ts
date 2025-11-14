import {
  createArea,
  deleteArea,
  getArea,
  getAreas,
  updateArea,
} from "@/api/AreaAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type { AreaType } from "@/types/area/area.types";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useArea = () => {
  const area = (areaId: AreaType["id"]) => {
    const { data: areaData } = useQuery({
      queryKey: ["getArea", areaId],
      queryFn: () => getArea(areaId),
      retry: false,
      enabled: !!areaId,
    });

    return areaData;
  };

  const { data: areasArray } = useQuery({
    queryKey: ["getAreas"],
    queryFn: getAreas,
    retry: 2,
  });

  const { mutate: mutateAddArea } = useMutation({
    mutationFn: createArea,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: { title: "Area Creada Correctamente", content: "" },
        autoClose: 3000,
        theme: "colored",
      });
    },
    onError: onToastError,
  });

  const { mutate: mutateUpdateArea } = useMutation({
    mutationFn: updateArea,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: { title: "Area Actualizada Correctamente", content: "" },
        autoClose: 3000,
        theme: "colored",
      });
    },
    onError: onToastError,
  });

  const { mutate: mutateDeleteArea } = useMutation({
    mutationFn: deleteArea,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: { title: "Area Eliminada Correctamente", content: "" },
        autoClose: 3000,
        theme: "colored",
      });
    },
    onError: onToastError,
  });

  return {
    area,
    areasArray,
    mutateAddArea,
    mutateUpdateArea,
    mutateDeleteArea,
  };
};
