"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeading from "./animated-heading";
import { useLocale, useTranslations } from "next-intl";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

const Header = () => {
  const t = useTranslations("LandingPage");
  const locale = useLocale();
  const delay = locale === "en" ? 3 : 3.5;
  const title =
    locale === "en" ? "Our the best client" : "Nasz najlepszy klient";

  useGSAP(() => {
    gsap.to("#heading", { opacity: 1 });
    gsap.fromTo(
      "#paragraph",
      {
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay,
      }
    );
    gsap.fromTo(
      "#manage",
      {
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay + 0.5,
      }
    );
  }, []);

  return (
    <FollowerPointerCard title={title}>
      <div className="flex justify-center text-center w-full mt-10">
        <div className="xl:w-1/2 flex flex-col gap-4">
          <h1
            className="text-[1.5rem] sm:text-[2.5rem] md:text-[2.9rem] font-bold text-heading dark:text-white px-10"
            id="heading"
          >
            <AnimatedHeading />
          </h1>
          <p
            className="text-hover dark:text-primary-foreground text-[1rem] md:text-[1.2rem] opacity-0 dark:drop-shadow-sm"
            id="paragraph"
          >
            {t(
              "Empower startups by predicting and enhancing growth opportunities for sustained success"
            )}
          </p>
          <p
            id="manage"
            className="font-bold text-lg md:text-xl opacity-0 dark:text-white"
          >
            {t("What would you like to predict?")}
          </p>
        </div>
      </div>
    </FollowerPointerCard>
  );
};

export default Header;
