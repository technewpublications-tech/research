import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import { FileDown, Calendar, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Document Templates",
  description: "Download academic cover letters, event budget spreadsheets, and peer-review response templates.",
};

const templates = [
  {
    title: "Journal Cover Letter Template",
    description: "A standard, professionally structured cover letter template to introduce your manuscript to journal editors.",
    format: "Word & LaTeX",
    size: "180 KB",
    icon: FileDown,
  },
  {
    title: "Conference Budget Spreadsheet",
    description: "An organized sheet detailing expense categories, registration fees, sponsor targets, and attendee tracking.",
    format: "Excel & Sheets",
    size: "420 KB",
    icon: Calendar,
  },
  {
    title: "Peer Review Response Letter Template",
    description: "A table-structured markdown file designed to help you reply point-by-point to journal reviewer comments clearly.",
    format: "Markdown & Docx",
    size: "110 KB",
    icon: MessageSquare,
  },
];

export default function TemplatesPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-20">
        <Container>
          <Reveal>
            <SectionLabel text="Document Templates" />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink font-medium max-w-3xl leading-[1.1] text-balance mb-6">
              Ready-to-use templates for researchers.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-ink-soft max-w-xl leading-relaxed">
              Skip formatting from scratch. Download these structures to present your data and correspondence according to editor expectations.
            </p>
          </Reveal>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {templates.map((template, i) => (
              <Reveal key={template.title} delay={i * 80} className="h-full">
                <div className="group flex flex-col justify-between h-full bg-paper border border-line rounded-3xl p-6 hover:border-moss-300 hover:shadow-sm transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-moss-50 flex items-center justify-center text-moss-700 mb-6 group-hover:bg-moss-100 transition-colors">
                      <template.icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl text-ink font-semibold leading-snug mb-3">
                      {template.title}
                    </h3>
                    <p className="text-xs md:text-sm text-ink-soft leading-relaxed mb-6 font-medium">
                      {template.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-line/45 pt-4 mt-auto">
                    <span className="text-xs text-ink-soft/50 font-medium">
                      {template.format} • {template.size}
                    </span>
                    <button className="text-xs font-semibold text-brand-teal hover:underline">
                      Download File →
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Looking for bespoke tools for your research?"
        subtitle="We can construct reliability trackers or customized databases tailored for your lab targets."
      />
    </>
  );
}
