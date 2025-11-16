import SubmitButton from "@/components/general/buttons/SubmitButton";
import InputField from "@/components/general/inputs/InputField";
import { useAddSecurityEmail } from "@/hooks/securityEmail/useAddSecurityEmail";
import type { AddSecurityEmailType } from "@/types/securityAccount/security.types";

import { useForm } from "react-hook-form";

export default function CreateSecurityAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddSecurityEmailType>();

  const { handleAddSecurityEmail } = useAddSecurityEmail();

  return (
    <form
      className="space-y-5"
      noValidate
      onSubmit={handleSubmit(handleAddSecurityEmail)}
    >
      <InputField
        name="email"
        register={register}
        placeholder={"correo@correo"}
        labelText="Email de Responsable de Seguridad"
        required="El Email es obligatorio"
        error={errors.email?.message}
        rules={{
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email no válido",
          },
        }}
        type="email"
      />

      <SubmitButton text="Agregar Correo" />
    </form>
  );
}
