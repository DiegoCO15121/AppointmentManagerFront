import { login } from "@/api/AuthAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import { redirectUser } from "@/utils/auth/redirectUser";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success(CustomToast, {
        data: {
          title: "Sesión Iniciada Correctamente",
          content: `Bienvenido ${data?.names}`,
        },
        autoClose: 3000,
        theme: "colored",
      });

      redirectUser(data?.userRole!, navigate);
    },

    onError: onToastError
  });

  return { mutate };
};
