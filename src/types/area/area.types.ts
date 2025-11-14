import z from "zod";

export const AreaSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const AreasSchema = z.array(AreaSchema);

export type AreaType = z.infer<typeof AreaSchema>;
