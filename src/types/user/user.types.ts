import z from "zod";
import { AreaSchema } from "../area/area.types";

export const UserSchema = z.object({
  userId: z.string(),
  names: z.string(),
  lastName: z.string(),
  secondLastName: z.string(),
  email: z.string(),
  /* password: z.string(), */
  gender: z.string().or(z.enum(["masculino", "femenino"])),
  userRole: z.enum(["visitor", "university admin", "system admin"]),
});

const VisitorSchema = UserSchema.extend({
  birth_date: z.string(),
  phoneNumber: z.string(),
  birthDate: z.string(),
});

export type UserType = z.infer<typeof UserSchema>;

export type VisitorType = z.infer<typeof VisitorSchema>;

// Boss
export const BossSchema = UserSchema.extend({
  area: AreaSchema,
  adminRole: z.string(),
});

export const BossesSchemas = z.array(BossSchema);

export type BossType = z.infer<typeof BossSchema>;

export type AddBossType = Omit<
  BossType,
  "userId" | "userRole" | "adminRole" | "area"
> & {
  areaId: string;
  role: "coordinador" | "director" | "encargado" | string;
};
