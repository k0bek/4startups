"use client";
import { animateWithGsap } from "@/lib/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
gsap.registerPlugin(ScrollTrigger);

const UnlockGrowSection = () => {
  const t = useTranslations("LandingPage");

  useGSAP(() => {
    animateWithGsap("#unlock-grow-section", { y: -50, opacity: 1 });
  }, []);

  return (
    <section
      className="px-5 flex items-center justify-between lg:mt-40 mt-32 opacity-0 flex-col-reverse lg:flex-row gap-6 lg:gap-0"
      id="unlock-grow-section"
    >
      <div className="lg:w-[45%] flex flex-col gap-6">
        <h2 className="text-2xl lg:text-4xl font-semibold">
          {t("Unlocking Growth Opportunities for Startups")}
        </h2>
        <p className="lg:text-lg">
          {t(
            "Discover the benefits of sustained success, improved market positioning, and strategic growth for startups"
          )}
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-lg lg:text-xl">
              {t("Success Stories")}
            </p>
            <span className="text-sm lg:text-base ">
              {t(
                "Hear from startups who have achieved sustained success and strategic growth"
              )}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold lg:text-xl">
              {t("Expert Advice")}
            </p>
            <span className="text-sm lg:text-base">
              {t(
                "Learn from industry experts on how to improve market positioning and growth strategies"
              )}
            </span>
          </div>
        </div>
      </div>
      <img src="/assets/laptop.gif" className="rounded-xl lg:w-1/2" />
    </section>
  );
};

export default UnlockGrowSection;
