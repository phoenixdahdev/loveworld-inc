"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

// TODO: replace with the real office inbox once correspondence is provisioned.
const CONTACT_EMAIL = "office@loveworldconsular.org";

const ROUTES = [
  { label: "Appointment & nomination", desc: "Prospective Consulars and those nominating them." },
  { label: "Partnerships & distribution", desc: "Manufacturers, distributors, and regional partners." },
  { label: "Media & press", desc: "Interviews, briefings, and press enquiries." },
];

const OFFICES = [
  { region: "South Africa", city: "Johannesburg", locale: "Sandton / Rosebank" },
  { region: "Malaysia", city: "Kuala Lumpur", locale: "KL Sentral / Mont Kiara" },
];

export function Contact() {
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const territory = String(data.get("territory") ?? "General enquiry");
    const message = String(data.get("message") ?? "");

    const subject = `Enquiry: ${territory}`;
    const body = `Name: ${name}\nEmail: ${email}\nTerritory: ${territory}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "w-full rounded-lg border border-black/10 bg-transparent px-4 py-2.5 font-sans text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none dark:border-white/10";
  const labelClass =
    "font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground";

  return (
    <section
      id="contact"
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
            § 05 · Contact
          </motion.p>
          <motion.h2
            variants={rise}
            className="mt-5 max-w-3xl text-balance font-mono text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Begin a correspondence.
          </motion.h2>
          <motion.p
            variants={rise}
            className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            For appointment, partnership, media, or general enquiry, reach the
            Office of the Loveworld Consular. Every message is directed to the
            resident authority in your territory.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* Enquiry form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-col gap-5"
          >
            <motion.div variants={rise} className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
              </div>
            </motion.div>

            <motion.div variants={rise} className="flex flex-col gap-2">
              <label htmlFor="territory" className={labelClass}>
                Territory of interest
              </label>
              <select id="territory" name="territory" defaultValue="General enquiry" className={inputClass}>
                <option>General enquiry</option>
                <option>South Africa</option>
                <option>Malaysia</option>
                <option>Another territory</option>
              </select>
            </motion.div>

            <motion.div variants={rise} className="flex flex-col gap-2">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea id="message" name="message" required rows={5} className={`${inputClass} resize-y`} />
            </motion.div>

            <motion.div variants={rise}>
              <button
                type="submit"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 font-sans text-sm font-medium text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Send enquiry
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" aria-hidden>
                  <path d="M2.5 8h10m0 0L9 4.5M12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          </motion.form>

          {/* Direct channels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="flex flex-col"
          >
            <motion.div variants={rise}>
              <h3 className={labelClass}>Direct</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-block font-mono text-base text-foreground underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </motion.div>

            <motion.div variants={rise} className="mt-8 border-t border-black/10 pt-8 dark:border-white/10">
              <h3 className={labelClass}>Routes</h3>
              <ul className="mt-4 space-y-4">
                {ROUTES.map((r) => (
                  <li key={r.label}>
                    <p className="font-sans text-sm font-medium text-foreground">{r.label}</p>
                    <p className="mt-0.5 font-sans text-sm text-muted-foreground">{r.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={rise} className="mt-8 border-t border-black/10 pt-8 dark:border-white/10">
              <h3 className={labelClass}>Offices</h3>
              <ul className="mt-4 space-y-3">
                {OFFICES.map((o) => (
                  <li key={o.region}>
                    <p className="font-sans text-sm">
                      <span className="text-foreground">{o.region}</span>
                      <span className="text-muted-foreground"> · {o.city}</span>
                    </p>
                    <p className="mt-0.5 font-sans text-xs text-muted-foreground/70">
                      {o.locale}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
