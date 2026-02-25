export type ProductVariant = {
  id: string;
  sku: string;
  color: string;
  size: string;
  price: number;
  inStock: boolean;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  colors: string[];
  sizes: string[];
  images: string[];
  variants: ProductVariant[];
  tags?: string[];
};