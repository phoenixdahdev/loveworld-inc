import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-dvh grid-cols-[var(--padding)_1px_minmax(0,1fr)_1px_var(--padding)] grid-rows-[var(--padding)_1px_minmax(0,1fr)_1px_var(--padding)] [--padding:--spacing(4)] sm:[--padding:--spacing(10)]">
      {/* Frame lines */}
      <div className="col-start-2 row-span-full bg-black/10 dark:bg-white/10" />
      <div className="col-start-4 row-span-full bg-black/10 dark:bg-white/10" />
      <div className="row-start-2 col-span-full bg-black/10 dark:bg-white/10" />
      <div className="row-start-4 col-span-full bg-black/10 dark:bg-white/10" />

      {/* Corner ticks */}
      <div className="relative -right-1 -bottom-1 col-start-1 row-start-1 size-1.75 place-self-end border border-black/10 bg-background dark:border-white/10" />
      <div className="relative -bottom-1 -left-1 col-start-5 row-start-1 size-1.75 self-end justify-self-start border border-black/10 bg-background dark:border-white/10" />
      <div className="relative -top-1 -right-1 col-start-1 row-start-5 size-1.75 self-start justify-self-end border border-black/10 bg-background dark:border-white/10" />
      <div className="relative -top-1 -left-1 col-start-5 row-start-5 size-1.75 place-self-start border border-black/10 bg-background dark:border-white/10" />

      <div className="col-start-3 row-start-3 flex flex-col">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
