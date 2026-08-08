"use client";

import { useRef } from "react";

interface SwipeHandlers {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SWIPE_THRESHOLD = 50;

/**
 * Returns touch event handlers that detect a horizontal swipe gesture.
 * Used by the portfolio lightbox for mobile swipe navigation.
 */
export function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeHandlers) {
  const touchStartX = useRef<number | null>(null);

  function onTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function onTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) onSwipeLeft();
      else onSwipeRight();
    }
    touchStartX.current = null;
  }

  return { onTouchStart, onTouchEnd };
}
