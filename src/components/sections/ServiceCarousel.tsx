"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type ServiceSlide = {
  title: string;
  description: string;
  image: string;
};

export function ServiceCarousel({ slides }: { slides: readonly ServiceSlide[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const move = (direction: 1 | -1) => {
    const viewport = viewportRef.current;
    const firstCard = viewport?.firstElementChild?.firstElementChild as HTMLElement | null;
    if (!viewport || !firstCard) return;

    const step = firstCard.offsetWidth + 24;
    const atEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - step / 2;
    viewport.scrollTo({ left: direction === 1 && atEnd ? 0 : Math.max(0, viewport.scrollLeft + step * direction), behavior: "smooth" });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!pausedRef.current && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) move(1);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      ref={viewportRef}
      className="services-scrollbar-hidden overflow-x-auto scroll-smooth"
      role="region"
      aria-label="Laundry services carousel"
      tabIndex={0}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onFocus={() => { pausedRef.current = true; }}
      onBlur={() => { pausedRef.current = false; }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") move(1);
        if (event.key === "ArrowLeft") move(-1);
      }}
    >
      <div className="flex w-max gap-6">
        {slides.map((service) => (
          <article className="w-[362px] shrink-0 snap-start max-sm:w-[calc(100vw-64px)]" key={service.title}>
            <div className="relative h-[306px] overflow-hidden max-sm:h-auto max-sm:aspect-[362/306]"><Image className="object-cover" src={service.image} alt={service.title} fill sizes="(max-width: 640px) calc(100vw - 64px), 362px" /></div>
            <div className="px-5 pt-[18px] max-sm:px-1"><h3 className="text-2xl font-bold max-sm:text-[21px]">{service.title}</h3><p className="mt-1.5 text-black/80">{service.description}</p></div>
          </article>
        ))}
      </div>
    </div>
  );
}
