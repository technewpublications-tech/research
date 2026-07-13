import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        /* ── Brand tokens (reference CSS vars for easy future tweaks) ── */
        "brand-navy": "var(--brand-navy)",
        "brand-teal": "var(--brand-teal)",
        "brand-gold": "var(--brand-gold)",
        "brand-gold-hover": "var(--brand-gold-hover)",

        /* ── Semantic aliases (backward-compatible with existing classes) ── */
        paper: "#FFFFFF",
        "paper-dim": "#F0F4F8",
        ink: "#00173E",
        "ink-soft": "#1A3A5C",
        moss: {
          50: "#E8F6F7",
          100: "#D0EEF0",
          300: "#4DB8C4",
          500: "#007A89",
          600: "#007A89",
          700: "#006070",
          800: "#005060",
          900: "#00173E",
        },
        clay: "#DC2626",
        line: "#D4D8DE",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
