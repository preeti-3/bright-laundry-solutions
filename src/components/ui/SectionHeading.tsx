import type { ReactNode } from "react";
import { displayHeading, eyebrow as eyebrowClass } from "@/lib/styles";

export function SectionHeading({ eyebrow, children, centered = false }: { eyebrow: string; children: ReactNode; centered?: boolean }) {
  return <div className={`max-w-[650px] ${centered ? "mx-auto text-center" : ""}`}><p className={eyebrowClass}>{eyebrow}</p><h2 className={`${displayHeading} mb-5 text-[clamp(2rem,3.2vw,3rem)] leading-[1.13] max-sm:text-[1.95rem] [&_em]:not-italic [&_em]:text-[#22c55e]`}>{children}</h2></div>;
}
