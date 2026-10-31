import { IconPlus } from "./icons";
import { Wordmark } from "./wordmark";
import { Reveal } from "./reveal";
import { ButtonGhost, ButtonPrimary, Container } from "./ui";

const faqs = [
  {
    q: "What exactly is WICK?",
    a: "WICK is a voice-and-vision AI assistant for physical-world work. It sees what you're working on, hears your questions, and guides you step by step to diagnose and fix the problem in front of you.",
  },
  {
    q: "What can WICK help with today?",
    a: "We're starting with two-wheeler and vehicle service in independent workshops. Electronics repair, appliance troubleshooting, industrial maintenance and field service come next.",
  },
  {
    q: "Do I need to know the technical name of the part?",
    a: "No. Point at it and describe it however you'd normally say it. WICK uses what it sees to work out what you mean.",
  },
  {
    q: "Does WICK replace experienced technicians?",
    a: "No. WICK makes expert knowledge available to more people. Senior technicians spend less time answering the same questions, and juniors get up to speed faster.",
  },
  {
    q: "Is WICK an app or a device?",
    a: "WICK is its own device, not a phone app. It has a camera to see the job and voice to talk you through it, so your hands stay free. WICK v1 is a working prototype today.",
  },
  {
    q: "How do I get access?",
    a: "Fill in the early access form above. We're onboarding a small group of partners first and will contact you directly.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-white/[0.08] py-24 md:py-36">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs text-white/50">
            <span className="text-white">9.0</span>
            <span className="h-px w-6 bg-white/20" />
            <span>FAQ</span>
          </div>
          <h2 className="text-fade mt-6 text-4xl leading-[1.04] font-medium tracking-[-0.035em] md:text-[56px]">
            Questions, answered.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="border-t border-white/10">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border-b border-white/10" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <IconPlus className="size-4 shrink-0 text-white/50 transition group-open:rotate-45 group-open:text-white" />
                </summary>
                <p className="pr-10 pb-6 text-[15px] leading-relaxed text-white/50">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] py-32 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[520px] bg-[radial-gradient(40%_60%_at_50%_100%,rgba(255,255,255,0.10),transparent)]"
      />
      <Container className="relative text-center">
        <Reveal>
          <Wordmark className="mb-14 text-[72px] md:text-[104px]" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-fade mx-auto max-w-4xl text-[40px] leading-[1.04] font-medium tracking-[-0.04em] md:text-[72px]">
            Show the problem.
            <br />
            Ask a question.
            <br />
            Get guided help.
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-10 flex flex-wrap justify-center gap-2">
          <ButtonPrimary href="#access">Request early access</ButtonPrimary>
          <ButtonGhost href="#demo">Try the demo</ButtonGhost>
        </Reveal>
      </Container>
    </section>
  );
}

const footerCols = [
  { title: "Product", links: [["How it works", "#how"], ["Demo", "#demo"], ["Capabilities", "#features"]] },
  { title: "Solutions", links: [["Vehicle workshops", "#use-cases"], ["Electronics repair", "#use-cases"], ["Industrial maintenance", "#use-cases"], ["Training teams", "#who"]] },
  { title: "Company", links: [["Why now", "#why"], ["FAQ", "#faq"], ["Early access", "#access"]] },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] pt-16 pb-10 text-[13px]">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" aria-label="WICK home">
              <Wordmark className="text-[28px]" />
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-white/45">An AI assistant that sees, hears, and helps with real-world tasks.</p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h5 className="font-medium">{col.title}</h5>
              <ul className="mt-4 space-y-2.5 text-white/45">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="transition hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-white/[0.08] pt-6 font-mono text-[11px] text-white/35">
          <span>© 2026 WICK</span>
          <span>Made in India for the people who fix things.</span>
        </div>
      </Container>
    </footer>
  );
}
