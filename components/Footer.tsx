import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CONTACT_CHANNELS, NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const instagram = CONTACT_CHANNELS.find((c) => c.icon === "instagram");
  const whatsapp = CONTACT_CHANNELS.find((c) => c.icon === "whatsapp");
  const year = new Date().getFullYear();

  return (
    <footer className="hairline bg-ink text-ivory">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-widest2">OG LENS</p>
          <p className="mt-3 max-w-xs font-sans text-sm text-ivory/60">
            {SITE.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <p className="font-sans text-sm text-ivory/70">Lagos, Nigeria</p>
          <div className="mt-4 flex items-center gap-4">
            {instagram && (
              <a
                href={instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OG Lens Studios on Instagram"
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <FaInstagram size={20} />
              </a>
            )}
            {whatsapp && (
              <a
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message OG Lens Studios on WhatsApp"
                className="text-ivory/70 transition-colors hover:text-gold"
              >
                <FaWhatsapp size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6">
        <p className="container-editorial font-sans text-xs text-ivory/40">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
