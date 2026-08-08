"use client";

import { useEffect } from "react";

/**
 * Calls `handler` whenever any key in `keys` is pressed.
 * Used by the portfolio lightbox for arrow-key and escape navigation.
 */
export function useKeyPress(keys: string[], handler: (key: string) => void) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (keys.includes(event.key)) {
        handler(event.key);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [keys, handler]);
}
