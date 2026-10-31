import { HeroVideo } from "./hero-video";
import { ButtonGhost, ButtonPrimary, Container } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(45%_55%_at_50%_0%,rgba(255,255,255,0.10),transparent)]"
      />
      <Container className="relative">
        <FadeUp>
          <a
            href="#device"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1 pr-3 pl-1 text-[13px] text-white/70 transition hover:border-white/20 hover:text-white"
          >
            <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-black">v1</span>
            Meet the first WICK device
          </a>
        </FadeUp>
        <FadeUp delay={80}>
          <h1 className="text-fade mt-7 max-w-4xl text-[44px] leading-[1.02] font-medium tracking-[-0.04em] sm:text-6xl md:text-[80px]">
            AI that sees, hears,
            <br />
            and helps.
          </h1>
        </FadeUp>
        <FadeUp delay={160}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/55 md:text-xl">
            WICK is a voice-and-vision device for physical work. Show it the problem, ask out loud, and get guided step
            by step while your hands stay on the job.
          </p>
        </FadeUp>
        <FadeUp delay={240} className="mt-9 flex flex-wrap items-center gap-2">
          <ButtonPrimary href="#access">Request early access</ButtonPrimary>
          <ButtonGhost href="#demo">Try the interactive demo</ButtonGhost>
        </FadeUp>
      </Container>

      <Container className="relative mt-16 md:mt-24">
        <FadeUp delay={320}>
          <HeroVideo />
        </FadeUp>
      </Container>
    </section>
  );
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`fade-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
