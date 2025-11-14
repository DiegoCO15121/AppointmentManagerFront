import { resetPassword } from "@/api/AuthAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useResetPassword = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: {
          title: "Contraseña Restablecida Correctamente",
          content: "Ya puedes inciar sesión",
        },
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/login", { replace: true });
    },
    onError: onToastError
  });

  return { mutate };
};
