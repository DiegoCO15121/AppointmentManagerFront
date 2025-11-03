import InputField from "@/components/general/inputs/InputField";
import InputPassword from "@/components/general/inputs/InputPassword";
import type { authFormType } from "@/types/index";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function LoginView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<authFormType>();

  const handleLogin = () => {};

  return (
    <div className="bg-blue-900 px-4 py-10 gap-5 rounded-lg flex flex-col md:flex-row items-center justify-center shadow-card w-full min-w-3xs max-w-6xl max-h-11/12">
      <img
        src="/IMAGOTIPO_LASALLE_OAXACA.png"
        alt="laSalleOax"
        className="max-w-96 max-h-40"
      />

      <div className="w-full max-w-xl flex flex-col items-center gap-5">
        <form
          className="bg-white py-4 px-6 rounded-md w-full flex flex-col gap-5"
          onSubmit={handleSubmit(handleLogin)}
        >
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
          />

          <input
            type="submit"
            className="bg-blue-900 text-white font-bold w-full rounded-lg p-3 hover:cursor-pointer hover:bg-blue-500"
            value={"Login"}
          />
        </form>

        <div className="flex text-white">
          <p>
            ¿Aun no tienes cuenta?,{" "}
            <Link to={"/register"} className="hover:underline">
              registrate aquí.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
