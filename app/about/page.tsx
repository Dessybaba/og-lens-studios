import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "OG Lens Studios is a Lagos-based photography studio led with a documentary eye and an editorial hand.",
};

const VALUES = [
  {
    title: "Attention",
    body: "We shoot for the moments that happen when no one is posing — they're usually the ones worth keeping.",
  },
  {
    title: "Craft",
    body: "Every gallery is shot with intention and finished by hand, frame by frame, not filtered in bulk.",
  },
  {
    title: "Trust",
    body: "A camera in the room changes it. We work quietly, so people forget it's there and let their guard down.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="container-editorial grid gap-16 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="eyebrow">About The Studio</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-ink md:text-6xl">
            Beauty unveiled through the lens.
          </h1>
          <p className="mt-6 max-w-lg font-sans text-stone">
            OG Lens Studios began in Lagos with a simple conviction: a
            photograph should feel like the moment it was taken in, not like
            a performance for the camera. That conviction still shapes how we
            shoot every wedding, portrait, and campaign today.
          </p>
          <p className="mt-4 max-w-lg font-sans text-stone">
            We work across genres — wedding, portrait, lifestyle, family and
            editorial — but the approach stays the same: look closely, wait
            for the real thing, and protect it in the edit.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block border border-ink px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
          >
            Get In Touch
          </Link>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal">
            <Image
              src="/images/about/about-portrait.svg"
              alt="OG Lens Studios photographer at work in Lagos"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="container-editorial mt-24 border-t border-hairline pt-24 md:mt-32 md:pt-32">
        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal">
            <Image
              src="/images/about/about-detail.svg"
              alt="Behind the scenes at an OG Lens Studios shoot"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="container-editorial mt-24 md:mt-32">
        <Reveal>
          <p className="eyebrow">What We Believe</p>
        </Reveal>
        <div className="mt-10 grid gap-12 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.1}>
              <h3 className="font-display text-2xl text-ink">{value.title}</h3>
              <p className="mt-3 font-sans text-sm text-stone">{value.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
