import type { InputFieldType } from "@/types/index";
import ErrorMessage from "../ErrorMessage";
import type { FieldValues } from "react-hook-form";

export default function InputField<T extends FieldValues>({
  register,
  labelText,
  placeholder,
  name,
  required,
  error,
  type = "text",
  rules,
}: InputFieldType<T>) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label className="font-semibold text-lg text-gray-500" htmlFor={name}>
        {labelText}
      </label>
      <input
        id={name}
        className="rounded-lg border border-gray-400 p-2"
        {...register(name, { required, ...rules })}
        type={type}
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
