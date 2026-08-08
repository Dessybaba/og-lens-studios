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
    value: "09033097065",
    href: "tel:+2349033097065",
    icon: "phone",
  },
  {
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: "https://wa.me/2349033097065",
    icon: "whatsapp",
  },
  {
    label: "Instagram",
    value: "@iamoluwafemi0",
    href: "https://instagram.com/iamoluwafemi0",
    icon: "instagram",
  },
  {
    label: "Email",
    value: "gbengaoluwafemi001@gmail.com",
    href: "mailto:gbengaoluwafemi001@gmail.com",
    icon: "email",
  },
  {
    label: "Location",
    value: "Lagos, Nigeria",
    href: "https://maps.google.com/?q=Lagos,Nigeria",
    icon: "location",
  },
];