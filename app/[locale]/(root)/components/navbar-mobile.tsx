import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { navbarLinks } from "@/constants";
import { useTranslations } from "next-intl";
import BurgerButton from "@/components/landing/burger-button";
import { Button } from "@/components/ui/button";

const NavbarMobile = () => {
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
      <Sheet>
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
          <Button variant="default">{t("Log in")}</Button>
          <div className="animated-border-sheet"/>
        </SheetContent>
      </Sheet>
      <div className="animated-border"/>
    </div>
  );
};

export default NavbarMobile;
