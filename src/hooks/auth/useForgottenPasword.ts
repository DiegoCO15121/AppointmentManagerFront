import { forgottenPassword } from "@/api/AuthAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import { onToastError } from "@/utils/toast/onToastError";

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useForgottenPassword = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: forgottenPassword,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: {
          title: "Correo Envíado Correctamente",
          content: "Revisa tu bandeja de entrada",
        },
        autoClose: 3000,
        theme: "colored",
      });
    },

    onError: onToastError,
  });

  const handleSendEmail = async (email: string) => {
    await toast.promise(mutateAsync(email), {
      pending: "Enviando Email...",
    });
  };

  return { handleSendEmail, isPending };
};
