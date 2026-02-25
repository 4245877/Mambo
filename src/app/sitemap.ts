import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const products = getAllProducts();

  return [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/catalog`, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/cart`, changeFrequency: "weekly", priority: 0.4 },
    { url: `${baseUrl}/checkout`, changeFrequency: "weekly", priority: 0.5 },
    ...products.map((p) => ({
      url: `${baseUrl}/product/${p.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}