"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;
const SHOW_AFTER = 300;

export function GotoTop() {
  const [visible, setVisible] = useState(false);

  const lenis = useLenis(({ scroll }) => {
    setVisible(scroll > SHOW_AFTER);
  });

  const scrollToTop = () => {
    lenis?.scrollTo(0);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.9 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="group fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-xl border border-black/10 bg-background text-neutral-500 shadow-lg transition-colors hover:border-blue/40 hover:text-blue active:scale-95 sm:bottom-10 sm:right-10 dark:border-white/10 dark:text-neutral-400 dark:shadow-none dark:hover:border-blue/40 dark:hover:text-blue"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5"
          >
            <path d="M8 13V3M3 8l5-5 5 5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default GotoTop;
