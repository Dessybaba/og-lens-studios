"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

/**
 * Wraps the app with LazyMotion so Framer Motion's animation engine is
 * loaded once and code-split, instead of bundled into every component.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
