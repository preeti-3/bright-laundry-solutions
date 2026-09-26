"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { primaryButton } from "@/lib/styles";

export function Logo() {
  return (
    <Link
      className="flex w-[162px] shrink-0 flex-col items-start leading-none max-md:w-[140px]"
      href="/"
      aria-label="Bright Laundry Solutions home"
    >
      <strong className="font-[family-name:var(--font-display)] text-[26px] font-bold tracking-[.14em] text-[#89b92f] max-md:text-[21px]">
        BRIGHT
      </strong>
      <span className="mt-1 text-[10px] font-light tracking-normal text-[#3c2206]">
        LAUNDRY SOLUTIONS
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="absolute top-0 left-0 z-50 flex h-[90px] w-full items-center justify-between bg-white/95 px-[max(24px,calc((100%_-_1140px)/2))] shadow-[0_0_54px_rgba(0,0,0,.07)] backdrop-blur-[14px] max-lg:h-[72px] max-lg:px-5 max-sm:px-4">
      <Logo />
      <button
        className="relative size-12 touch-manipulation cursor-pointer rounded-full border border-[#193962]/10 bg-[#f7faef] p-3 transition-colors hover:bg-[#eef6dc] focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#193962] lg:hidden"
        type="button"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`absolute top-[16px] left-[13px] block h-0.5 w-[22px] bg-[#193962] transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`absolute top-[23px] left-[13px] block h-0.5 w-[22px] bg-[#193962] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`absolute top-[30px] left-[13px] block h-0.5 w-[22px] bg-[#193962] transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      {open && (
        <button
          className="fixed inset-0 top-[72px] z-40 cursor-default bg-[#193962]/45 backdrop-blur-[2px] lg:hidden"
          type="button"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        id="main-nav"
        className={`items-center gap-11 max-lg:fixed max-lg:top-[72px] max-lg:right-0 max-lg:left-0 max-lg:z-50 max-lg:max-h-[calc(100dvh-72px)] max-lg:flex-col max-lg:items-stretch max-lg:gap-1 max-lg:overflow-y-auto max-lg:border-t max-lg:border-black/10 max-lg:bg-white max-lg:px-4 max-lg:pt-3 max-lg:pb-[max(20px,env(safe-area-inset-bottom))] max-lg:shadow-[0_18px_38px_rgba(25,57,98,.18)] ${open ? "flex" : "flex max-lg:hidden"}`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <Link
            className={`flex min-h-13 touch-manipulation items-center rounded-lg px-4 font-medium text-black/70 transition-colors duration-200 hover:bg-[#f1f5f8] hover:text-[#193962] focus-visible:outline-3 focus-visible:outline-[#89b92f] max-lg:min-h-14 ${pathname === item.href ? "font-bold text-[#193962] max-lg:bg-[#eef6dc]" : ""}`}
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className={`${primaryButton} mt-2 inline-flex w-full touch-manipulation lg:hidden`}
          href="/get-franchise"
          onClick={() => setOpen(false)}
        >
          Get Franchise →
        </Link>
      </nav>

      <Link className={`${primaryButton} max-lg:hidden`} href="/get-franchise">
        Get Franchise →
      </Link>
    </header>
  );
}
