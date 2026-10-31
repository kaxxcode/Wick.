import { IconCheck } from "./icons";
import { Reveal } from "./reveal";
import { Container, SectionHeader, Wave } from "./ui";

export function How() {
  return (
    <section id="how" className="border-t border-white/[0.08] py-24 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader index="3.0" label="How it works" title="Show. Ask. Fix.">
            You don&apos;t have to type out a long description. Show WICK what&apos;s wrong and talk to it the way you&apos;d
            talk to a senior technician.
          </SectionHeader>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          <Reveal>
            <Visual>
              <div className="relative size-24">
                {["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"].map((c) => (
                  <span key={c} className={`absolute size-5 border-white ${c}`} />
                ))}
                <span className="absolute inset-0 m-auto size-8 rounded-full border border-white/40" />
                <span className="absolute inset-0 m-auto size-1.5 rounded-full bg-white" />
              </div>
            </Visual>
            <StepText n="01" title="Point">
              Put the engine, board, appliance or machine in front of WICK. Its camera identifies the components in view.
            </StepText>
          </Reveal>

          <Reveal delay={80}>
            <Visual>
              <Wave bars={7} className="h-14 gap-1.5 text-white [&>i]:w-1" />
            </Visual>
            <StepText n="02" title="Ask">
              Say what&apos;s happening in your own words, like &ldquo;it cranks but won&apos;t start.&rdquo; You don&apos;t need the technical
              term.
            </StepText>
          </Reveal>

          <Reveal delay={160}>
            <Visual>
              <div className="w-48 space-y-2 text-[12px]">
                <div className="flex items-center gap-2 text-white/35 line-through">
                  <span className="grid size-4 place-items-center rounded-full bg-white/40 text-black">
                    <IconCheck className="size-2.5" />
                  </span>
                  Remove the cap
                </div>
                <div className="flex items-center gap-2 rounded-md bg-white/[0.07] px-2 py-1.5 ring-1 ring-white/15">
                  <span className="grid size-4 place-items-center rounded-full border border-white">
                    <span className="size-1.5 rounded-full bg-white" />
                  </span>
                  Show me the tip
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <span className="size-4 rounded-full border border-white/25" />
                  Re-gap to spec
                </div>
              </div>
            </Visual>
            <StepText n="03" title="Get guided">
              WICK tells you what to inspect and what to do next, one step at a time, and checks your work as you go.
            </StepText>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Visual({ children }: { children: React.ReactNode }) {
  return (
    <div className="dot-grid grid aspect-[4/3] place-items-center rounded-2xl border border-white/10 bg-white/[0.015]">
      {children}
    </div>
  );
}

function StepText({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-white/40">{n}</span>
        <h3 className="text-xl font-medium tracking-tight">{title}</h3>
      </div>
      <p className="mt-2 text-[15px] leading-relaxed text-white/50">{children}</p>
    </div>
  );
}
