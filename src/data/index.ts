export interface Project {
  title: string;
  tagline: string;
  problem: string;
  tags: string[];
  image: string;
  accentColor: string;
  github?: string;
  live?: string;
}

export type SkillColor = "cyan" | "violet" | "emerald";

export interface SkillPillar {
  pillar: string;
  icon: string;
  items: string[];
  color: SkillColor;
  description: string;
}

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "Route Hive",
    tagline: "Simplifying university bus travel",
    problem:
      "Reduced bus scheduling confusion for university students by building a real-time route tracking and scheduling interface that integrates live arrival data.",
    tags: ["React", "Python", "Flask", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop&auto=format",
    accentColor: "#00d4ff",
    github: "#",
  },
  {
    title: "CuraMind",
    tagline: "AI health expert for ankle disease detection",
    problem:
      "Enabled early-stage ankle condition detection using computer vision, cutting diagnostic delays and making specialist-level analysis accessible to patients in rural Nepal.",
    tags: ["React", "Python", "Flask", "Tailwind CSS", "AI"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&auto=format",
    accentColor: "#a78bfa",
    github: "#",
  },
  {
    title: "Sentinel AI",
    tagline: "Securing data transmissions to AI models",
    problem:
      "Prevented prompt injection and data exfiltration attacks on AI API endpoints through runtime guardrails and request sandboxing — keeping sensitive data safe in transit.",
    tags: ["FastAPI", "React", "Tailwind CSS", "Security"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&auto=format",
    accentColor: "#f472b6",
    github: "#",
  },
  {
    title: "Faculty Management System",
    tagline: "Desktop architecture and management",
    problem:
      "Streamlined faculty scheduling, record management, and timetable generation for academic institutions, eliminating manual conflicts across departments.",
    tags: ["Qt", "C", "C++"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format",
    accentColor: "#34d399",
    github: "#",
  },
];

export const SKILLS = [
  {
    pillar: "Web Development",
    iconName: "Code2",
    items: ["HTML", "CSS", "React", "Tailwind CSS", "Bootstrap"],
    color: "cyan" as SkillColor,
    description:
      "Building fast, accessible, and responsive web interfaces that users love to interact with.",
  },
  {
    pillar: "Data & AI",
    iconName: "Brain",
    items: ["Python", "NumPy", "Pandas", "Data Science", "Machine Learning"],
    color: "violet" as SkillColor,
    description:
      "Extracting insight from messy data and deploying ML models that solve real-world problems.",
  },
  {
    pillar: "Core Engineering",
    iconName: "Cpu",
    items: ["C", "C++", "DSA", "Systems Architecture", "Qt"],
    color: "emerald" as SkillColor,
    description:
      "Writing efficient, low-level code and designing systems that scale without breaking.",
  },
];
