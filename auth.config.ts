import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { formSchemaSignIn } from "./lib/form-schemas";
import { getUserByEmail } from "./actions";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = formSchemaSignIn.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;
          const isValid = await bcrypt.compare(password, user.password);
          if (isValid) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
