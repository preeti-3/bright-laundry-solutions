import Image from "next/image";
import { displayHeading, shell } from "@/lib/styles";

const steps = [
  {
    number: "Step 1",
    title: "Submit Your Franchise Inquiry",
    body: "Start by filling out a simple application form. Tell us about your city, preferred location, and business goals.",
    label: "What happens next?",
    bullets: [
      "Initial consultation call",
      "Business eligibility review",
      "Basic investment discussion",
    ],
    image: "/images/how-inquiry.png",
  },
  {
    number: "Step 2",
    title: "Location Assessment",
    body: "Our experts help identify a location with strong visibility, accessibility, and customer potential.",
    label: "We evaluate:",
    bullets: [
      "Footfall potential",
      "Residential & commercial demand",
      "Store visibility",
    ],
    image: "/images/how-location.png",
  },
  {
    number: "Step 3",
    title: "Store Design & Setup",
    body: "Once your location is finalized, we help transform the space into a premium BRIGHT Laundry outlet.",
    label: "Included support:",
    bullets: [
      "Store layout planning",
      "Branding & signage",
      "Equipment guidance",
    ],
    image: "/images/invest-2.png",
  },
  {
    number: "Step 4",
    title: "Launch Your Store",
    body: "We help you create a strong first impression with marketing support and launch guidance.",
    label: "Launch support includes:",
    bullets: [
      "Promotional campaigns",
      "Digital marketing guidance",
      "Opening-day assistance",
    ],
    image: "/images/service-steam.png",
  },
];

export function HowSteps() {
  return (
    <section className={`${shell} relative`}>
      <Image
        className="pointer-events-none absolute top-50 left-[50%] translate-x-[-50%] h-350.75 w-151.5 max-md:hidden"
        src="/images/how-connector.svg"
        alt=""
        width={606}
        height={1403}
      />
      {steps.map((step, index) => (
        <article
          className={`relative z-2 flex h-89.75 items-center justify-between gap-18.5 not-first:mt-37.5 max-lg:gap-12 max-md:h-auto max-md:flex-col! max-md:gap-8 max-md:not-first:mt-22.5 ${index % 2 ? "flex-row-reverse" : ""}`}
          key={step.title}
        >
          <div className="w-[552px] max-w-[50%] shrink-0 max-lg:shrink max-md:max-w-none max-md:w-full">
            <p className="mb-2 text-black/60">{step.number}</p>
            <h2 className={`${displayHeading} mb-4 text-[32px] leading-tight`}>
              {step.title}
            </h2>
            <p className="mb-5 max-w-[535px] text-black/70">{step.body}</p>
            <strong>{step.label}</strong>
            <ul className="mt-1 list-disc pl-[22px] text-black/70">
              {step.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-[359px] w-[514px] max-w-[50%] shrink-0 max-md:max-w-none max-md:w-full max-sm:h-[270px]">
            <Image
              className="object-cover"
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 768px) 100vw, 514px"
            />
          </div>
        </article>
      ))}
    </section>
  );
}

export function SupportStrip() {
  const items = [
    ["01", "Smart Business Model", "Simple systems for smooth operations."],
    ["02", "Multiple Revenue Streams", "Earn from multiple laundry services."],
    ["03", "Scalable Growth Potential", "Built for long-term business growth."],
  ];
  return (
    <section
      className={`${shell} mt-[150px] grid h-[165px] grid-cols-3 bg-[#89b92f] px-10 py-[30px] text-white max-md:mt-[90px] max-md:h-auto max-md:grid-cols-1 max-md:gap-6`}
    >
      {items.map(([number, title, body], index) => (
        <article
          className={`px-10 first:pl-0 last:pr-0 max-md:px-0 ${index ? "border-l border-white/35 max-md:border-t max-md:border-l-0 max-md:pt-6" : ""}`}
          key={number}
        >
          <strong
            className={`${displayHeading} block text-[34px] leading-tight font-bold`}
          >
            {number}
          </strong>
          <h3 className="mt-2 font-bold">{title}</h3>
          <p className="mt-2">{body}</p>
        </article>
      ))}
    </section>
  );
}
