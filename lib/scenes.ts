// Monochrome camera scenes used by the hero and the demo.
// Every scene is drawn in a 400x300 viewBox; `box` (x, y, w, h) uses the same units.

export type SceneKey = "bike" | "pcb" | "washer" | "pump";

export type ScriptLine = { who: "you" | "wick"; text: string; lock?: boolean };

export type Scene = {
  label: string;
  title: string;
  context: string;
  tag: string;
  box: [number, number, number, number];
  svg: (uid: string) => string;
  script: ScriptLine[];
};

export const FULL_FRAME: Scene["box"] = [8, 8, 384, 284];

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

export const SCENES: Record<SceneKey, Scene> = {
  bike: {
    label: "Two-wheeler",
    title: "Scooter won't start",
    context: "Bay 3 · Scooter, 125cc",
    tag: "Spark plug · heavy carbon",
    box: [166, 22, 68, 112],
    svg: (u) => `
      <defs>
        <linearGradient id="${u}bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c1c1c"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient>
        <linearGradient id="${u}m" x1="0" x2="1"><stop offset="0" stop-color="#4f4f4f"/><stop offset=".5" stop-color="#c4c4c4"/><stop offset="1" stop-color="#454545"/></linearGradient>
        <linearGradient id="${u}cer" x1="0" x2="1"><stop offset="0" stop-color="#c9c9c9"/><stop offset=".45" stop-color="#f4f4f4"/><stop offset="1" stop-color="#b4b4b4"/></linearGradient>
        <linearGradient id="${u}fin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6c6c6c"/><stop offset="1" stop-color="#363636"/></linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#${u}bg)"/>
      <path d="M-20 40 L120 128" stroke="#2e2e2e" stroke-width="26" stroke-linecap="round"/>
      <path d="M-24 32 L116 120" stroke="#4a4a4a" stroke-width="4" stroke-linecap="round" opacity=".7"/>
      <rect x="92" y="118" width="216" height="200" rx="8" fill="#262626"/>
      ${range(8)
        .map(
          (i) =>
            `<rect x="${58 + (i % 2) * 4}" y="${134 + i * 20}" width="${284 - (i % 2) * 8}" height="11" rx="5.5" fill="url(#${u}fin)"/><rect x="${66 + (i % 2) * 4}" y="${135 + i * 20}" width="${268 - (i % 2) * 8}" height="2" rx="1" fill="#a0a0a0" opacity=".45"/>`,
        )
        .join("")}
      <circle cx="112" cy="124" r="8" fill="url(#${u}m)"/><circle cx="288" cy="124" r="8" fill="url(#${u}m)"/>
      <circle cx="112" cy="124" r="3" fill="#262626"/><circle cx="288" cy="124" r="3" fill="#262626"/>
      <path d="M176 112 h48 l-4 16 h-40z" fill="url(#${u}m)"/>
      <rect x="187" y="76" width="26" height="38" rx="5" fill="url(#${u}cer)"/>
      <rect x="187" y="84" width="26" height="2" fill="#9a9a9a" opacity=".6"/><rect x="187" y="92" width="26" height="2" fill="#9a9a9a" opacity=".6"/><rect x="187" y="100" width="26" height="2" fill="#9a9a9a" opacity=".6"/>
      <rect x="181" y="28" width="38" height="54" rx="11" fill="#0c0c0c"/>
      <rect x="187" y="32" width="6" height="44" rx="3" fill="#333" opacity=".8"/>
      <path d="M200 32 C 214 -4, 300 18, 420 -6" stroke="#0c0c0c" stroke-width="13" fill="none" stroke-linecap="round"/>
      <path d="M200 30 C 214 -6, 300 16, 420 -8" stroke="#333" stroke-width="3" fill="none" opacity=".7"/>`,
    script: [
      { who: "you", text: "It cranks but won't fire, mostly first thing in the morning. What do I check?" },
      {
        who: "wick",
        lock: true,
        text: "I can see the spark plug cap on the cylinder head, so let's start there. Pull the cap off, remove the plug, and hold the tip up to the camera.",
      },
      { who: "you", text: "Okay, here it is." },
      {
        who: "wick",
        text: "The electrode is covered in dry black carbon, which means the mixture is running rich. Clean it with a wire brush and reset the gap to spec. Next we'll check the choke and the air filter.",
      },
    ],
  },

  pcb: {
    label: "Electronics",
    title: "Amplifier, no sound",
    context: "Bench 2 · Audio amplifier",
    tag: "C14 · bulged capacitor",
    box: [270, 160, 60, 60],
    svg: (u) => `
      <defs>
        <radialGradient id="${u}cap" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#7a7a7a"/><stop offset="1" stop-color="#262626"/></radialGradient>
        <radialGradient id="${u}bulge" cx=".42" cy=".38" r=".75"><stop offset="0" stop-color="#f0f0f0"/><stop offset=".35" stop-color="#8a8a8a"/><stop offset="1" stop-color="#262626"/></radialGradient>
      </defs>
      <rect width="400" height="300" fill="#111"/>
      <g stroke="#2b2b2b" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M0 60 H90 L120 90 H210"/><path d="M0 240 H60 L90 210 H250 L300 160"/><path d="M210 130 H260 L290 100 H400"/>
        <path d="M150 300 V250 L180 220"/><path d="M340 300 V240 L360 220 H400"/><path d="M60 0 V30 L80 50"/><path d="M300 0 V40 L320 60 H400"/>
      </g>
      <g fill="#7d7d7d">${[[90, 60], [210, 90], [250, 210], [300, 160], [210, 130], [180, 220], [80, 50], [320, 60]]
        .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5"/>`)
        .join("")}</g>
      <rect x="118" y="100" width="98" height="78" rx="4" fill="#050505" stroke="#2a2a2a"/>
      ${range(8)
        .map(
          (i) =>
            `<rect x="${124 + i * 11.5}" y="92" width="5" height="9" fill="#a8a8a8"/><rect x="${124 + i * 11.5}" y="177" width="5" height="9" fill="#a8a8a8"/>`,
        )
        .join("")}
      <circle cx="130" cy="112" r="3" fill="#222"/>
      <text x="167" y="145" fill="#5c5c5c" font-family="monospace" font-size="11" text-anchor="middle">AMP-IC</text>
      <rect x="240" y="226" width="40" height="30" rx="3" fill="#1a1a1a"/><rect x="246" y="214" width="28" height="14" fill="#9a9a9a"/>
      <text x="260" y="270" fill="#5c5c5c" font-family="monospace" font-size="9" text-anchor="middle">VREG</text>
      <circle cx="300" cy="90" r="20" fill="url(#${u}cap)"/><path d="M290 90 h20 M300 80 v20" stroke="#9a9a9a" stroke-width="1.5"/>
      <circle cx="70" cy="200" r="16" fill="url(#${u}cap)"/><path d="M62 200 h16 M70 192 v16" stroke="#9a9a9a" stroke-width="1.5"/>
      <circle cx="300" cy="190" r="21" fill="url(#${u}bulge)"/><path d="M289 190 h22 M300 179 v22" stroke="#f5f5f5" stroke-width="2"/>
      <text x="300" y="226" fill="#5c5c5c" font-family="monospace" font-size="9" text-anchor="middle">C14</text>
      ${[[40, 120], [40, 140], [360, 130]]
        .map(
          ([x, y]) =>
            `<rect x="${x - 14}" y="${y - 5}" width="28" height="10" rx="4" fill="#8f8f8f"/><rect x="${x - 6}" y="${y - 5}" width="3" height="10" fill="#3a3a3a"/><rect x="${x}" y="${y - 5}" width="3" height="10" fill="#111"/><rect x="${x + 6}" y="${y - 5}" width="3" height="10" fill="#555"/>`,
        )
        .join("")}
      ${range(6)
        .map((i) => `<rect x="${330 + (i % 2) * 14}" y="${240 + Math.floor(i / 2) * 16}" width="8" height="8" fill="#8a8a8a"/>`)
        .join("")}`,
    script: [
      { who: "you", text: "This amp powers on but there's no sound, and there's a faint burnt smell." },
      {
        who: "wick",
        lock: true,
        text: "Unplug it first and give the capacitors a minute to discharge. I can see C14 next to the regulator. Its top is domed, which usually means it has failed.",
      },
      { who: "you", text: "What do I replace it with?" },
      {
        who: "wick",
        text: "Read me the values printed on its side: capacitance and voltage. Get a part that matches both, note which side the stripe is on for polarity, and I'll walk you through desoldering it.",
      },
    ],
  },

  washer: {
    label: "Appliance",
    title: "Washer won't drain",
    context: "Home visit · Front-load washer",
    tag: "Drain filter · likely clogged",
    box: [60, 242, 68, 52],
    svg: (u) => `
      <defs>
        <linearGradient id="${u}body" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ececec"/><stop offset="1" stop-color="#b9b9b9"/></linearGradient>
        <linearGradient id="${u}glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c1c1c"/><stop offset=".48" stop-color="#1c1c1c"/><stop offset=".5" stop-color="#5c5c5c"/><stop offset="1" stop-color="#363636"/></linearGradient>
      </defs>
      <rect width="400" height="300" fill="#141414"/>
      <rect x="0" y="282" width="400" height="18" fill="#222"/>
      <rect x="36" y="-30" width="328" height="326" rx="20" fill="url(#${u}body)"/>
      <rect x="36" y="232" width="328" height="64" fill="#cdcdcd"/>
      <rect x="36" y="232" width="328" height="2" fill="#a9a9a9"/>
      <circle cx="200" cy="110" r="100" fill="#d2d2d2"/>
      <circle cx="200" cy="110" r="88" fill="#a6a6a6"/>
      <circle cx="200" cy="110" r="74" fill="url(#${u}glass)"/>
      <path d="M140 140 q30 -14 60 0 t60 0" stroke="#9a9a9a" stroke-width="2.5" fill="none" opacity=".7"/>
      <path d="M160 60 q30 -20 70 -6" stroke="#fff" stroke-width="6" fill="none" opacity=".15" stroke-linecap="round"/>
      <rect x="288" y="100" width="14" height="30" rx="5" fill="#8d8d8d"/>
      <rect x="70" y="250" width="48" height="34" rx="6" fill="#b5b5b5" stroke="#8d8d8d" stroke-width="1.5"/>
      <rect x="84" y="262" width="20" height="4" rx="2" fill="#7a7a7a"/>
      <ellipse cx="94" cy="296" rx="40" ry="5" fill="#5a5a5a" opacity=".6"/>`,
    script: [
      { who: "you", text: "It stopped mid-cycle and the water won't drain." },
      {
        who: "wick",
        lock: true,
        text: "That small panel at the bottom left is the drain filter cover. Switch the machine off at the wall, then put down towels and a shallow tray, because water will come out.",
      },
      { who: "you", text: "Tray's down." },
      {
        who: "wick",
        text: "Turn the filter slowly anticlockwise and let it drain. When it's empty, pull it out and show me. Lint, hair and coins are the usual culprits.",
      },
    ],
  },

  pump: {
    label: "Industrial",
    title: "Pump vibrating",
    context: "Line 2 · Centrifugal pump",
    tag: "Coupling · possible misalignment",
    box: [212, 124, 68, 82],
    svg: (u) => `
      <defs>
        <linearGradient id="${u}bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#191919"/><stop offset="1" stop-color="#0a0a0a"/></linearGradient>
        <linearGradient id="${u}mot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a6a6a"/><stop offset=".5" stop-color="#3c3c3c"/><stop offset="1" stop-color="#232323"/></linearGradient>
        <linearGradient id="${u}m" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a6a6a6"/><stop offset=".5" stop-color="#e2e2e2"/><stop offset="1" stop-color="#6a6a6a"/></linearGradient>
        <radialGradient id="${u}vol" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#7c7c7c"/><stop offset="1" stop-color="#2f2f2f"/></radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#${u}bg)"/>
      <rect x="0" y="262" width="400" height="38" fill="#1c1c1c"/>
      <rect x="18" y="232" width="364" height="30" rx="3" fill="#2c2c2c"/>
      <rect x="18" y="232" width="364" height="4" fill="#444"/>
      <rect x="50" y="210" width="30" height="24" fill="#262626"/><rect x="160" y="210" width="30" height="24" fill="#262626"/>
      <rect x="28" y="108" width="176" height="108" rx="16" fill="url(#${u}mot)"/>
      ${range(9)
        .map((i) => `<rect x="${46 + i * 16}" y="112" width="5" height="100" rx="2.5" fill="#1a1a1a" opacity=".55"/>`)
        .join("")}
      <rect x="90" y="90" width="56" height="22" rx="4" fill="#4a4a4a"/>
      <rect x="200" y="155" width="26" height="16" fill="url(#${u}m)"/>
      <rect x="222" y="134" width="22" height="58" rx="3" fill="url(#${u}m)"/>
      <rect x="250" y="141" width="22" height="54" rx="3" fill="url(#${u}m)" transform="rotate(4 261 168)"/>
      <rect x="270" y="157" width="22" height="15" fill="url(#${u}m)"/>
      <circle cx="334" cy="168" r="50" fill="url(#${u}vol)"/>
      <circle cx="334" cy="168" r="18" fill="#161616"/>
      <rect x="320" y="72" width="30" height="58" fill="#4a4a4a"/><rect x="312" y="64" width="46" height="12" rx="3" fill="#5a5a5a"/>
      <rect x="306" y="214" width="56" height="20" fill="#333"/>
      ${[[40, 240], [190, 240], [360, 240]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="url(#${u}m)"/>`).join("")}`,
    script: [
      { who: "you", text: "This pump has been vibrating a lot more than usual since yesterday." },
      {
        who: "wick",
        lock: true,
        text: "Lock out and tag the power before you touch it. Looking at the coupling, the gap between the two hubs is wider at the top than at the bottom, which points to angular misalignment.",
      },
      { who: "you", text: "How do I confirm?" },
      {
        who: "wick",
        text: "Lay a straightedge across both hubs at four points around the coupling and measure the gap at each one. Read me the numbers and I'll tell you which way to shim.",
      },
    ],
  },
};

export const SCENE_KEYS = Object.keys(SCENES) as SceneKey[];

export const sceneSvg = (key: SceneKey, uid: string) =>
  `<svg viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">${SCENES[key].svg(uid)}</svg>`;
