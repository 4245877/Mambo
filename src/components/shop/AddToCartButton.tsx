"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";
import type { CartItem } from "@/types/cart";
import { Button } from "@/components/ui/Button";

type Props = {
  item: CartItem;
  disabled?: boolean;
};

export function AddToCartButton({ item, disabled }: Props) {
  const [added, setAdded] = useState(false);

  return (
    <Button
      disabled={disabled}
      className="w-full"
      onClick={() => {
        addToCart(item);
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
      }}
    >
      {disabled ? "Недоступно" : added ? "Додано ✓" : "Додати в кошик"}
    </Button>
  );
}