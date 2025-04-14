import { ProductTasteOrigin } from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/productos";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
  product: ProductType;
}

export const LoveItemProducto = (props: LovedItemProductProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();

  const addToCheckout = () => {
    addItem(product);
    removeLovedItem(product.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div onClick={() => router.push(`/product/${product.slug}`)}>
        {product.images && product.images.length > 0 && (
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
            alt="Producto"
            className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover"
          />
        )}
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>
          <ProductTasteOrigin product={product}></ProductTasteOrigin>
          <Button className="mt-4 rounded-full cursor-pointer" onClick={addToCheckout}>
            Añadir al carrito
          </Button>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition dark:bg-white dark:text-black cursor-pointer"
            )}
          >
            <X size={20} onClick={() => removeLovedItem(product.id)}></X>
          </button>
        </div>
      </div>
    </li>
  );
};
