"use client";

import { FormEvent, useState } from "react";

export function StayUpdatedForm() {
  const [message, setMessage] = useState(
    "Placeholder form only. No information is submitted to a live service yet."
  );
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setMessage("Request noted. This form can be connected when a backend is selected.");
  }

  return (
    <form className="mt-7 grid gap-3" onSubmit={handleSubmit}>
      <label className="text-sm font-bold text-[#fff8e8]" htmlFor="email">
        Email address
      </label>
      <input
        className="min-h-12 rounded-md border border-white/15 bg-white/7 px-4 text-[#fff8e8] placeholder:text-[#fff8e8]/40"
        id="email"
        name="email"
        placeholder="you@example.com"
        required
        type="email"
      />
      <label className="text-sm font-bold text-[#fff8e8]" htmlFor="phone">
        Phone number <span className="font-medium text-[#fff8e8]/55">(optional)</span>
      </label>
      <input
        className="min-h-12 rounded-md border border-white/15 bg-white/7 px-4 text-[#fff8e8] placeholder:text-[#fff8e8]/40"
        id="phone"
        name="phone"
        placeholder="443.000.0000"
        type="tel"
      />
      <button
        className="mt-2 min-h-12 rounded-md bg-[#f4c84a] px-5 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffd95a] disabled:cursor-not-allowed disabled:opacity-75"
        disabled={submitted}
      >
        {submitted ? "Request Noted" : "Notify Me"}
      </button>
      <p aria-live="polite" className="text-sm leading-6 text-[#fff8e8]/62">
        {message}
      </p>
    </form>
  );
}
