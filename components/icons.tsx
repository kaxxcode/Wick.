import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export const IconEye = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const IconMic = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="9" y="2.5" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3.5" />
  </svg>
);

export const IconList = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 6h11M9 12h11M9 18h11" />
    <path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2" />
  </svg>
);

export const IconScan = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" />
    <circle cx="12" cy="12" r="3.5" />
  </svg>
);

export const IconText = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 6h16M4 12h10M4 18h7" />
    <path d="m15 15 2.5 2.5L22 13" />
  </svg>
);

export const IconUsers = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8" />
  </svg>
);

export const IconHand = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V10M10 9.5v-6a1.5 1.5 0 0 1 3 0v6M13 9.5V5a1.5 1.5 0 0 1 3 0v6" />
    <path d="M16 8.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.5a6.5 6.5 0 0 1-5.3-2.8L3.6 14.4a1.6 1.6 0 0 1 2.6-1.9L7 13.5" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base} strokeWidth={2.4} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const IconArrow = (p: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlus = (p: IconProps) => (
  <svg {...base} strokeWidth={1.8} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconPlay = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
  </svg>
);

export const IconSearch = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const IconBike = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="5.5" cy="16.5" r="3.5" />
    <circle cx="18.5" cy="16.5" r="3.5" />
    <path d="M5.5 16.5 9 9h5l4.5 7.5M12 9l-1.5-3H8M14 9l1.5-2.5H18" />
  </svg>
);

export const IconChip = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
  </svg>
);

export const IconWasher = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
    <circle cx="12" cy="13.5" r="4.5" />
    <path d="M7.5 6h.01M10.5 6h5" />
  </svg>
);

export const IconFactory = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2.5 21V10l6 3.5V10l6 3.5V4h4l1 17zM2.5 21h19M7 17h2M12 17h2" />
  </svg>
);

export const IconPin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const IconWrench = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3l9.4-9.4a4 4 0 0 0-5-5l2.6 2.6-.6 2.4-2.4.6z" />
  </svg>
);

export const IconGrad = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2 9l10-5 10 5-10 5z" />
    <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6" />
  </svg>
);

export const IconInbox = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 13h5l1.5 3h5L16 13h5" />
    <path d="M5.5 5h13L21 13v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" />
  </svg>
);

export const IconBook = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
    <path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5" />
  </svg>
);
