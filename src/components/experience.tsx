"use client";

import { motion } from "framer-motion";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { experience, skills } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionHeading eyebrow="Where I've Been" title="Experience" />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border sm:left-[9px]" />

          <div className="flex flex-col gap-10">
            {experience.map((entry, index) => (
              <motion.div
                key={`${entry.role}-${entry.company}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="relative pl-8 sm:pl-10"
              >
                <span className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background sm:h-4.5 sm:w-4.5" />

                <p className="font-mono text-xs text-accent">
                  {entry.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {entry.role}{" "}
                  <span className="text-foreground/50">· {entry.company}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/70">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16"
        >
          <p className="mb-4 font-mono text-sm text-foreground/50">
            Tools &amp; technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:border-accent hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
