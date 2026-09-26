import { Hero } from "@/components/sections/Hero";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { LocationSection, Stats, TestimonialFaq } from "@/components/sections/SharedSections";
import { ProcessOverview, SupportBand } from "@/components/sections/InteriorSections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Franchise", "Own a technology-enabled Bright Laundry Solutions franchise with end-to-end support.");

const features = [
  { title: "Complete Business Setup", description: "Laundry is an essential service with loyal local customers.", icon: "/images/check.svg" },
  { title: "Technology Platform", description: "Site selection, launch, marketing, training, and operations are all covered.", icon: "/images/shield.svg" },
  { title: "Marketing Support", description: "Remote management and cashless payments make ownership simple.", icon: "/images/smartphone.svg" },
];

export default function FranchisePage() {
  return <><Hero title={<>Own the Future of<br />Professional Laundry</>} description="Build a profitable business with Bright Laundry Solutions. Launch your own modern laundry service." image="/images/figma/franchise-hero.png" /><Stats items={[["250+", "Sq. Ft. Recommended"], ["End-to-End", "Business Support"], ["04+", "Stores"], ["Tech-Driven", "Operations"]]} /><FeatureSplit title={<>A Business That Keeps <em>Communities</em> Moving</>} body="Bright Laundry Solutions combines an essential everyday service with modern technology, a welcoming brand." features={features} image="/images/figma/franchise-feature-main.png" overlayImage="/images/figma/franchise-feature-overlay.png" reverse /><ProcessOverview /><SupportBand /><LocationSection /><TestimonialFaq /></>;
}
