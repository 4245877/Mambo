import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакти | Mambo",
  description: "Контактна інформація магазину Mambo.",
};

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <nav className="text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Головна
        </Link>
        <span className="mx-2">/</span>
        <span>Контакти</span>
      </nav>

      <div>
        <h1 className="text-2xl font-semibold sm:text-3xl">Контакти</h1>
        <p className="mt-2 text-sm text-gray-600">
          Заміни нижче дані на реальні контакти магазину Mambo.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Зв&apos;язок</h2>

          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <div>
              <p className="text-gray-500">Телефон</p>
              <a href="tel:+380000000000" className="font-medium hover:underline">
                +38 (000) 000-00-00
              </a>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <a href="mailto:hello@mambo.ua" className="font-medium hover:underline">
                hello@mambo.ua
              </a>
            </div>

            <div>
              <p className="text-gray-500">Instagram</p>
              <a href="#" className="font-medium hover:underline">
                @mambo_store
              </a>
            </div>

            <div>
              <p className="text-gray-500">Telegram / Viber</p>
              <p className="font-medium">За номером телефону магазину</p>
            </div>
          </div>
        </section>

        <section className="card p-5">
          <h2 className="text-lg font-semibold">Графік роботи</h2>

          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between gap-4">
              <span>Пн–Пт</span>
              <span>10:00–19:00</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Сб</span>
              <span>11:00–17:00</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Нд</span>
              <span>Вихідний</span>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
            Менеджер відповідає в робочий час. Якщо ти пишеш пізніше — ми відповімо наступного дня.
          </div>
        </section>
      </div>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Адреса / Самовивіз</h2>
        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <p>
            м. Київ, вул. Прикладна, 12 (приклад — заміни на реальну адресу)
          </p>
          <p>Самовивіз — лише за попереднім погодженням.</p>
        </div>

        <div className="mt-4 flex h-56 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500">
          Тут можна додати карту (Google Maps iframe) пізніше
        </div>
      </section>

      <section className="card p-5">
        <h2 className="text-lg font-semibold">Реквізити (за потреби)</h2>
        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <p>ФОП / ТОВ: Mambo (заповниш пізніше)</p>
          <p>ЄДРПОУ / ІПН: ________</p>
          <p>IBAN: UA________________________</p>
        </div>
      </section>
    </div>
  );
}