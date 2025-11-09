import SubmitButton from "@/components/general/buttons/SubmitButton";
import ErrorMessage from "@/components/general/ErrorMessage";
import InputField from "@/components/general/inputs/InputField";
import type { AddBossType } from "@/types/index";

import { useForm } from "react-hook-form";

export default function AddBossModal() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddBossType>();

  const handleRegisterBoss = (formData: AddBossType) => {};

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-gray-500">
        Agregar Administrador de Área
      </h3>

      <form
        className="space-y-3"
        onSubmit={() => handleSubmit(handleRegisterBoss)}
      >
        <InputField
          register={register}
          labelText="Nombre"
          placeholder="Nombre del jefe de área"
          name="name"
          required="El nombre es obligatorio"
          error={errors.name?.message}
        />
        <InputField
          register={register}
          labelText="Apellido Paterno"
          placeholder="Apellido Paterno"
          name="last_name"
          required="El Apellido Paterno es Obligatorio"
          error={errors.last_name?.message}
        />
        <InputField
          register={register}
          labelText="Apellido Materno"
          placeholder="Apellido Materno"
          name="second_last_name"
          required="El Apellido Materno es Obligatorio"
          error={errors.second_last_name?.message}
        />
        <InputField
          register={register}
          labelText="Email"
          placeholder="correo@correo"
          name="email"
          required="El email es obligatorio"
          error={errors.email?.message}
        />

        <div className="flex gap-3 flex-col md:flex-row ">
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-lg text-gray-500"
              htmlFor={"gender"}
            >
              Género
            </label>

            <select
              id="gender"
              className="rounded-lg border border-gray-400 p-2"
              {...register("gender", {
                required: "El género es obligatorio",
              })}
            >
              <option value="">--Selecciona una Opción--</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>

            {errors.gender && (
              <ErrorMessage>{errors.gender.message}</ErrorMessage>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-lg text-gray-500"
              htmlFor={"area_id"}
            >
              Área
            </label>

            <select
              id="area_id"
              className="rounded-lg border border-gray-400 p-2"
              {...register("area_id", {
                required: "El área es obligatoria",
              })}
            >
              <option value="">--Selecciona una Opción--</option>
              <option value="Area por cargar">Area por cargar</option>
              <option value="Area por cargar">Area por cargar</option>
              <option value="Area por cargar">Area por cargar</option>
            </select>

            {errors.gender && (
              <ErrorMessage>{errors.gender.message}</ErrorMessage>
            )}
          </div>
        </div>

        <SubmitButton text="Añadir Jefe de área" />
      </form>
    </div>
  );
}
