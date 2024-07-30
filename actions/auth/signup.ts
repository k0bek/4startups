"use server";

import { formSchemaSignUp } from "@/lib/form-schemas";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const signup = async (values: z.infer<typeof formSchemaSignUp>) => {
  try {
    const validatedFields = formSchemaSignUp.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields." };
    }
    const { fullName, password, email } = values;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return {
        error: "User already exists.",
        subError: "Try with another email.",
      };
    }

    await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: "User created successfully.",
      subSuccess: "Please sign in now.",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return { error: "Internal Server Error" };
  }
};
