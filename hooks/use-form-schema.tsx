"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";

export const useFormSchemaValidations = () => {
  const t = useTranslations("AuthPages");

  const formSchemaSignUp = z.object({
    fullName: z
      .string()
      .min(1, { message: t("Please enter your full name") })
      .max(50, { message: t("Full name cannot exceed 50 characters") })
      .regex(/^[a-zA-Z\s]*$/, {
        message: t("Full name can only contain letters and spaces"),
      }),

    email: z
      .string()
      .email({ message: t("Please enter a valid email address") })
      .max(100, { message: t("Email cannot exceed 100 characters") }),

    password: z
      .string()
      .min(8, { message: t("Password must be at least 8 characters long") })
      .max(100, { message: t("Password cannot exceed 100 characters") })
      .regex(/[a-z]/, {
        message: t("Password must contain at least one lowercase letter"),
      })
      .regex(/[A-Z]/, {
        message: t("Password must contain at least one uppercase letter"),
      })
      .regex(/[0-9]/, {
        message: t("Password must contain at least one number"),
      })
      .regex(/[@$!%*?&#]/, {
        message: t("Password must contain at least one special character"),
      }),
  });

  const formSchemaSignIn = z.object({
    email: z
      .string()
      .email({ message: t("Please enter a valid email address") }),
    password: z.string().min(1, { message: "Please enter your password" }),
  });

  return { formSchemaSignUp, formSchemaSignIn };
};


