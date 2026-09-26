import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { displayHeading, shell } from "@/lib/styles";

export type LegalSection = {
  title: string;
  content: ReactNode;
};

export function LegalPage({
  title,
  description,
  updated,
  sections,
}: {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="relative bg-[#f1f5f8] pt-[90px] max-lg:pt-[72px]">
        <Header />
        <div className={`${shell} py-[92px] max-md:py-[68px]`}>
          <p className="mb-3 text-[15px] font-bold tracking-[.12em] text-[#89b92f] uppercase">
            Legal
          </p>
          <h1 className={`${displayHeading} max-w-[780px] text-[56px] leading-[1.1] max-sm:text-[40px]`}>
            {title}
          </h1>
          <p className="mt-5 max-w-[720px] text-[19px] leading-8 text-black/65">
            {description}
          </p>
          <p className="mt-6 text-[14px] font-medium text-black/55">
            Last updated: {updated}
          </p>
        </div>
      </section>

      <section className={`${shell} py-[110px] max-md:py-[72px]`}>
        <div className="mx-auto max-w-[900px]">
          <div className="mb-14 border-l-4 border-[#89b92f] bg-[#f7faef] px-6 py-5 text-[15px] leading-7 text-black/70">
            This page applies to use of the Bright Laundry Solutions website.
            We may update it when our practices, services, or legal obligations
            change.
          </div>

          <div className="grid gap-12">
            {sections.map((section, index) => (
              <section aria-labelledby={`legal-section-${index}`} key={section.title}>
                <h2
                  className={`${displayHeading} mb-4 text-[30px] leading-tight text-[#193962] max-sm:text-[26px]`}
                  id={`legal-section-${index}`}
                >
                  {index + 1}. {section.title}
                </h2>
                <div className="grid gap-4 text-[17px] leading-8 text-black/72 [&_a]:font-semibold [&_a]:text-[#193962] [&_a]:underline [&_a]:decoration-[#89b92f] [&_a]:decoration-2 [&_a]:underline-offset-4 [&_li]:pl-2 [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-2 [&_ul]:pl-6">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-black/15 pt-8 text-[17px] leading-8 text-black/72">
            Questions about this page? Email us at{" "}
            <a
              className="font-semibold text-[#193962] underline decoration-[#89b92f] decoration-2 underline-offset-4"
              href="mailto:hello@brightlaundrysolutions.com"
            >
              hello@brightlaundrysolutions.com
            </a>
            .
          </div>
        </div>
      </section>
    </>
  );
}
