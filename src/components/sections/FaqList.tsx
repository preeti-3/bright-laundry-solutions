"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return <div>{faqs.map((faq, index) => <div className="border-b border-black/20" key={faq.question}><button className="flex min-h-[76px] w-full cursor-pointer items-start justify-between gap-4 bg-transparent py-5 text-left text-[18px] font-bold" type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{faq.question}</span><span className="text-[28px] leading-none font-medium text-[#89b92f]" aria-hidden>+</span></button>{open === index && <p className="-mt-3 max-w-[842px] pb-5 text-[16px] leading-6 text-black/70">{faq.answer}</p>}</div>)}</div>;
}
