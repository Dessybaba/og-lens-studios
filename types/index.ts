/**
 * Shared type definitions for OG Lens Studios.
 */

export type PortfolioCategory =
  | "Wedding"
  | "Portrait"
  | "Lifestyle"
  | "Family"
  | "Editorial";

export interface PortfolioImage {
  /** Unique, stable identifier used for keys and deep-linking. */
  id: string;
  /** Category the image belongs to; drives the filter UI. */
  category: PortfolioCategory;
  /** Path to the image inside /public. */
  src: string;
  /** Human description used as alt text and in the lightbox caption. */
  alt: string;
  /** Intrinsic width/height, kept accurate to avoid layout shift. */
  width: number;
  height: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: "wedding" | "portrait" | "family" | "lifestyle" | "editorial" | "graduation" | "brand";
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: "phone" | "whatsapp" | "instagram" | "email" | "location";
}
