/**
 * The WICK wordmark: lowercase "wick" with a glowing flame dot over the i.
 * Set in live type so it stays crisp at any size; scale it with font-size.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline leading-none font-extrabold tracking-[-0.055em] text-white ${className}`}
      aria-label="wick"
      role="img"
    >
      <span aria-hidden>w</span>
      <span aria-hidden className="relative">
        ı
        <span className="wick-flame absolute top-[0.005em] left-1/2 size-[0.21em] -translate-x-1/2 rounded-full" />
      </span>
      <span aria-hidden>ck</span>
    </span>
  );
}
