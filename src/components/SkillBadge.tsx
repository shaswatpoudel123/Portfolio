import type { SkillColor } from "../data";

const styles: Record<SkillColor, string> = {
  cyan: "border-cyan-400/20 text-cyan-300 bg-cyan-400/5 hover:bg-cyan-400/12 hover:border-cyan-400/40",
  violet:
    "border-violet-400/20 text-violet-300 bg-violet-400/5 hover:bg-violet-400/12 hover:border-violet-400/40",
  emerald:
    "border-emerald-400/20 text-emerald-300 bg-emerald-400/5 hover:bg-emerald-400/12 hover:border-emerald-400/40",
};

interface SkillBadgeProps {
  label: string;
  color: SkillColor;
}

export default function SkillBadge({ label, color }: SkillBadgeProps) {
  return (
    <span
      className={`inline-block font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200 cursor-default ${styles[color]}`}
    >
      {label}
    </span>
  );
}
