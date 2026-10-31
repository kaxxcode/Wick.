import { Reveal } from "./reveal";
import { Container, SectionHeader } from "./ui";

const reasons = [
  "Voice AI can now hold a real conversation.",
  "Multimodal models combine vision, audio and reasoning.",
  "Businesses want more productivity from frontline teams.",
  "Service quality is still inconsistent, and skilled workers are hard to onboard.",
  "Manufacturing, repair and electronics in India are growing fast.",
];

const stats = [
  { value: "₹6.73 L cr", label: "India's auto component industry, FY25 (US$ 80.2B)" },
  { value: "₹99,948 cr", label: "Domestic automotive aftermarket, FY25" },
  { value: "$10B → $14B", label: "Indian automotive aftermarket, 2023 → 2028 (projected)" },
  { value: "17% → 25%", label: "Manufacturing's share of India's GDP, today vs. 2035 target" },
];

export function WhyNow() {
  return (
    <section id="why" className="border-t border-white/[0.08] py-24 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader index="7.0" label="Why now" title={<>AI already helps at a desk.<br />Now it can help at the bench.</>}>
            Workshops, repair shops, factories, service centres, labs and homes all need help at the moment the problem
            is in front of them.
          </SectionHeader>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal>
            <ol className="border-t border-white/10">
              {reasons.map((r, i) => (
                <li key={r} className="flex gap-5 border-b border-white/10 py-5 text-[15px] text-white/75">
                  <span className="font-mono text-xs text-white/35">{String(i + 1).padStart(2, "0")}</span>
                  {r}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {stats.map((s) => (
                <div key={s.value} className="bg-black p-7">
                  <div className="text-[30px] font-medium tracking-[-0.03em] whitespace-nowrap md:text-[34px]">{s.value}</div>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/45">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[11px] text-white/30">
              Sources: ACMA (auto components, aftermarket); IBEF / Government of India (manufacturing).
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
