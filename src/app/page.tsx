import { Hero } from "@/components/sections/Hero";
import {
  BusinessSolutions,
  HomeFaq,
  HomeIntro,
  HomeLocation,
  Services,
  Testimonial,
} from "@/components/sections/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero
        home
        cta
        eyebrow=""
        title={
          <>
            Build Your Own Laundry Business with{" "}
            <em>Bright Laundry Solutions</em>
          </>
        }
        description="Build a thriving neighborhood business with a modern laundry franchise, proven operations, and support at every spin."
      />
      <HomeIntro />
      <Services />
      <BusinessSolutions />
      <Testimonial />
      <HomeLocation />
      <HomeFaq />
    </>
  );
}
