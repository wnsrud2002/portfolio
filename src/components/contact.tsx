"use client";

import { motion } from "framer-motion";
import { Container } from "./container";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/portfolio";

const socialLinks = [
  { href: profile.social.github, label: "GitHub", icon: GithubIcon },
  { href: profile.social.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: profile.social.instagram, label: "Instagram", icon: InstagramIcon },
];

export function Contact() {
  return (
    <section id="contact" className="py-28">
      <Container className="flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-sm text-accent"
        >
          What&apos;s Next?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-4 max-w-md text-foreground/70"
        >
          I&apos;m always open to new opportunities, collaborations, or just a
          good conversation. Feel free to reach out.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          href={`mailto:${profile.email}`}
          className="mt-8 rounded-full bg-accent px-8 py-3 text-sm font-medium text-white shadow-sm shadow-accent/30 transition-transform hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/40"
        >
          Say Hello
        </motion.a>

        <div className="mt-14 flex items-center gap-6">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-foreground/60 transition-colors hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center gap-2 text-center text-sm text-foreground/50 sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name.en} ({profile.name.ko}). All
          rights reserved.
        </p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS</p>
      </Container>
    </footer>
  );
}
