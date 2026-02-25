"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cartCount, getCart } from "@/lib/cart";

export function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sync = () => setCount(cartCount(getCart()));
    sync();

    window.addEventListener("mambo-cart-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("mambo-cart-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Mambo
        </Link>

        <form action="/catalog" className="hidden flex-1 max-w-xl md:block">
          <input
            name="q"
            placeholder="Пошук товарів..."
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:border-gray-500"
          />
        </form>

        <nav className="flex items-center gap-2 sm:gap-4 text-sm">
          <Link href="/catalog" className="rounded-lg px-3 py-2 hover:bg-gray-100">
            Каталог
          </Link>
          <Link href="/cart" className="rounded-lg px-3 py-2 hover:bg-gray-100">
            Кошик
            <span className="ml-2 rounded-full bg-black px-2 py-0.5 text-xs text-white">
              {count}
            </span>
          </Link>
          <Link href="/admin/login" className="hidden rounded-lg px-3 py-2 hover:bg-gray-100 md:inline">
            Адмін
          </Link>
        </nav>
      </div>
    </header>
  );
}