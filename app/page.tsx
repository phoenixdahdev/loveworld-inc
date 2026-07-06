"use client";

import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        {/* Figtree — sans */}
        <motion.span
          variants={item}
          className="mb-8 font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          Loveworld Incorporated
        </motion.span>

        {/* Instrument Serif — the "mono" slot */}
        <motion.h1
          variants={item}
          className="text-balance font-mono text-5xl font-normal leading-[1.05] tracking-tight sm:text-7xl"
        >
          The Office of the Loveworld Consular
        </motion.h1>

        {/* Figtree — sans */}
        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-balance font-sans text-lg leading-relaxed text-muted-foreground"
        >
          Establishing resident authority and commercial presence across South
          Africa, Malaysia, and every territory of operation.
        </motion.p>

        {/* Instrument Serif — at display scale */}
        <motion.p
          variants={item}
          className="mt-12 font-mono text-2xl leading-snug text-foreground/80 sm:text-3xl"
        >
          &ldquo;We are everywhere. Now we operate as such.&rdquo;
        </motion.p>
      </motion.div>
    </main>
  );
}
