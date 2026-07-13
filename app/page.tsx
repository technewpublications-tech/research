"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Clock,
  Layers,
  GraduationCap,
  Sparkles,
  Target,
  Users,
  ShieldCheck,
  Rocket,
  Calendar,
  Puzzle,
  ChevronLeft,
  ChevronRight,
  Settings,
  PenTool,
  Megaphone,
  FileText,
  Compass,
} from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { services, stats, site } from "@/data/site";

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const recentWorks = [
    {
      category: "Manuscript Support",
      title: "Medicine & Life Sciences",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Conference Management",
      title: "Global Research Summit",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Editorial & Formatting",
      title: "Journal Submission",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Author Support",
      title: "PhD Researcher",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Project Planning",
      title: "Multi-center Study",
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #D0EEF0 0%, transparent 70%)" }}
        />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 z-10">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-teal mb-5">
                  RESEARCH SUPPORT THAT DRIVES IMPACT
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl text-ink text-balance">
                  Research support that goes{" "}
                  <span className="text-brand-teal italic font-medium">further</span> than a to-do
                  list.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 text-base md:text-lg text-ink-soft max-w-xl leading-relaxed">
                  From polishing your manuscript to managing your conference presence, we handle the
                  details so you can focus on what matters most — your research.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="#services" className="!bg-brand-gold hover:!bg-brand-gold-hover !text-white">
                    Explore Services
                  </Button>
                  <Button href="/contact-us" variant="secondary" className="border-ink/20 hover:bg-brand-teal hover:text-white hover:border-brand-teal">
                    Let's Talk
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Premium Image Mockup */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={300} className="w-full">
                <div className="relative aspect-[4/3] md:aspect-[1.2] rounded-[2.5rem] overflow-hidden shadow-2xl border border-line/30">
                  <Image
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80"
                    alt="Premium workspace showing a clean laptop and a cup of coffee representing academic writing support"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Subtle decorative overlay badge */}
                  <div className="absolute bottom-6 right-6 bg-paper/95 backdrop-blur-sm border border-line py-3 px-5 rounded-2xl shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">Research. Elevated.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-t border-b border-line bg-paper/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
            {[
              { ...stats[0], icon: Clock },
              { ...stats[1], icon: Layers },
              { ...stats[2], icon: GraduationCap },
              { ...stats[3], icon: Sparkles },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-moss-50 flex items-center justify-center text-brand-teal shrink-0">
                    <stat.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display text-2xl md:text-3xl text-brand-gold font-semibold leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-ink-soft/80 mt-1 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 md:py-28 scroll-mt-20">
        <Container>
          <Reveal className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-teal mb-4">
              WHAT WE DO
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl max-w-3xl mx-auto text-balance text-ink font-medium leading-[1.15]">
              Six services. One team that speaks the{" "}
              <span className="text-brand-teal italic font-medium">language of research.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Conference Spotlight Section */}
      <section className="py-12 md:py-16 bg-paper-dim/40">
        <Container>
          <div className="bg-moss-900 text-white rounded-[3rem] p-8 md:p-14 lg:p-16 overflow-hidden relative shadow-xl">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, #FFFFFF 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left text */}
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-teal mb-4">
                    CONFERENCE SUPPORT
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-5 text-balance">
                    Bringing a conference to life — seamlessly.
                  </h3>
                  <p className="text-white/75 text-sm md:text-base leading-relaxed mb-8 max-w-[42ch]">
                    We manage the details so your event runs smoothly, from planning to promotion,
                    logistics to follow-ups.
                  </p>
                  <Button
                    href="/services/conference-management"
                    className="!bg-brand-gold hover:!bg-brand-gold-hover !text-white"
                  >
                    See how we can help
                  </Button>
                </Reveal>
              </div>

              {/* Right image + badges */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <Reveal delay={150}>
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                      alt="Grand conference auditorium presenting Research Connect Pro conference software solutions"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Reveal>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "Full event management", icon: Settings },
                    { label: "Speaker & attendee support", icon: Users },
                    { label: "Logistics & coordination", icon: Calendar },
                  ].map((badge, idx) => (
                    <Reveal key={badge.label} delay={200 + idx * 50}>
                      <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-xs md:text-sm font-medium text-white/90 backdrop-blur-sm">
                        <badge.icon size={14} className="text-brand-teal" />
                        {badge.label}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 md:py-28" id="about">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-teal mb-4">
                  WHY IT MATTERS
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-14 text-balance text-ink font-medium leading-[1.15]">
                  If research is part of your work, there's probably{" "}
                  <span className="text-brand-teal italic font-medium">a fit here.</span>
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  {
                    title: "Tailored to researchers",
                    body: "We understand academic workflows and the nuances that matter.",
                    icon: Target,
                  },
                  {
                    title: "Built by & for scholars",
                    body: "Our team combines research experience with professional project management.",
                    icon: Users,
                  },
                  {
                    title: "Reliable & secure",
                    body: "Your data, deadlines, and reputation are always treated with the highest standards.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "More time for impact",
                    body: "We handle the details so you can get back to doing what you love.",
                    icon: Rocket,
                  },
                ].map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 60}>
                    <div className="flex gap-4">
                      <div className="w-9 h-9 rounded-full bg-moss-50 flex items-center justify-center text-brand-teal shrink-0">
                        <item.icon size={16} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-ink font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-ink-soft leading-relaxed font-medium">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={150}>
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-line/30 shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80"
                    alt="A female scientist looking through a microscope in a clean scientific research laboratory"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust & Testimonial Section */}
      <section className="py-20 md:py-24 bg-paper-dim/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left quotation box */}
            <div className="lg:col-span-4 bg-moss-900 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between shadow-lg relative min-h-[300px]">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 10% 10%, #FFFFFF 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <Reveal className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-teal mb-6">
                    TRUSTED BY RESEARCHERS FOR
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl leading-[1.2] text-balance">
                    Straightforward, and based on real timelines.
                  </h3>
                </div>
                <div className="font-display text-7xl text-brand-teal/30 leading-none select-none text-right">
                  “
                </div>
              </Reveal>
            </div>

            {/* Right details cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {[
                {
                  text: "We work with individuals and research teams across disciplines and career stages.",
                  icon: Users,
                },
                {
                  text: "Every project includes clear timelines, regular updates and transparent communication.",
                  icon: Calendar,
                },
                {
                  text: "We align with your goals, your standards and your field of work.",
                  icon: Target,
                },
                {
                  text: "Need something unique? We build solutions that fit — not the other way around.",
                  icon: Puzzle,
                },
              ].map((card, idx) => (
                <Reveal key={idx} delay={idx * 60} className="h-full">
                  <div className="bg-paper border border-line rounded-3xl p-6 flex flex-col gap-6 h-full justify-between hover:border-moss-300 transition-all duration-300 hover:shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-moss-50 flex items-center justify-center text-brand-teal">
                      <card.icon size={16} strokeWidth={1.5} />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-ink-soft leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Recent Work Carousel */}
      <section className="py-20 md:py-28 overflow-hidden bg-paper/50" id="resources">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-teal mb-4">
                RECENT WORK
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink font-medium leading-[1.15]">
                Different research. <span className="text-brand-teal italic font-medium">Same commitment.</span>
              </h2>
            </Reveal>
            
            {/* Arrows buttons */}
            <Reveal delay={100} className="flex gap-3 mt-6 md:mt-0">
              <button
                onClick={scrollLeft}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full border border-line bg-paper flex items-center justify-center text-ink-soft hover:bg-moss-50 hover:text-moss-700 transition-all active:scale-95 shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full border border-line bg-paper flex items-center justify-center text-ink-soft hover:bg-moss-50 hover:text-moss-700 transition-all active:scale-95 shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </Reveal>
          </div>
          
          {/* Scroll wrapper */}
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide py-2 px-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {recentWorks.map((work, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start group relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-line/20 shadow-md"
              >
                <Image
                  src={work.image}
                  alt={`${work.category} support for ${work.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 280px, 320px"
                />
                {/* Visual shade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 right-6 text-paper">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-moss-300 mb-1">
                    {work.category}
                  </p>
                  <h4 className="font-display text-lg md:text-xl text-paper leading-snug">
                    {work.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action Let's Talk Section */}
      <section className="py-20 md:py-24 bg-ink text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, #FFFFFF 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left text columns */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-4 text-balance">
                  Let's talk about your research.
                </h2>
                <p className="text-white/70 text-base md:text-lg mb-10 max-w-[45ch]">
                  Tell us your goals. We'll take care of the rest.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-gold hover:bg-brand-gold-hover text-white rounded-full px-6 py-3 font-semibold text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <Button
                    href="/contact-us"
                    variant="secondary"
                    className="!border-white/20 !text-white hover:!border-brand-teal hover:!bg-brand-teal"
                  >
                    Schedule a Call
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right side flatlay mockup */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <Reveal delay={150}>
                <div className="relative aspect-[16/10] sm:aspect-[1.5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
                    alt="Close up desk calendar planner showing project schedules"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  {/* Branding tag */}
                  <div className="absolute top-4 left-4 bg-ink/75 backdrop-blur-sm border border-white/10 py-1.5 px-3 rounded-xl shadow-md">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand-teal">Research Connect Pro</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
