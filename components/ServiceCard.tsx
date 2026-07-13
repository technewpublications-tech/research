import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/site";
import Image from "next/image";
import * as Icons from "lucide-react";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const IconComponent = (Icons as any)[service.iconName || "FileText"] || Icons.FileText;

  return (
    <Link
      href={service.href}
      className="group relative flex flex-col justify-between p-7 border border-line rounded-3xl bg-paper hover:bg-moss-50/60 hover:border-moss-300/80 transition-all duration-500 min-h-[380px]"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-full bg-moss-50 group-hover:bg-moss-100 flex items-center justify-center text-moss-700 transition-colors duration-300">
            <IconComponent size={18} strokeWidth={1.5} />
          </div>
          <ArrowUpRight
            size={18}
            className="text-ink-soft/40 group-hover:text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>
        <h3 className="font-display text-xl md:text-2xl mb-2 text-ink">
          {service.title}
        </h3>
        <p className="text-xs md:text-sm text-ink-soft leading-relaxed mb-6 font-medium">
          {service.tagline}
        </p>
      </div>

      {service.image && (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mt-auto border border-line/30">
          <Image
            src={service.image}
            alt={service.imageAlt || service.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>
      )}
    </Link>
  );
}
