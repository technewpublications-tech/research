import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import { FileText, Compass, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides & Handbooks",
  description: "Download checklists and handbooks covering publication, conference logistics, and research outreach.",
};

const guides = [
  {
    title: "Manuscript Pre-submission Checklist",
    description: "A complete formatting and editorial checklist to review before submitting your manuscript to high-impact journals.",
    format: "PDF Checklist",
    size: "1.2 MB",
    icon: FileText,
  },
  {
    title: "Conference Organizing Playbook",
    description: "Step-by-step guidance on theme development, abstract reviews, attendee support, and on-site logistics.",
    format: "Digital Guide",
    size: "45 pages",
    icon: Compass,
  },
  {
    title: "Academic Profiling & SEO Guide",
    description: "Learn how to optimize your ResearchGate, Google Scholar, and ORCID profiles to increase paper citations.",
    format: "PDF Guide",
    size: "2.4 MB",
    icon: BookOpen,
  },
];

export default function GuidesPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-20">
        <Container>
          <Reveal>
            <SectionLabel text="Guides & Handbooks" />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink font-medium max-w-3xl leading-[1.1] text-balance mb-6">
              Practical guides for every stage of your research journey.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-ink-soft max-w-xl leading-relaxed">
              Actionable checklists and strategies created by academic coordinators and editors to streamline your publishing and organization tasks.
            </p>
          </Reveal>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {guides.map((guide, i) => (
              <Reveal key={guide.title} delay={i * 80} className="h-full">
                <div className="group flex flex-col justify-between h-full bg-paper border border-line rounded-3xl p-6 hover:border-moss-300 hover:shadow-sm transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-moss-50 flex items-center justify-center text-moss-700 mb-6 group-hover:bg-moss-100 transition-colors">
                      <guide.icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl text-ink font-semibold leading-snug mb-3">
                      {guide.title}
                    </h3>
                    <p className="text-xs md:text-sm text-ink-soft leading-relaxed mb-6 font-medium">
                      {guide.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-line/45 pt-4 mt-auto">
                    <span className="text-xs text-ink-soft/50 font-medium">
                      {guide.format} • {guide.size}
                    </span>
                    <button className="text-xs font-semibold text-brand-teal hover:underline">
                      Access Now →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need a custom timeline for your department?"
        subtitle="We can design dedicated project trackers and training checklists for your lab."
      />
    </>
  );
}
