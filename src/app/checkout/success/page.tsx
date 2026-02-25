import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="card p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h1 className="text-2xl font-semibold">Замовлення оформлено</h1>
        <p className="mt-2 text-sm text-gray-600">
          Дякуємо! Менеджер зв’яжеться з тобою для підтвердження.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link href="/catalog" className="btn-base bg-black text-white hover:bg-gray-800">
            Продовжити покупки
          </Link>
          <Link href="/" className="btn-base border border-gray-300 bg-white hover:bg-gray-50">
            На головну
          </Link>
        </div>
      </div>
    </div>
  );
}