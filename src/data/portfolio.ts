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
    title: "Fitness-Health (APTAMS)",
    description:
      "2nd Prize at the 2026 SZU International Summer Camp (SZUxSITxDAU, Team 8). A physical fitness assessment and monitoring system for university students — SHAP-based feature recognition checked against the national scoring rules, plus an LLM agent that gives traceable training guidance.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "SHAP", "LLM"],
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

export type Award = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
};

export const awards: Award[] = [
  {
    title: "2nd Prize · Team 8",
    issuer: "2026 SZU International Summer Camp",
    date: "Aug 10 — 22, 2026",
    description:
      "Received the Certificate of Achievement as a member of Team 8 (SZUxSITxDAU), placing 2nd with the Fitness-Health project — a fitness assessment and monitoring system for university students.",
  },
  {
    title: "Top Excellence Award",
    issuer: "2025 Dong-A Hackathon",
    date: "Nov 13 — 14, 2025",
  },
];
