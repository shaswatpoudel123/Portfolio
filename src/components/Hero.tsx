import { Download, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow orbs */}
      <div
        className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-sm tracking-widest text-primary uppercase mb-8 flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-primary" />
            Available for opportunities
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.05] mb-6">
            Hi, I&apos;m
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(95deg, #00d4ff 0%, #7c3aed 100%)" }}
            >
              Shaswat Poudel
            </span>
            <span className="text-primary">.</span>
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
            Frontend Developer &middot; Computer Engineering Student &middot; AI &amp; Data
            Enthusiast
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded bg-primary text-primary-foreground font-mono text-sm font-bold hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
              View My Work
            </a>
            <a
              href="#"
              className="px-8 py-3.5 rounded border border-border text-muted-foreground font-mono text-sm hover:border-primary/60 hover:text-primary transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
