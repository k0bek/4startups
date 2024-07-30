import NavbarMobile from "@/app/[locale]/(root)/components/navbar-mobile";
import React from "react";
import Navbar from "./components/navbar";
import MaxWidthWrapper from "@/components/shared/max-width-cointainer";
import { auth } from "@/auth";

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  return (
    <>
      <NavbarMobile session={session} />
      <Navbar session={session} />
      {children}
    </>
  );
};

export default BlogLayout;
