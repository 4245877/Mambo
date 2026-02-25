import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Доставка | Mambo",
  description: "Умови доставки замовлень магазину Mambo по Україні.",
};

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <nav className="text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Головна
        </Link>
        <span className="mx-2">/</span>
        <span>Доставка</span>
      </nav>

      <div>
        <h1 className="text-2xl font-semibold sm:text-3xl">Доставка</h1>
        <p className="mt-2 text-sm text-gray-600">
          Нижче — базові умови доставки. Їх можна легко змінити під твої реальні
          правила магазину.
        </p>
      </div>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Способи доставки</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-gray-700">
          <li>Нова пошта (відділення / поштомат / кур&apos;єр)</li>
          <li>Укрпошта</li>
          <li>Самовивіз (за домовленістю)</li>
        </ul>
      </section>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Терміни відправки</h2>
        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <p>• Обробка замовлення: протягом 1 робочого дня.</p>
          <p>• Відправка: зазвичай 1–2 робочі дні після підтвердження.</p>
          <p>• У період акцій або великого навантаження терміни можуть бути трохи більшими.</p>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Вартість доставки</h2>
        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <p>
            Вартість доставки розраховується за тарифами перевізника (Нова пошта /
            Укрпошта).
          </p>
          <p>
            Для замовлень на певну суму можна додати безкоштовну доставку
            (налаштуємо пізніше в адмінці / логіці checkout).
          </p>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Важливо</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-gray-700">
          <li>Перевіряй посилку при отриманні у відділенні.</li>
          <li>Якщо є пошкодження — зафіксуй це одразу з працівником служби доставки.</li>
          <li>Після оформлення замовлення менеджер може зв’язатися для уточнення деталей.</li>
        </ul>
      </section>
    </div>
  );
}