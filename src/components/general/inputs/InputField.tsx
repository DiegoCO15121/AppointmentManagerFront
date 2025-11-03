import type { InputFieldType } from "@/types/index";
import ErrorMessage from "../ErrorMessage";

export default function InputField({
  register,
  labelText,
  placeholder,
  name,
  required,
  error,
}: InputFieldType) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-semibold text-lg text-gray-500" htmlFor={name}>
        {labelText}
      </label>
      <input
        id={name}
        className="rounded-lg border border-gray-400 p-2"
        {...register(name, { required })}
        type="text"
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}
