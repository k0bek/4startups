"use client";

import { ChevronDown, Globe } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const ChangeLanguageButton = () => {
  const t = useTranslations("LandingPage");
  const router = useRouter();

  function handleLocaleChange(newLocale: string): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <Select onValueChange={(value: string) => handleLocaleChange(value)}>
      <SelectTrigger className="bg-transparent text-secondary-foreground">
        <Globe className="scale-90 text-secondary-foreground" />
      </SelectTrigger>
      <SelectContent className="bg-white flex flex-col">
        <SelectItem
          className="cursor-pointer transition-all hover:bg-slate-100 flex gap-2 text-black "
          value="en"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/assets/uk-flag.svg"
              alt="uk flag"
              width={30}
              height={50}
            />
            <span>{t("English")}</span>
          </div>
        </SelectItem>
        <SelectItem
          className="cursor-pointer transition-all hover:bg-slate-100 text-black"
          value="pl"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/assets/poland-flag.svg"
              alt="poland flag"
              width={30}
              height={50}
            />
            <span>{t("Polish")}</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ChangeLanguageButton;
