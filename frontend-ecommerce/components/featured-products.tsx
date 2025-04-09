"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { SkeletonSchema } from "./skeletonSchema";
import { ProductType } from "@/types/productos";
import { Card, CardContent } from "./ui/card";

export const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3}></SkeletonSchema>}

          {result !== null &&
            result.map((product: ProductType) => {
              const { id, productName, slug, images, category, taste, origin } =
                product;

              const imageUrl =
                images?.[0]?.formats?.large?.url ??
                images?.[0]?.url ??
                "";
                console.log(result)
              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-2 py-2">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`}
                          alt={productName || "Producto destacado"}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
