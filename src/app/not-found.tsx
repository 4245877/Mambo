import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="card p-8 text-center">
        <h1 className="text-2xl font-semibold">Сторінку не знайдено</h1>
        <p className="mt-2 text-sm text-gray-600">
          Можливо, посилання застаріло або сторінка була переміщена.
        </p>
        <Link href="/" className="btn-base mt-4 bg-black text-white hover:bg-gray-800">
          На головну
        </Link>
      </div>
    </div>
  );
}