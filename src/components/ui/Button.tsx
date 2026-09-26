import Link from "next/link";
import type { ReactNode } from "react";
import { primaryButton } from "@/lib/styles";

export function Button({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      className={`${primaryButton} ${light ? "bg-white! text-[#08783d]! shadow-none! hover:bg-[#f0fff5]!" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
}
