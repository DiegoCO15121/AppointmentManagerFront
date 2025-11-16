import { updateSecurityEmail } from "@/api/SecurityEmailsAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type {
  AddSecurityEmailType,
  SecurityEmailType,
} from "@/types/securityAccount/security.types";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUpdateSecurityEmail = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: updateSecurityEmail,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: {
          title: "Actualizada correctamente",
          content: "Cuenta de seguridad actualizado correctamente",
        },
        autoClose: 3000,
        theme: "colored",
      });

      queryClient.invalidateQueries({ queryKey: ["getSecurityEmails"] });
    },
    onError: onToastError,
  });

  const handleUpdateSecurityEmail = async (
    emailId: SecurityEmailType["email"],
    emailData: AddSecurityEmailType
  ) => {
    await toast.promise(mutateAsync({ emailId, emailData }), {
      pending: "Actualizando correo",
    });
  };

  return { handleUpdateSecurityEmail };
};
