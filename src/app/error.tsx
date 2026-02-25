"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="card p-8 text-center">
        <h1 className="text-2xl font-semibold">Сталася помилка</h1>
        <p className="mt-2 text-sm text-gray-600">
          Будь ласка, спробуй ще раз.
        </p>
        <button
          onClick={() => reset()}
          className="btn-base mt-4 bg-black text-white hover:bg-gray-800"
        >
          Повторити
        </button>
      </div>
    </div>
  );
}