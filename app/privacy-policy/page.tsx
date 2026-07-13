import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Research Connect Pro collects, uses, and protects your information.",
};

const sections = [
  {
    title: "What we collect",
    body: "When you contact us, request a service, or fill in a form on this site, we collect basic details like your name, email address, and whatever you choose to tell us about your project. We don't collect more than we need to help you.",
  },
  {
    title: "How we use it",
    body: "We use your information to respond to your enquiry, deliver the service you've asked for, and occasionally to update you on things directly relevant to your project. We do not sell your information to anyone.",
  },
  {
    title: "Your research and documents",
    body: "Manuscripts, patent disclosures, and any other material you share with us for a project are treated as confidential. Access is limited to the team members working directly on your case.",
  },
  {
    title: "Cookies and analytics",
    body: "This site may use basic, privacy-respecting analytics to understand how visitors use it — for example, which pages are most useful. This helps us improve the site; it doesn't identify you personally.",
  },
  {
    title: "Third parties",
    body: "We use trusted third-party tools (like email delivery services) to run parts of this website and our operations. These providers only see what's necessary to perform their function and are not permitted to use your data for anything else.",
  },
  {
    title: "Your rights",
    body: "You can ask us at any time what information we hold about you, request a correction, or ask us to delete it, subject to any legal or contractual obligations we may have to retain certain records.",
  },
  {
    title: "Changes to this policy",
    body: "If this policy changes in a meaningful way, we'll update this page and note the date below.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-16 md:pt-24 pb-24 md:pb-28">
      <Container className="max-w-3xl !mx-auto">
        <Reveal>
          <SectionLabel text="Legal" />
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-4xl sm:text-5xl text-balance mb-4">Privacy Policy</h1>
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
                Questions about this policy? Reach us at{" "}
                <a href={`mailto:${site.email}`} className="text-brand-teal underline underline-offset-4">
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
