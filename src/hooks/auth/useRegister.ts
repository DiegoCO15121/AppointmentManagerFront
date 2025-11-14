import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/AuthAPI";
import { useNavigate } from "react-router-dom";
import type { RawRegisterType } from "../../types";
import { toast } from "react-toastify";
import CustomToast from "@/components/general/toast/CustomToast";
import { onToastError } from "@/utils/toast/onToastError";

export const useRegister = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (_data) => {
      toast.success(CustomToast, {
        data: {
          title: "Registro Éxitoso",
          content: "Confirma tu correo, ya enviamos un email",
        },
        autoClose: 3000,
        theme: "colored",
      });

      navigate("/login");
    },
    onError: onToastError
  });

  const handleRegister = async (formData: RawRegisterType) => {
    const { confirmPassword, ...data } = formData;

    await toast.promise(mutateAsync(data), {
      pending: "Registrando...",
    });
  };

  return { handleRegister, isPending };
};
