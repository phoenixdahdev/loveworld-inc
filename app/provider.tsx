"use client";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "next-themes";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GotoTop } from "@/components/goto-top";

export function Provider({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ReactLenis root>
        {children}
        <GotoTop />
      </ReactLenis>
    </ThemeProvider>
  );
}
