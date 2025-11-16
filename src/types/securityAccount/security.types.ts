import z from "zod";

export const SecurtityEmailSchema = z.object({
  id: z.string(),
  email: z.string(),
});

export const SecurtityEmailsSchema = z.array(SecurtityEmailSchema);

export type SecurityEmailType = z.infer<typeof SecurtityEmailSchema>;
export type AddSecurityEmailType = Omit<SecurityEmailType, "id">;
