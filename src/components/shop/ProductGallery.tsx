"use client";

import { useState } from "react";

type Props = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: Props) {
  const safeImages = images.length ? images : ["/images/placeholders/no-image.jpg"];
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
        <div className="aspect-[4/5]">
          <img
            src={safeImages[active]}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {safeImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {safeImages.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              className={`overflow-hidden rounded-xl border ${
                active === index ? "border-black" : "border-gray-200"
              }`}
            >
              <div className="aspect-square bg-gray-100">
                <img src={src} alt={`${name} ${index + 1}`} className="h-full w-full object-cover" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}