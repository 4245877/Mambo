import Link from "next/link";
import type { Product } from "@/types/product";
import { formatUAH } from "@/lib/money";
import { minPrice } from "@/lib/mock-data";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const price = minPrice(product);
  const inStock = product.variants.some((v) => v.inStock);

  return (
    <article className="card overflow-hidden">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-[4/5] bg-gray-100">
          <img
            src={product.images[0] || "/images/placeholders/no-image.jpg"}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      <div className="space-y-2 p-4">
        <div className="text-xs text-gray-500">{product.category}</div>

        <Link href={`/product/${product.slug}`} className="block font-medium hover:underline">
          {product.name}
        </Link>

        <div className="flex items-center justify-between gap-2">
          <div className="font-semibold">{formatUAH(price)}</div>
          <div
            className={`rounded-full px-2 py-1 text-xs ${
              inStock ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
            }`}
          >
            {inStock ? "В наявності" : "Немає в наявності"}
          </div>
        </div>
      </div>
    </article>
  );
}