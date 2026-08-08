import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { PORTFOLIO_IMAGES } from "@/lib/portfolio-data";
import { SERVICES } from "@/lib/services-data";

const FEATURED = PORTFOLIO_IMAGES.filter((img) => [0, 5, 10, 15, 2, 8].includes(
  PORTFOLIO_IMAGES.indexOf(img)
));

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="A recent frame from every story"
            description="A glimpse across weddings, portraits, lifestyle, family and editorial work. The full archive lives in the portfolio."
          />
        </Reveal>
        <div className="mt-14">
          <PortfolioGrid images={FEATURED} showFilters={false} />
        </div>
        <Reveal delay={0.1} className="mt-12">
          <Link
            href="/portfolio"
            className="inline-block border border-ink px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
          >
            View Full Portfolio
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-hairline bg-paper py-24 md:py-32">
        <div className="container-editorial grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal">
              <Image
                src="/images/about/about-portrait.svg"
                alt="Portrait of the OG Lens Studios team at work"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">The Studio</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
              Photography that pays attention.
            </h2>
            <p className="mt-6 max-w-lg font-sans text-stone">
              OG Lens Studios is a Lagos-based photography studio built around
              one idea: the truest images come from paying close attention.
              We work across wedding, portrait, lifestyle, family and
              editorial photography, always in service of the people and
              stories in front of the lens.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block font-sans text-xs uppercase tracking-widest2 text-gold underline-offset-4 hover:underline"
            >
              Read Our Story
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            title="Seven ways to work with us"
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 4).map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <p className="font-display text-xl text-ink">{service.title}</p>
              <p className="mt-2 font-sans text-sm text-stone">{service.description}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block font-sans text-xs uppercase tracking-widest2 text-gold underline-offset-4 hover:underline"
          >
            See All Services
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-hairline bg-ink py-24 text-center md:py-32">
        <Reveal>
          <div className="container-editorial">
            <p className="eyebrow">Let&apos;s Work Together</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-ivory md:text-5xl">
              Have a date, a brand, or a story in mind?
            </h2>
            <Link
              href="/contact"
              className="mt-10 inline-block border border-ivory px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
            >
              Start a Conversation
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
