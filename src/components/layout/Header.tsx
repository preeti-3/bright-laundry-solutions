"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";
import { primaryButton } from "@/lib/styles";

export function Logo() {
  return (
    <Link className="flex w-[162px] flex-col items-start leading-none max-md:w-[140px]" href="/" aria-label="Bright Laundry Solutions home">
      <strong className="font-[family-name:var(--font-display)] text-[26px] font-bold tracking-[.14em] text-[#89b92f] max-md:text-[21px]">BRIGHT</strong>
      <span className="mt-1 text-[10px] font-light tracking-normal text-[#3c2206]">LAUNDRY SOLUTIONS</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-20 flex h-[90px] w-full items-center justify-between bg-white/95 px-[max(24px,calc((100%_-_1140px)/2))] shadow-[0_0_54px_rgba(0,0,0,.07)] backdrop-blur-[14px] max-lg:h-[72px] max-lg:px-6 max-sm:px-4">
      <Logo />
      <button className="hidden size-11 cursor-pointer bg-transparent p-2.5 max-lg:block" type="button" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
        <span className="my-[5px] block h-0.5 bg-[#123d2a]" /><span className="my-[5px] block h-0.5 bg-[#123d2a]" /><span className="my-[5px] block h-0.5 bg-[#123d2a]" />
      </button>
      <nav id="main-nav" className={`items-center gap-11 max-lg:absolute max-lg:top-[72px] max-lg:right-4 max-lg:left-4 max-lg:flex-col max-lg:items-stretch max-lg:gap-0 max-lg:bg-white max-lg:p-3.5 max-lg:shadow-[0_14px_32px_rgba(0,0,0,.12)] ${open ? "flex" : "flex max-lg:hidden"}`} aria-label="Primary navigation">
        {navItems.map((item) => <Link className={`font-medium text-black/70 transition-colors duration-200 hover:text-[#033a24] max-lg:min-h-12 max-lg:px-4 max-lg:py-[13px] ${pathname === item.href ? "font-bold text-[#033a24]" : ""}`} key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
      </nav>
      <Link className={`${primaryButton} max-lg:hidden`} href="/get-franchise">Get Franchise →</Link>
    </header>
  );
}
