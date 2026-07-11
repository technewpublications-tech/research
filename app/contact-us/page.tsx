import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Researcher Connect Pro — we typically reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-16">
        <Container>
          <Reveal>
            <SectionLabel text="Contact" />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl max-w-3xl text-balance">
              Tell us what you're working on.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
              Whether it's a manuscript, a patent, a conference, or something that doesn't fit
              neatly into a category — start here. A real person reads every message.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14">
            <Reveal>
              <div className="space-y-10">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?auto=format&fit=crop&w=1200&q=80"
                    alt="The Researcher Connect Pro team collaborating in a modern office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="space-y-6">
                  <ContactRow icon={Mail} label="Email us" value={site.email} href={`mailto:${site.email}`} />
                  <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with our team" href={site.whatsapp} />
                  <ContactRow icon={MapPin} label="Based in" value={site.address} />
                  <ContactRow icon={Clock} label="Response time" value="Within one business day" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-paper-dim/60 border border-line rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl mb-2">Send a message</h2>
                <p className="text-ink-soft mb-8">
                  Fill in the form and we'll get back to you shortly.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="p-2.5 rounded-full bg-moss-50 text-moss-700">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.12em] text-ink-soft/60 mb-1">{label}</p>
        <p className="text-ink font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block hover:opacity-70 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
}
