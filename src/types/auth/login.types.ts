import type { UseFormRegister } from "react-hook-form";

type LoginType = {
  email: string;
  password: string;
};

type RegisterType = {
  name: string;
  lastName: string;
  motherLastName: string;
  gender: "M" | "F" | "O";
  phoneNumber: string;
  confirmPassword: string;
};

export type authFormType = LoginType & RegisterType;

export type InputNameType = keyof authFormType;

export type InputFieldType = {
  labelText: string;
  placeholder: string;
  register: UseFormRegister<authFormType>;
  name: InputNameType;
  required: string;
  error: string | undefined;
  strength?: boolean;
  password?: string ;
};
