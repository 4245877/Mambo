export type CartItem = {
  productId: string;
  variantId: string;
  slug: string;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  qty: number;
  maxQty?: number;
};