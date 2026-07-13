import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Read the latest tips on academic publishing, manuscript preparation, and research impact strategies.",
};

const posts = [
  {
    title: "How to prepare your manuscript for high-impact journals",
    excerpt: "Discover the critical structuring rules, editorial pre-screening check points, and language flow guidelines that help papers clear review.",
    date: "July 08, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    category: "Editorial Solutions",
  },
  {
    title: "The future of academic conferences: hybrid event logistics",
    excerpt: "Exploring the software integrations, registration setups, and live stream options that deliver premium engagement for both on-site and remote attendees.",
    date: "June 24, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    category: "Conference Support",
  },
  {
    title: "Understanding citation impact: from h-index to SDG mapping",
    excerpt: "How mapping your research portfolio outputs against the UN Sustainable Development Goals helps secure institutional funding and broaden visibility.",
    date: "May 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    category: "Visibility & Impact",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-20">
        <Container>
          <Reveal>
            <SectionLabel text="Insights & Publications" />
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink font-medium max-w-3xl leading-[1.1] text-balance mb-6">
              Insights on research impact and academic publishing.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-ink-soft max-w-xl leading-relaxed">
              Curated perspectives from our editors, software developers, and event planners to help you optimize your academic workflow.
            </p>
          </Reveal>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={i * 80} className="h-full">
                <article className="group flex flex-col justify-between h-full bg-paper border border-line rounded-3xl p-6 hover:border-moss-300 hover:shadow-sm transition-all duration-300">
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 border border-line/45">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                    </div>
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-brand-teal font-semibold uppercase tracking-wider mb-3">
                      <span>{post.category}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                      <span className="text-ink-soft/60 font-medium normal-case tracking-normal">{post.readTime}</span>
                    </div>
                    {/* Header */}
                    <h3 className="font-display text-xl text-ink font-semibold group-hover:text-brand-teal transition-colors leading-snug mb-3">
                      {post.title}
                    </h3>
                    {/* Excerpt */}
                    <p className="text-xs md:text-sm text-ink-soft leading-relaxed mb-6 font-medium">
                      {post.excerpt}
                    </p>
                  </div>
                  {/* Footer link */}
                  <div className="flex items-center justify-between mt-auto border-t border-line/40 pt-4">
                    <span className="text-xs text-ink-soft/50">{post.date}</span>
                    <span className="text-xs font-semibold text-brand-teal group-hover:translate-x-1 transition-transform">
                      Read Article →
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Looking for guidance tailored to your manuscript?"
        subtitle="Our editors can review your draft structure and suggest a roadmap."
      />
    </>
  );
}
