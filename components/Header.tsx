"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const resourceLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Guides", href: "/guides" },
    { label: "Templates", href: "/templates" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-md shadow-[0_1px_0_rgba(20,20,15,0.08)]" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="font-display text-xl tracking-tight flex items-center">
          <span className="font-semibold text-ink">Researcher</span>
          <span className="text-moss-600 font-normal italic ml-1">Connect Pro</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">
            Services
          </Link>

          {/* Resources Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-ink-soft hover:text-ink transition-colors focus:outline-none"
            >
              Resources <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 rounded-xl bg-paper border border-line shadow-lg py-2 z-50 animate-rise">
                {resourceLinks.map((subLink) => (
                  <Link
                    key={subLink.label}
                    href={subLink.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-ink-soft hover:bg-moss-50 hover:text-ink transition-colors"
                  >
                    {subLink.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">
            About
          </Link>
          <Link href="/contact-us" className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact-us" className="!bg-moss-900 hover:!bg-moss-800 !text-paper !px-5 !py-2.5 !text-sm">
            Let's Talk
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden bg-paper border-t border-line">
          <Container className="flex flex-col gap-1 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium border-b border-line/70"
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium border-b border-line/70"
            >
              Services
            </Link>
            
            {/* Resources Submenu in Mobile */}
            <div className="border-b border-line/70 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft/40 px-0 block mb-1">
                Resources
              </span>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {resourceLinks.map((subLink) => (
                  <Link
                    key={subLink.label}
                    href={subLink.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm text-ink-soft"
                  >
                    {subLink.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium border-b border-line/70"
            >
              About
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium border-b border-line/70"
            >
              Contact
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center rounded-full bg-moss-900 hover:bg-moss-800 text-paper py-3 font-medium"
            >
              Let's Talk
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 text-sm text-ink-soft/70 text-center"
            >
              {site.email}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
