import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { PORTFOLIO_IMAGES } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse wedding, portrait, lifestyle, family and editorial photography by OG Lens Studios, Lagos, Nigeria.",
};

export default function PortfolioPage() {
  return (
    <div className="container-editorial pb-24 pt-32 md:pb-32 md:pt-40">
      <SectionHeading
        eyebrow="Portfolio"
        title="A record of the moments we've kept"
        description="Filter by category, or browse everything. Click any photograph to open the fullscreen viewer — use the arrow keys or swipe to move between images."
      />
      <div className="mt-14">
        <PortfolioGrid images={PORTFOLIO_IMAGES} />
      </div>
    </div>
  );
}
