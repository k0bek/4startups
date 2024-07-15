import NavbarMobile from "@/app/[locale]/(root)/components/navbar-mobile";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarMobile />
      {children}
    </>
  );
};

export default RootLayout;
