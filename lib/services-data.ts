import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "wedding",
    title: "Wedding",
    description:
      "Full-day coverage that holds on to the quiet moments as carefully as the big ones.",
    details: [
      "Engagement and pre-wedding session",
      "Full ceremony and reception coverage",
      "Second shooter available for larger parties",
      "Private online gallery for family and friends",
    ],
    icon: "wedding",
  },
  {
    id: "portrait",
    title: "Portrait",
    description:
      "Studio or on-location portraits built around how you actually want to be seen.",
    details: [
      "Personal and professional headshots",
      "Studio lighting or natural light on location",
      "Wardrobe and posing guidance included",
      "Retouched final selects",
    ],
    icon: "portrait",
  },
  {
    id: "family",
    title: "Family",
    description: "Relaxed sessions that let real relationships show on camera.",
    details: [
      "In-home, outdoor, or studio settings",
      "Sessions for newborns through multi-generational families",
      "Guidance on outfit coordination",
      "Printable and digital delivery",
    ],
    icon: "family",
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    description: "Documentary-style storytelling for everyday, unscripted moments.",
    details: [
      "A day-in-the-life or event documentation",
      "Candid, low-direction shooting style",
      "Fast-turnaround previews",
      "Full-resolution digital delivery",
    ],
    icon: "lifestyle",
  },
  {
    id: "editorial",
    title: "Editorial",
    description: "Concept-driven imagery for magazines, lookbooks, and campaigns.",
    details: [
      "Creative direction and mood boarding",
      "Studio or location production",
      "Styling and hair/makeup coordination on request",
      "High-resolution files licensed for publication",
    ],
    icon: "editorial",
  },
  {
    id: "graduation",
    title: "Graduation",
    description: "Portraits that mark the milestone, on campus or in studio.",
    details: [
      "Cap-and-gown and formal portrait sets",
      "Campus location scouting",
      "Group sessions for classmates and family",
      "Same-week digital previews",
    ],
    icon: "graduation",
  },
  {
    id: "brand",
    title: "Brand Photography",
    description: "Visual assets that give a business a consistent, considered face.",
    details: [
      "Product, team, and workspace photography",
      "Content sets sized for web and social",
      "Consistent visual direction across shoots",
      "Usage-ready files, organized and delivered fast",
    ],
    icon: "brand",
  },
];
