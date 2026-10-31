import { IconArrow } from "./icons";
import { Reveal } from "./reveal";
import { Container, SectionHeader } from "./ui";

const cases = [
  { title: "Two-wheeler service", body: "Starting, charging and running faults on the bikes and scooters that come in every day.", now: true },
  { title: "Independent workshops", body: "Junior mechanics troubleshoot faster without pulling the owner off every job.", now: true },
  { title: "Electronics repair", body: "Spot failed components, trace faults and follow safe rework steps at the bench." },
  { title: "Appliance troubleshooting", body: "Guided checks for washers, ACs, fridges and more." },
  { title: "Industrial maintenance", body: "Support on unfamiliar machines, from inspection routines to complex fault-finding." },
  { title: "Field service", body: "Guided diagnostics for technician teams spread across many sites." },
];

const audiences = [
  { title: "Independent repair shops", need: "Faster troubleshooting and consistent work across mechanics.", gets: "More jobs closed, done right the first time" },
  { title: "Enterprise service teams", need: "Expert knowledge scaled across many technicians and locations.", gets: "One standard of service everywhere" },
  { title: "Industrial maintenance", need: "Guidance on unfamiliar machines and complex troubleshooting steps.", gets: "Less downtime waiting on the one expert" },
  { title: "Training & enablement", need: "Shorter onboarding for junior staff.", gets: "New hires learn on real jobs, with guidance" },
];

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-white/[0.08] py-24 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader index="6.0" label="Use cases" title={<>Starting in the workshop.<br />Built for everywhere after.</>} />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-16 border-t border-white/10">
            {cases.map((c, i) => (
              <div
                key={c.title}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-b border-white/10 py-6 md:grid-cols-[3.5rem_18rem_1fr_auto] md:gap-6"
              >
                <span className="font-mono text-xs text-white/35">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[17px] font-medium">{c.title}</h3>
                <p className="col-span-2 col-start-2 row-start-2 text-[15px] text-white/50 md:col-span-1 md:col-start-auto md:row-start-auto">
                  {c.body}
                </p>
                <span
                  className={`col-start-3 row-start-1 justify-self-end rounded-full px-2.5 py-0.5 font-mono text-[10px] tracking-wide uppercase md:col-start-auto md:row-start-auto ${
                    c.now ? "bg-white text-black" : "border border-white/15 text-white/50"
                  }`}
                >
                  {c.now ? "Now" : "Next"}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <div id="who" className="mt-28">
          <Reveal>
            <h3 className="text-fade text-3xl font-medium tracking-[-0.03em] md:text-4xl">Who it&apos;s for</h3>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 70} className="flex flex-col bg-black p-7">
                <h4 className="text-[16px] font-medium">{a.title}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-white/50">{a.need}</p>
                <div className="min-h-8 flex-1" />
                <p className="flex gap-2 border-t border-white/10 pt-5 text-[14px] text-white/85">
                  <IconArrow className="mt-1 size-3.5 shrink-0" />
                  {a.gets}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
