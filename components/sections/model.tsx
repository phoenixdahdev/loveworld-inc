"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const SOURCES = [
  {
    name: "The Russian model",
    body: "Consular presence is long-term strategic positioning, not a temporary posting. Interests are protected even in hostile environments, and culture and commerce advance together.",
  },
  {
    name: "The Chinese model",
    body: "Consulars are commercial operators, not only diplomats. A production hub coordinates the global network, and patient, long-term planning beats the pursuit of quick wins.",
  },
];

const OBJECTIVES = [
  {
    n: "01",
    name: "Territorial Establishment",
    body: "Establish Loveworld as a legal, operational entity, resident in the territory rather than operating into it.",
  },
  {
    n: "02",
    name: "Commercial Operations",
    body: "Run the office as a profit center: production, distribution, and measurable revenue.",
  },
  {
    n: "03",
    name: "Interest Protection",
    body: "Protect Loveworld's intellectual property, brand, and reputation; ensure legal and regulatory compliance.",
  },
  {
    n: "04",
    name: "Strategic Intelligence",
    body: "Monitor regulation, politics, and markets so leadership is never surprised by territorial developments.",
  },
  {
    n: "05",
    name: "Network Activation",
    body: "Activate existing touchpoints (Christ Embassy, Rhapsody, and partners) into new Kingdom-aligned relationships.",
  },
  {
    n: "06",
    name: "Expansion Execution",
    body: "Use the territory as a launchpad for the region: South Africa into SADC, Malaysia into ASEAN.",
  },
];

export function Model() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  };
  const rise: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      };

  return (
    <section
      id="model"
      className="scroll-mt-24 border-t border-black/10 px-6 py-24 sm:px-10 sm:py-32 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.p
            variants={rise}
            className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
          >
            § 02 · The Model
          </motion.p>
          <motion.h2
            variants={rise}
            className="mt-5 max-w-3xl text-balance font-mono text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Adapted from the world&apos;s most deliberate consular systems.
          </motion.h2>
          <motion.p
            variants={rise}
            className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            The Consular is not a new invention. It adapts a proven model, the
            consular networks of Russia and China, and turns it toward Kingdom
            expansion, commercial excellence, and global presence.
          </motion.p>
        </motion.div>

        {/* Two sources */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2"
        >
          {SOURCES.map((s) => (
            <motion.div
              key={s.name}
              variants={rise}
              className="border-t border-black/10 pt-5 dark:border-white/10"
            >
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.16em]">
                {s.name}
              </h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Synthesis */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={rise}
          className="mt-10 rounded-xl border border-black/10 px-6 py-10 text-center sm:px-10 dark:border-white/10"
        >
          <p className="mx-auto max-w-3xl font-mono text-lg leading-relaxed tracking-tight sm:text-2xl">
            <span className="font-semibold">Russian strategic patience</span>
            <span className="text-muted-foreground"> + </span>
            <span className="font-semibold">Chinese commercial aggression</span>
            <span className="text-muted-foreground"> = </span>
            <span className="font-semibold">Loveworld Consular excellence.</span>
          </p>
        </motion.div>

        {/* Six objectives */}
        <div className="mt-20">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rise}
            className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
          >
            Six synthesized objectives
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="mt-8 grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10"
          >
            {OBJECTIVES.map((o) => (
              <motion.div
                key={o.n}
                variants={rise}
                className="flex flex-col gap-3 bg-background p-7"
              >
                <span className="font-mono text-sm text-muted-foreground/70">
                  {o.n}
                </span>
                <h4 className="font-mono text-base font-semibold tracking-tight">
                  {o.name}
                </h4>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {o.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
