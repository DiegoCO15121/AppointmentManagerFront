import SubmitButton from "@/components/general/buttons/SubmitButton";
import ErrorMessage from "@/components/general/ErrorMessage";
import InputField from "@/components/general/inputs/InputField";

import { useAppStore } from "@/store/useAppStore";
import type { AddBossType } from "@/types/index";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCreateBoss } from "@/hooks/boss/useCreateBoss";
import { useUpdateBoss } from "@/hooks/boss/useUpdateBoss";
import { useGetBoss } from "@/hooks/boss/useGetBoss";
import { useGetAreas } from "@/hooks/area/useGetAreas";

export default function BossModal() {
  const defaultValues = {
    names: "",
    lastName: "",
    secondLastName: "",
    email: "",
    gender: "",
    areaId: "",
    role: "",
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AddBossType>({ defaultValues });

  const { areasArray } = useGetAreas();
  const { modal, currentBoss, setIsOpen, clearModal } = useAppStore();
  const { bossRawData } = useGetBoss(currentBoss?.userId);
  const { handleCreateBoss } = useCreateBoss();
  const { handleUpdateBoss } = useUpdateBoss();

  useEffect(() => {
    if (currentBoss && modal === "edit-boss" && bossRawData) {
      const { area, adminRole, userRole, userId, ...data } = bossRawData;
      const bossData = { ...data, areaId: area.id, role: adminRole };
      reset(bossData);
    }
  }, [reset, currentBoss, bossRawData]);

  const handleRegisterBoss = (formData: AddBossType) => {
    if (modal === "add-boss") {
      handleCreateBoss(formData);
    } else {
      if (!currentBoss) return;
      const bossId = currentBoss?.userId;
      const bossObj = { bossData: formData, bossId };
      handleUpdateBoss(bossObj);
    }
    setIsOpen();
    clearModal();
  };

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-gray-500">
        {modal === "add-boss"
          ? "Agregar Administrador de Área"
          : "Actualizar Administrador de Área"}
      </h3>

      <form className="space-y-3" onSubmit={handleSubmit(handleRegisterBoss)}>
        <InputField
          register={register}
          labelText="Nombre"
          placeholder="Nombre del jefe de área"
          name="names"
          required="El nombre es obligatorio"
          error={errors.names?.message}
        />
        <div className="flex flex-col md:flex-row gap-2">
          <InputField
            register={register}
            labelText="Apellido Paterno"
            placeholder="Apellido Paterno"
            name="lastName"
            required="El Apellido Paterno es Obligatorio"
            error={errors.lastName?.message}
          />
          <InputField
            register={register}
            labelText="Apellido Materno"
            placeholder="Apellido Materno"
            name="secondLastName"
            required="El Apellido Materno es Obligatorio"
            error={errors.secondLastName?.message}
          />
        </div>
        <InputField
          register={register}
          labelText="Email"
          placeholder="correo@correo"
          name="email"
          required="El email es obligatorio"
          error={errors.email?.message}
          rules={{
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email no válido",
            },
          }}
          type={"email"}
        />

        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-lg text-gray-500"
            htmlFor={"role"}
          >
            Rol
          </label>

          <select
            id="role"
            className="rounded-lg border border-gray-400 p-2"
            {...register("role", {
              required: "El género es obligatorio",
            })}
          >
            <option value="">--Selecciona una Opción--</option>
            <option value="coordinador">Coordinador</option>
            <option value="director">Director</option>
            <option value="encargado">Encargado</option>
          </select>

          {errors.gender && (
            <ErrorMessage>{errors.gender.message}</ErrorMessage>
          )}
        </div>

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
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              {/* <option value="otro">Otro</option> */}
            </select>

            {errors.gender && (
              <ErrorMessage>{errors.gender.message}</ErrorMessage>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-lg text-gray-500"
              htmlFor={"areaId"}
            >
              Área
            </label>

            <select
              id="areaId"
              className="rounded-lg border border-gray-400 p-2"
              {...register("areaId", {
                required: "El área es obligatoria",
              })}
            >
              <option value="">--Selecciona una Opción--</option>
              {areasArray &&
                areasArray.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name}{" "}
                  </option>
                ))}
            </select>

            {errors.areaId && (
              <ErrorMessage>{errors.areaId.message}</ErrorMessage>
            )}
          </div>
        </div>

        <SubmitButton
          text={`${
            modal === "add-boss"
              ? "Añadir Administrador de Área"
              : "Actualizar Administrador de Área"
          }`}
        />
      </form>
    </div>
  );
}
