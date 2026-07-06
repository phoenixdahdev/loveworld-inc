import type { Metadata } from "next";
import { Figtree, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Provider } from "./provider";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Office of the Loveworld Consular",
    template: "%s · Loveworld Consular",
  },
  description:
    "The Office of the Loveworld Consular, establishing resident authority and commercial presence across South Africa, Malaysia, and every territory of operation.",
  applicationName: "Loveworld Consular",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        spaceGrotesk.variable,
        "font-sans",
        figtree.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
