"use client";

import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PortfolioImage } from "@/types";
import { useKeyPress } from "@/hooks/useKeyPress";
import { useSwipe } from "@/hooks/useSwipe";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

interface LightboxProps {
  images: PortfolioImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, activeIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = activeIndex !== null;
  const image = isOpen ? images[activeIndex] : null;

  function goNext() {
    if (activeIndex === null) return;
    onNavigate((activeIndex + 1) % images.length);
  }

  function goPrev() {
    if (activeIndex === null) return;
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }

  useKeyPress(["Escape", "ArrowRight", "ArrowLeft"], (key) => {
    if (!isOpen) return;
    if (key === "Escape") onClose();
    if (key === "ArrowRight") goNext();
    if (key === "ArrowLeft") goPrev();
  });

  useLockBodyScroll(isOpen);

  const swipeHandlers = useSwipe({ onSwipeLeft: goNext, onSwipeRight: goPrev });

  return (
    <AnimatePresence>
      {isOpen && image && (
        <m.div
          role="dialog"
          aria-modal="true"
          aria-label={`${image.category} photograph viewer`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/97 px-4"
          {...swipeHandlers}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close viewer"
            className="absolute right-5 top-5 z-10 text-ivory/80 transition-colors hover:text-gold"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photograph"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 p-3 text-ivory/70 transition-colors hover:text-gold md:left-6"
          >
            <ChevronLeft size={32} />
          </button>

          <m.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
          >
            <div className="relative max-h-[75vh] w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mx-auto max-h-[75vh] w-auto object-contain"
                priority
              />
            </div>
            <p className="mt-4 font-sans text-xs uppercase tracking-widest2 text-ivory/60">
              {image.category} — {activeIndex! + 1} / {images.length}
            </p>
          </m.div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next photograph"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 p-3 text-ivory/70 transition-colors hover:text-gold md:right-6"
          >
            <ChevronRight size={32} />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
