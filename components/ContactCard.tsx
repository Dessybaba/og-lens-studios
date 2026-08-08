import { Phone, Instagram, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ContactChannel } from "@/types";

const ICONS: Record<ContactChannel["icon"], typeof Phone> = {
  phone: Phone,
  whatsapp: FaWhatsapp as unknown as typeof Phone,
  instagram: Instagram,
  email: Mail,
  location: MapPin,
};

export function ContactCard({ channel }: { channel: ContactChannel }) {
  const Icon = ICONS[channel.icon];
  const external = channel.href.startsWith("http");

  return (
    <a
      href={channel.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="hairline group flex items-center gap-5 py-6 transition-colors duration-300 hover:border-gold"
    >
      <Icon size={22} strokeWidth={1.25} className="shrink-0 text-gold" />
      <span>
        <span className="block font-sans text-xs uppercase tracking-widest2 text-stone">
          {channel.label}
        </span>
        <span className="mt-1 block font-display text-xl text-ink group-hover:text-gold">
          {channel.value}
        </span>
      </span>
    </a>
  );
}
