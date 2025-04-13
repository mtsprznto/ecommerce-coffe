import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/productos";
import { Heart, HeartIcon } from "lucide-react";

export type InfoProductsProps = {
  product: ProductType;
};

export const InfoProduct = (props: InfoProductsProps) => {
  const { product } = props;
  console.log(product);

  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl py-4">{product.productName}</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
            {product.taste}
          </p>
          <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full dark:bg-yellow-900 dark:text-white w-fit">
            {product.origin}
          </p>
        </div>
      </div>
      <Separator className="my-4"></Separator>
      <p>{product.description}</p>
      <Separator className="my-4"></Separator>
      <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
      <div className="flex items-center gap-5">
        <Button className="cursor-pointer" onClick={() => console.log("comprar")}>
          Comprar
        </Button>
        <HeartIcon
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => console.log("add to lov")}
        />
      </div>
    </div>
  );
};
