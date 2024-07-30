import NavbarMobile from "@/app/[locale]/(root)/components/navbar-mobile";
import React from "react";
import Navbar from "./components/navbar";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarMobile />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
