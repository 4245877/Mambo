import type { CartItem } from "@/types/cart";

const CART_KEY = "mambo-cart";

function emitCartUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("mambo-cart-updated"));
  }
}

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  emitCartUpdated();
}

export function addToCart(item: CartItem) {
  const items = getCart();
  const index = items.findIndex((x) => x.variantId === item.variantId);

  if (index >= 0) {
    const currentQty = items[index].qty ?? 1;
    const addedQty = item.qty ?? 1;
    const maxQty = items[index].maxQty ?? item.maxQty ?? 999;

    items[index].qty = Math.min(currentQty + addedQty, maxQty);
  } else {
    const maxQty = item.maxQty ?? 999;
    items.push({
      ...item,
      qty: Math.min(Math.max(1, item.qty ?? 1), maxQty),
    });
  }

  saveCart(items);
}

export function removeFromCart(variantId: string) {
  const items = getCart().filter((item) => item.variantId !== variantId);
  saveCart(items);
}

export function updateCartQty(variantId: string, qty: number) {
  const items = getCart().map((item) => {
    if (item.variantId !== variantId) return item;

    const maxQty = item.maxQty ?? 999;
    return {
      ...item,
      qty: Math.min(Math.max(1, qty), maxQty),
    };
  });

  saveCart(items);
}

export function clearCart() {
  saveCart([]);
}

export function cartSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}