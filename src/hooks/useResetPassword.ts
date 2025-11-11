import { resetPassword } from "@/api/AuthAPI";
import { useToast } from "@/components/general/toastContext";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useResetPassword = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (_data) => {
      toast.current?.show({
        severity: "success",
        summary: "Contraseña Restablecida Correctamente",
        detail: "Ya puedes iniciar sesión con tu nueva contraseña.",
        life: 3000,
      });
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: error.message,
        life: 3000,
      });
    },
  });

  return { mutate };
};
