import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { HoverBorderGradientButton } from "@/components/shared/hover-border-gradient";
import MaxWidthWrapper from "@/components/shared/max-width-cointainer";
import LanguageSelector from "@/components/landing/language-selector";

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
            <LanguageSelector />
            <HoverBorderGradientButton>
              <Link
                href="/dashboard"
                className="flex items-center text-secondary-foreground hover:text-hover transition-all duration-1000 ml-1 whitespace-nowrap px-4 py-2 "
              >
                {t("Go to dashboard")} <ArrowRight className="ml-1 scale-75" />
              </Link>
            </HoverBorderGradientButton>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="animated-border" />
    </nav>
  );
};

export default Navbar;
