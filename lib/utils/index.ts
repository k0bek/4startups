import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "4startups - we visualize your business to elevate your startup.",
  description = "Transform your startup ideas into compelling visual narratives. ",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    icons,
    // metadataBase: new URL("/"),
  };
}

export const reviewItems = [
  {
    quote:
      "Startups transformed our vision into a tangible reality Their AI-driven insights into our industry and potential revenue streams were unparalleled We couldnt have asked for a better partner in our startup journey",
    name: "Alex Johnson",
    title: "CEO of InnovateTech",
  },
  {
    quote:
      "The team at 4Startups provided us with a clear and actionable visualization of our market opportunities Their expertise in leveraging AI for business development is truly impressive Thanks to them, we have a roadmap to success",
    name: "Maria Rodriguez",
    title: "Founder of GreenFuture",
  },
  {
    quote:
      "Startups offered us an in-depth analysis of our business landscape, helping us identify and capitalize on emerging trends Their support has been invaluable in steering our startup towards growth and profitability",
    name: "John Smith",
    title: "Co-Founder of HealthHub",
  },
  {
    quote:
      "Partnering with 4Startups was the best decision we made Their AI solutions provided us with a comprehensive understanding of our industry and revenue potential, enabling us to make informed decisions with confidence",
    name: "Emma Wilson",
    title: "CTO of EduNext",
  },
  {
    quote:
      "The insights and visualizations provided by 4Startups were game-changing for our startup Their AI-driven approach gave us a clear picture of our market position and growth possibilities, setting us on the path to success",
    name: "Liam Brown",
    title: "Managing Director of FinTech Solutions",
  },
];
