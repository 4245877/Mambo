import type { CartItem } from "@/types/cart";
import type { DeliveryMethod, OrderStatus, PaymentMethod } from "@/types/order";

export type CreateOrderDto = {
  fullName: string;
  phone: string;
  email?: string;
  city: string;
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
  comment?: string;
  items: CartItem[];
};

export type UpdateOrderStatusDto = {
  status: OrderStatus;
};