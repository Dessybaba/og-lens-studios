import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wedding, portrait, family, lifestyle, editorial, graduation and brand photography services from OG Lens Studios, Lagos.",
};

export default function ServicesPage() {
  return (
    <div className="container-editorial pb-24 pt-32 md:pb-32 md:pt-40">
      <SectionHeading
        eyebrow="Services"
        title="Seven ways to work with us"
        description="Every session is planned around the people in it. Reach out and we'll help you decide what fits — no pricing is fixed until we understand the brief."
      />

      <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.id} delay={(i % 3) * 0.08}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-24 border-t border-hairline pt-16 text-center">
        <h2 className="font-display text-3xl text-ink md:text-4xl">
          Not sure which service fits?
        </h2>
        <p className="mx-auto mt-4 max-w-md font-sans text-stone">
          Tell us about the occasion and we&apos;ll recommend the right
          approach.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block border border-ink px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
        >
          Ask Us
        </Link>
      </Reveal>
    </div>
  );
}
