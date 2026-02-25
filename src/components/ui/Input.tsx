import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none",
        "focus:border-gray-500 focus:ring-2 focus:ring-gray-200",
        className
      )}
      {...props}
    />
  );
}