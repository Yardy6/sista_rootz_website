"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ageStorageKey = "sistaRootzAgeVerified";
const introStorageKey = "sistaRootzIntroPlayed";
const ageVerifiedEvent = "sista-rootz-age-verified";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function IntroLogoAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    function playIntro() {
      const ageVerified = window.localStorage.getItem(ageStorageKey) === "true";
      const introPlayed = window.localStorage.getItem(introStorageKey) === "true";

      if (!ageVerified || introPlayed) {
        return;
      }

      const reduced = prefersReducedMotion();
      setIsReduced(reduced);
      setIsVisible(true);
      document.body.classList.add("age-locked");

      timeoutId = window.setTimeout(
        () => {
          window.localStorage.setItem(introStorageKey, "true");
          document.body.classList.remove("age-locked");
          setIsVisible(false);
        },
        reduced ? 1100 : 4300
      );
    }

    playIntro();
    window.addEventListener(ageVerifiedEvent, playIntro);

    return () => {
      window.removeEventListener(ageVerifiedEvent, playIntro);
      document.body.classList.remove("age-locked");

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-label="Sista Rootz intro animation"
      className={`intro-screen fixed inset-0 z-[60] grid place-items-center overflow-hidden px-5 ${
        isReduced ? "intro-screen-reduced" : ""
      }`}
      role="status"
    >
      <svg
        aria-hidden="true"
        className="intro-vines pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 760"
      >
        <path className="vine vine-left" d="M0 505 C170 430 260 520 380 390 C470 292 555 300 600 372" />
        <path className="vine vine-right" d="M1200 190 C1015 280 965 160 820 296 C730 382 660 348 600 372" />
        <path className="vine vine-top" d="M602 0 C560 124 678 172 612 270 C574 326 592 350 600 372" />
        <path className="root root-left" d="M142 548 C192 560 226 600 252 656 M206 530 C232 500 262 492 304 500" />
        <path className="root root-right" d="M1040 244 C1004 278 976 320 966 374 M1002 252 C1034 232 1066 224 1104 226" />
        <path className="root root-top" d="M596 116 C630 134 654 166 672 208 M574 156 C542 168 518 190 500 226" />
      </svg>

      <div className="intro-logo-wrap relative">
        <div className="intro-pulse" aria-hidden="true" />
        <Image
          alt="Sista Rootz Spiritual and Wellness Center logo"
          className="intro-logo relative z-10 h-auto w-full object-contain"
          height={1080}
          priority
          src="/images/sista-rootz-logo.jpg"
          width={1080}
        />
        <div className="intro-bottom-reveal" aria-hidden="true" />
      </div>
    </div>
  );
}
