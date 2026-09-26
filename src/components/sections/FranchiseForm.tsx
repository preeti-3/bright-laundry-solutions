"use client";

import { useState } from "react";
import { displayHeading } from "@/lib/styles";

const labelClass = "block text-[16px]";
const fieldClass = "mt-[11px] h-[50px] w-full border border-black/10 bg-white px-4 py-3 outline-none transition-shadow focus:border-[#89b92f] focus:ring-2 focus:ring-[#89b92f]/20";

export function FranchiseForm() {
  const [message, setMessage] = useState("");
  return <form className="min-h-[609px] w-full border border-black/10 bg-white p-[30px] shadow-[0_0_30px_rgba(0,0,0,.06)]" onSubmit={(event) => { event.preventDefault(); const form = event.currentTarget; if (!form.checkValidity()) { form.reportValidity(); return; } setMessage("Your details are ready, but online submission is not connected yet. Please email hello@brightlaundrysolutions.com."); }} noValidate>
    <h2 className={`${displayHeading} mb-[26px] text-[25px] font-bold`}>Your Information</h2>
    <div className="grid grid-cols-2 gap-x-5 gap-y-5 max-sm:grid-cols-1"><label className={labelClass}>First Name*<input className={fieldClass} name="firstName" autoComplete="given-name" required placeholder="Johan" /></label><label className={labelClass}>Last Name*<input className={fieldClass} name="lastName" autoComplete="family-name" required placeholder="Johan" /></label><label className={labelClass}>Phone No*<input className={fieldClass} name="phone" type="tel" autoComplete="tel" required placeholder="00000" /></label><label className={labelClass}>Email Address*<input className={fieldClass} name="email" type="email" autoComplete="email" required placeholder="johangmail.com" /></label></div>
    <label className={`${labelClass} mt-5`}>Your Message<textarea className={`${fieldClass} h-[118px] resize-y`} name="message" rows={4} placeholder="Hi, ...." /></label>
    <label className="my-5 flex items-start gap-1.5 text-[16px]"><input className="mt-1 size-[17px]" name="consent" type="checkbox" required /> <span>I agree to the <a className="text-[#0ea5e9]" href="#privacy">Privacy Policy</a> and <a className="text-[#0ea5e9]" href="#terms">Term &amp; condition</a></span></label>
    <button className="flex h-[52px] w-full cursor-pointer items-center justify-center bg-[#89b92f] text-[18px] font-bold text-white transition-colors hover:bg-[#78a528] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#193962]" type="submit">Submit →</button>
    <p className="mt-2 text-sm text-[#7a4c00]" aria-live="polite">{message}</p>
  </form>;
}
