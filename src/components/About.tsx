import { Github, Linkedin, MapPin, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading index="01 · About" title="Who I Am" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Computer Engineering undergraduate at{" "}
                <span className="text-foreground font-medium">Kathmandu University</span>,
                originally from Gorkha, Nepal. I completed my +2 in Science from Notre Dame School.
              </p>
              <p>
                I specialize in bridging intuitive frontend web experiences with robust backend AI
                and data systems &mdash; building products that are as technically sound as they are
                delightful to use.
              </p>
              <p>
                My work spans full-stack web development, machine learning pipelines, and
                systems-level C/C++ engineering. When I&apos;m not coding, I&apos;m studying how AI
                can solve real problems in healthcare, transportation, and security.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Gorkha, Nepal
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                B.E. Computer Engineering · Kathmandu University
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Abstract headshot placeholder */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden border border-border aspect-square max-w-sm mx-auto bg-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div
                    className="w-36 h-36 rounded-full border border-primary/20 flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle at 40% 40%, rgba(0,212,255,0.08), rgba(124,58,237,0.05))",
                    }}
                  >
                    <span className="font-display text-5xl font-bold text-primary/50">SP</span>
                  </div>
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <span
                      key={deg}
                      className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
                      style={{
                        top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 76}px - 3px)`,
                        left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 76}px - 3px)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-5 rounded-xl border border-primary/8" />
              <div className="absolute inset-0 rounded-2xl border border-primary/5" />
              {[
                "top-4 left-4 border-t-2 border-l-2 rounded-tl",
                "top-4 right-4 border-t-2 border-r-2 rounded-tr",
                "bottom-4 left-4 border-b-2 border-l-2 rounded-bl",
                "bottom-4 right-4 border-b-2 border-r-2 rounded-br",
              ].map((cls, i) => (
                <div key={i} className={`absolute w-6 h-6 border-primary/40 ${cls}`} />
              ))}
            </div>
            <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl px-5 py-3.5 shadow-2xl">
              <p className="font-mono text-xs text-muted-foreground mb-0.5">Projects shipped</p>
              <p className="font-display text-2xl font-bold text-foreground">4+</p>
            </div>
            <div className="absolute -top-5 -right-5 bg-card border border-border rounded-xl px-5 py-3.5 shadow-2xl">
              <p className="font-mono text-xs text-muted-foreground mb-0.5">Tech domains</p>
              <p className="font-display text-2xl font-bold text-primary">3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
