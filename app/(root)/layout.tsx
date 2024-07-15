import NavbarMobile from "@/components/landing/navbar-mobile";
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
