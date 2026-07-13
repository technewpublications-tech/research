import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showArrow?: boolean;
  target?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
  target,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-all duration-300 ease-out";

  const variants: Record<string, string> = {
    primary:
      "bg-brand-gold text-white hover:bg-brand-gold-hover hover:-translate-y-0.5 shadow-[0_1px_0_rgba(0,0,0,0.05)]",
    secondary:
      "bg-transparent text-ink border border-ink/25 hover:bg-brand-teal hover:text-white hover:border-brand-teal hover:-translate-y-0.5",
    ghost: "bg-transparent text-ink underline-offset-4 hover:underline px-0 py-0",
  };

  return (
    <Link
      href={href}
      target={target}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
