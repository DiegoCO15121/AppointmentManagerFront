import ErrorMessage from "@/components/general/ErrorMessage";
import InputPassword from "@/components/general/inputs/InputPassword";
import { useResetPassword } from "@/hooks/auth/useResetPassword";
import type { RawRegisterType } from "@/types/index";
import { arePasswordsEquals } from "@/utils/auth/passwordValidation";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation } from "react-router-dom";

type ResetPasswordType = {
  password: RawRegisterType["password"];
  confirmPassword: RawRegisterType["confirmPassword"];
};

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ResetPasswordType>();

  const password = useWatch({ name: "password", control });
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const token = queryParams.get("token");

  const { mutate } = useResetPassword();

  console.log(token);

  const handlePassword = (resetData: ResetPasswordType) => {
    if (!token) {
      console.error("Token inexistente");
      return;
    }

    const data = {
      newPassword: resetData.password,
      token,
    };

    mutate(data);
  };

  return (
    <div className="bg-blue-900 px-4 py-10 gap-5 rounded-lg flex flex-col items-center justify-center shadow-card w-full min-w-3xs max-w-3xl max-h-11/12">
      <img
        src="/IMAGOTIPO_LASALLE_OAXACA.png"
        alt="laSalleOax"
        className="max-w-96 max-h-40"
      />

      <div className="w-full max-w-xl flex flex-col items-center gap-5">
        <form
          className="bg-white py-4 px-6 rounded-md w-full flex flex-col gap-5"
          onSubmit={handleSubmit(handlePassword)}
        >
          <p className="text-xl text-center text-blue-900">
            Escribe el correo asociado a tu cuenta para que podamos mandar un
            link de restablecimiento.
          </p>
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
                  validate: (value) => arePasswordsEquals(value, password),
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
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </div>

          <input
            type="submit"
            className="bg-blue-900 text-white font-bold w-full rounded-lg p-3 hover:cursor-pointer hover:bg-blue-500 uppercase"
            value={"Restablecer Contraseña"}
          />
        </form>
      </div>
    </div>
  );
}
