import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl overflow-hidden bg-card border border-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${project.accentColor}18 0%, transparent 55%)`,
        }}
      />
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${project.accentColor}28` }}
      />

      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-muted flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-55 group-hover:opacity-80"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span
          className="absolute top-3 right-3 w-2 h-2 rounded-full"
          style={{
            backgroundColor: project.accentColor,
            boxShadow: `0 0 8px ${project.accentColor}`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-1">{project.title}</h3>
        <p className="font-mono text-xs mb-3" style={{ color: project.accentColor }}>
          {project.tagline}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
          {project.problem}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 bg-muted rounded border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="flex items-center gap-1.5 text-sm transition-colors"
              style={{ color: project.accentColor }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
