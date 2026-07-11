import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Researcher Connect Pro, our mission, and the team supporting your research journey.",
};

const team = [
  {
    name: "Lead Academic Editor",
    role: "Editorial Team Lead",
    bio: "PhD in Bioinformatics, former journal editor, and passionate advocate for academic publishing clarity.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Event Logistics Specialist",
    role: "Events Operations Lead",
    bio: "Over 10 years of experience coordinating large-scale international scientific symposia and academic summits.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    name: "Lead Software Architect",
    role: "Technology Solutions Lead",
    bio: "Full-stack engineer specializing in research data management systems, SDG tracking dashboards, and user experiences.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-16">
        <Container>
          <Reveal>
            <SectionLabel text="About Researcher Connect Pro" />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink font-medium leading-[1.1] text-balance">
                  Who we are. Why we support research.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl font-medium">
                  We believe that researchers should spend their time making breakthroughs, not getting bogged down in formatting rules, event logistics, or digital dashboards.
                </p>
                <p className="mt-4 text-base text-ink-soft/80 leading-relaxed max-w-xl">
                  Researcher Connect Pro was founded to build a dedicated support layer for academia. Our specialists bring together decades of collective experience in journal requirements, technical project organization, and custom developer solutions.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <Reveal delay={240}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-line shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="The Researcher Connect Pro team collaborating in a modern workspace"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Mission */}
      <section className="py-20 md:py-24 bg-paper-dim/40 border-t border-b border-line">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <Reveal>
              <h3 className="font-display text-2xl text-ink mb-3 font-semibold">Integrity First</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                We handle the administrative, formatting, and logistical details but keep your research scope and scientific message completely untouched.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="font-display text-2xl text-ink mb-3 font-semibold font-body">Tailored Methods</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                No cookie-cutter outlines or generic templates. We build planning structures, stylesheets, and dashboards configured specifically for your project targets.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <h3 className="font-display text-2xl text-ink mb-3 font-semibold">Transparent Schedules</h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                We set real timelines based on actual scope requirements. If a target publication deadline is unrealistic, we tell you immediately.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="text-center mb-16">
            <SectionLabel text="Our Team" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink font-medium">
              Academic backgrounds. Professional execution.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80} className="h-full">
                <div className="bg-paper border border-line rounded-3xl p-6 flex flex-col gap-6 h-full items-center text-center hover:border-moss-300 transition-all duration-300">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border border-line/60">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-ink font-semibold mb-1">{member.name}</h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-moss-600 mb-4">{member.role}</p>
                    <p className="text-xs md:text-sm text-ink-soft leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to collaborate with our team?"
        subtitle="Schedule a conversation to talk through your research goals and plan a schedule."
      />
    </>
  );
}
