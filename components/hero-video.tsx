"use client";

import Image from "next/image";
import { useState } from "react";
import poster from "@/public/demo-poster.jpg";
import { IconPlay } from "./icons";

const VIDEO_ID = "Yhwn2auqToA";

/** Click-to-load YouTube embed: shows a poster until played, so the page stays fast. */
export function HeroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_40px_120px_-40px_rgba(255,255,255,0.15)]">
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title="WICK demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 cursor-pointer"
          aria-label="Play the WICK demo video"
        >
          <Image
            src={poster}
            alt="A mechanic using WICK at a workshop"
            fill
            priority
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="object-cover grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
          <span className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-white text-black shadow-[0_0_0_10px_rgba(255,255,255,0.12)] transition group-hover:scale-105 md:size-20">
            <IconPlay className="ml-1 size-6 md:size-7" />
          </span>
          <span className="absolute inset-x-5 bottom-5 flex items-end justify-between text-left md:inset-x-7 md:bottom-6">
            <span>
              <span className="block text-[15px] font-medium md:text-lg">See WICK in the workshop</span>
              <span className="mt-1 block text-[13px] text-white/60">Real device, real job, real time</span>
            </span>
            <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-white/80 backdrop-blur">
              2:43
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
