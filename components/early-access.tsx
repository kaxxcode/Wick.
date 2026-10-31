"use client";

import { useState, type FormEvent } from "react";
import { IconCheck } from "./icons";
import { Reveal } from "./reveal";
import { Container } from "./ui";

const field =
  "h-11 w-full rounded-lg border border-white/10 bg-white/[0.02] px-3.5 text-[15px] text-white placeholder:text-white/30 outline-none transition focus:border-white/40";

export function EarlyAccess() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // TODO: send to a real backend (Formspree, Google Sheets, your API). For now it validates and shows the success state.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next = { name: !data.name?.trim(), contact: !data.contact?.trim() };
    setErrors(next);
    if (next.name || next.contact) return;
    console.log("WICK early access request", data);
    setSent(true);
  };

  return (
    <section id="access" className="border-t border-white/[0.08] py-24 md:py-36">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs text-white/50">
            <span className="text-white">8.0</span>
            <span className="h-px w-6 bg-white/20" />
            <span>EARLY ACCESS</span>
          </div>
          <h2 className="text-fade mt-6 text-4xl leading-[1.04] font-medium tracking-[-0.035em] md:text-[56px]">
            Bring WICK to your workshop.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/55">
            We&apos;re working with a small group of early partners to shape WICK around real jobs. Tell us about yours.
          </p>
          <ul className="mt-10 space-y-3 text-[15px] text-white/75">
            {["Early access as features ship", "A direct line to the founding team", "A say in which workflows we build next"].map((p) => (
              <li key={p} className="flex items-center gap-3">
                <IconCheck className="size-4 text-white" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid size-12 place-items-center rounded-full bg-white text-black">
                  <IconCheck className="size-5" />
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-tight">You&apos;re on the list.</h3>
                <p className="mt-2 text-white/50">Thanks. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" htmlFor="name">
                    <input id="name" name="name" autoComplete="name" placeholder="Your name" className={`${field} ${errors.name ? "border-white" : ""}`} />
                  </Field>
                  <Field label="Email or phone" htmlFor="contact">
                    <input id="contact" name="contact" placeholder="you@workshop.com" className={`${field} ${errors.contact ? "border-white" : ""}`} />
                  </Field>
                </div>
                <Field label="Workshop / company" htmlFor="org">
                  <input id="org" name="org" autoComplete="organization" placeholder="Company name" className={field} />
                </Field>
                <Field label="I'm part of a…" htmlFor="type">
                  <select id="type" name="type" className={`${field} appearance-none bg-[#0a0a0a]`}>
                    <option>Independent repair shop</option>
                    <option>Enterprise service team</option>
                    <option>Industrial maintenance team</option>
                    <option>Training &amp; enablement team</option>
                    <option>Something else</option>
                  </select>
                </Field>
                <Field label="What would you use WICK for?" htmlFor="message" optional>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="e.g. Our juniors struggle with electrical faults on scooters"
                    className={`${field} h-auto resize-none py-3`}
                  />
                </Field>
                {(errors.name || errors.contact) && (
                  <p className="text-[13px] text-white/70">Please add your name and an email or phone number.</p>
                )}
                <button
                  type="submit"
                  className="h-11 w-full cursor-pointer rounded-full bg-white text-[15px] font-medium text-black transition hover:bg-white/85"
                >
                  Request early access
                </button>
                <p className="text-center text-[12px] text-white/35">We&apos;ll only use this to contact you about WICK.</p>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-[13px] text-white/60">
        {label} {optional && <span className="text-white/30">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
