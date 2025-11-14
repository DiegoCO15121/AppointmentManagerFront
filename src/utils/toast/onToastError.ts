import CustomToast from "@/components/general/toast/CustomToast";
import { toast } from "react-toastify";

export const onToastError = (error: Error) => {
  toast.error(CustomToast, {
    data: { title: "Error", content: error.message },
    autoClose: 3000,
    theme: "colored",
  });
};
