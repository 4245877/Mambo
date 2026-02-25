import { FiltersPanel } from "@/components/shop/FiltersPanel";
import { ProductCard } from "@/components/shop/ProductCard";
import { filterProducts } from "@/lib/mock-data";

type CatalogSearchParams = Promise<{
  q?: string;
  category?: string;
  color?: string;
  size?: string;
  sort?: "newest" | "price-asc" | "price-desc" | "name";
}>;

type Props = {
  searchParams: CatalogSearchParams;
};

export default async function CatalogPage({ searchParams }: Props) {
  const sp = await searchParams;

  const current = {
    q: sp?.q ?? "",
    category: sp?.category ?? "",
    color: sp?.color ?? "",
    size: sp?.size ?? "",
    sort: sp?.sort ?? "newest",
  };

  const products = filterProducts(current);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold sm:text-3xl">Каталог</h1>
        <p className="mt-1 text-sm text-gray-600">
          Знайдено товарів:{" "}
          <span className="font-medium text-gray-900">{products.length}</span>
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside>
          <FiltersPanel current={current} />
        </aside>

        <section>
          {products.length === 0 ? (
            <div className="card p-8 text-center">
              <h2 className="text-lg font-semibold">Нічого не знайдено</h2>
              <p className="mt-2 text-sm text-gray-600">
                Спробуй змінити фільтри або пошуковий запит.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}