import { Code2, Brain, Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SkillBadge from "./SkillBadge";
import { SKILLS } from "../data";
import type { SkillColor } from "../data";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Cpu,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 border-t border-border"
      style={{ background: "color-mix(in srgb, var(--card) 40%, transparent)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="02 · Skills"
          title="What I Work With"
          subtitle="Three engineering pillars that shape how I approach every project — from pixel to pipeline."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map(({ pillar, iconName, items, color, description }) => {
            const Icon = ICON_MAP[iconName];
            return (
              <div
                key={pillar}
                className="group p-8 rounded-xl border border-border bg-card hover:border-primary/25 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-colors duration-300 ${
                    color === "cyan"
                      ? "border-cyan-400/20 bg-cyan-400/5 text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10"
                      : color === "violet"
                      ? "border-violet-400/20 bg-violet-400/5 text-violet-400 group-hover:border-violet-400/40 group-hover:bg-violet-400/10"
                      : "border-emerald-400/20 bg-emerald-400/5 text-emerald-400 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{pillar}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <SkillBadge key={skill} label={skill} color={color as SkillColor} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
