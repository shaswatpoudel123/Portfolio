import { useState } from "react";
import { Download, Moon, Sun, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data";

interface NavProps {
  dark: boolean;
  onToggleDark: () => void;
}

export default function Nav({ dark, onToggleDark }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/75 backdrop-blur-lg">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-xl text-foreground tracking-tight">
          SP<span className="text-primary">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-mono text-sm px-4 py-1.5 rounded border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
          <button
            onClick={onToggleDark}
            className="p-2 rounded border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="md:hidden p-2 rounded border border-border text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-sm px-4 py-2 rounded border border-primary/50 text-primary w-fit"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
