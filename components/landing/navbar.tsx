import Link from "next/link";
import MaxWidthWrapper from "../shared/max-width-cointainer";
import Image from "next/image";
import { HoverBorderGradientButton } from "../shared/hover-border-gradient";
import { ArrowRight } from "lucide-react";
import ChangeLanguageButton from "./change-language-button";

const Navbar = async () => {
  return (
    <nav className="nav">
      <MaxWidthWrapper>
        <div className="flex items-center py-4 justify-between relative w-full">
          <Link href="/" className="flex z-40 font-semibold">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={50}
              height={32}
            />
          </Link>
          <div className="flex items-center gap-2">
            <ChangeLanguageButton />
            <HoverBorderGradientButton>
              <div className="flex items-center text-secondary-foreground hover:text-hover transition-all duration-1000">
                Get started <ArrowRight className="ml-1" />
              </div>
            </HoverBorderGradientButton>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="animated-border"></div>
    </nav>
  );
};

export default Navbar;
