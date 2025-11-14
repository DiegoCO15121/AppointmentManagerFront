import InputField from "@/components/general/inputs/InputField";
import { useForgottenPassword } from "@/hooks/auth/useForgottenPasword";
import type { LoginType } from "@/types/index";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function ForgottenPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: LoginType["email"] }>();
  const { handleSendEmail, isPending } = useForgottenPassword();

  const handleReset = ({ email }: { email: LoginType["email"] }) => {
    handleSendEmail(email);
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
          onSubmit={handleSubmit(handleReset)}
        >
          <p className="text-xl text-center text-blue-900">
            Escribe el correo asociado a tu cuenta para que podamos mandar un
            link de restablecimiento.
          </p>
          <InputField
            register={register}
            labelText="Email"
            placeholder="correo@correo.com"
            name="email"
            required="El email es obligatorio"
            error={errors.email?.message}
          />

          <button
            type="submit"
            className={`bg-blue-900 text-white font-bold w-full rounded-lg p-3 hover:cursor-pointer hover:bg-blue-500 
            uppercase gap-5 flex justify-center ${isPending && "opacity-50"}`}
            onClick={handleSubmit(handleReset)}
          >
            {isPending && <span className="loaderButton" />}
            <p>{isPending ? "Enviando Correo" : "Enviar Correo"}</p>{" "}
          </button>
        </form>

        <div className="flex flex-col space-y-3 items-center">
          <div className="flex text-white">
            <p>
              ¿Aun no tienes cuenta?,{" "}
              <Link to={"/register"} className="hover:underline text-blue-300 ">
                registrate aquí.
              </Link>
            </p>
          </div>

          <div className="flex text-white">
            <p>
              ¿Recordaste tu contraseña?,{" "}
              <Link to={"/login"} className="hover:underline text-blue-300 ">
                logueate aquí.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
