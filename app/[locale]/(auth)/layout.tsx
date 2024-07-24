import Image from "next/image";
import React from "react";
import { SignInForm } from "./components/sign-in-form";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center md:grid grid-cols-2 h-screen grid-flow-col ">
      <section className="flex justify-center items-center flex-col px-10 md:px-16 xl:px-32 w-full">
        {children}
      </section>
      <section className="hidden md:block">
        <Image
          src="/assets/auth.webp"
          width={800}
          height={2000}
          alt="auth bacground"
          className="h-screen w-full bg-bottom bg-cover object-cover"
        />
      </section>
    </div>
  );
};

export default AuthLayout;
