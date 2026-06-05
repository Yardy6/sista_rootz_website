"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const storageKey = "sistaRootzAgeVerified";

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

  useEffect(() => {
    const verified = window.sessionStorage.getItem(storageKey) === "true";

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
      setError("You must be 21 years of age or older to enter this website.");
      return;
    }

    window.sessionStorage.setItem(storageKey, "true");
    document.body.classList.remove("age-locked");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-labelledby="age-gate-title"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/90 p-5 backdrop-blur-md"
      role="dialog"
    >
      <section className="dark-panel w-full max-w-[440px] rounded-lg border border-[#f4c84a]/45 p-6 text-center shadow-2xl sm:p-9">
        <Image
          alt="Sista Rootz Spiritual and Wellness Center logo"
          className="mx-auto mb-7 rounded-md border border-white/10"
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
        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#fff8e8]/72">
          Sista Rootz is an adults-only announcement website. Please confirm
          your birthday before continuing.
        </p>
        <form className="mt-7 grid gap-3 text-left" onSubmit={handleSubmit}>
          <label
            className="text-xs font-black uppercase tracking-wide text-[#f4c84a]"
            htmlFor="birthdate"
          >
            Date of birth
          </label>
          <input
            className="min-h-12 rounded-md border border-white/20 bg-white/8 px-4 text-[#fff8e8]"
            id="birthdate"
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
