import { IconEye, IconHand, IconList, IconMic, IconText, IconUsers } from "./icons";
import { Reveal } from "./reveal";
import { Container, SectionHeader } from "./ui";

const items = [
  {
    icon: IconEye,
    title: "Sees what you're pointing at",
    body: "WICK reads the scene: the component, its condition and what's around it. Its answers are about your problem, not a generic one.",
  },
  {
    icon: IconMic,
    title: "Voice-first",
    body: "Talk to it and it talks back, so you never have to put your tools down to type.",
  },
  {
    icon: IconText,
    title: "No jargon required",
    body: "Describe it the way you'd say it out loud, like “the round thing with the black wire.” WICK works out the part.",
  },
  {
    icon: IconList,
    title: "Step by step",
    body: "Guidance comes one step at a time, at your pace, and WICK checks each step before moving on.",
  },
  {
    icon: IconUsers,
    title: "Expertise that scales",
    body: "Put your best technician's know-how in front of every junior, in every bay, on every shift.",
  },
  {
    icon: IconHand,
    title: "Built for real-world tasks",
    body: "WICK is designed for workshops, service centres and factory floors, where the work is physical.",
  },
];

export function Capabilities() {
  return (
    <section id="features" className="border-t border-white/[0.08] py-24 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader index="5.0" label="Capabilities" title={<>Not another chatbot.<br />A co-worker on the job.</>}>
            Docs, SOPs, videos and chatbots are static. WICK is multimodal, voice-first and aware of what it sees, so it
            works alongside you while you do the job.
          </SectionHeader>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 70} className="bg-black p-7 md:p-8">
              <Icon className="size-5" />
              <h3 className="mt-10 text-[17px] font-medium">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/50">{body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
