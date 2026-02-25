"use client";

import type { CartItem } from "@/types/cart";

const STORAGE_KEY = "mambo_cart_v1";

function isBrowser() {
  return typeof window !== "undefined";
}

export function getCart(): CartItem[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("mambo-cart-updated"));
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const existing = cart.find((x) => x.variantId === item.variantId);

  if (existing) {
    existing.qty = Math.min((existing.qty ?? 1) + item.qty, existing.maxQty ?? 99);
  } else {
    cart.push(item);
  }

  saveCart(cart);
}

export function updateCartQty(variantId: string, qty: number) {
  const cart = getCart();
  const item = cart.find((x) => x.variantId === variantId);
  if (!item) return;

  item.qty = Math.max(1, Math.min(qty, item.maxQty ?? 99));
  saveCart(cart);
}

export function removeFromCart(variantId: string) {
  const cart = getCart().filter((x) => x.variantId !== variantId);
  saveCart(cart);
}

export function clearCart() {
  saveCart([]);
}

export function cartCount(items = getCart()) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function cartSubtotal(items = getCart()) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}