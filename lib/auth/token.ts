import { getVerificationTokenByEmail } from "@/actions/auth/get-token-by-email";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await prisma.verificationToken.delete({ where: { id: existingToken.id } });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires: new Date(expires),
    },
  });
  return verificationToken;
};
