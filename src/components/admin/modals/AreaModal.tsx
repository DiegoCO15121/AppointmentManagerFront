import SubmitButton from "@/components/general/buttons/SubmitButton";
import InputField from "@/components/general/inputs/InputField";
import { useArea } from "@/hooks/useArea";
import { useAppStore } from "@/store/useAppStore";
import type { AreaType } from "@/types/area/area.types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type AreaModalProps = {
  areaId?: AreaType["id"];
};

export default function AreaModal({ areaId }: AreaModalProps) {
  const defaultValues = { name: "" };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AreaType>({ defaultValues });

  const { modal, setIsOpen, clearModal } = useAppStore();
  const { area, mutateAddArea, mutateUpdateArea } = useArea();

  const areaData = area(areaId ? areaId : "");

  useEffect(() => {
    const newData = {
      name: areaData?.name,
    };
    if (modal === "edit-area") reset(newData);
  }, [areaId, reset]);

  const handleArea = (formData: AreaType) => {
    if (modal === "add-area") {
      mutateAddArea(formData);
      setIsOpen();
      clearModal();
    } else {
      mutateUpdateArea(formData);
      setIsOpen();
      clearModal();
    }
  };

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-gray-500">Agregar un Nueva Área</h3>

      <form className="space-y-3" onSubmit={handleSubmit(handleArea)}>
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
