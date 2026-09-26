import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Privacy Policy",
  "Learn how Bright Laundry Solutions collects, uses, and protects information submitted through this website.",
);

const sections: LegalSection[] = [
  {
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect information you provide directly, including your name,
          phone number, email address, city, preferred location, business goals,
          and any message submitted through our franchise enquiry form.
        </p>
        <p>
          We may also receive basic technical information such as your browser
          type, device type, IP address, referring page, and website usage data.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Information",
    content: (
      <ul>
        <li>Respond to franchise enquiries and contact requests.</li>
        <li>Assess potential franchise locations and business opportunities.</li>
        <li>Operate, secure, maintain, and improve this website.</li>
        <li>Send relevant updates when you have asked to receive them.</li>
        <li>Meet legal, regulatory, fraud-prevention, and recordkeeping obligations.</li>
      </ul>
    ),
  },
  {
    title: "Cookies and Analytics",
    content: (
      <p>
        Our website may use necessary cookies and similar technologies to keep
        pages working, remember preferences, understand website performance,
        and improve visitor experience. You can limit cookies through your
        browser settings, although some website features may not work correctly.
      </p>
    ),
  },
  {
    title: "Sharing of Information",
    content: (
      <p>
        We do not sell personal information. We may share it with authorised
        staff, franchise support teams, technology providers, professional
        advisers, or public authorities when reasonably necessary to deliver
        services, protect our rights, or comply with applicable law. Service
        providers are expected to use information only for the agreed purpose.
      </p>
    ),
  },
  {
    title: "Data Retention and Security",
    content: (
      <p>
        We retain information only for as long as reasonably necessary for the
        purposes described above, including enquiry follow-up, business records,
        dispute resolution, and legal compliance. We use reasonable
        administrative and technical safeguards, but no online transmission or
        storage system can be guaranteed completely secure.
      </p>
    ),
  },
  {
    title: "Your Choices and Rights",
    content: (
      <p>
        Depending on applicable law, you may ask to access, correct, update, or
        delete your personal information, or withdraw consent for future
        communications. Contact us using the email below. We may need to verify
        your identity before completing a request.
      </p>
    ),
  },
  {
    title: "Children’s Privacy",
    content: (
      <p>
        This website and our franchise opportunities are intended for adults.
        We do not knowingly collect personal information from children. If you
        believe a child has submitted information, please contact us so we can
        review and remove it where appropriate.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    content: (
      <p>
        We may revise this policy as our website, services, or legal obligations
        change. The updated version will be posted here with a revised date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How we collect, use, retain, and protect information shared with Bright Laundry Solutions."
      updated="26 September 2026"
      sections={sections}
    />
  );
}
