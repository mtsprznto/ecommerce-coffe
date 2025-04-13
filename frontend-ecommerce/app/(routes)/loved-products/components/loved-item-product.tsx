import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/productos";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
  product: ProductType;
}

export const LoveItemProducto = (props: LovedItemProductProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();

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
            <div>
                <h2 className="text-lg font-bold">{product.productName}</h2>
                <p className="font-bold">{formatPrice(product.price)}</p>
                <div className="flex items-center justify-between gap-3">
                    <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                        {product.taste}
                    </p>
                    <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                        {product.origin}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </li>
  );
};
