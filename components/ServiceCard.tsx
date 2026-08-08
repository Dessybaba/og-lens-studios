import { Camera, Users, Heart, Briefcase, Aperture, GraduationCap, Building2 } from "lucide-react";
import { Service } from "@/types";

const ICONS: Record<Service["icon"], typeof Camera> = {
  wedding: Heart,
  portrait: Camera,
  family: Users,
  lifestyle: Aperture,
  editorial: Briefcase,
  graduation: GraduationCap,
  brand: Building2,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];

  return (
    <div className="hairline group h-full pt-8 transition-colors duration-500 hover:border-gold">
      <Icon size={26} strokeWidth={1.25} className="text-gold" />
      <h3 className="mt-6 font-display text-2xl text-ink">{service.title}</h3>
      <p className="mt-3 font-sans text-sm text-stone">{service.description}</p>
      <ul className="mt-6 space-y-2">
        {service.details.map((detail) => (
          <li key={detail} className="flex gap-2 font-sans text-sm text-ink/70">
            <span className="text-gold">—</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
