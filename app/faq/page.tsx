import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with Researcher Connect Pro.",
};

const generalFaqs = [
  {
    q: "What exactly does Researcher Connect Pro do?",
    a: "We handle the research-adjacent work that takes time away from the research itself — editorial solutions, conference management, visibility & impact, manuscript preparation, author support, and project planning.",
  },
  {
    q: "Do I need to be affiliated with a university to work with you?",
    a: "No. We work with individual researchers, university departments, R&D teams in industry, and independent professionals. If your work involves research, there's usually a way we can help.",
  },
  {
    q: "How much does a typical service cost?",
    a: "It depends on the scope — a single manuscript edit is very different from full conference management. We'll give you a clear, itemised quote after understanding what you need, with no obligation to proceed.",
  },
  {
    q: "How long does a project usually take?",
    a: "Timelines vary by service. Manuscript polishing might take a week; a full EB-1 portfolio can take several months. We'll always give you a realistic estimate up front, not an optimistic one.",
  },
  {
    q: "Can I work with you on more than one service at a time?",
    a: "Yes — many clients start with one service and bring us in for another later. You'll keep the same point of contact where possible, so we're not starting from zero each time.",
  },
  {
    q: "Is my research data and information kept confidential?",
    a: "Yes. Everything you share with us, including unpublished research, is treated as confidential. See our Privacy Policy for the full details.",
  },
  {
    q: "Do you only work with clients in India?",
    a: "No — we support researchers and institutions internationally. Time zones are rarely a problem; we're used to working async with clients abroad.",
  },
  {
    q: "How do I get started?",
    a: "Send us a message through the contact page with a short description of what you need. We'll reply within a business day to set up a proper conversation.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-16">
        <Container>
          <Reveal>
            <SectionLabel text="FAQ" />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl max-w-2xl text-balance">
              Questions people usually ask.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed">
              Can't find what you're looking for? Reach out directly — we're happy to answer
              anything specific to your project.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-28">
        <Container className="max-w-3xl !mx-auto">
          <Reveal>
            <Accordion items={generalFaqs} />
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Still have a question?"
        subtitle="Send us a message and we'll get back to you within one business day."
      />
    </>
  );
}
