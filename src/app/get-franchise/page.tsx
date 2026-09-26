import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { FranchiseForm } from "@/components/sections/FranchiseForm";
import { MarketChart } from "@/components/sections/MarketChart";
import { GrowthSystem } from "@/components/sections/InteriorSections";
import { LocationSection, Stats, TestimonialFaq } from "@/components/sections/SharedSections";
import { pageMetadata } from "@/lib/metadata";
import { displayHeading, shell } from "@/lib/styles";

export const metadata = pageMetadata("Get Franchise", "Submit an inquiry to start your Bright Laundry Solutions franchise journey.");

export default function GetFranchisePage() {
  return <>
    <section className="relative h-[789px] bg-[linear-gradient(130deg,#fff_20%,#f7faf8_100%)] max-md:h-auto max-md:pb-[80px]">
      <Header />
      <div className={`${shell} grid grid-cols-[578.5px_1fr] gap-[33.5px] pt-[180px] max-lg:grid-cols-2 max-lg:gap-8 max-md:grid-cols-1 max-md:pt-[120px]`}>
        <div><h1 className={`${displayHeading} text-[48px] leading-[1.2] capitalize max-sm:text-[38px] [&_em]:font-black [&_em]:not-italic [&_em]:text-[#89b92f]`}>Submit Application for <em>Bright Laundry Solutions</em></h1><p className="mt-[19px] max-w-[578px] text-[20px] leading-normal text-black/60">Your BRIGHT Laundry Solutions journey starts with one conversation. Let&apos;s build your business together.</p><div className="mt-6 grid gap-6"><div className="flex items-center gap-[10px]"><span className="grid size-[47px] place-items-center rounded-full border border-[#193962]/10"><Image src="/images/mail.svg" alt="" width={24} height={24} /></span><p><strong className="block">Email Address</strong><a className="text-black/60" href="mailto:hello@brightlaundrysolutions.com">hello@brightlaundrysolutions.com</a></p></div><div className="flex items-center gap-[10px]"><span className="grid size-[47px] place-items-center rounded-full border border-[#193962]/10"><Image src="/images/phone.svg" alt="" width={25} height={25} /></span><p><strong className="block">Contact US</strong><a className="text-black/60" href="tel:+917027977081">+91 70279-77081</a></p></div></div></div>
        <FranchiseForm />
      </div>
    </section>
    <div className="pt-[100px] max-md:pt-[70px]"><Stats overlap={false} featured items={[["16L", "Total Investment"], ["1.7L", "Monthly Profit"], ["80%", "Annual ROI"], ["3-4 Months", "Break Even Period"]]} /></div>
    <section className={`${shell} mt-[150px] grid min-h-[463px] grid-cols-2 items-center gap-[64px] max-md:mt-[90px] max-md:grid-cols-1`}><MarketChart /><div><h2 className={`${displayHeading} mb-4 text-[48px] leading-[1.13] capitalize max-sm:text-[34px] [&_em]:font-black [&_em]:not-italic [&_em]:text-[#89b92f]`}>Why Entrepreneurs Choose <em>This Industry</em></h2><p className="mb-6 max-w-[535px] text-black/70">Essential services create repeat demand, while modern operations help improve efficiency and customer experience.</p><ul className="grid list-none gap-3 p-0">{["Recurring Customer Visits", "Proven Business Model", "Efficient Operating Structure", "Recurring Customer Demand", "Marketing Support", "Streamlined Inventory"].map((item) => <li className="font-bold before:mr-3 before:text-[#89b92f] before:content-['✓']" key={item}>{item}</li>)}</ul></div></section>
    <GrowthSystem variant="bright" />
    <LocationSection />
    <TestimonialFaq />
  </>;
}
