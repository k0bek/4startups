import Navbar from "@/app/[locale]/(root)/components/navbar";
import { InfiniteMovingCards } from "@/app/[locale]/(root)/components/moving-cards";
import BlockScroll from "@/components/shared/block-scroll";
import CardsSection from "./components/cards-section";
import MaxWidthWrapper from "@/components/shared/max-width-cointainer";
import UnlockGrowSection from "./components/unlock-grow-section";
import { reviewItems } from "@/lib/utils";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <BlockScroll />
      <Navbar />
      <MaxWidthWrapper className="min-h-screen flex justify-center flex-col items-center my-0 lg:-my-20 bg">
        <Header />
        <CardsSection />
      </MaxWidthWrapper>
      <InfiniteMovingCards direction="right" speed="slow" items={reviewItems} />
      <MaxWidthWrapper>
        <UnlockGrowSection />
      </MaxWidthWrapper>
    </>
  );
}
