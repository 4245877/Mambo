import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { VariantPicker } from "@/components/shop/VariantPicker";
import { getProductBySlug } from "@/lib/mock-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <nav className="text-sm text-gray-600">
        <a href="/" className="hover:underline">
          Головна
        </a>
        <span className="mx-2">/</span>
        <a href="/catalog" className="hover:underline">
          Каталог
        </a>
        <span className="mx-2">/</span>
        <span>{product.category}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <ProductGallery images={product.images} name={product.name} />

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500">{product.category}</p>
            <h1 className="mt-1 text-2xl font-semibold sm:text-3xl">
              {product.name}
            </h1>
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>

          <VariantPicker product={product} />

          <div className="card p-4 text-sm text-gray-700">
            <h2 className="font-medium text-gray-900">Інформація</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Швидка відправка по Україні</li>
              <li>Обмін / повернення згідно з правилами магазину</li>
              <li>Підтримка у Telegram / Viber (підключимо пізніше)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}