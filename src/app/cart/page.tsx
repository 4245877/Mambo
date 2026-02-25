import { CartList } from "@/components/shop/CartList";

export default function CartPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold sm:text-3xl">Кошик</h1>
      <CartList />
    </div>
  );
}