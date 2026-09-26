import type { CSSProperties } from "react";
import { bubbles } from "@/data/site";

export function Bubbles() {
  return <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">{bubbles.map((bubble, index) => <span className="absolute -bottom-20 rounded-full border border-[#22c55e]/30 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.8),rgba(14,165,233,.12))] motion-reduce:hidden" key={index} style={{ left: bubble.left, width: `${bubble.size}px`, height: `${bubble.size}px`, opacity: bubble.opacity } as CSSProperties} />)}</div>;
}
