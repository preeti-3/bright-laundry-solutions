import Image from "next/image";
import type { ReactNode } from "react";
import type { Feature } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { displayHeading, shell } from "@/lib/styles";

export function FeatureSplit({ title, body, features, image, overlayImage, reverse = false, cta = "Start Your Franchise →" }: { eyebrow?: string; title: ReactNode; body: ReactNode; features: Feature[]; image: string; overlayImage?: string; reverse?: boolean; cta?: string }) {
  return (
    <section className={`${shell} mt-[150px] flex min-h-[520px] items-center justify-between gap-[72px] max-lg:mt-[90px] max-lg:flex-col max-lg:gap-10 ${reverse ? "flex-row-reverse max-lg:flex-col" : ""}`}>
      <div className="relative h-[520px] w-[529px] shrink-0 max-lg:w-full max-sm:h-[380px]">
        <Image className="object-cover" src={image} alt="Modern Bright Laundry Solutions store" fill sizes="(max-width: 768px) 100vw, 529px" />
        {overlayImage && <div className="absolute top-0 left-0 h-[325px] w-[275px] border-[10px] border-white shadow-[0_0_30px_rgba(0,0,0,.1)]"><Image className="object-cover" src={overlayImage} alt="Commercial laundry machines" fill sizes="275px" /></div>}
      </div>
      <div className="w-[504px] max-w-full flex-1"><h2 className={`${displayHeading} mb-4 text-[48px] leading-[1.13] capitalize max-sm:text-[34px] [&_em]:font-black [&_em]:not-italic [&_em]:text-[#89b92f]`}>{title}</h2><p className="mb-[27px] leading-[1.4] text-black/80">{body}</p>{features.length > 0 && <div className="mb-[50px] grid gap-4">{features.map((feature) => <article className="flex items-center gap-4" key={feature.title}><span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#193962]/10"><Image src={feature.icon} alt="" width={24} height={24} /></span><div><h3 className="mb-1 font-bold">{feature.title}</h3><p className="leading-[1.35] text-black/80">{feature.description}</p></div></article>)}</div>}<Button href="/get-franchise">{cta}</Button></div>
    </section>
  );
}
