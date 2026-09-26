import Image from "next/image";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { shell } from "@/lib/styles";

export function Hero({
  title,
  description,
  image,
  imagePosition = "center",
  home = false,
  cta,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  image?: string;
  imagePosition?: string;
  home?: boolean;
  cta?: boolean;
}) {
  if (home) {
    return (
      <section className="relative h-192 overflow-hidden bg-[#193962] max-md:h-auto max-md:min-h-175">
        <Image
          className="absolute inset-x-0 bottom-0 h-full w-full object-cover"
          src="/images/home-hero-bg.png"
          alt="Modern laundry room"
          width={1440}
          height={678}
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-full sm:bg-[linear-gradient(90deg,rgba(25,57,98,.95)_0%,rgba(25,57,98,.8)_42%,rgba(25,57,98,0)_78%)] bg-[linear-gradient(90deg,rgba(25,57,98,.95)_20%,rgba(25,57,98,.8)_42%,rgba(25,57,98,0)_98%)]" />
        <Image
          className="absolute -right-2.75 bottom-0 h-152.5 w-204.5 object-contain object-bottom max-md:hidden"
          src="/images/home-hero-person.png"
          alt="Smiling laundry professional holding folded clothes"
          width={818}
          height={610}
          priority
        />
        <Header />
        <div
          className={`relative z-2 flex h-192 sm:items-center pt-35.5 sm:pt-22.5 max-md:h-auto max-md:min-h-175  ${shell}`}
        >
          <div className="relative z-2 w-140 text-white">
            <h1 className="mb-4.75 text-[52px] leading-[1.3] font-normal tracking-tight max-sm:text-[38px] [&_em]:font-black [&_em]:not-italic">
              {title}
            </h1>
            <p className="mb-12.5 max-w-125.25 text-lg">{description}</p>
            {cta && (
              <Button href="/franchise">Explore the opportunity →</Button>
            )}
          </div>
        </div>
        <Image
          className="w-full absolute bottom-0 left-0 object-cover z-2"
          src="/images/road.png"
          alt="Road under the Bright Laundry Solutions delivery van"
          width={860}
          height={430}
        />
        <Image
          className="van-drive pointer-events-none absolute -bottom-6 z-3 h-auto w-107.5 max-md:w-75"
          src="/images/laundry-van.gif"
          alt="Bright Laundry Solutions delivery van"
          width={860}
          height={430}
        />
      </section>
    );
  }

  return (
    <section className="relative h-156.75 overflow-hidden bg-[#193962] max-lg:h-140">
      <Header />
      <div className="absolute inset-x-0 top-22.5 h-134.25 max-lg:top-18 max-lg:h-122">
        <Image
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          src={image ?? "/images/figma/franchise-hero.png"}
          alt="Commercial laundry equipment"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,57,98,.82)_0%,rgba(26,57,98,.72)_35%,rgba(26,57,98,0)_74%)]" />
        <Image
          className="absolute -bottom-px -left-3.75 h-61.25 w-38.75 object-contain opacity-35"
          src="/images/figma/bubbles-right.svg"
          alt=""
          width={189}
          height={298}
        />
      </div>
      <div
        className={`${shell} relative z-2 flex h-full items-center pt-22.5 text-white max-lg:pt-18`}
      >
        <div className="w-131.5 max-w-full">
          <h1 className="mb-4.75 text-[clamp(2.35rem,5vw,3rem)] leading-[1.2] font-normal tracking-tight">
            {title}
          </h1>
          <p className="max-w-131.5 text-[18px] leading-normal">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
