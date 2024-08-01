"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { signIn as signInClient } from "next-auth/react";
import { useTranslations } from "next-intl";

const GoogleAuth = () => {
  const t = useTranslations("AuthPages");
  const signInWithGoogleHandler = () => {
    try {
      signInClient("google", {
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      className="w-full flex items-center justify-center gap-2"
      variant="outline"
      onClick={signInWithGoogleHandler}
    >
      <Image
        src="/assets/icons/google.svg"
        width={25}
        height={25}
        alt="google logo"
      />
      {t("Continue with Google")}
    </Button>
  );
};

export default GoogleAuth;
