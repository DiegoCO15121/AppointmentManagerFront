import z from "zod";

const UserSchema = z.object({
  id: z.string(),
  names: z.string(),
  lastName: z.string(),
  secondLastName: z.string(),
  email: z.string(),
  password: z.string(),
  gender: z.enum(["masculino", "femenino",]),
});

const VisitorSchema = UserSchema.extend({
  birth_date: z.string(),
  phoneNumber: z.string(),
  birthDate: z.string()
})

const BossSchema = z.object({
  id: z.string(),
  user: UserSchema,
});

export type UserType = z.infer<typeof UserSchema>;

export type VisitorType = z.infer<typeof VisitorSchema>

export type BossType = z.infer<typeof BossSchema>;
export type AddBossType = Omit<UserType, "id" | "password"> & {
  area_id: string;
};
