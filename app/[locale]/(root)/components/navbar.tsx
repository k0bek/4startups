import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { HoverBorderGradientButton } from "@/components/shared/hover-border-gradient";
import MaxWidthWrapper from "@/components/shared/max-width-cointainer";
import ChangeLanguageButton from "@/components/landing/change-language-button";

const Navbar = () => {
  const t = useTranslations("LandingPage");
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
          {/* <nav>
            <ul className="flex md:gap-10 lg:gap-20">
              {navbarLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={link}
                    className="text-secondary-foreground hover:text-hover cursor-pointer transition-all font-semibold"
                  >
                    {t(link)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}
          <div className="flex items-center gap-2">
            <ChangeLanguageButton />
            <HoverBorderGradientButton>
              <div className="flex items-center text-secondary-foreground hover:text-hover transition-all duration-1000 ml-1 whitespace-nowrap">
                {t("Get started")} <ArrowRight className="ml-1 scale-75" />
              </div>
            </HoverBorderGradientButton>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="animated-border" />
    </nav>
  );
};

export default Navbar;
