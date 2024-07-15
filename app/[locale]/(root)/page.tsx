import Navbar from "@/app/[locale]/(root)/components/navbar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("LandingPage");
  return <Navbar />;
}
