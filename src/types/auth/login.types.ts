import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type LoginType = {
  email: string;
  password: string;
};

type RegisterType = {
  name: string;
  last_name: string;
  second_last_name: string;
  gender: "M" | "F" | "O";
  phoneNumber: string;
  confirmPassword: string;
};

export type authFormType = LoginType & RegisterType;

export type InputNameType = keyof authFormType;

export type InputFieldType<T extends FieldValues> = {
  labelText: string;
  placeholder: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  required: string;
  error: string | undefined;
  strength?: boolean;
  password?: string;
};
