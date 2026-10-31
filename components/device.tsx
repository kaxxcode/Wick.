import Image from "next/image";
import device from "@/public/wick-v1.webp";
import { IconEye, IconList, IconMic, IconWrench } from "./icons";
import { Reveal } from "./reveal";
import { Container } from "./ui";

const parts = [
  { icon: IconEye, title: "Camera on top", body: "Looks at the component, board or machine in front of you." },
  { icon: IconMic, title: "Voice in, voice out", body: "You ask out loud and WICK answers out loud. No screen to tap." },
  { icon: IconList, title: "Reasoning inside", body: "Works out what's wrong, what to check and what to do next." },
  { icon: IconWrench, title: "Built for the bench", body: "Small, self-contained and USB powered, so it fits next to the job." },
];

export function Device() {
  return (
    <section id="device" className="border-t border-white/[0.08] py-24 md:py-36">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <Reveal>
          <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
            <Image
              src={device}
              alt="The WICK v1 prototype: a hand-built box with a camera module on top and electronics inside"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-[48%_60%] grayscale transition duration-700 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-5 bottom-5 flex items-center justify-between font-mono text-[11px] text-white/70">
              <span>WICK v1 · working prototype</span>
              <span className="flex items-center gap-2">
                <span className="live-dot" />
                Powered on
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs text-white/50">
              <span className="text-white">1.0</span>
              <span className="h-px w-6 bg-white/20" />
              <span>THE DEVICE</span>
            </div>
            <h2 className="text-fade mt-6 text-4xl leading-[1.04] font-medium tracking-[-0.035em] md:text-[56px]">
              Not an app.
              <br />A device that sits with you.
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/55">
              WICK v1 is a working prototype. It sees the part you&apos;re working on, listens to your question and talks
              you through the fix.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {parts.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-black p-6">
                  <Icon className="size-5" />
                  <h3 className="mt-6 text-[15px] font-medium">{title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/50">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
