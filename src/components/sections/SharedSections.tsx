import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FaqList } from "./FaqList";
import { displayHeading, shell } from "@/lib/styles";

export function LocationSection() {
  return (
    <section id="locations" className={`${shell} relative my-[150px] grid min-h-[432px] grid-cols-[minmax(0,569px)_minmax(0,1fr)] items-center gap-[52px] max-lg:my-[90px] max-lg:grid-cols-1 max-lg:gap-9`}>
      <Image className="pointer-events-none absolute -top-[60px] -left-[145px] h-[250px] w-[160px] object-contain max-md:hidden" src="/images/figma/bubbles-left.svg" alt="" width={159} height={250} />
      <div className="relative h-[432px] w-full bg-white p-[7px] shadow-[0_0_30px_rgba(0,0,0,.08)] max-md:h-auto max-md:aspect-[569/432]">
        <Image className="object-cover" src="/images/india-markets.png" alt="Map showing available Bright Laundry Solutions markets" fill sizes="(max-width: 768px) 100vw, 569px" />
      </div>
      <div>
        <h2 className={`${displayHeading} mb-4 text-[48px] leading-[1.13] capitalize max-lg:text-[40px] max-sm:text-[34px] [&_em]:font-black [&_em]:not-italic [&_em]:text-[#89b92f]`}>Room To Grow In The Right <em>Neighbourhoods</em></h2>
        <p className="mb-[50px] max-w-[519px] leading-[1.4] text-black/80">We provide reliable, high-capacity laundry solutions for hotels, hospitals, restaurants, salons, and businesses with fast turnaround and consistent quality.</p>
        <Button href="/get-franchise">Find an available market →</Button>
      </div>
    </section>
  );
}

export function TestimonialFaq() {
  return (
    <section id="faqs" className="relative mx-auto mb-[150px] min-h-[558px] w-[min(900px,calc(100%_-_40px))] max-md:mb-[90px] max-md:min-h-0">
      <Image className="pointer-events-none absolute -top-[100px] -right-[285px] h-[298px] w-[189px] object-contain max-lg:hidden" src="/images/figma/bubbles-right.svg" alt="" width={189} height={298} />
      <h2 className={`${displayHeading} mb-[70px] text-center text-[48px] leading-[1.13] capitalize max-sm:mb-10 max-sm:text-[34px]`}>Good Questions, Clear Answers</h2>
      <FaqList />
    </section>
  );
}

export function Stats({ items, overlap = true, featured = false }: { items: readonly (readonly [string, string])[]; overlap?: boolean; featured?: boolean }) {
  return (
    <section className={`${shell} relative z-[4] grid min-h-[136px] grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:gap-3 ${overlap ? "-mt-[68px]" : "mt-0"}`}>
      {items.map(([value, label], index) => <article className={`flex min-h-[136px] flex-col items-center justify-center border border-black/10 p-5 text-center shadow-[0_0_30px_rgba(0,0,0,.08)] ${featured && index === 0 ? "bg-[#89b92f] text-white" : featured ? "bg-[#eef6dc]" : "bg-[linear-gradient(180deg,rgba(241,245,248,.85),#fff)]"}`} key={label}><strong className={`${displayHeading} text-[34px] leading-none ${featured && index !== 0 ? "font-bold text-[#89b92f]" : "text-[#193962]"}`}>{value}</strong><span className="mt-2">{label}</span></article>)}
    </section>
  );
}
