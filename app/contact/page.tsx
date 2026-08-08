import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ContactCard } from "@/components/ContactCard";
import { CONTACT_CHANNELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with OG Lens Studios in Lagos, Nigeria — by phone, WhatsApp, Instagram or email.",
};

export default function ContactPage() {
  return (
    <div className="container-editorial pb-24 pt-32 md:pb-32 md:pt-40">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about your story"
        description="Share a few details about your session and we'll get back to you within one business day."
      />

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-hairline border-t border-hairline">
            {CONTACT_CHANNELS.map((channel) => (
              <ContactCard key={channel.label} channel={channel} />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
