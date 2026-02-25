import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Оплата | Mambo",
  description: "Способи оплати замовлень у магазині Mambo.",
};

export default function PaymentPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <nav className="text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Головна
        </Link>
        <span className="mx-2">/</span>
        <span>Оплата</span>
      </nav>

      <div>
        <h1 className="text-2xl font-semibold sm:text-3xl">Оплата</h1>
        <p className="mt-2 text-sm text-gray-600">
          На старті можна залишити 1–2 способи оплати, а потім підключити онлайн-еквайринг.
        </p>
      </div>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Доступні способи оплати</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-gray-700">
          <li>Післяплата (оплата при отриманні)</li>
          <li>Оплата карткою онлайн (підключимо на наступному етапі)</li>
          <li>Оплата за реквізитами (IBAN) — за потреби</li>
        </ul>
      </section>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Післяплата</h2>
        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <p>
            При виборі післяплати оплата здійснюється у відділенні перевізника під час отримання.
          </p>
          <p>
            Зверни увагу: служба доставки може стягувати додаткову комісію за переказ коштів.
          </p>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Онлайн-оплата</h2>
        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <p>
            На цьому етапі сторінка підготовлена під майбутню інтеграцію (LiqPay / WayForPay / Fondy / Mono).
          </p>
          <p>
            Після підключення платіжного сервісу оплата карткою буде доступна прямо під час оформлення замовлення.
          </p>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Безпека платежів</h2>
        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <p>Сайт працює через захищене з’єднання HTTPS (SSL).</p>
          <p>
            Дані передаються по захищеному каналу. Реквізити картки обробляються платіжним провайдером (після інтеграції).
          </p>
        </div>
      </section>
    </div>
  );
}