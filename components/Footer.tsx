import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import Container from "./Container";
import { services, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Col 1: Branding & Intro */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="https://res.cloudinary.com/dm4jfxbcs/image/upload/v1783921288/research_connect_pro_y0bg56.jpg"
                  alt="Research Connect Pro"
                  width={140}
                  height={35}
                  className="h-9 w-auto brightness-0 invert"
                />
              </Link>
              <p className="mt-4 text-xs text-white/70 leading-relaxed max-w-[24ch]">
                Expert research support services so you can focus on what matters most — your research.
              </p>
            </div>
            
            {/* Socials & Contact Icon */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 mb-4 font-body">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-xs text-white/75 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-xs text-white/75 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xs text-white/75 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs text-white/75 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-xs text-white/75 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 mb-4 font-body">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-xs text-white/75 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 mb-4 font-body">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="text-xs text-white/75 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-xs text-white/75 hover:text-white transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-xs text-white/75 hover:text-white transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-xs text-white/75 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Get in Touch */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 mb-4 font-body">
              Get in touch
            </h4>
            <a
              href={`mailto:${site.email}`}
              className="text-xs text-white/75 hover:text-white transition-colors block mb-3 break-all"
            >
              {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-gold hover:text-white font-medium inline-flex items-center gap-1 group transition-colors"
            >
              Let's start a conversation <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} Research Connect Pro. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
