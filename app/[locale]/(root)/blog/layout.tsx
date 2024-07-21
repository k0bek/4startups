import NavbarMobile from "@/app/[locale]/(root)/components/navbar-mobile";
import React from "react";
import Navbar from "../components/navbar";
import MaxWidthWrapper from "@/components/shared/max-width-cointainer";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </>
  );
};

export default BlogLayout;
