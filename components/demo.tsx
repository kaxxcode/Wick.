"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SCENES, SCENE_KEYS, type SceneKey } from "@/lib/scenes";
import { IconBike, IconChip, IconFactory, IconMic, IconWasher } from "./icons";
import { Reveal } from "./reveal";
import { SceneView, type ReticleState } from "./scene-view";
import { Container, SectionHeader, Wave } from "./ui";

type Line = { who: "you" | "wick"; text: string };
type Status = "Ready" | "Listening" | "Looking" | "Speaking";

const TAB_ICONS: Record<SceneKey, typeof IconBike> = {
  bike: IconBike,
  pcb: IconChip,
  washer: IconWasher,
  pump: IconFactory,
};

export function Demo() {
  const [scene, setScene] = useState<SceneKey>("bike");
  const [lines, setLines] = useState<Line[]>([]);
  const [status, setStatus] = useState<Status>("Ready");
  const [reticle, setReticle] = useState<ReticleState>("off");
  const [runId, setRunId] = useState(0);

  const run = useRef(0);
  const autoplay = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const playNext = useRef<(key: SceneKey) => void>(() => {});

  const play = useCallback(async (key: SceneKey) => {
    const id = ++run.current;
    const alive = () => id === run.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));
    if (timer.current) clearTimeout(timer.current);

    setScene(key);
    setRunId(id);
    setLines([]);
    setReticle("off");
    setStatus("Ready");
    await sleep(400);

    for (const line of SCENES[key].script) {
      if (!alive()) return;

      if (line.lock) {
        setStatus("Looking");
        setReticle("wide");
        await sleep(600);
        if (!alive()) return;
        setReticle("scan");
        await sleep(800);
        if (!alive()) return;
        setReticle("lock");
        await sleep(350);
      }

      setStatus(line.who === "you" ? "Listening" : "Speaking");
      setLines((prev) => [...prev, { who: line.who, text: reduce ? line.text : "" }]);

      if (!reduce) {
        const speed = line.who === "you" ? 22 : 13;
        for (let i = 1; i <= line.text.length; i++) {
          if (!alive()) return;
          const text = line.text.slice(0, i);
          setLines((prev) => [...prev.slice(0, -1), { who: line.who, text }]);
          await new Promise((r) => setTimeout(r, speed));
        }
      }
      setStatus("Ready");
      await sleep(line.who === "you" ? 450 : 750);
    }

    if (alive() && autoplay.current) {
      const next = SCENE_KEYS[(SCENE_KEYS.indexOf(key) + 1) % SCENE_KEYS.length];
      timer.current = setTimeout(() => autoplay.current && playNext.current(next), 4000);
    }
  }, []);

  useEffect(() => {
    playNext.current = play;
  }, [play]);

  // Start once the demo scrolls into view.
  useEffect(() => {
    const el = root.current;
    const runs = run;
    const timers = timer;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play("bike");
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      runs.current++;
      if (timers.current) clearTimeout(timers.current);
    };
  }, [play]);

  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight });
  }, [lines]);

  const choose = (key: SceneKey) => {
    autoplay.current = false;
    play(key);
  };

  const s = SCENES[scene];
  const busy = status === "Listening" || status === "Speaking";

  return (
    <section id="demo" className="border-t border-white/[0.08] py-24 md:py-36">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionHeader index="4.0" label="Demo" title="One assistant for every bench.">
              Pick a scenario to see how a WICK session goes.
            </SectionHeader>
          </Reveal>
          <Reveal delay={80}>
            <div role="tablist" aria-label="Scenarios" className="flex flex-wrap gap-1 rounded-full border border-white/10 p-1">
              {SCENE_KEYS.map((k) => {
                const Icon = TAB_ICONS[k];
                const active = k === scene;
                return (
                  <button
                    key={k}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => choose(k)}
                    className={`inline-flex h-8 cursor-pointer items-center gap-2 rounded-full px-3.5 text-[13px] transition ${
                      active ? "bg-white text-black" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <Icon className="size-4" />
                    {SCENES[k].label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div
            ref={root}
            className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] lg:grid-cols-[1.35fr_1fr]"
          >
            {/* Camera */}
            <div className="flex flex-col border-white/[0.08] lg:border-r">
              <div className="flex h-11 items-center justify-between border-b border-white/[0.08] px-4 text-[12px]">
                <span className="flex items-center gap-2 font-medium">
                  <span className="live-dot" />
                  Live
                </span>
                <span className="font-mono text-[11px] text-white/40">{s.context}</span>
              </div>
              <SceneView scene={scene} uid={`demo${runId}_`} reticle={reticle} />
            </div>

            {/* Transcript */}
            <div className="flex min-h-[420px] flex-col border-t border-white/[0.08] lg:border-t-0">
              <div className="flex h-11 items-center justify-between border-b border-white/[0.08] px-5 text-[12px]">
                <span className="font-medium">{s.title}</span>
                <span className="flex items-center gap-2 font-mono text-[11px] text-white/50">
                  <Wave on={busy} bars={5} className="h-3 text-white/70" />
                  {status}
                </span>
              </div>

              <div ref={log} aria-live="polite" className="no-scrollbar flex max-h-[460px] flex-1 flex-col gap-4 overflow-y-auto p-5">
                {lines.map((l, i) => (
                  <div key={`${runId}-${i}`} className={l.who === "you" ? "self-end text-right" : "self-start"}>
                    <div className="mb-1.5 font-mono text-[10px] tracking-wide text-white/35 uppercase">
                      {l.who === "you" ? "You" : "WICK"}
                    </div>
                    <p
                      className={`max-w-[34ch] rounded-2xl px-4 py-2.5 text-left text-[14px] leading-relaxed ${
                        l.who === "you"
                          ? "rounded-tr-sm border border-white/10 bg-white/[0.04] text-white/85"
                          : "rounded-tl-sm bg-white text-black"
                      }`}
                    >
                      {l.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 border-t border-white/[0.08] px-5 py-3">
                <span className="grid size-8 place-items-center rounded-full bg-white text-black">
                  <IconMic className="size-4" />
                </span>
                <span className="text-[13px] text-white/45">Hands-free, voice-first</span>
                <button
                  type="button"
                  onClick={() => choose(scene)}
                  className="ml-auto cursor-pointer rounded-full border border-white/10 px-3 py-1.5 text-[12px] text-white/70 transition hover:border-white/25 hover:text-white"
                >
                  Replay
                </button>
              </div>
            </div>
          </div>
        </Reveal>
        <p className="mt-4 font-mono text-[11px] text-white/35">Illustrative sessions showing the intended experience.</p>
      </Container>
    </section>
  );
}
