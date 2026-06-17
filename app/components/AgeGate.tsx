"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

const storageKey = "sistaRootzAgeVerified";
const ageVerifiedEvent = "sista-rootz-age-verified";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function getAge(monthValue: string, dayValue: string, yearValue: string) {
  const month = Number(monthValue);
  const day = Number(dayValue);
  const year = Number(yearValue);
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  if (
    !month ||
    !day ||
    yearValue.length !== 4 ||
    Number.isNaN(birthDate.getTime()) ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day ||
    birthDate.getFullYear() !== year ||
    birthDate > today
  ) {
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
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const dayRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const canSubmit = month.length > 0 && day.length > 0 && year.length === 4;
  const progress = useMemo(
    () => [month, day, year].filter(Boolean).length,
    [day, month, year]
  );

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
    const age = getAge(month, day, year);

    if (age === null) {
      setError("Please enter a valid birth date.");
      return;
    }

    if (age < 21) {
      setError("Access is restricted. You must be 21 or older to enter Sista Rootz.");
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
      <section className="age-panel relative w-full max-w-[540px] overflow-hidden border border-[#f4c84a]/35 p-6 text-center shadow-2xl sm:p-9">
        <div className="vine-frame left-5 top-5 rotate-180" aria-hidden="true" />
        <div className="vine-frame bottom-5 right-5" aria-hidden="true" />
        <Image
          alt="Sista Rootz Spiritual and Wellness Center logo"
          className="mx-auto mb-6 h-auto max-h-52 w-full max-w-72 object-contain"
          height={635}
          priority
          src="/images/sista-rootz-logo-transparent.png"
          width={800}
        />
        <p className="font-display text-4xl font-bold uppercase text-[#f4c84a]">
          Adults 21+ Only
        </p>
        <h1
          className="font-display mt-3 text-5xl font-bold leading-[0.94] text-[#fff8e8]"
          id="age-gate-title"
        >
          Confirm your birth date.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#fff8e8]/70">
          Sista Rootz is an adults-only coming-soon website. Enter your birthday
          to continue.
        </p>
        <p className="mt-3 text-sm font-black text-[#f4c84a]">
          You must be 21 or older to enter this site.
        </p>

        <form className="age-form mt-7 grid gap-4 text-left" onSubmit={handleSubmit}>
          <div className="age-fields" aria-label="Date of birth">
            <label className="age-field age-field-month" htmlFor="birth-month">
              <span>Month</span>
              <select
                id="birth-month"
                name="birth-month"
                onChange={(event) => {
                  setMonth(event.target.value);
                  setError("");
                  if (event.target.value) {
                    dayRef.current?.focus();
                  }
                }}
                required
                value={month}
              >
                <option value="">Month</option>
                {months.map((monthName, index) => (
                  <option key={monthName} value={String(index + 1)}>
                    {monthName}
                  </option>
                ))}
              </select>
            </label>

            <label className="age-field" htmlFor="birth-day">
              <span>Day</span>
              <input
                id="birth-day"
                inputMode="numeric"
                maxLength={2}
                name="birth-day"
                onChange={(event) => {
                  const value = event.target.value.replace(/\D/g, "").slice(0, 2);
                  setDay(value);
                  setError("");
                  if (value.length === 2) {
                    yearRef.current?.focus();
                  }
                }}
                placeholder="DD"
                ref={dayRef}
                required
                type="text"
                value={day}
              />
            </label>

            <label className="age-field" htmlFor="birth-year">
              <span>Year</span>
              <input
                id="birth-year"
                inputMode="numeric"
                maxLength={4}
                name="birth-year"
                onChange={(event) => {
                  setYear(event.target.value.replace(/\D/g, "").slice(0, 4));
                  setError("");
                }}
                placeholder="YYYY"
                ref={yearRef}
                required
                type="text"
                value={year}
              />
            </label>
          </div>

          <div className="age-progress" aria-hidden="true">
            {[0, 1, 2].map((step) => (
              <span className={progress > step ? "age-progress-dot-active" : ""} key={step} />
            ))}
          </div>

          <button
            className="button-gold min-h-12 px-5 text-sm font-black uppercase text-[#07140d] disabled:cursor-not-allowed disabled:opacity-45"
            disabled={!canSubmit}
          >
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
