import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/shop/Header";
import { Footer } from "@/components/shop/Footer";

export const metadata: Metadata = {
  title: "Mambo — магазин одягу",
  description: "Каталог одягу Mambo. Зручний пошук, кошик та оформлення замовлення.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="container-page py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}