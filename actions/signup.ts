"use server";

import { useFormSchemas } from "@/lib/form-schemas";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export const signup = async (values: any) => {
  try {
    // const { formSchemaSignUp } = useFormSchemas();
    // const validatedFields = formSchemaSignUp.safeParse(values);

    // if (!validatedFields.success) {
    //   return { error: "Invalid fields." };
    // }
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
      subSuccess: "You are now logged in",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return { error: "Internal Server Error" };
  }
};
