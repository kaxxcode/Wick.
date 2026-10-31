# WICK — landing page

Next.js 16 (App Router) + Tailwind CSS v4. Strictly black and white.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| File | What it is |
| --- | --- |
| `app/page.tsx` | Section order |
| `app/globals.css` | Theme, reveal / waveform / reticle styles |
| `components/hero.tsx` | Hero + the WICK session window mock |
| `components/demo.tsx` | Interactive demo (scenario tabs, typed transcript) |
| `lib/scenes.ts` | The four camera scenes and their scripts |
| `components/early-access.tsx` | Early access form (**not wired to a backend yet**, see the TODO) |
| `components/closing.tsx` | FAQ, final CTA, footer |

## To do before launch

- Connect the early access form to a backend (Formspree, Google Sheets, your API).
- Swap the drawn camera scenes for real product imagery when it's ready.
- Confirm the market-stat sources in `components/why-now.tsx`.
