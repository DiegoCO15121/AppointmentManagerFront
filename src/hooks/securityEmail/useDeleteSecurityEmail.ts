import { deleteSecurityEmail } from "@/api/SecurityEmailsAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type { SecurityEmailType } from "@/types/securityAccount/security.types";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useDeleteSecurityEmail = () => {
  const { mutateAsync } = useMutation({
    mutationFn: deleteSecurityEmail,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: {
          title: "Eliminado Correctamente",
          content: "Correo de seguridad eliminado correctamente",
        },
        autoClose: 3000,
        theme: "colored",
      });
    },
    onError: onToastError,
  });

  const handleDeleteSecurityEmail = async (
    emailId: SecurityEmailType["id"]
  ) => {
    await toast.promise(mutateAsync(emailId), { pending: "Eliminando Correo" });
  };

  return { handleDeleteSecurityEmail };
};
