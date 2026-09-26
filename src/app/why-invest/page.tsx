import { Hero } from "@/components/sections/Hero";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { GrowthSystem, InvestmentGallery } from "@/components/sections/InteriorSections";
import { LocationSection, TestimonialFaq } from "@/components/sections/SharedSections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Why Invest", "Explore the recurring demand, modern systems, and long-term growth behind a Bright Laundry franchise.");

export default function WhyInvestPage() {
  const demandCopy = <>Laundry is an essential service that people rely on every week, making it one of the most consistent and dependable business opportunities. As modern lifestyles become busier, families, working professionals, and businesses increasingly prefer convenient, high-quality laundry solutions over doing it themselves.<br /><br />From everyday clothing to premium garment care and commercial linen services, the demand continues to grow across residential and commercial markets. With repeat customers, multiple revenue streams, and technology-driven operations, a professional laundry franchise offers the potential to build a sustainable business with long-term growth opportunities.</>;
  return <><Hero title={<>Turn Your Investment<br />into a Growing Business</>} description="Join BRIGHT Laundry Solutions and become part of a growing professional laundry industry backed by modern technology, proven systems, and ongoing business support." image="/images/cta.png" imagePosition="center 45%" /><FeatureSplit title={<>Everyday Demand Creates Long-Term <em>Potential</em></>} body={demandCopy} features={[]} image="/images/invest-main.png" /><GrowthSystem /><InvestmentGallery /><div className="pt-[198px] max-md:pt-0"><LocationSection /></div><TestimonialFaq /></>;
}
