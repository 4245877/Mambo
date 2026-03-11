import type { CartItem } from "@/types/cart";
import type { CreateOrderDto, UpdateOrderStatusDto } from "@/server/dto/order.dto";
import type { DeliveryMethod, OrderStatus, PaymentMethod } from "@/types/order";

const DELIVERY_METHODS = new Set<DeliveryMethod>([
  "nova-poshta",
  "ukrposhta",
  "pickup",
]);

const PAYMENT_METHODS = new Set<PaymentMethod>([
  "cod",
  "card",
]);

const ORDER_STATUSES = new Set<OrderStatus>([
  "new",
  "confirmed",
  "processing",
  "shipped",
  "completed",
  "canceled",
]);

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeCartItem(raw: unknown): CartItem {
  assert(raw && typeof raw === "object", "Некоректний товар у кошику.");

  const item = raw as Record<string, unknown>;

  assert(isNonEmptyString(item.productId), "У товару відсутній productId.");
  assert(isNonEmptyString(item.variantId), "У товару відсутній variantId.");
  assert(isNonEmptyString(item.slug), "У товару відсутній slug.");
  assert(isNonEmptyString(item.name), "У товару відсутня назва.");
  assert(isNonEmptyString(item.image), "У товару відсутнє зображення.");
  assert(isNonEmptyString(item.color), "У товару відсутній колір.");
  assert(isNonEmptyString(item.size), "У товару відсутній розмір.");
  assert(typeof item.price === "number" && item.price >= 0, "Некоректна ціна товару.");
  assert(Number.isInteger(item.qty) && item.qty > 0, "Некоректна кількість товару.");

  return {
    productId: item.productId.trim(),
    variantId: item.variantId.trim(),
    slug: item.slug.trim(),
    name: item.name.trim(),
    image: item.image.trim(),
    color: item.color.trim(),
    size: item.size.trim(),
    price: item.price,
    qty: item.qty,
    maxQty: typeof item.maxQty === "number" ? item.maxQty : undefined,
  };
}

export function validateCreateOrderDto(body: unknown): CreateOrderDto {
  assert(body && typeof body === "object", "Порожнє тіло запиту.");

  const data = body as Record<string, unknown>;

  assert(isNonEmptyString(data.fullName), "Вкажи ПІБ.");
  assert(isNonEmptyString(data.phone), "Вкажи телефон.");
  assert(isNonEmptyString(data.city), "Вкажи місто.");

  assert(isNonEmptyString(data.deliveryMethod), "Вкажи спосіб доставки.");
  assert(DELIVERY_METHODS.has(data.deliveryMethod as DeliveryMethod), "Некоректний спосіб доставки.");

  assert(isNonEmptyString(data.paymentMethod), "Вкажи спосіб оплати.");
  assert(PAYMENT_METHODS.has(data.paymentMethod as PaymentMethod), "Некоректний спосіб оплати.");

  assert(Array.isArray(data.items), "Товари замовлення відсутні.");
  assert(data.items.length > 0, "Кошик порожній.");

  const items = data.items.map(normalizeCartItem);

  return {
    fullName: data.fullName.trim(),
    phone: data.phone.trim(),
    email: isNonEmptyString(data.email) ? data.email.trim() : undefined,
    city: data.city.trim(),
    deliveryMethod: data.deliveryMethod as DeliveryMethod,
    paymentMethod: data.paymentMethod as PaymentMethod,
    comment: isNonEmptyString(data.comment) ? data.comment.trim() : undefined,
    items,
  };
}

export function validateUpdateOrderStatusDto(body: unknown): UpdateOrderStatusDto {
  assert(body && typeof body === "object", "Порожнє тіло запиту.");

  const data = body as Record<string, unknown>;

  assert(isNonEmptyString(data.status), "Статус не переданий.");
  assert(ORDER_STATUSES.has(data.status as OrderStatus), "Некоректний статус.");

  return {
    status: data.status as OrderStatus,
  };
}