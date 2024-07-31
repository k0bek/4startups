import NavbarMobile from "@/app/[locale]/(root)/components/navbar-mobile";
import React from "react";
import Navbar from "./components/navbar";
import { auth } from "@/auth";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <>
      <NavbarMobile session={session} />
      <Navbar session={session} />
      {children}
    </>
  );
};

export default Layout;
