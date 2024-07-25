import Image from "next/image";
import React from "react";
import { SignInForm } from "../components/sign-in-form";
import { getTranslations } from "next-intl/server";
import { auth } from "@/auth";

const SignInPage = async () => {
  const session = await auth();
  const t = await getTranslations("AuthPages");
  return (
    <div className="w-full">
      <h2 className="text-hover dark:text-primary-foreground md:text-4xl text-2xl font-bold">
        {t("Account details")}
      </h2>
      <p className="text-iridium md:text-sm">{t("Enter your credentials")}</p>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
