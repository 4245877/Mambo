"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { CartItem } from "@/types/cart";
import { cartSubtotal, getCart, removeFromCart, updateCartQty } from "@/lib/cart";
import { formatUAH } from "@/lib/money";
import { Button } from "@/components/ui/Button";

export function CartList() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const sync = () => setItems(getCart());
    sync();
    window.addEventListener("mambo-cart-updated", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("mambo-cart-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const subtotal = useMemo(() => cartSubtotal(items), [items]);
  const delivery = items.length > 0 ? 99 : 0;
  const total = subtotal + delivery;

  if (items.length === 0) {
    return (
      <div className="card p-8 text-center">
        <h2 className="text-xl font-semibold">Кошик порожній</h2>
        <p className="mt-2 text-sm text-gray-600">
          Додай товари з каталогу, щоб оформити замовлення.
        </p>
        <Link href="/catalog" className="btn-base mt-4 bg-black text-white hover:bg-gray-800">
          До каталогу
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.variantId} className="card p-4">
            <div className="flex gap-4">
              <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link href={`/product/${item.slug}`} className="font-medium hover:underline">
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-600">
                      {item.color} / {item.size}
                    </p>
                  </div>
                  <div className="text-right font-medium">
                    {formatUAH(item.price * item.qty)}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-2">
                  <label className="text-sm text-gray-600">К-сть:</label>
                  <select
                    value={item.qty}
                    onChange={(e) => updateCartQty(item.variantId, Number(e.target.value))}
                    className="rounded-lg border border-gray-300 px-2 py-1 text-sm"
                  >
                    {Array.from({ length: item.maxQty ?? 10 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>

                  <Button
                    variant="ghost"
                    className="text-red-600 hover:bg-red-50"
                    onClick={() => removeFromCart(item.variantId)}
                  >
                    Видалити
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="card h-fit p-4">
        <h3 className="text-lg font-semibold">Підсумок</h3>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Товари</span>
            <span>{formatUAH(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Доставка</span>
            <span>{formatUAH(delivery)}</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-gray-200 pt-3 text-base font-semibold">
            <span>Разом</span>
            <span>{formatUAH(total)}</span>
          </div>
        </div>

        <Link href="/checkout" className="btn-base mt-4 w-full bg-black text-white hover:bg-gray-800">
          Оформити замовлення
        </Link>
      </aside>
    </div>
  );
}