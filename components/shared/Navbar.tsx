import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthContainer";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { navbarLinks } from "@/constants";

const Navbar = async () => {
  return (
    <nav className="sticky z-[100] inset-x-0 top-0 w-full transition-all border-b-[3px]  shadow-primary border-primary">
      <MaxWidthWrapper>
        <div className="flex items-center py-4">
          <Link href="/" className="flex z-40 font-semibold">
            <Image src="/assets/logo.svg" alt="logo" width={140} height={32} />
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
