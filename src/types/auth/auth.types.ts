import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import type { VisitorType } from "../user/user.types";

export type RawRegisterType = Omit<VisitorType, "userId"> & {
  password: string,
  confirmPassword: string;
};

export type RegisterType = Omit<RawRegisterType, "confirmPassword">;
export type LoginType = Pick<RegisterType, "email" | "password">;

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
