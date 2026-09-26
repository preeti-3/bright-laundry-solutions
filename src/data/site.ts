export type NavItem = { label: string; href: string };
export type Feature = { title: string; description: string; icon: string };
export type Faq = { question: string; answer: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Franchise", href: "/franchise" },
  { label: "Why Invest", href: "/why-invest" },
  { label: "How It Works", href: "/how-it-works" },
];

export const coreFeatures: Feature[] = [
  { title: "Recurring, resilient demand", description: "Laundry is an essential service with loyal local customers.", icon: "/images/chart.svg" },
  { title: "A proven playbook", description: "Site selection, launch, marketing, training, and operations are all covered.", icon: "/images/shield.svg" },
  { title: "Smart by design", description: "Remote management and cashless payments make ownership simple.", icon: "/images/smartphone.svg" },
];

export const faqs: Faq[] = [
  { question: "Do I need laundry industry experience?", answer: "No. Prior laundry industry experience is not required. We provide complete training, operational guidance, and ongoing support to help you confidently launch and grow your BRIGHT Laundry Solutions franchise." },
  { question: "Can I operate the franchise while working full-time?", answer: "Yes. The model is designed around clear systems, trained staff, and ongoing operational support." },
  { question: "What training and ongoing support are included?", answer: "Owners receive setup guidance, operating standards, technology training, launch marketing, and continued business support." },
  { question: "How long does it take to start my franchise?", answer: "Timelines vary by location, but our team supports every step from site selection through opening day." },
];

export const supportCards = [
  ["Store Setup", "Interior planning, branding, and equipment guidance."],
  ["Technology", "Billing, CRM, order tracking, and business management."],
  ["Training", "Hands-on training for owners and staff."],
  ["Marketing", "Launch campaigns and local promotions."],
  ["Operational Support", "Ongoing guidance to keep your business running smoothly."],
  ["Quality Standards", "Standardised processes for consistent customer satisfaction."],
] as const;

export const bubbles = [
  { left: "4%", size: 28, delay: "-2s", duration: "14s", drift: "18px", opacity: .18 },
  { left: "12%", size: 44, delay: "-8s", duration: "18s", drift: "-14px", opacity: .12 },
  { left: "23%", size: 18, delay: "-5s", duration: "12s", drift: "10px", opacity: .2 },
  { left: "37%", size: 34, delay: "-11s", duration: "20s", drift: "-20px", opacity: .12 },
  { left: "49%", size: 22, delay: "-1s", duration: "16s", drift: "14px", opacity: .17 },
  { left: "61%", size: 52, delay: "-9s", duration: "22s", drift: "-18px", opacity: .1 },
  { left: "70%", size: 24, delay: "-4s", duration: "15s", drift: "12px", opacity: .18 },
  { left: "79%", size: 38, delay: "-13s", duration: "19s", drift: "-12px", opacity: .11 },
  { left: "88%", size: 17, delay: "-6s", duration: "13s", drift: "16px", opacity: .2 },
  { left: "95%", size: 31, delay: "-10s", duration: "17s", drift: "-10px", opacity: .14 },
] as const;
