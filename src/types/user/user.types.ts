import z from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  last_name: z.string(),
  second_last_name: z.string(),
  email: z.string(),
  password: z.string(),
  gender: z.enum(["F", "M", "O"]),
});

const BossSchema = z.object({
    id: z.string(),
    user: UserSchema,
    rol: z.string(),
})

export type UserType = z.infer<typeof UserSchema>;
export type BossType = z.infer<typeof BossSchema>;

export type AddBossType = Omit<UserType, "id"| "password"> /* & Pick<BossType, "rol"> */ & {
    area_id: string
}
