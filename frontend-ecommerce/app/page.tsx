import { CarouselTextBanner } from "@/components/corousel-text-banner";
import { FeaturedProducts } from "@/components/featured-products";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      <CarouselTextBanner></CarouselTextBanner>
      <FeaturedProducts></FeaturedProducts>
    </main>
  );
}
