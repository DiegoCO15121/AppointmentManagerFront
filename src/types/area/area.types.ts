import z from "zod";

const AreaSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type AddAreaType = z.infer<typeof AreaSchema>;
