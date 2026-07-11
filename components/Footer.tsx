import Link from "next/link";
import { Linkedin, Instagram, Facebook, Mail } from "lucide-react";
import Container from "./Container";
import { services, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#14140F] text-[#F7F4EC] py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          {/* Col 1: Branding & Intro */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <Link href="/" className="font-display text-xl tracking-tight flex items-center">
                <span className="font-semibold text-[#F7F4EC]">Researcher</span>
                <span className="text-[#8FB39D] font-normal italic ml-1">Connect Pro</span>
              </Link>
              <p className="mt-4 text-xs text-[#DDD6C7]/70 leading-relaxed max-w-[24ch]">
                Expert research support services so you can focus on what matters most — your research.
              </p>
            </div>
            
            {/* Socials & Contact Icon */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="text-[#DDD6C7]/70 hover:text-[#F7F4EC] transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#DDD6C7]/70 hover:text-[#F7F4EC] transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#DDD6C7]/70 hover:text-[#F7F4EC] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#DDD6C7]/70 hover:text-[#F7F4EC] transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#DDD6C7]/40 mb-4 font-body">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#DDD6C7]/40 mb-4 font-body">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#DDD6C7]/40 mb-4 font-body">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Get in Touch */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#DDD6C7]/40 mb-4 font-body">
              Get in touch
            </h4>
            <a
              href={`mailto:${site.email}`}
              className="text-xs text-[#DDD6C7]/75 hover:text-[#F7F4EC] transition-colors block mb-3 break-all"
            >
              {site.email}
            </a>
            <Link
              href="/contact-us"
              className="text-xs text-[#8FB39D] hover:text-[#F7F4EC] font-medium inline-flex items-center gap-1 group transition-colors"
            >
              Let's start a conversation <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-[#DDD6C7]/10 my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#DDD6C7]/40">
          <p>© {new Date().getFullYear()} Paracelsus Lemon. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[#F7F4EC] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-[#F7F4EC] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
