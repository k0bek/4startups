declare type Locale = "en" | "pl";
declare type Headings =
  | "Growth Prediction"
  | "Market Analysis"
  | "Strategic Planning";
export declare type Animation = <T>(
  target: string,
  animationProps: T,
  scrollProps?: T
) => void;
