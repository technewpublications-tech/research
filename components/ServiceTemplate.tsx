import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";
import Button from "./Button";
import SectionLabel from "./SectionLabel";
import Accordion from "./Accordion";
import CTASection from "./CTASection";
import type { Service } from "@/data/site";

export default function ServiceTemplate({ service }: { service: Service }) {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-16 md:pb-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal mb-6">
              {service.shortTitle}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-end">
            <Reveal delay={80}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
                {service.tagline}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg text-ink-soft leading-relaxed">{service.summary}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Reveal>
        <Container>
          <div className="relative aspect-[16/7] rounded-2xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Container>
      </Reveal>

      {/* What's included */}
      <section className="py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14">
            <Reveal>
              <SectionLabel number="01" text="What's included" />
              <h2 className="font-display text-3xl md:text-4xl text-balance">
                Here's exactly what you get.
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {service.points.map((point, i) => (
                <Reveal key={point} delay={i * 60}>
                  <div className="flex gap-3">
                    <CheckCircle2 size={20} className="text-brand-teal shrink-0 mt-0.5" />
                    <p className="text-ink-soft leading-relaxed">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 md:py-28 bg-paper-dim/50">
        <Container>
          <Reveal>
            <SectionLabel number="02" text="How it works" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-3xl md:text-4xl max-w-xl text-balance mb-14">
              A clear path from first call to finished work.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div className="flex gap-6">
                  <span className="numeral text-2xl shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl mb-2">{step.title}</h3>
                    <p className="text-ink-soft leading-relaxed max-w-[48ch]">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-24 md:py-28">
          <Container className="max-w-3xl !mx-auto">
            <Reveal>
              <SectionLabel number="03" text="Common questions" />
            </Reveal>
            <Reveal delay={80}>
              <Accordion items={service.faqs} />
            </Reveal>
          </Container>
        </section>
      )}

      <CTASection
        title={`Ready to get started with ${service.shortTitle.toLowerCase()}?`}
        subtitle="Send us a few details about your project and we'll reply within one business day."
      />
    </>
  );
}
