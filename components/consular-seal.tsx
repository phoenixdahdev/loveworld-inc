// Seal of the Office of the Loveworld Consular: the brand mark.
// Inherits its color from `currentColor`, so callers set the tone:
// gold in the hero, foreground in the navbar/footer.
export function ConsularSeal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Seal of the Office of the Loveworld Consular"
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
