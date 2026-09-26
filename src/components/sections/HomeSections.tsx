import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { FaqList } from "./FaqList";
import { ServiceCarousel } from "./ServiceCarousel";
import { shell } from "@/lib/styles";

const services = [
  {
    title: "Curtain Cleaning",
    description: "Fast, app-enabled machines in a bright and welcoming space.",
    image: "/images/service-curtain.png",
  },
  {
    title: "Steam Ironing",
    description: "Convenient drop-off care, expertly washed and folded.",
    image: "/images/home-intro-overlay.png",
  },
  {
    title: "Laundry Wash & Fold",
    description: "Freshly washed, neatly folded, and ready to wear.",
    image: "/images/cta.png",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Deep cleaning that removes stains and odors, leaving carpets fresh.",
    image: "/images/service-carpet.png",
  },
  {
    title: "B2B Laundry",
    description: "Reliable, high-capacity care for local businesses.",
    image: "/images/service-b2b.png",
  },
] as const;

const steps = [
  ["01", "Discover", "Meet the team and explore your market."],
  ["02", "Build", "Secure your site, financing, and store plan."],
  ["03", "Launch", "Train your team and open with momentum."],
] as const;

function Feature({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#193962]/10">
        <Image src={icon} alt="" width={24} height={24} />
      </span>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-black/80">{children}</p>
      </div>
    </div>
  );
}

export function HomeIntro() {
  return (
    <section className={`${shell} relative flex h-156.75 items-start justify-between pt-37.5 max-md:h-auto max-md:flex-col max-md:gap-10 max-md:py-[72px]`}>
      <div className="relative h-119.25 w-141 max-lg:w-[49%] max-md:h-[370px] max-md:w-full">
        <div className="absolute top-0 left-0 h-99 w-126 max-lg:w-[90%]">
          <Image
            className="object-cover"
            src="/images/home-intro-main.png"
            alt="Commercial laundry machines"
            fill
            sizes="(max-width: 768px) 100vw, 504px"
          />
        </div>
        <div className="absolute right-0 bottom-0 h-71.75 w-65.5 border-[6px] border-white bg-white shadow-[0_0_30px_rgba(0,0,0,.1)] max-sm:h-[220px] max-sm:w-[200px]">
          <Image
            className="object-cover"
            src="/images/home-intro-overlay.png"
            alt="Laundry professional with freshly ironed clothes"
            fill
            sizes="262px"
          />
        </div>
      </div>
      <div className="mt-5.5 w-126 max-lg:w-[46%] max-md:mt-0 max-md:w-full">
        <h2 className="mb-2.5 text-[48px] leading-[1.13] font-normal tracking-[-.035em] capitalize max-lg:text-[40px] max-sm:text-[32px]">
          Your Trusted Laundry &amp; Dry Cleaning{" "}
          <strong className="font-black text-[#89b92f]">Solutions</strong>
        </h2>
        <p className="mb-5.5 max-w-121.25 text-black/80">
          Bright Laundry Solutions combines an essential everyday service with
          modern technology, a welcoming brand.
        </p>
        <div className="mb-12.5 grid gap-4">
          <Feature
            icon="/images/chart-spline.svg"
            title="11+ Years of Industry Experience"
          >
            Delivering professional laundry solutions with proven expertise.
          </Feature>
          <Feature
            icon="/images/shield-check.svg"
            title="24/7 Operational Support"
          >
            Expert guidance and ongoing assistance to help your franchise run
            smoothly every day.
          </Feature>
        </div>
        <Button href="/get-franchise">Get Franchise →</Button>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative h-308.75 overflow-hidden pt-37.5 max-md:h-auto max-md:py-[72px]"
    >
      <Image
        className="pointer-events-none absolute top-0 -right-3.75 h-75 w-47.5 object-contain opacity-45"
        src="/images/bubbles-left.svg"
        alt=""
        width={190}
        height={300}
      />
      <div className={shell}>
        <h2 className="mx-auto w-190.75 max-w-full text-center text-[48px] leading-[1.13] tracking-[-.035em] max-sm:text-[32px]">
          Everything your{" "}
          <strong className="font-black text-[#89b92f]">
            laundry business
          </strong>{" "}
          needs to grow
        </h2>
        <div className="mt-12.5">
          <ServiceCarousel slides={services} />
        </div>
        <div className="mt-12.5 text-center">
          <Button href="/franchise">View All →</Button>
        </div>
        <div className="mt-12.5 grid min-h-46.75 grid-cols-[322px_repeat(3,1fr)] items-center gap-7.5 border border-black/10 bg-white px-7.5 shadow-[0_10px_30px_rgba(0,0,0,.1)] max-lg:grid-cols-2 max-md:mt-12 max-md:grid-cols-1 max-md:gap-7 max-md:px-5 max-md:py-7">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[.08em]">
              HOW IT WORKS
            </p>
            <h2 className="text-[36px] leading-[1.14] tracking-[-.035em] max-sm:text-[30px]">
              From first call to grand opening
            </h2>
          </div>
          {steps.map(([number, title, body]) => (
            <article key={number}>
              <strong className="block text-[36px] leading-none font-black text-[#89b92f]">
                {number}
              </strong>
              <h3 className="mt-2 text-lg font-bold">{title}</h3>
              <p className="mt-1 text-black/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BusinessSolutions() {
  const items = [
    "Assisted Living / Nursing Homes",
    "Gym",
    "B2B Laundry Services",
    "Hotels",
    "Restaurants and Caterers",
  ];
  return (
    <section className="relative grid h-169 grid-cols-2 overflow-hidden bg-[#f0f7fb] max-md:h-auto max-md:grid-cols-1">
      <Image
        className="pointer-events-none absolute top-0 left-0 h-full w-47.5 -scale-x-100 object-contain opacity-40"
        src="/images/bubbles-left.svg"
        alt=""
        width={190}
        height={300}
      />
      <div className="relative z-1 flex items-center justify-end px-17.5 max-lg:px-10 max-md:justify-start max-md:px-6 max-md:py-[72px] max-sm:px-4">
        <div className="max-w-130">
          <h2 className="text-[48px] leading-[1.13] tracking-[-.035em] max-sm:text-[32px]">
            B2B{" "}
            <strong className="font-black text-[#89b92f]">
              Laundry Solutions
            </strong>{" "}
            For Your Business
          </h2>
          <p className="mt-4 text-black/75">
            We provide reliable, high-capacity laundry solutions for hotels,
            hospitals, restaurants, salons, and businesses with fast turnaround
            and consistent quality.
          </p>
          <ul className="my-7 grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-semibold max-sm:grid-cols-1">
            {items.map((item) => (
              <li className="flex items-center gap-2" key={item}>
                <span className="grid size-4 place-items-center rounded-full border border-black/60 text-[10px]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button href="/get-franchise">Get Franchise →</Button>
        </div>
      </div>
      <div className="relative min-h-115 max-sm:min-h-[360px]">
        <Image
          className="object-cover"
          src="/images/owner-consultation.png"
          alt="Laundry customer carrying clean clothes"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}

export function Testimonial() {
  return (
    <section className="relative flex h-103.25 items-center overflow-hidden bg-[#123f70] text-white max-md:h-auto">
      <Image
        className="object-cover opacity-20"
        src="/images/cta.png"
        alt=""
        fill
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#103f70]/70" />
      <div className={`relative z-1 mx-auto grid ${shell} grid-cols-[230px_1fr] items-center gap-12 max-md:grid-cols-1 max-md:gap-7 max-md:py-14`}>
        <div className="relative h-57.5 overflow-hidden border-[6px] border-white shadow-xl max-md:h-[140px] max-md:w-[140px]">
          <Image
            className="object-cover object-[45%_30%]"
            src="/images/service-b2b.png"
            alt="Franchise owner"
            fill
            sizes="230px"
          />
        </div>
        <blockquote>
          <p className="text-[25px] leading-[1.45] max-sm:text-[20px]">
            “They gave us the confidence, systems, and team to build something
            our whole community values.”
          </p>
          <cite className="mt-7 block font-bold not-italic">Aarav Jha</cite>
          <span className="text-sm text-white/70">
            Franchise owners since 2023
          </span>
        </blockquote>
      </div>
    </section>
  );
}

export function HomeLocation() {
  return (
    <section
      id="locations"
      className={`${shell} grid h-183 grid-cols-[569px_1fr] items-center gap-13 max-lg:grid-cols-2 max-md:h-auto max-md:grid-cols-1 max-md:gap-9 max-md:py-[72px]`}
    >
      <div className="relative h-108 border border-black/10 bg-[#fff8c9] shadow-[0_0_24px_rgba(0,0,0,.08)] max-sm:h-auto max-sm:aspect-[569/432]">
        <Image
          className="object-cover"
          src="/images/india-markets.png"
          alt="Map of available Bright Laundry markets across India"
          fill
          sizes="569px"
        />
      </div>
      <div>
        <h2 className="text-[48px] leading-[1.13] tracking-[-.035em] max-sm:text-[32px]">
          Room To Grow In The Right{" "}
          <strong className="font-black text-[#89b92f]">Neighbourhoods</strong>
        </h2>
        <p className="my-4 text-black/75">
          We provide reliable, high-capacity laundry solutions for hotels,
          hospitals, restaurants, salons, and businesses with fast turnaround
          and consistent quality.
        </p>
        <Button href="/get-franchise">Find an available market →</Button>
      </div>
    </section>
  );
}

export function HomeFaq() {
  return (
    <section
      id="faqs"
      className={`${shell} relative h-177 max-w-[900px] max-md:h-auto max-md:py-[72px]`}
    >
      <Image
        className="pointer-events-none absolute top-20 right-0 h-75 w-47.5 object-contain opacity-45 max-sm:hidden"
        src="/images/bubbles-left.svg"
        alt=""
        width={190}
        height={300}
      />
      <h2 className="text-center text-[48px] leading-[1.13] tracking-[-.035em] max-sm:text-[32px]">
        Good Questions, Clear Answers
      </h2>
      <div className="mt-[62px]">
        <FaqList />
      </div>
    </section>
  );
}
