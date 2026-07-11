import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern use of the Researcher Connect Pro website and services.",
};

const sections = [
  {
    title: "Using this website",
    body: "This site is provided to give you information about our services and a way to get in touch. You're welcome to browse and use it for its intended purpose. Please don't attempt to disrupt, scrape, or misuse the site or its content.",
  },
  {
    title: "Our services",
    body: "Details on this website describe our services in general terms. The exact scope, timeline, and cost of any specific project will be confirmed directly with you before work begins, typically in a separate agreement.",
  },
  {
    title: "No guaranteed outcomes",
    body: "For services that depend on a third party's decision — journal acceptance, visa approval, patent grant — we cannot guarantee the outcome. We can guarantee the quality and thoroughness of the work we do on your behalf.",
  },
  {
    title: "Intellectual property",
    body: "Your research, data, and intellectual property remain yours. Content on this website — text, design, and images — belongs to Researcher Connect Pro and should not be reproduced without permission.",
  },
  {
    title: "Confidentiality",
    body: "Any material you share with us as part of a project is kept confidential and used only for the purpose of delivering that project, in line with our Privacy Policy.",
  },
  {
    title: "Limitation of liability",
    body: "We work carefully and professionally, but we are not liable for outcomes that depend on decisions made by third parties, such as journals, visa authorities, or patent offices.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms occasionally to reflect changes in how we operate. The date below shows when they were last revised.",
  },
];

export default function TermsPage() {
  return (
    <section className="pt-16 md:pt-24 pb-24 md:pb-28">
      <Container className="max-w-3xl !mx-auto">
        <Reveal>
          <SectionLabel text="Legal" />
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-4xl sm:text-5xl text-balance mb-4">Terms of Use</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-ink-soft mb-14">Last updated: January 2026</p>
        </Reveal>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div>
                <h2 className="font-display text-2xl mb-3">{s.title}</h2>
                <p className="text-ink-soft leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="pt-6 border-t border-line">
              <p className="text-ink-soft leading-relaxed">
                Questions about these terms? Reach us at{" "}
                <a href={`mailto:${site.email}`} className="text-moss-700 underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
