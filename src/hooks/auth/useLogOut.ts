import { logOut } from "@/api/AuthAPI";
import CustomToast from "@/components/general/toast/CustomToast";
import { onToastError } from "@/utils/toast/onToastError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: logOut,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: {
          title: "Sesión Cerrada Correctamente",
          content: "Hasta Pronto!",
        },
        autoClose: 3000,
        theme: "colored",
      });
      queryClient.resetQueries({ queryKey: ["currentUser"] });

      navigate("/login");
    },
    onError: onToastError
  });

  return { mutate };
};
