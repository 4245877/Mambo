export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="container-page py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mambo. Всі права захищені.</p>
          <div className="flex gap-4">
            <a href="/delivery" className="hover:text-gray-900">Доставка</a>
            <a href="/payment" className="hover:text-gray-900">Оплата</a>
            <a href="/contacts" className="hover:text-gray-900">Контакти</a>
          </div>
        </div>
      </div>
    </footer>
  );
}