export default function SectionLabel({
  number,
  text,
}: {
  number?: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      {number && <span className="numeral text-lg">{number}</span>}
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
        {text}
      </span>
      <span className="hairline flex-1" />
    </div>
  );
}
