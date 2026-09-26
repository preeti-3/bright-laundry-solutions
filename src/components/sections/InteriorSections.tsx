import Image from "next/image";
import { supportCards } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { displayHeading, shell } from "@/lib/styles";

function SupportIcon({ index }: { index: number }) {
  const icons = [
    "/images/figma/support-store.svg",
    "/images/figma/support-technology.svg",
    "/images/figma/support-training.svg",
    "/images/figma/support-marketing.svg",
    "/images/figma/support-operations.svg",
    "/images/figma/support-quality.svg",
  ];

  return (
    <span
      aria-hidden="true"
      className="block size-10 bg-[#193962] transition-colors duration-200 group-hover:bg-[#89b92f]"
      style={{
        WebkitMaskImage: `url(${icons[index]})`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskImage: `url(${icons[index]})`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
      }}
    />
  );
}

export function ProcessOverview() {
  const steps = [
    [
      "Apply",
      "Share your basic details and business goals.",
      "/images/whatsapp.svg",
    ],
    [
      "Location Review",
      "We help evaluate the best location for your store.",
      "/images/location.svg",
    ],
    [
      "Store Setup",
      "Interiors, equipment, branding, and training.",
      "/images/store.svg",
    ],
    [
      "Grand Launch",
      "Open your BRIGHT Laundry Solutions outlet with confidence.",
      "/images/stars.svg",
    ],
  ];
  const positions = [
    "left-0 top-[112px]",
    "left-[305px] top-0",
    "left-[525px] xl:left-[610px] top-[148px]",
    "left-[790px] xl:left-[915px] top-[78px]",
  ];
  return (
    <section
      className={`${shell} mt-37.5 flex min-h-148.5 flex-col items-center max-lg:mt-[90px] max-lg:min-h-0`}
    >
      <div className="w-[735px] max-w-full text-center">
        <h2
          className={`${displayHeading} text-[48px] leading-[1.13] capitalize max-sm:text-[34px] [&_em]:font-black [&_em]:not-italic [&_em]:text-[#89b92f]`}
        >
          From First Call To <em>Grand Opening</em>
        </h2>
        <p className="mx-auto mt-4 max-w-[637px] text-black/80">
          Offer a complete range of professional laundry services designed for
          homes, businesses, and institutions—all from a single BRIGHT
          franchise.
        </p>
      </div>
      <div className="relative mt-[40px] h-77.5 lg:mb-20 lg:w-full max-lg:mb-12 max-lg:grid max-lg:h-auto max-lg:grid-cols-2 max-lg:gap-x-8 max-lg:gap-y-10 max-sm:grid-cols-1">
        <Image
          className="pointer-events-none absolute top-5.75 left-27.75 h-40 xl:w-[901px] w-[800px] max-lg:hidden"
          src="/images/figma/process-line.svg"
          alt=""
          width={901}
          height={160}
        />
        {steps.map(([title, body, icon], index) => (
          <article
            className={`absolute w-[225px] text-center max-lg:static max-lg:w-auto ${positions[index]}`}
            key={title}
          >
            <span className="mx-auto mb-[18px] grid size-[60px] place-items-center rounded-full bg-[#89b92f] shadow-[0_0_38px_rgba(0,0,0,.08)]">
              <Image src={icon} alt="" width={35} height={35} />
            </span>
            <h3 className={`${displayHeading} mb-2 text-[22px] leading-tight`}>
              {title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <Button href="/how-it-works">Explore More →</Button>
    </section>
  );
}

export function SupportBand() {
  return (
    <section className="relative mt-[150px] h-[722px] overflow-hidden bg-[#f1f5f8] max-lg:mt-[90px] max-lg:h-auto max-lg:py-[72px]">
      <div className={`${shell} pt-[100px] max-lg:pt-0`}>
        <div className="text-center">
          <h2
            className={`${displayHeading} text-[48px] leading-[1.13] capitalize max-sm:text-[32px] [&_em]:font-black [&_em]:not-italic [&_em]:text-[#89b92f]`}
          >
            Everything You Need To <em>Succeed</em>
          </h2>
          <p className="mt-[10px] text-[13px] leading-5 text-[#45494c] max-sm:text-sm">
            Transparent numbers, diversified services, and support designed to
            help your store perform.
          </p>
        </div>
        <div className="mt-[45px] grid h-[385px] grid-cols-3 grid-rows-2 max-lg:h-auto max-lg:grid-cols-2 max-lg:grid-rows-none max-sm:grid-cols-1">
          {supportCards.map(([title, body], index) => (
            <article
              className="group flex flex-col justify-center border border-black/20 px-6 py-5 transition-[background-color,box-shadow] duration-200 hover:relative hover:z-10 hover:bg-white hover:shadow-[0_0_7px_rgba(0,0,0,.07)]"
              key={title}
            >
              <SupportIcon index={index} />
              <h3 className={`${displayHeading} mt-5 text-[22px] leading-normal`}>
                {title}
              </h3>
              <p className="mt-2 max-w-[330px] text-[16px] leading-normal text-black/80">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-[-20px] left-[27px] size-[59px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.9),rgba(210,219,228,.62))] opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[8px] left-[15px] size-[17px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.9),rgba(210,219,228,.58))] opacity-70" aria-hidden="true" />
    </section>
  );
}

export function GrowthSystem({
  variant = "growth",
}: {
  variant?: "growth" | "bright";
}) {
  const bright = variant === "bright";
  const cards = bright
    ? [
        ["Efficient Customer Support", "Fast support at every step."],
        ["Long-Term Business Success", "Built for lasting growth."],
        ["Cutting-Edge Technology", "Smart tools for easy operations."],
      ]
    : [
        ["Business Setup", "Guidance from planning to launch."],
        ["Marketing Support", "Launch campaigns and local promotions."],
        ["Quality Standards", "Consistent service with proven processes."],
      ];
  return (
    <section
      className={`${shell} mt-[150px] grid min-h-[408px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-[70px] max-lg:mt-[90px] max-lg:grid-cols-1 max-lg:gap-12`}
    >
      <div>
        <h2
          className={`${displayHeading} mb-4 text-[48px] leading-[1.13] capitalize max-sm:text-[34px] [&_em]:font-black [&_em]:not-italic [&_em]:text-[#89b92f]`}
        >
          {bright ? (
            <>
              Why <em>Bright</em> Laundry Solutions
            </>
          ) : (
            <>
              Designed For Long-Term <em>Growth</em>
            </>
          )}
        </h2>
        <p className="mb-12.5 max-w-133.75 leading-[1.4] text-black/80">
          {bright
            ? "At BRIGHT Laundry Solutions, we don't just help you open a laundry store—we help you build a business designed for long-term success. Our franchise model combines professional training, technology-driven operations, marketing support, and standardised processes to make running your business simpler and more efficient."
            : "Create a laundry business built to grow for years, not just months. With Bright Laundry Solutions, you get a proven business model, modern technology, operational guidance, and continuous franchise support to help you expand with confidence."}
        </p>
        {!bright && <Button href="/get-franchise">Get Franchise →</Button>}
      </div>
      <div className="grid grid-cols-2 gap-4.5 max-sm:grid-cols-1">
        {cards.map(([title, body], index) => (
          <article
            className={`min-h-[166px] bg-white p-5 shadow-[0_0_30px_rgba(0,0,0,.09)] ${index === 0 ? "-translate-y-7 max-sm:translate-y-0" : ""} ${index === 2 ? "col-start-2 max-sm:col-auto" : ""}`}
            key={title}
          >
            <span className="grid size-15 place-items-center rounded-full bg-[#89b92f]">
              <Image src="/images/stars.svg" alt="" width={30} height={30} />
            </span>
            <h3 className={`${displayHeading} my-3 text-[22px] leading-tight`}>
              {title}
            </h3>
            <p className="text-black/60">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function InvestmentGallery() {
  return (
    <section className="mt-37.5 h-116.25 bg-[#f1f5f8] max-md:mt-22.5 max-md:h-auto max-md:py-18.75">
      <div className={shell}>
        <div className="flex items-start justify-between gap-15 pt-25 max-md:block max-md:pt-0">
          <h2
            className={`${displayHeading} max-w-140 text-[48px] leading-[1.13] capitalize max-sm:text-[34px] [&_em]:font-black [&_em]:not-italic [&_em]:text-[#89b92f]`}
          >
            A <em>Clear Picture</em> Before You Begin
          </h2>
          <p className="mt-3 max-w-120 border-l-4 border-[#193962] pl-5 leading-[1.4] text-black/80">
            We believe entrepreneurs should understand what it takes to build a
            successful business. Our team helps you plan your investment based
            on your chosen store format and location.
          </p>
        </div>
        <div className="mt-17 grid grid-cols-3 gap-7.5 max-md:mt-10 max-sm:grid-cols-1">
          {[1, 2, 3].map((number) => (
            <div className="relative h-87.5 overflow-hidden" key={number}>
              <Image
                className="object-cover"
                src={`/images/invest-${number}.png`}
                alt={`Bright Laundry store format ${number}`}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
