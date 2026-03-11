export type OrderStatus =
  | "new"
  | "confirmed"
  | "processing"
  | "shipped"
  | "completed"
  | "canceled";

export type DeliveryMethod =
  | "nova-poshta"
  | "ukrposhta"
  | "pickup";

export type PaymentMethod =
  | "cod"
  | "card";

export type OrderItem = {
  id: string;
  orderId: string;
  productId: string;
  variantId: string;
  slug: string;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  qty: number;
};

export type Order = {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  fullName: string;
  phone: string;
  email: string | null;
  city: string;
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
  comment: string | null;
  subtotal: number;
  deliveryPrice: number;
  total: number;
  createdAt: string;
  updatedAt: string;
  items: OrderItem[];
};