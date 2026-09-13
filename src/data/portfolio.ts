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
    github: "https://github.com/wnsrud2002",
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
  {
    title: "틈 (TEUM)",
    description:
      "A macOS app for multi-branch reservations and wait-time operations. Customers search nearby shops on a map and book open slots; managers run a live operations board with delay tracking, staff and equipment schedules, and slot offers when a booking is cancelled. Built with no external packages.",
    tags: ["Swift", "SwiftUI", "MapKit", "SQLite"],
  },
  {
    title: "BioUnlock",
    description:
      "A macOS menu bar app that gets you past the login screen with your face or palm. It matches 128-dimensional face embeddings with Vision + CoreML, blocks photo and screen replay attacks with MiniFASNet anti-spoofing, and only turns the camera on when someone is in front of the Mac.",
    tags: ["Swift", "Vision", "CoreML", "macOS"],
    repoUrl: "https://github.com/wnsrud2002/BioUnlock",
  },
  {
    title: "Edge VLM HVAC Control System",
    description:
      "Capstone project at Dong-A University. An on-device AI system that reads occupants' clothing and activity from camera video with a VLM, computes ISO 7730 PMV thermal comfort, and controls the HVAC unit. On a 78-minute office video simulation it used 68.2% less energy than a fixed 24°C rule-based controller.",
    tags: ["Python", "Qwen2-VL", "YOLOv8", "Jetson Orin Nano"],
    repoUrl: "https://github.com/KAJ-EdgeVLM-HVAC-Project/edge-vlm-hvac-system",
  },
  {
    title: "공지캐치 (NoticeCatch)",
    description:
      "PM for a university notice curation service. It collects notices scattered across school websites, summarizes each in three lines with AI, and sends push notifications matched to each student's major and keywords.",
    tags: ["Kotlin", "Jetpack Compose", "Spring Boot", "FCM", "AI"],
    repoUrl: "https://github.com/notice-catch",
  },
  {
    title: "RailMonitor",
    description:
      "A team project that analyzes train station video with YOLOv8 to track restroom lines and waiting-area seat occupancy in real time, then streams the results through a Flask API into a redesigned KORAIL TALK-style web interface.",
    tags: ["Python", "YOLOv8", "OpenCV", "Flask", "JavaScript"],
    repoUrl: "https://github.com/minseo040203/RailMonitor",
  },
  {
    title: "ASCII Art Converter",
    description:
      "A lightweight web app that turns images into ASCII art entirely in the browser using the Canvas API, with adjustable character sets, color, and width. A single HTML file with no dependencies.",
    tags: ["HTML", "CSS", "JavaScript", "Canvas API"],
    repoUrl: "https://github.com/wnsrud2002/ascii-art-web",
  },
  {
    title: "MQTT Study",
    description:
      "A two-week deep dive into how MQTT 3.1.1 actually works, not just how to use it. Experiments with a Mosquitto broker cover QoS round trips, delivery guarantees, and Last Will messages, recorded as a notes site. The end goal is a dependency-free MQTT client written in C.",
    tags: ["MQTT", "Mosquitto", "C", "Shell"],
    liveUrl: "https://wnsrud2002.github.io/mqtt-study/",
    repoUrl: "https://github.com/wnsrud2002/mqtt-study",
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
    title: "최우수상",
    issuer: "2025 동아해커톤",
    date: "Nov 13 — 14, 2025",
  },
];
