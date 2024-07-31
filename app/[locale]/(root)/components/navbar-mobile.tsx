import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight, LogOut } from "lucide-react";
import { HoverBorderGradientButton } from "@/components/shared/hover-border-gradient";
import LanguageSelector from "@/components/landing/language-selector";
import { SessionT } from "@/types";
import SignOutButton from "./sign-out-button";

const NavbarMobile = ({ session }: SessionT) => {
  const t = useTranslations("LandingPage");

  return (
    <div className="nav-mobile">
      <div className="flex items-center py-4">
        <Link href="/" className="flex z-40 font-semibold">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={50}
            height={32}
          />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <LanguageSelector />
        {session ? (
          <SignOutButton />
        ) : (
          <HoverBorderGradientButton>
            <Link
              href={"/sign-in"}
              className="flex items-center text-secondary-foreground hover:text-hover transition-all text-sm duration-1000 ml-1 whitespace-nowrap px-3 py-2 gap-2"
            >
              {t("Get started")} <ArrowRight className="scale-75 ml-1" />
            </Link>
          </HoverBorderGradientButton>
        )}
      </div>
      <div className="animated-border" />
    </div>
  );
};

export default NavbarMobile;

{
  /* <Sheet>
        <SheetTrigger>
          <BurgerButton />
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-black flex flex-col justify-between z-[100] border-none">
          <div className="">
            <Link href="/">
              <Image
                src="/assets/icons/logo.svg"
                alt="logo"
                width={60}
                height={32}
                className="-mt-1 -ml-1"
              />
            </Link>
            <nav className="flex flex-col py-10 text-lg gap-10">
              {navbarLinks.map((link) => (
                <Link
                  href={link}
                  key={link}
                  className="hover:text-hover transition-all font-semibold"
                >
                  {t(link)}
                </Link>
              ))}
            </nav>
          </div>
          <Link href="/sign-in" className="font-bold w-full">
            <Button variant="default" className="w-full">
              {t("Log in")}
            </Button>
          </Link>
          <div className="animated-border-sheet" />
        </SheetContent>
      </Sheet> */
}
