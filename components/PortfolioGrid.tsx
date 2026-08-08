"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { PortfolioCategory, PortfolioImage } from "@/types";
import { PORTFOLIO_CATEGORIES } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Lightbox } from "./Lightbox";

interface PortfolioGridProps {
  images: PortfolioImage[];
  showFilters?: boolean;
}

export function PortfolioGrid({ images, showFilters = true }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | "All">("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? images
        : images.filter((img) => img.category === activeCategory),
    [images, activeCategory]
  );

  return (
    <div>
      {showFilters && (
        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3" role="group" aria-label="Filter by category">
          {(["All", ...PORTFOLIO_CATEGORIES] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                "font-sans text-xs uppercase tracking-widest2 transition-colors duration-300",
                activeCategory === category ? "text-gold" : "text-stone hover:text-ink"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {filtered.map((image, index) => (
          <m.button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (index % 6) * 0.05 }}
            className={cn(
              "group relative block w-full overflow-hidden bg-charcoal",
              index % 5 === 0 ? "row-span-2 aspect-[4/5]" : "aspect-square"
            )}
            aria-label={`Open ${image.alt} in fullscreen viewer`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
          </m.button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-sans text-stone">
          No photographs in this category yet.
        </p>
      )}

      <Lightbox
        images={filtered}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </div>
  );
}
