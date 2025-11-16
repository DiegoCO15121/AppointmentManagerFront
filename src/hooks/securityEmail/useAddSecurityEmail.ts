import { addSecurityEmail } from "@/api/SecurityEmailsAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import type { AddSecurityEmailType } from "@/types/securityAccount/security.types";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useAddSecurityEmail = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: addSecurityEmail,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: {
          title: "Agregado Correctamente",
          content: "Email de seguridad agregado correctamente",
        },
        theme: "colored",
        autoClose: 3000,
      });
      queryClient.invalidateQueries({ queryKey: ["getSecurityEmails"] });
    },
    onError: onToastError,
  });

  const handleAddSecurityEmail = async (emailData: AddSecurityEmailType) => {
    await toast.promise(mutateAsync(emailData), { pending: "Agregando Email" });
  };

  return { handleAddSecurityEmail };
};
