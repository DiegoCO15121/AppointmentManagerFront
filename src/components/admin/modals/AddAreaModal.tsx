import SubmitButton from "@/components/general/buttons/SubmitButton";
import InputField from "@/components/general/inputs/InputField";
import type { AddAreaType } from "@/types/area/area.types";
import { useForm } from "react-hook-form";

export default function AddAreaModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAreaType>();

  const handleCreateArea = (formData: AddAreaType) => {};

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-gray-500">Agregar un Nueva Área</h3>

      <form
        className="space-y-3"
        onSubmit={() => handleSubmit(handleCreateArea)}
      >
        <InputField
          name="name"
          register={register}
          placeholder="Nombre de la Área"
          labelText="Área"
          error={errors.name?.message}
          required="El Nombre de Área es Obligatorio"
        />

        <SubmitButton text="Añadir Área" />
      </form>
    </div>
  );
}
