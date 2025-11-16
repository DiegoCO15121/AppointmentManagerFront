import z from "zod";

export const AreaSchema = z.object({
  id: z.string(),
  name: z.string(),
  
});

export const AdminSchema = z.array(z.object({
  userId: z.string(),
  names: z.string(),
  lastName: z.string(),
  secondLastName: z.string(),
  email: z.string(),
  gender: z.string().or(z.enum(["masculino", "femenino"])),
  userRole: z.enum(["visitor", "university admin", "system admin"]),
  adminRole:  z.string()
}))

const AreaSchemaWithAdmin = AreaSchema.extend({universityAdmins: AdminSchema})
export const AreasSchema = z.array(AreaSchemaWithAdmin)

export type AreaSchemaWithAdmin = z.infer<typeof AreaSchemaWithAdmin>
export type AreaType = z.infer<typeof AreaSchema>;
export type AddAreaType = Pick<AreaType, "name">