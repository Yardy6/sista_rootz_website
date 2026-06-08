"use client";

import { FormEvent, useState } from "react";

type ContactFormPlaceholderProps = {
  variant?: "updates" | "vendor";
};

export function ContactFormPlaceholder({ variant = "vendor" }: ContactFormPlaceholderProps) {
  const [message, setMessage] = useState(
    "Placeholder form only. No information is submitted to a live service yet."
  );
  const [submitted, setSubmitted] = useState(false);
  const isUpdates = variant === "updates";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setMessage("Request noted. This placeholder is not connected to a backend yet.");
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-bold text-[#fff8e8]" htmlFor={`${variant}-name`}>
        Name
        <input
          className="min-h-12 rounded-md border border-white/15 bg-white/[0.07] px-4 text-[#fff8e8] placeholder:text-[#fff8e8]/40"
          id={`${variant}-name`}
          name="name"
          placeholder="Your name"
          required={!isUpdates}
          type="text"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-[#fff8e8]" htmlFor={`${variant}-email`}>
        Email address
        <input
          className="min-h-12 rounded-md border border-white/15 bg-white/[0.07] px-4 text-[#fff8e8] placeholder:text-[#fff8e8]/40"
          id={`${variant}-email`}
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-[#fff8e8]" htmlFor={`${variant}-phone`}>
        Phone number <span className="font-medium text-[#fff8e8]/55">(optional)</span>
        <input
          className="min-h-12 rounded-md border border-white/15 bg-white/[0.07] px-4 text-[#fff8e8] placeholder:text-[#fff8e8]/40"
          id={`${variant}-phone`}
          name="phone"
          placeholder="(443) 000-0000"
          type="tel"
        />
      </label>
      {!isUpdates ? (
        <label className="grid gap-2 text-sm font-bold text-[#fff8e8]" htmlFor="message">
          Inquiry details
          <textarea
            className="min-h-32 rounded-md border border-white/15 bg-white/[0.07] px-4 py-3 text-[#fff8e8] placeholder:text-[#fff8e8]/40"
            id="message"
            name="message"
            placeholder="Share a short note about your inquiry."
          />
        </label>
      ) : null}
      <button
        className="min-h-12 rounded-md bg-[#f4c84a] px-5 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffdc60] disabled:cursor-not-allowed disabled:opacity-75"
        disabled={submitted}
      >
        {submitted ? "Request Noted" : isUpdates ? "Notify Me" : "Send Placeholder Inquiry"}
      </button>
      <p aria-live="polite" className="text-sm leading-6 text-[#fff8e8]/60">
        {message}
      </p>
    </form>
  );
}
