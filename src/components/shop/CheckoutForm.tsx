"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { CartItem } from "@/types/cart";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { cartSubtotal, clearCart, getCart } from "@/lib/cart";
import { formatUAH } from "@/lib/money";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  deliveryMethod: string;
  paymentMethod: string;
  comment: string;
};

export function CheckoutForm() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    deliveryMethod: "nova-poshta",
    paymentMethod: "cod",
    comment: "",
  });

  useEffect(() => {
    setItems(getCart());
  }, []);

  const subtotal = useMemo(() => cartSubtotal(items), [items]);
  const delivery = items.length ? 99 : 0;
  const total = subtotal + delivery;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!items.length) {
      setError("Кошик порожній.");
      return;
    }

    if (!form.fullName.trim() || !form.phone.trim() || !form.city.trim()) {
      setError("Будь ласка, заповни обов’язкові поля.");
      return;
    }

    setLoading(true);

    try {
      // Здесь позже будет POST /api/orders
      await new Promise((r) => setTimeout(r, 700));

      clearCart();
      router.push("/checkout/success");
    } catch {
      setError("Не вдалося оформити замовлення. Спробуй ще раз.");
    } finally {
      setLoading(false);
    }
  }

  if (!items.length) {
    return (
      <div className="card p-6">
        <h2 className="text-xl font-semibold">Кошик порожній</h2>
        <p className="mt-2 text-sm text-gray-600">
          Спочатку додай товари, потім оформиш замовлення.
        </p>
        <a href="/catalog" className="btn-base mt-4 bg-black text-white hover:bg-gray-800">
          До каталогу
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <section className="card p-4">
          <h3 className="text-lg font-semibold">Контакти</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium">ПІБ *</label>
              <Input
                value={form.fullName}
                onChange={(e) => setForm((s) => ({ ...s, fullName: e.target.value }))}
                placeholder="Ім’я та прізвище"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Телефон *</label>
              <Input
                value={form.phone}
                onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                placeholder="+380..."
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                placeholder="email@example.com"
              />
            </div>
          </div>
        </section>

        <section className="card p-4">
          <h3 className="text-lg font-semibold">Доставка</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Місто *</label>
              <Input
                value={form.city}
                onChange={(e) => setForm((s) => ({ ...s, city: e.target.value }))}
                placeholder="Київ"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Спосіб доставки</label>
              <Select
                value={form.deliveryMethod}
                onChange={(e) => setForm((s) => ({ ...s, deliveryMethod: e.target.value }))}
              >
                <option value="nova-poshta">Нова пошта</option>
                <option value="ukrposhta">Укрпошта</option>
                <option value="pickup">Самовивіз</option>
              </Select>
            </div>
          </div>
        </section>

        <section className="card p-4">
          <h3 className="text-lg font-semibold">Оплата</h3>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium">Спосіб оплати</label>
            <Select
              value={form.paymentMethod}
              onChange={(e) => setForm((s) => ({ ...s, paymentMethod: e.target.value }))}
            >
              <option value="cod">Післяплата</option>
              <option value="card">Оплата карткою (згодом)</option>
            </Select>
          </div>

          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium">Коментар</label>
            <textarea
              value={form.comment}
              onChange={(e) => setForm((s) => ({ ...s, comment: e.target.value }))}
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500"
              placeholder="Додаткові побажання до замовлення"
            />
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Тут пізніше підключимо захист від спаму (Turnstile) і реальний API замовлень.
          </p>
        </section>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
      </div>

      <aside className="card h-fit p-4">
        <h3 className="text-lg font-semibold">Твоє замовлення</h3>

        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={item.variantId} className="flex items-start justify-between gap-3 text-sm">
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-gray-600">
                  {item.color} / {item.size} × {item.qty}
                </div>
              </div>
              <div className="whitespace-nowrap">{formatUAH(item.price * item.qty)}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2 border-t border-gray-200 pt-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Товари</span>
            <span>{formatUAH(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Доставка</span>
            <span>{formatUAH(delivery)}</span>
          </div>
          <div className="flex justify-between text-base font-semibold">
            <span>Разом</span>
            <span>{formatUAH(total)}</span>
          </div>
        </div>

        <Button type="submit" className="mt-4 w-full" disabled={loading}>
          {loading ? "Оформлюємо..." : "Підтвердити замовлення"}
        </Button>
      </aside>
    </form>
  );
}