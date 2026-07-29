"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Avatar } from "./avatar";
import { Container } from "./container";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/portfolio";

const socialLinks = [
  { href: profile.social.github, label: "GitHub", icon: GithubIcon },
  { href: profile.social.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: profile.social.instagram, label: "Instagram", icon: InstagramIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent/12 blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-accent-2/10 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/8 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="max-w-2xl">
            <motion.p
              variants={item}
              className="mb-4 font-mono text-sm text-accent"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              variants={item}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            >
              {profile.name.en}.
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-2 font-mono text-lg text-foreground/40 sm:text-xl"
            >
              {profile.name.ko}
            </motion.p>
            <motion.h2
              variants={item}
              className="mt-3 text-2xl font-semibold tracking-tight text-foreground/60 sm:text-3xl"
            >
              {profile.role}.
            </motion.h2>
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg"
            >
              {profile.bio}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-sm shadow-accent/30 transition-transform hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/40"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-5"
            >
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="order-first flex justify-center lg:order-last lg:justify-end"
          >
            <Avatar />
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-foreground/40 transition-colors hover:text-accent sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
