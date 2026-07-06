"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type Territory = {
  id: string;
  name: string;
  city: string;
  gateway: string;
  rationale: string[];
  phases: { label: string; weeks: string; title: string; steps: string[] }[];
  targets: { value: string; label: string }[];
};

const TERRITORIES: Territory[] = [
  {
    id: "za",
    name: "South Africa",
    city: "Johannesburg",
    gateway: "Gateway to SADC",
    rationale: [
      "Gateway to the Southern African Development Community.",
      "Advanced manufacturing infrastructure.",
      "English-speaking legal and business environment.",
      "Established presence through Christ Embassy and Rhapsody of Realities.",
    ],
    phases: [
      {
        label: "Phase 1",
        weeks: "Weeks 1-8",
        title: "Legal Foundation",
        steps: [
          "Register Loveworld South Africa (Pty) Ltd with CIPC.",
          "Business visas, banking, and SARS tax registration.",
          "Secure a Johannesburg office in Sandton or Rosebank.",
        ],
      },
      {
        label: "Phase 2",
        weeks: "Weeks 9-16",
        title: "Operational Setup",
        steps: [
          "Engage local counsel, accounting, and operations staff.",
          "Build relationships with South African manufacturers.",
          "Set up logistics partnerships (DHL, FedEx, local freight).",
        ],
      },
      {
        label: "Phase 3",
        weeks: "Weeks 17-24",
        title: "Market Activation",
        steps: [
          "Introductory briefings with government and church leadership.",
          "Announce the first production or distribution initiative.",
          "Open partnership talks with regional distributors.",
        ],
      },
    ],
    targets: [
      { value: "5+", label: "Local hires" },
      { value: "3", label: "Partnerships" },
      { value: "$500K", label: "Year-1 revenue" },
      { value: "2", label: "SADC countries" },
    ],
  },
  {
    id: "my",
    name: "Malaysia",
    city: "Kuala Lumpur",
    gateway: "Gateway to ASEAN",
    rationale: [
      "Gateway to the ASEAN market and its 650 million+ consumers.",
      "Strong halal certification infrastructure for Muslim markets.",
      "Advanced electronics and manufacturing ecosystem.",
      "Positioned on shipping routes between China, the Middle East, and Africa.",
    ],
    phases: [
      {
        label: "Phase 1",
        weeks: "Weeks 1-8",
        title: "Legal Foundation",
        steps: [
          "Register Loveworld Malaysia Sdn Bhd with SSM.",
          "Employment passes, corporate banking, and LHDN tax.",
          "Secure a Kuala Lumpur office (KL Sentral, Bangsar South, Mont Kiara).",
        ],
      },
      {
        label: "Phase 2",
        weeks: "Weeks 9-16",
        title: "Operational Setup",
        steps: [
          "Corporate secretary, tax consultant, and bilingual staff.",
          "Begin halal certification with JAKIM.",
          "Manufacturing in Penang and Selangor; logistics via Port Klang.",
        ],
      },
      {
        label: "Phase 3",
        weeks: "Weeks 17-24",
        title: "Market Activation",
        steps: [
          "Stakeholder briefings with MIDA and MITI.",
          "Launch the regional distribution network for ASEAN.",
          "Open talks with Indonesia, Thailand, Singapore, the Philippines.",
        ],
      },
    ],
    targets: [
      { value: "5+", label: "Local hires" },
      { value: "3", label: "Partnerships" },
      { value: "$750K", label: "Year-1 revenue" },
      { value: "3", label: "ASEAN countries" },
    ],
  },
];

export function Territories() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const t = TERRITORIES[active];

  return (
    <section
      id="territories"
      className="scroll-mt-24 border-t border-black/10 px-6 py-24 sm:px-10 sm:py-32 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <motion.div
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground"
          >
            § 03 · Territories
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            className="mt-5 max-w-3xl text-balance font-mono text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Two gateways to two regions.
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            South Africa opens the Southern African Development Community.
            Malaysia opens ASEAN and its 650 million consumers. Each office
            follows the same 24-week path, from legal foundation to market
            activation.
          </motion.p>
        </motion.div>

        {/* Segmented control */}
        <div className="mt-10 inline-flex rounded-full border border-black/10 p-1 dark:border-white/10">
          {TERRITORIES.map((terr, i) => {
            const isActive = active === i;
            return (
              <button
                key={terr.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="relative rounded-full px-5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {isActive && (
                  <motion.span
                    layoutId="territory-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
                  />
                )}
                <span
                  className={cn(
                    "relative z-10",
                    isActive ? "text-background" : "text-muted-foreground",
                  )}
                >
                  {terr.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dossier */}
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
            className="mt-10"
          >
            {/* Identity */}
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="font-mono text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.city} · {t.gateway}
              </p>
            </div>

            {/* Rationale */}
            <div className="mt-8 grid gap-x-10 gap-y-px sm:grid-cols-2">
              {t.rationale.map((r) => (
                <div
                  key={r}
                  className="flex gap-3 border-t border-black/10 py-3 dark:border-white/10"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    {r}
                  </p>
                </div>
              ))}
            </div>

            {/* Establishment phases */}
            <h4 className="mt-14 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              Establishment · 24 weeks
            </h4>
            <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-3 dark:border-white/10 dark:bg-white/10">
              {t.phases.map((p) => (
                <div key={p.label} className="flex flex-col gap-4 bg-background p-6">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                        {p.label}
                      </span>
                      <span className="font-mono text-[0.68rem] text-muted-foreground">
                        {p.weeks}
                      </span>
                    </div>
                    <h5 className="mt-2 font-mono text-base font-semibold tracking-tight">
                      {p.title}
                    </h5>
                  </div>
                  <ul className="space-y-2.5">
                    {p.steps.map((s) => (
                      <li
                        key={s}
                        className="flex gap-2.5 font-sans text-sm leading-snug text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/40" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Year-one targets */}
            <h4 className="mt-14 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              Year-one targets
            </h4>
            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 sm:grid-cols-4 dark:border-white/10 dark:bg-white/10">
              {t.targets.map((m) => (
                <div key={m.label} className="bg-background p-6">
                  <div className="font-mono text-2xl font-semibold tracking-tight sm:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
