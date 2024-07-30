import Navbar from "@/app/[locale]/(root)/components/navbar";
import { InfiniteMovingCards } from "@/app/[locale]/(root)/components/moving-cards";
import BlockScroll from "@/components/shared/block-scroll";
import CardsSection from "./components/cards-section";
import MaxWidthWrapper from "@/components/shared/max-width-cointainer";
import UnlockGrowSection from "./components/unlock-grow-section";
import { reviewItems } from "@/lib/utils";
import Header from "./components/header";
import BlogList from "./components/blog/blog-list";
import NavbarMobile from "./components/navbar-mobile";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <BlockScroll />
      <MaxWidthWrapper className="min-h-screen flex justify-center flex-col items-center my-0 lg:-my-20">
        <Header />
        <CardsSection session={session} />
      </MaxWidthWrapper>
      <InfiniteMovingCards direction="right" speed="slow" items={reviewItems} />
      <MaxWidthWrapper>
        <UnlockGrowSection />
        <BlogList />
      </MaxWidthWrapper>
    </>
  );
}
