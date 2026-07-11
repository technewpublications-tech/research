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
        paper: "#F7F4EC",
        "paper-dim": "#EFEAE0",
        ink: "#14140F",
        "ink-soft": "#3C3B34",
        moss: {
          50: "#EEF3EF",
          100: "#D7E4DA",
          300: "#8FB39D",
          500: "#3F6B57",
          600: "#2F5644",
          700: "#234133",
          900: "#152A20",
        },
        clay: "#B5502F",
        line: "#DDD6C7",
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
