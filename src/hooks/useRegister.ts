import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/AuthAPI";
import { useToast } from "@/components/general/toastContext";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const toast = useToast();
  const navigate = useNavigate();
  
  const { mutate } = useMutation({
    mutationFn: register,
    onSuccess: (_data) => {
      toast.current?.show({
        severity: "success",
        summary: "Registro exitoso",
        detail: "Tu cuenta fue creada correctamente.",
        life: 3000,
      });

      navigate("/login")

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
