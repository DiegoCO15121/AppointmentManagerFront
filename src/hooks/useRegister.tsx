import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/AuthAPI";
import { useToast } from "@/components/general/toastContext";

export const useRegister = () => {
  const toast = useToast();
  
  const { mutate } = useMutation({
    mutationFn: register,
    onSuccess: (_data) => {
      toast.current?.show({
        severity: "success",
        summary: "Registro exitoso",
        detail: "Tu cuenta fue creada correctamente.",
        life: 3000,
      });
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
