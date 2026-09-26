import { Hero } from "@/components/sections/Hero";
import { HowSteps, SupportStrip } from "@/components/sections/HowSteps";
import { LocationSection, TestimonialFaq } from "@/components/sections/SharedSections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("How It Works", "Follow the guided path from franchise inquiry and location review through store setup and launch.");

export default function HowItWorksPage() {
  return <><Hero title={<>From Dream to Grand<br />Opening</>} description="We've simplified the franchise process into four guided stages. Our team stays with you from your first inquiry until your store is successfully operating." image="/images/invest-2.png" imagePosition="center" /><HowSteps /><SupportStrip /><LocationSection /><TestimonialFaq /></>;
}
