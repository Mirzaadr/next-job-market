import z from "zod";

export const SigninSchema = z.object({
  email: z.string().email("Must be a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const SignupSchema = z.object({
  email: z.string().email("Must be a valid email address"),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type JobFilterValues = z.infer<typeof jobFilterSchema>;
