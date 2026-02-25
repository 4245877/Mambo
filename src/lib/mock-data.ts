import type { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: "p1",
    slug: "mambo-basic-tee",
    name: "Футболка Mambo Basic",
    description:
      "Базова футболка з м’якої бавовни. Підійде на кожен день. Комфортний крій.",
    category: "Футболки",
    colors: ["Чорний", "Білий", "Бежевий"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/images/placeholders/tshirt-1.jpg",
      "/images/placeholders/tshirt-2.jpg",
      "/images/placeholders/tshirt-3.jpg",
    ],
    tags: ["basic", "cotton"],
    variants: [
      { id: "v1", sku: "MBT-BLK-S", color: "Чорний", size: "S", price: 890, inStock: true },
      { id: "v2", sku: "MBT-BLK-M", color: "Чорний", size: "M", price: 890, inStock: true },
      { id: "v3", sku: "MBT-BLK-L", color: "Чорний", size: "L", price: 890, inStock: true },
      { id: "v4", sku: "MBT-WHT-M", color: "Білий", size: "M", price: 890, inStock: true },
      { id: "v5", sku: "MBT-BGE-L", color: "Бежевий", size: "L", price: 940, inStock: false },
    ],
  },
  {
    id: "p2",
    slug: "mambo-oversize-hoodie",
    name: "Худі Mambo Oversize",
    description:
      "Тепле oversize-худі з капюшоном. Щільна тканина, зручний крій, кишеня-кенгуру.",
    category: "Худі",
    colors: ["Сірий", "Чорний"],
    sizes: ["M", "L", "XL"],
    images: [
      "/images/placeholders/hoodie-1.jpg",
      "/images/placeholders/hoodie-2.jpg",
    ],
    tags: ["oversize", "warm"],
    variants: [
      { id: "v6", sku: "MBH-GRY-M", color: "Сірий", size: "M", price: 1890, inStock: true },
      { id: "v7", sku: "MBH-GRY-L", color: "Сірий", size: "L", price: 1890, inStock: true },
      { id: "v8", sku: "MBH-BLK-L", color: "Чорний", size: "L", price: 1990, inStock: true },
    ],
  },
  {
    id: "p3",
    slug: "mambo-joggers-soft",
    name: "Джогери Mambo Soft",
    description:
      "М’які джогери для щоденного носіння. Еластичний пояс та зручна посадка.",
    category: "Штани",
    colors: ["Графіт", "Чорний"],
    sizes: ["S", "M", "L"],
    images: ["/images/placeholders/joggers-1.jpg"],
    tags: ["casual"],
    variants: [
      { id: "v9", sku: "MBJ-GRF-S", color: "Графіт", size: "S", price: 1490, inStock: true },
      { id: "v10", sku: "MBJ-GRF-M", color: "Графіт", size: "M", price: 1490, inStock: true },
      { id: "v11", sku: "MBJ-BLK-L", color: "Чорний", size: "L", price: 1490, inStock: false },
    ],
  },
  {
    id: "p4",
    slug: "mambo-cap-classic",
    name: "Кепка Mambo Classic",
    description:
      "Класична кепка з вишивкою логотипа. Регульований ремінець.",
    category: "Аксесуари",
    colors: ["Чорний", "Молочний"],
    sizes: ["One Size"],
    images: ["/images/placeholders/cap-1.jpg"],
    tags: ["cap"],
    variants: [
      { id: "v12", sku: "MBC-BLK-OS", color: "Чорний", size: "One Size", price: 690, inStock: true },
      { id: "v13", sku: "MBC-CRM-OS", color: "Молочний", size: "One Size", price: 690, inStock: true },
    ],
  },
  {
    id: "p5",
    slug: "mambo-shirt-linen",
    name: "Сорочка Mambo Linen",
    description:
      "Легка сорочка з лляною текстурою. Добре підходить на теплу пору року.",
    category: "Сорочки",
    colors: ["Білий", "Пісочний", "Блакитний"],
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/placeholders/shirt-1.jpg", "/images/placeholders/shirt-2.jpg"],
    tags: ["linen", "summer"],
    variants: [
      { id: "v14", sku: "MBS-WHT-M", color: "Білий", size: "M", price: 1690, inStock: true },
      { id: "v15", sku: "MBS-SND-L", color: "Пісочний", size: "L", price: 1690, inStock: true },
      { id: "v16", sku: "MBS-BLU-XL", color: "Блакитний", size: "XL", price: 1690, inStock: true },
    ],
  },
  {
    id: "p6",
    slug: "mambo-women-top",
    name: "Топ Mambo Rib",
    description:
      "Жіночий rib-топ з еластичної тканини. Комфортний і мінімалістичний.",
    category: "Топи",
    colors: ["Чорний", "Білий", "Рожевий"],
    sizes: ["XS", "S", "M"],
    images: ["/images/placeholders/top-1.jpg"],
    tags: ["women", "rib"],
    variants: [
      { id: "v17", sku: "MBR-BLK-XS", color: "Чорний", size: "XS", price: 790, inStock: true },
      { id: "v18", sku: "MBR-WHT-S", color: "Білий", size: "S", price: 790, inStock: true },
      { id: "v19", sku: "MBR-PNK-M", color: "Рожевий", size: "M", price: 790, inStock: true },
    ],
  },
];

export function getAllProducts() {
  return mockProducts;
}

export function getFeaturedProducts() {
  return mockProducts.slice(0, 4);
}

export function getProductBySlug(slug: string) {
  return mockProducts.find((p) => p.slug === slug) ?? null;
}

export type CatalogFilters = {
  q?: string;
  category?: string;
  color?: string;
  size?: string;
  sort?: "newest" | "price-asc" | "price-desc" | "name";
};

export function filterProducts(filters: CatalogFilters) {
  let items = [...mockProducts];

  if (filters.q) {
    const q = filters.q.toLowerCase();
    items = items.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tags ?? []).some((t) => t.toLowerCase().includes(q))
    );
  }

  if (filters.category) {
    items = items.filter((p) => p.category === filters.category);
  }

  if (filters.color) {
    items = items.filter((p) => p.colors.includes(filters.color!));
  }

  if (filters.size) {
    items = items.filter((p) => p.sizes.includes(filters.size!));
  }

  switch (filters.sort) {
    case "price-asc":
      items.sort((a, b) => minPrice(a) - minPrice(b));
      break;
    case "price-desc":
      items.sort((a, b) => minPrice(b) - minPrice(a));
      break;
    case "name":
      items.sort((a, b) => a.name.localeCompare(b.name, "uk"));
      break;
    default:
      // newest (mock): оставляем порядок массива
      break;
  }

  return items;
}

export function minPrice(product: Product) {
  return Math.min(...product.variants.map((v) => v.price));
}

export function getCatalogMeta() {
  const categories = Array.from(new Set(mockProducts.map((p) => p.category)));
  const colors = Array.from(new Set(mockProducts.flatMap((p) => p.colors)));
  const sizes = Array.from(new Set(mockProducts.flatMap((p) => p.sizes)));
  return { categories, colors, sizes };
}