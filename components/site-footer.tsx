"use client";

import { motion, useReducedMotion } from "motion/react";
import { ConsularSeal } from "@/components/consular-seal";
import { ThemeSwitcher } from "@/components/theme-switcher";

const EASE = [0.22, 1, 0.36, 1] as const;

const COLUMNS = [
  {
    heading: "Office",
    links: [
      { label: "The Mandate", href: "#mandate" },
      { label: "The Model", href: "#model" },
      { label: "Territories", href: "#territories" },
      { label: "The Consular", href: "#consular" },
    ],
  },
  {
    heading: "Territories",
    links: [
      { label: "South Africa · SADC", href: "#territories" },
      { label: "Malaysia · ASEAN", href: "#territories" },
      { label: "China · Production Hub", href: "#territories" },
    ],
  },
  {
    heading: "Correspondence",
    links: [
      { label: "Enquiries", href: "#contact" },
      { label: "Appointment", href: "#consular" },
      { label: "Media", href: "#contact" },
    ],
  },
];

const MARQUEE = [
  "Resident Authority",
  "South Africa · SADC",
  "Malaysia · ASEAN",
  "China · Production Hub",
  "Kingdom Expansion",
  "Commercial Excellence",
  "Global Presence",
  "Exceptionalism",
  "Expansionism",
  "Perfectionism",
];

export default function SiteFooter() {
  const reduce = useReducedMotion();
  const marquee = [...MARQUEE, ...MARQUEE];

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      {/* Register marquee: a strip of the office's operating vocabulary */}
      <div className="overflow-hidden border-b border-black/10 dark:border-white/10">
        <motion.div
          className="flex gap-10 whitespace-nowrap py-3.5 will-change-transform"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduce ? undefined : { duration: 55, repeat: Infinity, ease: "linear" }
          }
          aria-hidden
        >
          {marquee.map((term, i) => (
            <span
              key={`${term}-${i}`}
              className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground"
            >
              <span className="size-1 rounded-full bg-foreground/30" />
              {term}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Columns */}
      <div className="grid gap-12 px-6 py-16 sm:px-10 sm:py-20 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
          className="max-w-sm md:col-span-2 lg:col-span-1"
        >
          <div className="flex items-center gap-2.5">
            <ConsularSeal className="h-9 w-9 text-foreground" />
            <span className="flex flex-col leading-none">
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-muted-foreground">
                The Office of the
              </span>
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                Loveworld Consular
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-xs font-mono text-sm leading-relaxed text-muted-foreground">
            “We expand our reach, influence, and territories by all innovative
            means. We have the license to grow.”
          </p>
          <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground/70">
            Loveworld Expansionism
          </p>
        </motion.div>

        {COLUMNS.map((col, i) => (
          <motion.div
            key={col.heading}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: reduce ? 0 : 0.6,
              delay: reduce ? 0 : 0.1 + i * 0.08,
              ease: EASE,
            }}
          >
            <h3 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.2em] text-foreground/70">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex flex-col gap-3 border-t border-black/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:border-white/10">
        <p className="font-sans text-xs text-muted-foreground">
          © 2026 Loveworld Incorporated · Global-First Doctrine
        </p>
        <div className="flex items-center gap-4">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground/70">
            Ref. LWC / MMXXVI
          </p>
          <span className="h-3 w-px bg-black/10 dark:bg-white/10" />
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
