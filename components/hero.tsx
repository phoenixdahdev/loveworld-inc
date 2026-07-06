"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

function useHeroVariants() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.14,
        delayChildren: reduce ? 0 : 0.1,
      },
    },
  };

  const rise: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, y: 22 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
      };

  const seal: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : {
        hidden: { opacity: 0, scale: 1.14 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
      };

  const headline: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }
    : {
        hidden: { opacity: 0, y: 26, filter: "blur(14px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 1, ease: EASE },
        },
      };

  const rule: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { scaleX: 0, opacity: 0 },
        visible: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: EASE } },
      };

  return { container, rise, seal, headline, rule };
}

export default function Hero() {
  const v = useHeroVariants();

  return (
    <section className="lw-hero relative isolate flex min-h-svh flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .lw-hero { --gold: oklch(0.60 0.062 74); }
            .dark .lw-hero { --gold: oklch(0.80 0.09 84); }
          `,
        }}
      />

      {/* quiet backdrop: a soft lift behind the crest and headline */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[40%] h-[36rem] w-[54rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.05] blur-[100px]" />
        <div
          className="absolute left-1/2 top-[18%] h-56 w-56 -translate-x-1/2 rounded-full opacity-40 blur-[90px]"
          style={{ backgroundColor: "color-mix(in oklab, var(--gold) 45%, transparent)" }}
        />
      </div>

      <motion.div
        variants={v.container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.div variants={v.seal} className="mb-8">
          <ConsularSeal className="h-20 w-20 sm:h-24 sm:w-24" />
        </motion.div>

        <motion.p
          variants={v.rise}
          className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.32em] text-muted-foreground"
        >
          Global-First&nbsp;·&nbsp;Resident Authority
        </motion.p>

        <motion.div
          variants={v.rule}
          style={{ backgroundColor: "color-mix(in oklab, var(--gold) 60%, transparent)" }}
          className="my-7 h-px w-24 origin-center"
        />

        <motion.h1
          variants={v.headline}
          className="text-balance bg-gradient-to-b from-foreground to-foreground/55 bg-clip-text font-mono text-[2.6rem] font-semibold leading-[0.98] tracking-tight text-transparent sm:text-6xl lg:text-[5rem]"
        >
          We are everywhere.
          <br />
          Now we operate as such.
        </motion.h1>

        <motion.p
          variants={v.rise}
          className="mt-7 max-w-xl text-balance font-sans text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          The Office of the Loveworld Consular establishes resident authority and
          commercial presence in every territory of operation, beginning with
          South Africa and Malaysia.
        </motion.p>

        <motion.div
          variants={v.rise}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#mandate"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 font-sans text-sm font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Explore the Mandate
            <svg
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              aria-hidden
            >
              <path
                d="M2.5 8h10m0 0L9 4.5M12.5 8 9 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#doctrine"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 font-sans text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Read the Doctrine
          </a>
        </motion.div>

        {/* territorial register: the real operating structure, not decoration */}
        <motion.div
          variants={v.rise}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground"
        >
          <RegisterEntry place="South Africa" region="SADC" />
          <Divider />
          <RegisterEntry place="Malaysia" region="ASEAN" />
          <Divider />
          <RegisterEntry place="China" region="Production Hub" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function RegisterEntry({ place, region }: { place: string; region: string }) {
  return (
    <span className="flex items-center gap-2">
      <span className="text-foreground/80">{place}</span>
      <span aria-hidden style={{ color: "var(--gold)" }}>
        ·
      </span>
      <span>{region}</span>
    </span>
  );
}

function Divider() {
  return <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />;
}

function ConsularSeal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Seal of the Office of the Loveworld Consular"
      style={{ color: "var(--gold)" }}
    >
      <defs>
        <path id="lw-seal-arc" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0" />
      </defs>
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.9" />
      <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
      <text
        fill="currentColor"
        fontSize="4"
        letterSpacing="0.5"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <textPath href="#lw-seal-arc" startOffset="50%" textAnchor="middle">
          OFFICE OF THE LOVEWORLD CONSULAR
        </textPath>
      </text>
      {/* meridian globe: the global-first mandate */}
      <g fill="none" stroke="currentColor" strokeWidth="0.7">
        <circle cx="50" cy="52" r="13" opacity="0.9" />
        <ellipse cx="50" cy="52" rx="5.4" ry="13" opacity="0.75" />
        <line x1="37" y1="52" x2="63" y2="52" opacity="0.75" />
        <line x1="39.5" y1="45.5" x2="60.5" y2="45.5" opacity="0.55" />
        <line x1="39.5" y1="58.5" x2="60.5" y2="58.5" opacity="0.55" />
      </g>
      <text
        x="50"
        y="90"
        fill="currentColor"
        fontSize="5.5"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        ★
      </text>
    </svg>
  );
}
