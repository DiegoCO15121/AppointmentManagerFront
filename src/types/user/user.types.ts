import z from "zod";

export const UserSchema = z.object({
  userId: z.string(),
  names: z.string(),
  lastName: z.string(),
  secondLastName: z.string(),
  email: z.string(),
  /* password: z.string(), */
  gender: z.enum(["masculino", "femenino",]),
  userRole: z.enum(["visitor", "university admin" , "system admin"])
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
export type AddBossType = Omit<UserType, "userId"> & {
  area_id: string;
};
