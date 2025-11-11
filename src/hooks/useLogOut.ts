import { logOut } from "@/api/AuthAPI";
import { useToast } from "@/components/general/toastContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: logOut,
    onSuccess: (_data) => {
      toast.current?.show({
        severity: "success",
        summary: `Sesión Cerrada Correctamente`,
        detail: "Se ha cerrado sesión correctamente",
        life: 3000,
      });

      queryClient.cancelQueries({ queryKey: ["currentUser"] });

      navigate("/login");
    },
    onError: (error) => {
      toast.current?.show({
        severity: "error",
        summary: `Error`,
        detail: error.message,
        life: 3000,
      });
    },
  });

  return { mutate };
};
