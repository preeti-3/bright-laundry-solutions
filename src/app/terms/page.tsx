import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Terms and Conditions",
  "Terms governing use of the Bright Laundry Solutions website and franchise enquiry services.",
);

const sections: LegalSection[] = [
  {
    title: "Acceptance of These Terms",
    content: (
      <p>
        By accessing or using this website, you agree to these Terms and
        Conditions and our <a href="/privacy-policy">Privacy Policy</a>. If you
        do not agree, please do not use the website or submit information through
        its forms.
      </p>
    ),
  },
  {
    title: "Website Purpose",
    content: (
      <p>
        This website provides general information about Bright Laundry
        Solutions, its laundry services, and potential franchise opportunities.
        Website content is informational and does not by itself create a
        franchise, partnership, employment, agency, or advisory relationship.
      </p>
    ),
  },
  {
    title: "Franchise Enquiries",
    content: (
      <p>
        Submitting an enquiry does not guarantee approval, exclusivity, a
        territory, expected income, or entry into a franchise agreement. Any
        franchise opportunity remains subject to evaluation, due diligence,
        availability, commercial discussions, and a separate written agreement
        signed by authorised parties.
      </p>
    ),
  },
  {
    title: "Information and Financial Illustrations",
    content: (
      <p>
        Investment figures, profit illustrations, return estimates, timelines,
        market information, and growth statements are illustrative only. Actual
        results depend on factors including location, demand, operating costs,
        management, competition, and market conditions. You should conduct your
        own review and obtain independent financial and legal advice before
        making a business decision.
      </p>
    ),
  },
  {
    title: "Acceptable Use",
    content: (
      <ul>
        <li>Do not misuse the website, interfere with its operation, or attempt unauthorised access.</li>
        <li>Do not submit false, unlawful, misleading, or harmful information.</li>
        <li>Do not copy, scrape, republish, or commercially exploit website content without permission.</li>
        <li>Do not introduce malware or use the website to violate another person’s rights.</li>
      </ul>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p>
        The Bright Laundry Solutions name, branding, graphics, website design,
        text, photographs, and other content are owned by or licensed to Bright
        Laundry Solutions and are protected by applicable intellectual property
        laws. No licence is granted except the limited right to view and use this
        website for lawful personal or business-enquiry purposes.
      </p>
    ),
  },
  {
    title: "Third-Party Services and Links",
    content: (
      <p>
        The website may link to third-party websites or use third-party services.
        We do not control their content, availability, security, or privacy
        practices. Accessing them is at your discretion and subject to their own
        terms.
      </p>
    ),
  },
  {
    title: "Disclaimer and Limitation of Liability",
    content: (
      <p>
        The website is provided on an “as available” basis. To the extent
        permitted by law, Bright Laundry Solutions does not guarantee that all
        content will always be complete, current, uninterrupted, or error-free,
        and will not be liable for indirect or consequential loss arising from
        website use or reliance on general website information.
      </p>
    ),
  },
  {
    title: "Governing Law and Changes",
    content: (
      <p>
        These terms are governed by the applicable laws of India. We may update
        them when our services or legal obligations change. Continued use after
        an update means the revised terms apply from the published effective
        date, subject to applicable law.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description="The conditions that apply when you browse this website or submit a franchise enquiry."
      updated="26 September 2026"
      sections={sections}
    />
  );
}
