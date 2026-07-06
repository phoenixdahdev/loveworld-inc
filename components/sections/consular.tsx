"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const NON_NEGOTIABLE = [
  "Born-again believer, actively grounded in the Word.",
  "Proven track record in business leadership or international operations.",
  "Deep understanding of Loveworld's vision and Pastor Chris's teachings.",
  "Willingness to relocate and reside in the assigned territory.",
  "Cultural intelligence and diplomatic competence.",
];

const PREFERRED = [
  "Prior international business or diplomatic experience.",
  "Legal or regulatory expertise in the target territory.",
  "An existing network in the territory.",
  "Fluency in local languages.",
];

const PROCESS = [
  { n: "01", name: "Nomination", body: "Submitted by Eden Incubators or Loveworld leadership." },
  { n: "02", name: "Vetting", body: "Background check, doctrinal alignment, and capability assessment." },
  { n: "03", name: "Approval", body: "Final sign-off by Loveworld Incorporated leadership." },
  { n: "04", name: "Commissioning", body: "Appointment letter, briefing, and deployment." },
  { n: "05", name: "Onboarding", body: "A two-week intensive orientation." },
];

const AUTHORITY = [
  {
    title: "Financial",
    points: [
      "Sign contracts within an approved threshold.",
      "Open and operate local bank accounts.",
      "Approve operational expenditure within budget.",
    ],
  },
  {
    title: "Legal",
    points: [
      "Sign as legal representative for Loveworld entities.",
      "Engage local counsel and professional services.",
      "Represent Loveworld in regulatory and legal proceedings.",
    ],
  },
  {
    title: "Operational",
    points: [
      "Hire and manage local staff within HR guidelines.",
      "Establish partnerships and distribution agreements.",
      "Initiate regional expansion activities.",
    ],
  },
];

const CADENCE = [
  { when: "Weekly", what: "Operations update to the China Hub." },
  { when: "Monthly", what: "Strategic review with Global Leadership." },
  { when: "Immediate", what: "Escalation of legal, regulatory, or reputational risk." },
];

function useReveal() {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const rise: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
      };
  return { container, rise };
}

export function Consular() {
  const { container, rise } = useReveal();

  return (
    <section
      id="consular"
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
            § 04 · The Consular
          </motion.p>
          <motion.h2
            variants={rise}
            className="mt-5 max-w-3xl text-balance font-mono text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Who carries the office.
          </motion.h2>
          <motion.p
            variants={rise}
            className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A Consular is appointed, not hired: a proven business leader,
            doctrinally grounded, and willing to reside in the territory, vested
            with real financial, legal, and operational authority.
          </motion.p>
        </motion.div>

        {/* Qualifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2"
        >
          <motion.div variants={rise}>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-foreground/70">
              Non-negotiable
            </h3>
            <ul className="mt-5 space-y-3">
              {NON_NEGOTIABLE.map((q) => (
                <li key={q} className="flex gap-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-[2px] bg-foreground" />
                  {q}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={rise}>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              Preferred
            </h3>
            <ul className="mt-5 space-y-3">
              {PREFERRED.map((q) => (
                <li key={q} className="flex gap-3 font-sans text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-[2px] border border-foreground/50" />
                  {q}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Appointment process */}
        <div className="mt-20">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rise}
            className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
          >
            The appointment process
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="mt-6 grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 lg:grid-cols-5 dark:border-white/10 dark:bg-white/10"
          >
            {PROCESS.map((step) => (
              <motion.div
                key={step.n}
                variants={rise}
                className="flex flex-col gap-3 bg-background p-6"
              >
                <span className="font-mono text-sm text-muted-foreground/70">{step.n}</span>
                <h4 className="font-mono text-base font-semibold tracking-tight">{step.name}</h4>
                <p className="font-sans text-sm leading-snug text-muted-foreground">{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Authority granted */}
        <div className="mt-20">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rise}
            className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
          >
            Authority granted
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="mt-6 grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10"
          >
            {AUTHORITY.map((cat) => (
              <motion.div key={cat.title} variants={rise} className="bg-background p-7">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.16em]">
                  {cat.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {cat.points.map((p) => (
                    <li key={p} className="flex gap-2.5 font-sans text-sm leading-snug text-muted-foreground">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/40" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Reporting cadence */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="mt-6 grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10"
          >
            {CADENCE.map((c) => (
              <motion.div key={c.when} variants={rise} className="flex flex-col gap-2 bg-background p-6">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em]">
                  {c.when}
                </span>
                <span className="font-sans text-sm leading-snug text-muted-foreground">{c.what}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
