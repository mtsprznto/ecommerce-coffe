import { BannerDiscount } from "@/components/banner-discount";
import { BannerProduct } from "@/components/banner-product";
import { ChooseCategory } from "@/components/choose-category";
import { CarouselTextBanner } from "@/components/corousel-text-banner";
import { FeaturedProducts } from "@/components/featured-products";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner></CarouselTextBanner>
      <FeaturedProducts></FeaturedProducts>
      <BannerDiscount></BannerDiscount>
      <ChooseCategory></ChooseCategory>
      <BannerProduct></BannerProduct>
    </main>
  );
}
