import { Wordmark } from "./wordmark";

const links = [
  { href: "#device", label: "Device" },
  { href: "#how", label: "How it works" },
  { href: "#demo", label: "Demo" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#why", label: "Why now" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#" aria-label="WICK home">
          <Wordmark className="text-[24px]" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-white/60 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#access"
          className="inline-flex h-8 items-center rounded-full bg-white px-3.5 text-[13px] font-medium text-black transition hover:bg-white/85"
        >
          Request access
        </a>
      </div>
    </header>
  );
}
