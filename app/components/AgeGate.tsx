"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const storageKey = "sistaRootzAgeVerified";
const ageVerifiedEvent = "sista-rootz-age-verified";

function getAge(dateValue: string) {
  const birthDate = new Date(`${dateValue}T00:00:00`);
  const today = new Date();

  if (Number.isNaN(birthDate.getTime()) || birthDate > today) {
    return null;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age -= 1;
  }

  return age;
}

export function AgeGate() {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const verified = window.localStorage.getItem(storageKey) === "true";

    if (!verified) {
      setIsVisible(true);
      document.body.classList.add("age-locked");
    }

    return () => document.body.classList.remove("age-locked");
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const age = getAge(String(form.get("birthdate") ?? ""));

    if (age === null) {
      setError("Please enter a valid date of birth.");
      return;
    }

    if (age < 21) {
      setError("You must be 21 or older to enter this site.");
      window.setTimeout(() => {
        window.location.href = "https://www.google.com/";
      }, 900);
      return;
    }

    window.localStorage.setItem(storageKey, "true");
    document.body.classList.remove("age-locked");
    setIsVisible(false);
    window.dispatchEvent(new Event(ageVerifiedEvent));
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-labelledby="age-gate-title"
      aria-modal="true"
      className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-[#050704]/95 p-5 backdrop-blur-md"
      role="dialog"
    >
      <section className="age-panel relative w-full max-w-[480px] overflow-hidden rounded-lg border border-[#f4c84a]/35 p-6 text-center shadow-2xl sm:p-9">
        <div className="vine-frame left-5 top-5 rotate-180" aria-hidden="true" />
        <div className="vine-frame bottom-5 right-5" aria-hidden="true" />
        <Image
          alt="Sista Rootz Spiritual and Wellness Center logo"
          className="mx-auto mb-7 h-auto max-h-56 w-full max-w-72 object-contain"
          height={1080}
          priority
          src="/images/sista-rootz-logo.jpg"
          width={1080}
        />
        <p className="font-display text-4xl font-bold uppercase text-[#f4c84a]">
          Adults 21+ Only
        </p>
        <h1
          className="font-display mt-3 text-5xl font-bold leading-[0.94] text-[#fff8e8]"
          id="age-gate-title"
        >
          Verify your age to enter.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#fff8e8]/70">
          Sista Rootz is an adults-only coming-soon website. Please confirm your
          birthday before continuing.
        </p>
        <p className="mt-3 text-sm font-black text-[#f4c84a]">
          You must be 21 or older to enter this site.
        </p>
        <form className="mt-7 grid gap-3 text-left" onSubmit={handleSubmit}>
          <label
            className="text-xs font-black uppercase text-[#f4c84a]"
            htmlFor="birthdate"
          >
            Date of birth
          </label>
          <input
            className="min-h-12 rounded-md border border-white/20 bg-white/[0.08] px-4 text-[#fff8e8]"
            id="birthdate"
            max={today}
            name="birthdate"
            required
            type="date"
          />
          <button className="min-h-12 rounded-md bg-[#f4c84a] px-5 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffd95a]">
            Enter Site
          </button>
          <p aria-live="polite" className="min-h-6 text-center text-sm font-bold text-[#ffd4cf]">
            {error}
          </p>
        </form>
      </section>
    </div>
  );
}
