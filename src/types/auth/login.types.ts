import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import type { VisitorType } from "../user/user.types";

export type RawRegisterType = VisitorType & {
  confirmPassword: string
};

export type RegisterType = VisitorType;

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
