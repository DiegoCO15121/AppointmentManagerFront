import { forgottenPassword } from "@/api/AuthAPI";
import { useToast } from "@/components/general/toastContext";
import { useMutation } from "@tanstack/react-query";

export const useForgottenPassword = () => {
  const toast = useToast();
  const { mutate } = useMutation({
    mutationFn: forgottenPassword,
    onSuccess: (_data) => {
      toast.current?.show({
        severity: "success",
        summary: "Email Enviado Correctamente",
        detail: "Revisa tu email para poder continuar el proceso.",
        life: 3000,
      });
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
  
  return {mutate}
};
