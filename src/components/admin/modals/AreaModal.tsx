import SubmitButton from "@/components/general/buttons/SubmitButton";
import InputField from "@/components/general/inputs/InputField";
import { useCreateArea } from "@/hooks/area/useCreateArea";
import { useGetAreaById } from "@/hooks/area/useGetAreaById";
import { useUpdateArea } from "@/hooks/area/useUpdateArea";
import { useAppStore } from "@/store/useAppStore";
import type { AddAreaType } from "@/types/area/area.types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function AreaModal() {
  const { modal, setIsOpen, clearModal, currentArea } = useAppStore();
  const { areaData } = useGetAreaById(currentArea?.id);
  const {handleCreateArea} = useCreateArea();
  const {handleUpdateArea} = useUpdateArea();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddAreaType>();

  useEffect(() => {
    if (currentArea && modal === "edit-area" && areaData)
      reset({ name: areaData.name });
  }, [reset, currentArea, areaData]);

  const handleArea = (formData: AddAreaType) => {
    const areaData = {id: currentArea?.id!, name: formData.name}

    if (modal === "add-area") {
      handleCreateArea(areaData)
      setIsOpen();
      clearModal();
    } else {
      handleUpdateArea(areaData)
      setIsOpen();
      clearModal();
    }
  };

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-gray-500">
        {modal === "add-area" ? "Agregar un Nueva Área" : "Editar Área"}
      </h3>

      <form className="space-y-3" onSubmit={handleSubmit(handleArea)}>
        <InputField
          name="name"
          register={register}
          placeholder="Nombre de la Área"
          labelText="Área"
          error={errors.name?.message}
          required="El Nombre de Área es Obligatorio"
        />

        <SubmitButton
          text={modal === "add-area" ? "Agregar Área" : "Guardar Área"}
        />
      </form>
    </div>
  );
}
