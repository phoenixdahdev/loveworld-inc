"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before next-themes hydrates, assume dark (matches defaultTheme in Provider).
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative inline-flex size-9 items-center justify-center overflow-hidden rounded-md border border-black/10 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10"
      suppressHydrationWarning
    >
      {/* Sun: visible in dark mode */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute size-4 scale-0 rotate-90 transition-all duration-500 ease-out dark:scale-100 dark:rotate-0"
        style={{ transitionTimingFunction: EASE }}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      {/* Moon: visible in light mode */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute size-4 scale-100 rotate-0 transition-all duration-500 ease-out dark:scale-0 dark:-rotate-90"
        style={{ transitionTimingFunction: EASE }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      {/* Keeps the button size stable before hydration */}
      {!mounted && <span className="size-4" />}
    </button>
  );
}
