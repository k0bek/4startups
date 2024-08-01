import { HoverBorderGradientButton } from "@/components/shared/hover-border-gradient";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function CatchAllPage() {
  const t = useTranslations("LandingPage");

  return (
    <div className="flex flex-col justify-center items-center h-screen -mt-20 object-cover gap-4">
      <Image
        src={"/assets/not-found.webp"}
        className="w-[25rem] sm:w-[35rem] lg:w-[50rem] px-4"
        width={600}
        height={200}
        alt="404 image"
      />
      <HoverBorderGradientButton>
        <Link
          href={"/"}
          className="flex items-center text-secondary-foreground hover:text-hover transition-all text-sm duration-1000 ml-1 whitespace-nowrap px-3 py-2 gap-2"
        >
          {t("Return home")}
        </Link>
      </HoverBorderGradientButton>
    </div>
  );
}
