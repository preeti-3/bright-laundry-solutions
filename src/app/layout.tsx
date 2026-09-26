import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { ContactRail } from "@/components/layout/ContactRail";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brightlaundrysolutions.com"),
  title: {
    default: "Bright Laundry Solutions",
    template: "%s | Bright Laundry Solutions",
  },
  description:
    "Build a modern, community-focused laundry franchise with proven systems and end-to-end support.",
  openGraph: {
    title: "Bright Laundry Solutions",
    description: "A modern laundry franchise built for ambitious owners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} overflow-x-hidden bg-white font-[family-name:var(--font-body)] text-base leading-6 text-[#0f1412] max-sm:text-[15px]`}
      >
        <a
          className="fixed top-2 left-2 z-[1000] -translate-y-[150%] rounded-lg border-2 border-[#22c55e] bg-white px-4 py-2.5 focus:translate-y-0"
          href="#main-content"
        >
          Skip to content
        </a>
        <main id="main-content" className="relative overflow-hidden">
          {children}
        </main>
        <ContactRail />
        <Footer />
      </body>
    </html>
  );
}
