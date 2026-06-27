import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const CONTACT_LINKS = [
  { icon: Mail, label: "shaswat@example.com", href: "mailto:shaswat@example.com" },
  { icon: Github, label: "github.com/shaswatpoudel123", href: "https://github.com" },
  { icon: Linkedin, label: "linkedin.com/in/shaswatpoudel", href: "https://linkedin.com" },
];

const TEXT_FIELDS = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
] as const;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section
      id="contact"
      className="py-28 border-t border-border"
      style={{ background: "color-mix(in srgb, var(--card) 40%, transparent)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Info */}
          <div>
            <SectionHeading
              index="04 · Contact"
              title="Get in Touch"
              subtitle="Have a project in mind, a collaboration idea, or just want to talk tech? I'd love to hear from you."
            />
            <div className="space-y-4">
              {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:text-primary transition-all duration-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Message sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {TEXT_FIELDS.map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block font-mono text-xs text-muted-foreground mb-2 tracking-widest uppercase"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required
                      value={form[id]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="w-full bg-input-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-muted-foreground mb-2 tracking-widest uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-input-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm font-bold hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
