import Image from "next/image";

export function ContactRail() {
  return (
    <aside
      className="fixed top-64.25 left-0 z-30 flex flex-col overflow-hidden rounded-r-[15px] shadow-[4px_0_12px_rgba(0,0,0,.08)] max-lg:top-auto max-lg:right-4 max-lg:bottom-4 max-lg:left-auto max-lg:flex-row max-lg:rounded-[14px] max-lg:shadow-[0_8px_24px_rgba(0,0,0,.18)] max-sm:hidden"
      aria-label="Quick contact links"
    >
      <a
        className="grid size-13.75 place-items-center bg-[#25d366] transition-[filter,transform] duration-200 hover:translate-x-1 hover:brightness-105 motion-reduce:transform-none"
        href="https://wa.me/917027977081"
        aria-label="Chat on WhatsApp"
      >
        <Image src="/images/whatsapp.svg" alt="" width={30} height={30} />
      </a>
      <a
        className="grid size-13.75 place-items-center bg-[#ed2b39] transition-[filter,transform] duration-200 hover:translate-x-1 hover:brightness-105 motion-reduce:transform-none"
        href="tel:+917027977081"
        aria-label="Call Bright Laundry Solutions"
      >
        <Image src="/images/phone.svg" alt="" width={30} height={30} />
      </a>
      <a
        className="grid size-13.75 place-items-center bg-[#28bbff] transition-[filter,transform] duration-200 hover:translate-x-1 hover:brightness-105 motion-reduce:transform-none"
        href="mailto:hello@brightlaundrysolutions.com"
        aria-label="Email Bright Laundry Solutions"
      >
        <Image src="/images/mail.svg" alt="" width={30} height={30} />
      </a>
    </aside>
  );
}
