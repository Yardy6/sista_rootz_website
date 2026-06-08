"use client";

import { useState } from "react";
import { designOptions } from "../lib/site-content";
import { RootLine } from "./RootLine";

export function DesignOptionPreview() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeOption = designOptions[activeIndex];

  return (
    <section className="design-preview rounded-lg border border-black/10 bg-[#fff8e8] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.12)] md:p-7">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div>
          <h2 className="font-display text-5xl font-bold leading-none text-[#15120d]">
            Visual direction review
          </h2>
          <p className="mt-4 leading-8 text-[#5c5549]">
            Three code-native directions are available for review. The default
            site direction is the brighter urban Rastafarian system with nature
            and root accents.
          </p>
          <div className="mt-6 grid gap-3">
            {designOptions.map((option, index) => (
              <button
                aria-pressed={index === activeIndex}
                className={`rounded-md border p-4 text-left transition ${
                  index === activeIndex
                    ? "border-[#148b50] bg-[#e9f4df]"
                    : "border-black/10 bg-white hover:border-[#d8b84f]"
                }`}
                key={option.id}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span className="block text-sm font-black uppercase text-[#12864a]">
                  {option.name}
                </span>
                <span className="mt-2 block text-sm leading-6 text-[#5c5549]">
                  {option.summary}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className={`design-option-canvas ${activeOption.className}`}>
          <div className="relative z-10">
            <p className="text-sm font-black uppercase text-[#f4c84a]">{activeOption.name}</p>
            <h3 className="font-display mt-5 max-w-lg text-6xl font-bold leading-none">
              Sista Rootz, coming soon.
            </h3>
            <p className="mt-5 max-w-md leading-8 text-white/75">
              Premium dispensary energy shaped by roots, culture, wellness, and
              community education.
            </p>
            <RootLine className="mt-8 h-8 max-w-md text-[#f4c84a]/70" />
          </div>
          <div className="design-option-mark" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
