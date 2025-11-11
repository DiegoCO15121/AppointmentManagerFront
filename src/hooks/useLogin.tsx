import { login } from "@/api/AuthAPI";
import { useToast } from "@/components/general/toastContext";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.current?.show({
        severity: "success",
        summary: `Bienvenido ${data?.names}!`,
        detail: "Se ha iniciado sesión correctamente",
        life: 3000,
      });

      if (data?.userRole === "system admin")
        navigate("/admin-home", { replace: true });
      if (data?.userRole === "university admin")
        navigate("/boss-home", { replace: true });
      if (data?.userRole === "visitor")
        navigate("/user-home", { replace: true });
    },

    onError: (error) => {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: error?.message || "Ocurrió un error al registrarte.",
        life: 3000,
      });
    },
  });

  return { mutate };
};
