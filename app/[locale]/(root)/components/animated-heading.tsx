import { useTranslations } from "next-intl";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedHeading = () => {
  const t = useTranslations("LandingPage");
  return (
    <TypeAnimation
      sequence={[
        t("Boosting Startup Success with Predictive Growth Opportunities"),
        1000,
        t("Boosting Startup Success with Predictive Growth Possibilities"),
        1000,
        t("Boosting Startup Success with Predictive Growth Predictions"),
        1000,
        t("Boosting Startup Success with Predictive Growth Insights"),
        1000,
      ]}
      speed={50}
      repeat={Infinity}
    />
  );
};

export default AnimatedHeading;
