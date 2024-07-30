"use client";

import { Globe } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/types";

const LanguageSelector = () => {
  const t = useTranslations("LandingPage");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isBlogPage = pathname.includes("/blog");

  function handleLocaleChange(newLocale: Locale): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  if (isBlogPage) {
    return null;
  }

  return (
    <Select
      onValueChange={(value: Locale) => handleLocaleChange(value)}
      value={locale}
    >
      <SelectTrigger className="bg-transparent text-secondary-foreground">
        <Globe className="scale-90 text-secondary-foreground" />
      </SelectTrigger>
      <SelectContent className="bg-white flex flex-col dark:bg-black">
        <SelectItem className="select-item" value="en">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/uk-flag.svg"
              alt="uk flag"
              width={30}
              height={50}
            />
            <span className="dark:text-white">{t("English")}</span>
          </div>
        </SelectItem>
        <SelectItem className="select-item" value="pl">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/poland-flag.svg"
              alt="poland flag"
              width={30}
              height={50}
            />
            <span className="dark:text-white">{t("Polish")}</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
