"use client";

import { useState } from "react";
import {
  ArrowRight,
  CandlestickChartIcon,
  Check,
  CircuitBoard,
  FolderKanban,
  TrendingUpIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useTranslations } from "next-intl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HoverBorderGradientButton } from "@/components/shared/hover-border-gradient";

export const cardsList = [
  {
    heading: "Growth Prediction",
    text: "Leverage data-driven insights to forecast your startup's growth potential and make informed decisions",
    icon: CircuitBoard,
  },
  {
    heading: "Market Analysis",
    text: "Gain a deep understanding of your target market and identify untapped opportunities for growth",
    icon: CandlestickChartIcon,
  },
  {
    heading: "Strategic Planning",
    text: "Develop a clear roadmap and actionable strategies to drive your startup's success",
    icon: FolderKanban,
  },
  {
    heading: "Performance Metrics",
    text: "Track and analyze key performance indicators to measure progress and optimize operations",
    icon: TrendingUpIcon,
  },
];

const CardsSection = () => {
  const t = useTranslations("LandingPage");
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleCardClick = (heading: string) => {
    setSelectedCards((prevSelectedCards) =>
      prevSelectedCards.includes(heading)
        ? prevSelectedCards.filter((card) => card !== heading)
        : [...prevSelectedCards, heading]
    );

    const tl = gsap.timeline();
    tl.fromTo("#btn", { scale: 1 }, { scale: 1.1, duration: 0.3 }).to("#btn", {
      scale: 1,
      duration: 0.3,
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      "#cards_section",
      {
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 4,
      }
    );
  });

  return (
    <div className="cards-section" id="cards_section">
      <ul className="flex justify-center flex-col lg:flex-row md:mt-5 gap-5 lg:gap-10 mb-20 lg:mb-0">
        {cardsList.map((card) => {
          const isSelected = selectedCards.includes(card.heading);
          return (
            <li
              className={cn(
                "cards-section-item",
                isSelected
                  ? "border-primary-foreground bg-blue-700/20"
                  : "bg-transparent"
              )}
              key={card.heading}
              onClick={() => handleCardClick(card.heading)}
            >
              <div
                className={cn(
                  "cards-section-item-selected-box",
                  isSelected && "border-none"
                )}
              >
                {isSelected && (
                  <Check className="scale-75 text-primary-foreground" />
                )}
              </div>
              <card.icon className="scale-125 md:scale-150" />
              <h3 className="text-lg md:text-[1.2rem] font-semibold">
                {t(card.heading)}
              </h3>
              <p className="text-sm -mt-3">{t(card.text)}</p>
            </li>
          );
        })}
      </ul>
      <HoverBorderGradientButton id="btn">
        <div className="flex items-center justify-center text-secondary-foreground hover:text-hover  duration-1000 ml-1 whitespace-nowrap w-[15rem] md:w-[27rem] text-xl font-semibold">
          {t("Get started")} <ArrowRight className="ml-1" />
        </div>
      </HoverBorderGradientButton>
    </div>
  );
};

export default CardsSection;
