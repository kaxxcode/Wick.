import { FULL_FRAME, SCENES, sceneSvg, type SceneKey } from "@/lib/scenes";

export type ReticleState = "off" | "wide" | "scan" | "lock";

const pct = ([x, y, w, h]: [number, number, number, number]) => ({
  left: `${x / 4}%`,
  top: `${y / 3}%`,
  width: `${w / 4}%`,
  height: `${h / 3}%`,
});

/** A 4:3 camera frame showing one scene, with the WICK reticle on top. */
export function SceneView({
  scene,
  uid,
  reticle = "lock",
  className = "",
}: {
  scene: SceneKey;
  uid: string;
  reticle?: ReticleState;
  className?: string;
}) {
  const s = SCENES[scene];
  const box = reticle === "scan" || reticle === "lock" ? s.box : FULL_FRAME;

  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-neutral-950 ${className}`}>
      <div
        className="absolute inset-0 [&>svg]:h-full [&>svg]:w-full"
        dangerouslySetInnerHTML={{ __html: sceneSvg(scene, uid) }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_45%,transparent_55%,rgba(0,0,0,0.55))]" />
      <div className={`reticle ${reticle}`} style={pct(box)}>
        <span className="c tl" />
        <span className="c tr" />
        <span className="c bl" />
        <span className="c br" />
        <span className="tag rounded-md bg-white px-2 py-1 font-mono text-[10px] font-medium text-black sm:text-[11px]">
          {s.tag}
        </span>
      </div>
    </div>
  );
}
