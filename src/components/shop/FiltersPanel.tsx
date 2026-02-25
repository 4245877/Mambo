import { getCatalogMeta } from "@/lib/mock-data";

type Props = {
  current: {
    q?: string;
    category?: string;
    color?: string;
    size?: string;
    sort?: string;
  };
};

export function FiltersPanel({ current }: Props) {
  const { categories, colors, sizes } = getCatalogMeta();

  return (
    <form action="/catalog" className="card space-y-4 p-4">
      <div>
        <label className="mb-1 block text-sm font-medium">Пошук</label>
        <input
          name="q"
          defaultValue={current.q ?? ""}
          placeholder="Назва або категорія"
          className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Категорія</label>
        <select
          name="category"
          defaultValue={current.category ?? ""}
          className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">Усі</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Колір</label>
        <select
          name="color"
          defaultValue={current.color ?? ""}
          className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">Усі</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Розмір</label>
        <select
          name="size"
          defaultValue={current.size ?? ""}
          className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">Усі</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Сортування</label>
        <select
          name="sort"
          defaultValue={current.sort ?? "newest"}
          className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="newest">Спочатку нові</option>
          <option value="price-asc">Ціна: від дешевих</option>
          <option value="price-desc">Ціна: від дорогих</option>
          <option value="name">За назвою</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button className="btn-base w-full bg-black text-white hover:bg-gray-800">
          Застосувати
        </button>
        <a
          href="/catalog"
          className="btn-base w-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
        >
          Скинути
        </a>
      </div>
    </form>
  );
}