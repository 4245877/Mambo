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

function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function isPositiveInt(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value > 0;
}

function normalizeCartItem(raw: unknown): CartItem {
  assert(raw && typeof raw === "object", "Некоректний товар у кошику.");

  const item = raw as Record<string, unknown>;

  const productId = item.productId;
  const variantId = item.variantId;
  const slug = item.slug;
  const name = item.name;
  const image = item.image;
  const color = item.color;
  const size = item.size;
  const price = item.price;
  const qty = item.qty;
  const maxQty = item.maxQty;

  assert(isNonEmptyString(productId), "У товару відсутній productId.");
  assert(isNonEmptyString(variantId), "У товару відсутній variantId.");
  assert(isNonEmptyString(slug), "У товару відсутній slug.");
  assert(isNonEmptyString(name), "У товару відсутня назва.");
  assert(isNonEmptyString(image), "У товару відсутнє зображення.");
  assert(isNonEmptyString(color), "У товару відсутній колір.");
  assert(isNonEmptyString(size), "У товару відсутній розмір.");
  assert(isNumber(price) && price >= 0, "Некоректна ціна товару.");
  assert(isPositiveInt(qty), "Некоректна кількість товару.");
  assert(maxQty === undefined || isPositiveInt(maxQty), "Некоректний maxQty.");

  return {
    productId: productId.trim(),
    variantId: variantId.trim(),
    slug: slug.trim(),
    name: name.trim(),
    image: image.trim(),
    color: color.trim(),
    size: size.trim(),
    price,
    qty,
    maxQty,
  };
}

export function validateCreateOrderDto(body: unknown): CreateOrderDto {
  assert(body && typeof body === "object", "Порожнє тіло запиту.");

  const data = body as Record<string, unknown>;

  const fullName = data.fullName;
  const phone = data.phone;
  const email = data.email;
  const city = data.city;
  const deliveryMethod = data.deliveryMethod;
  const paymentMethod = data.paymentMethod;
  const comment = data.comment;
  const itemsRaw = data.items;

  assert(isNonEmptyString(fullName), "Вкажи ПІБ.");
  assert(isNonEmptyString(phone), "Вкажи телефон.");
  assert(isNonEmptyString(city), "Вкажи місто.");

  assert(isNonEmptyString(deliveryMethod), "Вкажи спосіб доставки.");
  assert(
    DELIVERY_METHODS.has(deliveryMethod as DeliveryMethod),
    "Некоректний спосіб доставки."
  );

  assert(isNonEmptyString(paymentMethod), "Вкажи спосіб оплати.");
  assert(
    PAYMENT_METHODS.has(paymentMethod as PaymentMethod),
    "Некоректний спосіб оплати."
  );

  assert(Array.isArray(itemsRaw), "Товари замовлення відсутні.");
  assert(itemsRaw.length > 0, "Кошик порожній.");

  const items = itemsRaw.map(normalizeCartItem);

  return {
    fullName: fullName.trim(),
    phone: phone.trim(),
    email: isNonEmptyString(email) ? email.trim() : undefined,
    city: city.trim(),
    deliveryMethod: deliveryMethod as DeliveryMethod,
    paymentMethod: paymentMethod as PaymentMethod,
    comment: isNonEmptyString(comment) ? comment.trim() : undefined,
    items,
  };
}

export function validateUpdateOrderStatusDto(body: unknown): UpdateOrderStatusDto {
  assert(body && typeof body === "object", "Порожнє тіло запиту.");

  const data = body as Record<string, unknown>;
  const status = data.status;

  assert(isNonEmptyString(status), "Статус не переданий.");
  assert(ORDER_STATUSES.has(status as OrderStatus), "Некоректний статус.");

  return {
    status: status as OrderStatus,
  };
}