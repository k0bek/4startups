"use server";

import { signIn } from "@/auth";
import { formSchemaSignIn } from "@/lib/form-schemas";
import { AuthError } from "next-auth";
import { z } from "zod";

export const signin = async (values: z.infer<typeof formSchemaSignIn>) => {
  const validatedFields = formSchemaSignIn.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  const { email, password } = values;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials.",
            subError: "Check your email and password.",
          };
        default:
          return {
            error: "Something went wrong.",
            subError: "Please try again later.",
          };
      }
    }
    throw error;
  }
};
