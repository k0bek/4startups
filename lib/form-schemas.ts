import { z } from "zod";

export const formSchemaSignIn = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Please enter your password" }),
});

export const formSchemaSignUp = z.object({
  fullName: z
    .string()
    .min(1, { message: "Please enter your full name" })
    .max(50, { message: "Full name cannot exceed 50 characters" })
    .regex(/^[a-zA-Z\s]*$/, {
      message: "Full name can only contain letters and spaces",
    }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email cannot exceed 100 characters" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password cannot exceed 100 characters" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number",
    })
    .regex(/[@$!%*?&#]/, {
      message: "Password must contain at least one special character",
    }),
});
