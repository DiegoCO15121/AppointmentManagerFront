import SubmitButton from "@/components/general/buttons/SubmitButton";
import InputField from "@/components/general/inputs/InputField";
import { useSecurityEmailById } from "@/hooks/securityEmail/useGetSecurityEmailById";
import { useUpdateSecurityEmail } from "@/hooks/securityEmail/useUpdateSecurityEmail";
import type {
    AddSecurityEmailType,
    SecurityEmailType,
} from "@/types/securityAccount/security.types";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";

type EditSecurityEmailCardProps = {
  emailId: SecurityEmailType["id"];
  setEdit: Dispatch<SetStateAction<boolean>>
};

export default function EditSecurityEmailCard({
  emailId,
  setEdit
}: EditSecurityEmailCardProps) {
  const { securityEmail } = useSecurityEmailById(emailId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddSecurityEmailType>();
  
  useEffect(() => {
    if(securityEmail){
        reset({email: securityEmail.email})
    }
  }, [securityEmail, reset])


  const { handleUpdateSecurityEmail } = useUpdateSecurityEmail();

  return (
    <form
      onSubmit={handleSubmit((emailData) =>{
        setEdit(false)
        handleUpdateSecurityEmail(emailId, emailData)}
      )}
      className="bg-slate-100 rounded-lg shadow-lg p-3 flex flex-col md:flex-row gap-3 md:items-end"
    >
      <InputField
        type="email"
        register={register}
        placeholder="correo@correo"
        labelText="Actualizar Email"
        error={errors.email?.message}
        rules={{
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email no válido",
          },
        }}
        name="email"
        required="El Email es obligatorio"
      />

      <div>
        <SubmitButton text="Guardar" />
      </div>
    </form>
  );
}
