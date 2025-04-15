import { ProductType } from "@/types/productos";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageMiniatureProps {
  product: ProductType;
}

export const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
  const { product } = props;
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/product/${product.slug}`)}>
      {product.images && product.images.length > 0 && (
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
          alt="Producto"
          className="overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover"
          width={100}
          height={100}
        />
      )}
    </div>
  );
};
