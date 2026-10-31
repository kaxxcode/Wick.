import { IconPlay, IconSearch } from "./icons";
import { Reveal } from "./reveal";
import { Container, SectionHeader } from "./ui";

const costs = ["Wasted time", "Inconsistent service", "Slower troubleshooting", "Expert bottlenecks", "Slow ramp-up for juniors"];

export function Problem() {
  return (
    <section id="problem" className="border-t border-white/[0.08] py-24 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader index="2.0" label="The problem" title={<>Physical work is contextual.<br />Help isn&apos;t.</>}>
            When something breaks, most people search online, watch a tutorial, or wait for someone more experienced.
            None of these can see what&apos;s in front of you.
          </SectionHeader>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          <Reveal className="bg-black p-7">
            <Frame>
              <div className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 font-mono text-[11px] text-white/60">
                <IconSearch className="size-3.5 shrink-0" />
                <span className="truncate">black wire thing near engine</span>
              </div>
              <Lines widths={["w-1/2", "w-5/6", "w-2/3"]} />
            </Frame>
            <h3 className="mt-7 text-lg font-medium">Search needs the right words</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/50">
              Most people don&apos;t know what the part is called, so they can&apos;t search for it.
            </p>
          </Reveal>

          <Reveal delay={80} className="bg-black p-7">
            <Frame>
              <div className="relative aspect-video rounded-lg border border-white/10 bg-white/[0.03]">
                <span className="absolute top-2 right-2 font-mono text-[10px] text-white/50">18:42</span>
                <span className="absolute inset-0 m-auto grid size-9 place-items-center rounded-full bg-white text-black">
                  <IconPlay className="ml-0.5 size-3.5" />
                </span>
                <span className="absolute inset-x-3 bottom-3 h-0.5 rounded bg-white/15">
                  <span className="block h-full w-3/5 rounded bg-white/70" />
                </span>
              </div>
            </Frame>
            <h3 className="mt-7 text-lg font-medium">Tutorials can&apos;t see your problem</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/50">
              It&apos;s a different model and a different fault, and it takes 18 minutes to reach your part.
            </p>
          </Reveal>

          <Reveal delay={160} className="bg-black p-7">
            <Frame>
              <div className="flex flex-col gap-2 text-[12px]">
                <span className="self-end rounded-xl rounded-br-sm bg-white px-3 py-2 text-black">Can you look at bay 3?</span>
                <span className="self-end font-mono text-[10px] text-white/40">Seen · 42 min ago</span>
                <span className="self-start rounded-xl rounded-bl-sm border border-white/15 px-3 py-2 text-white/60">
                  Busy, after lunch
                </span>
              </div>
            </Frame>
            <h3 className="mt-7 text-lg font-medium">Experts are a bottleneck</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/50">
              A few senior technicians hold the know-how, and everyone else waits for them.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] text-white/40">
          {costs.map((c) => (
            <span key={c} className="flex items-center gap-2">
              <span className="h-px w-3 bg-white/30" />
              {c}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="dot-grid flex h-44 flex-col justify-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.015] p-5">
      {children}
    </div>
  );
}

function Lines({ widths }: { widths: string[] }) {
  return (
    <div className="space-y-2 px-1">
      {widths.map((w, i) => (
        <div key={i} className={`h-1.5 rounded bg-white/10 ${w}`} />
      ))}
    </div>
  );
}
