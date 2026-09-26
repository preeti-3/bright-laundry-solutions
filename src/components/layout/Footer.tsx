import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Header";
import { displayHeading, primaryButton } from "@/lib/styles";

export function Footer() {
  const column =
    "flex flex-col gap-[11px] [&_a]:opacity-70 [&_a]:transition-opacity [&_a:hover]:opacity-100";
  return (
    <footer className="relative text-white">
      <div className="relative flex h-47.5 items-center justify-between gap-8 overflow-hidden px-[max(40px,calc((100%-1280px)/2))] max-md:h-auto max-md:min-h-[250px] max-md:flex-col max-md:items-start max-md:justify-center max-md:px-6 max-md:py-10 max-sm:px-4">
        <Image
          className="object-cover"
          src="/images/figma/footer-cta.png"
          alt="Laundry machines"
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#89b92f]/75" />
        <div className="relative z-2">
          <h2
            className={`${displayHeading} mb-2 text-[38px] leading-[1.13] font-bold capitalize max-sm:text-[30px]`}
          >
            Ready To Make Your Next Move?
          </h2>
          <p>
            Let&apos;s explore your market and build a cleaner future together.
          </p>
        </div>
        <Link
          className={`${primaryButton} relative z-2 min-w-49.25 bg-white! text-[#89b92f]! hover:bg-[#f5ffe5]! max-sm:w-full`}
          href="/get-franchise"
        >
          Get Franchise →
        </Link>
      </div>
      <div className="relative h-97.75 overflow-hidden bg-[#193962] max-md:h-auto">
        <Image
          className="object-cover"
          src="/images/figma/footer-bg.png"
          alt=""
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d3f73]/78" />
        <div className="relative z-2 flex h-full flex-col justify-between px-[max(40px,calc((100%-1280px)/2))] py-13.5 max-md:px-6 max-sm:px-4 max-sm:py-10">
          <div className="grid grid-cols-[1.6fr_.75fr_.75fr_1.25fr] gap-15 max-lg:gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col gap-3.75 [&_a_span]:text-white [&_a_strong]:text-white">
              <Logo />
              <p className="max-w-85 leading-6 opacity-70">
                A modern laundry franchise built for customers, communities, and
                ambitious owners.
              </p>
            </div>
            <div className={column}>
              <strong>Explore</strong>
              <Link href="/franchise">Franchise</Link>
              <Link href="/why-invest">Why Invest</Link>
              <Link href="/how-it-works">How It Works</Link>
            </div>
            <div className={column}>
              <strong>Company</strong>
              <Link href="/#services">Services</Link>
              <Link href="#locations">Locations</Link>
              <Link href="#testimonials">Testimonials</Link>
            </div>
            <div className={column}>
              <strong>Connect</strong>
              <Link href="#faqs">FAQs</Link>
              <Link href="/get-franchise">Contact</Link>
              <a href="mailto:hello@brightlaundrysolutions.com">
                hello@brightlaundrysolutions.com
              </a>
            </div>
          </div>
          <div className="flex justify-between border-t border-white/20 pt-7 text-[14px] opacity-80 max-sm:mt-10 max-sm:flex-col max-sm:gap-2">
            <span>© 2026 BRIGHT LAUNDRY SOLUTIONS</span>
            <span className="flex flex-wrap gap-x-2">
              <Link className="transition-opacity hover:opacity-75" href="/privacy-policy">Privacy</Link>
              <span aria-hidden="true">·</span>
              <Link className="transition-opacity hover:opacity-75" href="/terms">Terms</Link>
              <span aria-hidden="true">·</span>
              <a className="transition-opacity hover:opacity-75" href="#main-content">Accessibility</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
