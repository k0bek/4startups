"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedHeading from "./animated-heading";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("LandingPage");
  useGSAP(() => {
    gsap.to("#heading", { opacity: 1 });
    gsap.to("#paragraph", { opacity: 1, y: -30, delay: 3 });
  }, []);

  return (
    <div className="flex justify-center text-center w-full mt-10">
      <div className="xl:w-1/2">
        <h1
          className="text-[1.5rem] sm:text-[2.5rem] md:text-[2.9rem] font-bold text-heading dark:text-white px-10"
          id="heading"
        >
          <AnimatedHeading />
        </h1>
        <p
          className="text-hover dark:text-primary-foreground text-[1rem] md:text-[1.2rem] mt-8 opacity-0 dark:drop-shadow-sm"
          id="paragraph"
        >
          {t(
            "Empower startups by predicting and enhancing growth opportunities for sustained success"
          )}
        </p>
      </div>
    </div>
  );
};

export default Header;
