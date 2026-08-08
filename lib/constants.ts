import { ContactChannel, NavLink } from "@/types";

export const SITE = {
  name: "OG Lens Studios",
  tagline: "Beauty Unveiled Through The Lens",
  description:
    "OG Lens Studios is a luxury editorial photography studio based in Lagos, Nigeria, specializing in wedding, portrait, lifestyle, family and editorial photography.",
  url: "https://oglensstudios.com",
  locale: "en_NG",
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
    icon: "phone",
  },
  {
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: "https://wa.me/2348000000000",
    icon: "whatsapp",
  },
  {
    label: "Instagram",
    value: "@oglensstudios",
    href: "https://instagram.com/oglensstudios",
    icon: "instagram",
  },
  {
    label: "Email",
    value: "hello@oglensstudios.com",
    href: "mailto:hello@oglensstudios.com",
    icon: "email",
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    href: "https://maps.google.com/?q=Lagos,Nigeria",
    icon: "location",
  },
];
