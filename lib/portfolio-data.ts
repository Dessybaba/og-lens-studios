import { PortfolioCategory, PortfolioImage } from "@/types";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Wedding",
  "Portrait",
  "Lifestyle",
  "Family",
  "Editorial",
];

/**
 * Portfolio dataset. Each entry maps to a file in /public/images/portfolio.
 * To add a real photo: drop the file in that folder and add/update an
 * entry here with the correct category, alt text, and dimensions.
 */
export const PORTFOLIO_IMAGES: PortfolioImage[] = [
  ...buildSet("Wedding", "wedding"),
  ...buildSet("Portrait", "portrait"),
  ...buildSet("Lifestyle", "lifestyle"),
  ...buildSet("Family", "family"),
  ...buildSet("Editorial", "editorial"),
];

function buildSet(category: PortfolioCategory, slug: string): PortfolioImage[] {
  return [1, 2, 3, 4].map((i) => {
    const portrait = i % 2 === 0;
    return {
      id: `${slug}-${String(i).padStart(2, "0")}`,
      category,
      src: `/images/portfolio/${slug}-${String(i).padStart(2, "0")}.svg`,
      alt: `${category} photography by OG Lens Studios, image ${i}`,
      width: portrait ? 1200 : 1600,
      height: portrait ? 1500 : 1067,
    };
  });
}
