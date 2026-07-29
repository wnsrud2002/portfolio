export const profile = {
  name: {
    en: "Kim JunKyung",
    ko: "김준경",
  },
  role: "Software Engineer",
  tagline: "I design and build clean, fast, and thoughtful web experiences.",
  bio: "I'm a software engineer who enjoys turning complex problems into simple, elegant interfaces. I care about performance, accessibility, and the small details that make a product feel great to use.",
  location: "Seoul, South Korea",
  email: "you@example.com",
  // Drop your photo in /public (e.g. public/avatar.jpg) and set the path here. Leave empty for an initials placeholder.
  avatarUrl: "",
  resumeUrl: "#",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    instagram: "https://instagram.com/jun._.rud",
  },
};

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "GraphQL",
  "Docker",
  "AWS",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short, punchy description of what this project does, who it's for, and the problem it solves.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "Another highlight project. Explain the impact — faster load times, more users, a hard bug solved.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "A side project or open-source contribution that shows range beyond your day job.",
    tags: ["Python", "Automation"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "B.S. in Artificial Intelligence",
    company: "Dong-A University",
    period: "2021 — Present",
    description:
      "Undergraduate coursework in artificial intelligence, covering machine learning, deep learning, and core computer science fundamentals.",
  },
];
