import Link from "next/link";
import { ProductCard } from "@/components/shop/ProductCard";
import { getFeaturedProducts } from "@/lib/mock-data";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-3xl bg-black text-white">
        <div className="grid gap-6 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-300">Mambo</p>
            <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
              Одяг, який хочеться носити щодня
            </h1>
            <p className="mt-4 max-w-xl text-sm text-gray-300 sm:text-base">
              Мінімалістичні речі, зручні силуети та простий вибір розміру й кольору.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/catalog" className="btn-base bg-white text-black hover:bg-gray-200">
                Перейти в каталог
              </Link>
              <Link
                href="/catalog?category=Футболки"
                className="btn-base border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                Футболки
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[4/5] rounded-2xl bg-white/10" />
            <div className="aspect-[4/5] rounded-2xl bg-white/10" />
            <div className="aspect-[4/5] rounded-2xl bg-white/10" />
            <div className="aspect-[4/5] rounded-2xl bg-white/10" />
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Популярне</h2>
          <Link href="/catalog" className="text-sm hover:underline">
            Дивитися все →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}