import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          index="03 · Projects"
          title="Featured Work"
          subtitle="A selection of projects spanning web, AI, and systems engineering — each built to solve a real problem."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
