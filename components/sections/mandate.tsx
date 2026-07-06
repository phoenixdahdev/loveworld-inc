"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const DISTINCTION = [
  {
    role: "The Ambassador",
    body: "Represents one nation to another. Diplomatic, political, external.",
    emphasis: false,
  },
  {
    role: "The Branch Manager",
    body: "Executes directives from headquarters. Reactive, with limited authority.",
    emphasis: false,
  },
  {
    role: "The Consular",
    body: "Establishes the conditions for operation and executes the mandate. Proactive, with full authority.",
    emphasis: true,
  },
];

const IDEOLOGIES = [
  {
    n: "I",
    name: "Exceptionalism",
    body: "We do not replicate what exists. We create new categories. Every office introduces something the territory has never seen.",
  },
  {
    n: "II",
    name: "Expansionism",
    body: "The office is a launchpad, not a destination. Every Consular carries a written expansion plan for Year 1, 3, and 5.",
  },
  {
    n: "III",
    name: "Perfectionism",
    body: "Nothing leaves the office substandard. Every document, product, and partnership reflects Loveworld excellence.",
  },
];

export function Mandate() {
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
      id="mandate"
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
            § 01 · The Mandate
          </motion.p>
          <motion.h2
            variants={rise}
            className="mt-5 max-w-3xl text-balance font-mono text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Not an ambassador. Not a branch manager.
          </motion.h2>
          <motion.p
            variants={rise}
            className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A Loveworld Consular represents Loveworld Incorporated within a
            territory as a resident authority. Where an ambassador speaks between
            nations and a branch manager waits on headquarters, the Consular
            establishes the conditions for operation, then executes the mandate.
          </motion.p>
        </motion.div>

        {/* Distinction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-14 grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10"
        >
          {DISTINCTION.map((d) => (
            <motion.div
              key={d.role}
              variants={rise}
              className={
                d.emphasis
                  ? "flex flex-col gap-3 bg-foreground p-7 text-background"
                  : "flex flex-col gap-3 bg-background p-7"
              }
            >
              <span
                className={
                  d.emphasis
                    ? "font-mono text-xs font-semibold uppercase tracking-[0.16em]"
                    : "font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground"
                }
              >
                {d.role}
              </span>
              <span
                className={
                  d.emphasis
                    ? "font-sans text-sm leading-relaxed text-background/80"
                    : "font-sans text-sm leading-relaxed text-muted-foreground"
                }
              >
                {d.body}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Governing ideologies */}
        <div className="mt-20">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rise}
            className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
          >
            The three governing ideologies
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-3"
          >
            {IDEOLOGIES.map((item) => (
              <motion.div
                key={item.name}
                variants={rise}
                className="border-t border-black/10 pt-5 dark:border-white/10"
              >
                <span className="font-mono text-sm text-muted-foreground/70">
                  {item.n}
                </span>
                <h4 className="mt-3 font-mono text-lg font-semibold tracking-tight">
                  {item.name}
                </h4>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
