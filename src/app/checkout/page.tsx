import { CheckoutForm } from "@/components/shop/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold sm:text-3xl">Оформлення замовлення</h1>
      <CheckoutForm />
    </div>
  );
}