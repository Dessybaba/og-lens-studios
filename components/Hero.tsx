"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <Image
        src="/images/hero/hero-01.svg"
        alt="Editorial photography by OG Lens Studios"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <div className="container-editorial relative z-10 pb-20 md:pb-28">
        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow"
        >
          Lagos, Nigeria
        </m.p>

        <m.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl font-display text-6xl leading-[1.05] text-ivory md:text-8xl"
        >
          {SITE.tagline}
        </m.h1>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/portfolio"
            className="border border-ivory px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-ivory hover:text-ink"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-ivory/80 transition-colors duration-300 hover:text-gold"
          >
            Book a Session
          </Link>
        </m.div>
      </div>
    </section>
  );
}
