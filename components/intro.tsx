import { IconBike, IconChip, IconFactory, IconGrad, IconPin, IconWasher } from "./icons";
import { Reveal } from "./reveal";
import { Container } from "./ui";

const places = [
  { icon: IconBike, label: "Vehicle workshops" },
  { icon: IconChip, label: "Electronics repair" },
  { icon: IconWasher, label: "Appliance service" },
  { icon: IconFactory, label: "Factory floors" },
  { icon: IconPin, label: "Field service" },
  { icon: IconGrad, label: "Technician training" },
];

export function Intro() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <Reveal>
          <p className="max-w-4xl text-[28px] leading-[1.2] font-medium tracking-[-0.025em] md:text-[44px]">
            Most AI is built for screens.{" "}
            <span className="text-white/40">
              But much of the world&apos;s important work happens at a bench, under a vehicle or beside a machine,
              where the problem is right in front of you and your hands are busy. WICK is built for that work.
            </span>
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {places.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-6 bg-black p-5 text-white/55">
                <Icon className="size-5 text-white" />
                <span className="text-[13px]">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
