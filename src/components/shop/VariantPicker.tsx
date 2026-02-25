"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { formatUAH } from "@/lib/money";
import { AddToCartButton } from "@/components/shop/AddToCartButton";

type Props = {
  product: Product;
};

export function VariantPicker({ product }: Props) {
  const firstAvailable = product.variants.find((v) => v.inStock) ?? product.variants[0];

  const [color, setColor] = useState(firstAvailable?.color ?? product.colors[0] ?? "");
  const [size, setSize] = useState(firstAvailable?.size ?? product.sizes[0] ?? "");

  const availableColors = useMemo(
    () => Array.from(new Set(product.variants.map((v) => v.color))),
    [product.variants]
  );

  const availableSizes = useMemo(
    () => Array.from(new Set(product.variants.map((v) => v.size))),
    [product.variants]
  );

  const selectedVariant = useMemo(() => {
    return product.variants.find((v) => v.color === color && v.size === size) ?? null;
  }, [product.variants, color, size]);

  const sizesForColor = useMemo(() => {
    return new Set(product.variants.filter((v) => v.color === color).map((v) => v.size));
  }, [product.variants, color]);

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-medium">Колір</p>
        <div className="flex flex-wrap gap-2">
          {availableColors.map((c) => {
            const hasAnyStock = product.variants.some((v) => v.color === c && v.inStock);
            const active = c === color;

            return (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setColor(c);
                  const firstSizeForColor =
                    product.variants.find((v) => v.color === c && v.inStock)?.size ??
                    product.variants.find((v) => v.color === c)?.size;
                  if (firstSizeForColor) setSize(firstSizeForColor);
                }}
                className={`rounded-xl border px-3 py-2 text-sm ${
                  active ? "border-black bg-black text-white" : "border-gray-300 bg-white"
                } ${!hasAnyStock ? "opacity-50" : ""}`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-medium">Розмір</p>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((s) => {
            const variant = product.variants.find((v) => v.color === color && v.size === s);
            const disabled = !variant;
            const out = !!variant && !variant.inStock;
            const active = s === size;

            return (
              <button
                key={s}
                type="button"
                disabled={disabled}
                onClick={() => setSize(s)}
                className={`rounded-xl border px-3 py-2 text-sm ${
                  active ? "border-black bg-black text-white" : "border-gray-300 bg-white"
                } ${disabled ? "cursor-not-allowed opacity-40" : ""}`}
                title={out ? "Немає в наявності" : ""}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div className="card p-4">
        {selectedVariant ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-gray-600">SKU: {selectedVariant.sku}</div>
              <div
                className={`rounded-full px-2 py-1 text-xs ${
                  selectedVariant.inStock
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {selectedVariant.inStock ? "В наявності" : "Немає в наявності"}
              </div>
            </div>

            <div className="text-2xl font-semibold">{formatUAH(selectedVariant.price)}</div>

            <AddToCartButton
              disabled={!selectedVariant.inStock}
              item={{
                productId: product.id,
                variantId: selectedVariant.id,
                slug: product.slug,
                name: product.name,
                image: product.images[0] || "/images/placeholders/no-image.jpg",
                color: selectedVariant.color,
                size: selectedVariant.size,
                price: selectedVariant.price,
                qty: 1,
                maxQty: 20,
              }}
            />
          </div>
        ) : (
          <div className="text-sm text-red-600">
            Комбінація кольору та розміру недоступна.
          </div>
        )}
      </div>
    </div>
  );
}