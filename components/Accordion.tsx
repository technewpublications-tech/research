"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-t border-b border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg md:text-xl text-ink">{item.q}</span>
              <Plus
                size={20}
                className={`shrink-0 text-moss-600 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="text-ink-soft leading-relaxed max-w-[65ch]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
