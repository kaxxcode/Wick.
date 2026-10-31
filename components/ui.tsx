import type { ReactNode } from "react";
import { IconArrow } from "./icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

export function SectionHeader({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 font-mono text-xs tracking-wide text-white/50">
        <span className="text-white">{index}</span>
        <span className="h-px w-6 bg-white/20" />
        <span className="uppercase">{label}</span>
      </div>
      <h2 className="text-fade mt-6 max-w-3xl text-4xl leading-[1.04] font-medium tracking-[-0.035em] md:text-[56px]">
        {title}
      </h2>
      {children && <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/55">{children}</p>}
    </div>
  );
}

export function ButtonPrimary({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black transition hover:bg-white/85 ${className}`}
    >
      {children}
    </a>
  );
}

export function ButtonGhost({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex h-11 items-center gap-2 rounded-full px-4 text-[15px] font-medium text-white/70 transition hover:text-white"
    >
      {children}
      <IconArrow className="size-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

export function Wave({ on = true, bars = 5, className = "" }: { on?: boolean; bars?: number; className?: string }) {
  return (
    <span className={`wave inline-flex h-4 items-center gap-[3px] ${on ? "on" : ""} ${className}`} aria-hidden>
      {Array.from({ length: bars }, (_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}
