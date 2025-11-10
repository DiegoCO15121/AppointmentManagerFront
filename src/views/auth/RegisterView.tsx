import ErrorMessage from "@/components/general/ErrorMessage";
import InputField from "@/components/general/inputs/InputField";
import InputPassword from "@/components/general/inputs/InputPassword";
import type { RawRegisterType } from "@/types/index";
import { FaEye, FaEyeSlash } from "@/icons/index";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Link } from "react-router-dom";
import { birthdateValidation } from "@/utils/auth/birthdateValidation";
import { useRegister } from "@/hooks/useRegister";

export default function RegisterView() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RawRegisterType>();

  const password = useWatch({ name: "password", control });
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const { mutate } = useRegister();

  const handleRegister = (formData: RawRegisterType) => {
    console.log("enviado");
    const { confirmPassword, ...data } = formData;
    mutate(data);
  };
  return (
    <>
      <div className="bg-blue-900 px-4 md:px-20 py-10 rounded-lg flex flex-col items-center justify-center shadow-card w-full min-w-3xs max-w-6xl max-h-11/12">
        <img
          src="/IMAGOTIPO_LASALLE_OAXACA.png"
          alt="laSalleOax"
          className="max-w-96 max-h-40"
        />
        <div className="w-full flex flex-col items-center gap-5">
          <form
            className="bg-white py-4 px-6 rounded-md w-full gap-5 flex flex-col"
            onSubmit={handleSubmit(handleRegister)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              <div className="gap-5 flex flex-col">
                <InputField
                  register={register}
                  labelText="Nombre"
                  name="names"
                  placeholder="Tu Nombre"
                  required="El Nombre es obligatorio"
                  error={errors.names?.message}
                />

                <InputField
                  register={register}
                  labelText="Apellido Paterno"
                  name="lastName"
                  placeholder="Tu Apellido Paterno"
                  required="El Apellido Paterno es obligatorio"
                  error={errors.lastName?.message}
                />

                <InputField
                  register={register}
                  labelText="Apellido Materno"
                  name="secondLastName"
                  placeholder="Tu Apellido Materno"
                  required="El Apellido Materno es obligatorio"
                  error={errors.secondLastName?.message}
                />

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
                  </select>

                  {errors.gender && (
                    <ErrorMessage>{errors.gender.message}</ErrorMessage>
                  )}
                </div>

                <InputField
                  register={register}
                  labelText="Número de teléfono"
                  placeholder="951 333 333"
                  name="phoneNumber"
                  required="El número de teléfono es obligatorio"
                  error={errors.phoneNumber?.message}
                />
              </div>

              <div className="gap-5 flex flex-col">
                <div className="flex flex-col space-y-2">
                  <label
                    className="font-semibold text-lg text-gray-500"
                    htmlFor={"birthDate"}
                  >
                    {"Fecha de Nacimiento"}
                  </label>
                  <input
                    id={"birthDate"}
                    className="rounded-lg border border-gray-400 p-2"
                    {...register("birthDate", {
                      required: "La fecha de nacimiento es obligatoria",
                      validate: birthdateValidation,
                    })}
                    type="date"
                  />
                  {errors.birthDate && (
                    <ErrorMessage>{errors.birthDate.message}</ErrorMessage>
                  )}
                </div>
                <InputField
                  register={register}
                  labelText="Email"
                  placeholder="correo@correo.com"
                  name="email"
                  required="El email es obligatorio"
                  error={errors.email?.message}
                />

                <InputPassword
                  labelText="Contraseña"
                  placeholder="Tu contraseña"
                  name="password"
                  required="La contraseña es obligatoria"
                  error={errors.password?.message}
                  register={register}
                  strength={true}
                  password={password}
                />

                <div className="flex flex-col gap-2">
                  <label
                    className="font-semibold text-lg text-gray-500"
                    htmlFor={"confirmPassword"}
                  >
                    {"Confirmar contraseña"}
                  </label>

                  <div className="relative">
                    <input
                      id={"confirmPassword"}
                      className="rounded-lg border border-gray-400 p-2 w-full"
                      type={showPassword ? "text" : "password"}
                      placeholder={"Repite tu contraseña"}
                      {...register("confirmPassword", {
                        required: "La confirmación es obligatoria",
                        validate: (value) =>
                          value === password || "Las contraseñas no coinciden",
                      })}
                    />

                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1.5 hover:cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEye className="w-6" />
                      ) : (
                        <FaEyeSlash className="w-6" />
                      )}
                    </button>
                  </div>

                  {errors.confirmPassword && (
                    <ErrorMessage>
                      {errors.confirmPassword.message}
                    </ErrorMessage>
                  )}
                </div>
              </div>
            </div>

            <input
              type="submit"
              className="bg-blue-900 text-white font-bold w-full rounded-lg p-3 hover:cursor-pointer hover:bg-blue-500"
              value={"Registrarse"}
            />
          </form>

          <div className="flex text-white">
            <p>
              ¿Ya tienes una cuenta?,{" "}
              <Link to={"/login"} className="hover:underline">
                ingresa aquí.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
