import type { InputFieldType } from "@/types/index";
import ErrorMessage from "../ErrorMessage";
import { FaEye, FaEyeSlash } from "@/icons/index";
import { useState } from "react";
import PasswordSBar from "@/components/auth/PasswordBar";
import { arePasswordsEquals, validatePassword } from "@/utils/auth/passwordValidation";

export default function InputPassword({
  labelText,
  placeholder,
  register,
  name,
  required,
  error,
  strength,
  password,
}: InputFieldType) {
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-lg text-gray-500" htmlFor={name}>
        {labelText}
      </label>

      <div className="relative">
        <input
          id={name}
          className="rounded-lg border border-gray-400 p-2 w-full"
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register(name, {
            required,
            validate: (value) => strength ? validatePassword (value) : arePasswordsEquals(value, password!),
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

      {strength && <PasswordSBar password={password!} />}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
