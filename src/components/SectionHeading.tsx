interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p className="font-mono text-xs tracking-[0.25em] text-primary uppercase mb-3 flex items-center gap-2">
        <span className="inline-block w-6 h-px bg-primary opacity-60" />
        {index}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
