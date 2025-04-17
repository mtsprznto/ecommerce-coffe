import { IconButton } from "@/components/icon-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/productos";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductCardProps = {
  product: ProductType;
};
export const ProductoCard = (props: ProductCardProps) => {
  const { product } = props;
  const router = useRouter();
  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
    >
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          {product.attributes.taste}
        </p>
        <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full dark:bg-yellow-900 dark:text-white w-fit">
          {product.attributes.origin}
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product.attributes.images.data.map((image) => (
            <CarouselItem key={image.id} className="group">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                alt={"images"}
                className="rounded-xl"
                width={400}
                height={400}
              ></Image>
              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    icon={<Expand size={20} className="text-gray-600"></Expand>}
                    onClick={() => router.push(`/product/${product.attributes.slug}`)}
                  ></IconButton>
                  <IconButton
                    icon={
                      <ShoppingCart
                        size={20}
                        className="text-gray-600"
                      ></ShoppingCart>
                    }
                    onClick={() => console.log("Hola")}
                  ></IconButton>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-2xl text-center ">{product.attributes.productName}</p>
      <p className="font-bold text-center">{formatPrice(product.attributes.price)}</p>
    </Link>
  );
};
