import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z
    .string()
    .min(8, "Password must be at least 6 charecters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one number"),
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .optional(),

});

export type RegisterInput = z.infer<typeof registerSchema>;