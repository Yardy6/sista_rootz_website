"use client";

import type { PointerEvent } from "react";
import { useMemo, useRef, useState } from "react";
import { productCategories } from "../lib/site-content";
import { ProductCategoryCard } from "./ProductCategoryCard";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        d={direction === "left" ? "M19 12H5m6-6-6 6 6 6" : "M5 12h14m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function getOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

export function ProductCategoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartRef = useRef<number | null>(null);
  const activeCategory = productCategories[activeIndex];

  const categoryPositions = useMemo(
    () =>
      productCategories.map((category, index) => ({
        category,
        index,
        offset: getOffset(index, activeIndex, productCategories.length)
      })),
    [activeIndex]
  );

  function goTo(index: number) {
    const total = productCategories.length;
    setActiveIndex((index + total) % total);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    dragStartRef.current = event.clientX;
  }

  function handlePointerEnd(event: PointerEvent<HTMLDivElement>) {
    if (dragStartRef.current === null) {
      return;
    }

    const distance = event.clientX - dragStartRef.current;
    dragStartRef.current = null;

    if (Math.abs(distance) < 42) {
      return;
    }

    goTo(distance < 0 ? activeIndex + 1 : activeIndex - 1);
  }

  return (
    <section
      aria-label="Preview product categories carousel"
      className="category-carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(activeIndex + 1);
        }

        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(activeIndex - 1);
        }
      }}
      tabIndex={0}
    >
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-5xl font-bold leading-none text-[#fff8e8] md:text-6xl">
            Menu / Shop preview
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#fff8e8]/70">
            Swipe through planned categories. This is a preview only, not live
            inventory and not ecommerce.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            aria-label="Previous category"
            className="inline-grid h-12 w-12 place-items-center rounded-md border border-[#f4c84a]/35 bg-white/[0.07] text-[#f4c84a] transition hover:bg-white/[0.12]"
            onClick={() => goTo(activeIndex - 1)}
            type="button"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            aria-label="Next category"
            className="inline-grid h-12 w-12 place-items-center rounded-md border border-[#f4c84a]/35 bg-[#f4c84a] text-[#07140d] transition hover:bg-[#ffdc60]"
            onClick={() => goTo(activeIndex + 1)}
            type="button"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      <div
        className="category-stage relative h-[500px] overflow-hidden rounded-lg border border-[#d8b84f]/20"
        onPointerCancel={() => {
          dragStartRef.current = null;
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerEnd}
        style={{ touchAction: "pan-y" }}
      >
        <div className="absolute inset-0 category-stage-backdrop" />
        {categoryPositions.map(({ category, index, offset }) => {
          const isActive = offset === 0;

          return (
            <div
              aria-hidden={!isActive}
              className={`category-slide ${isActive ? "category-slide-active" : ""}`}
              key={category.name}
              style={{
                opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.54,
                transform: `translateX(${offset * 48}%) scale(${isActive ? 1 : 0.72})`,
                zIndex: 10 - Math.abs(offset)
              }}
            >
              <ProductCategoryCard
                accent={category.accent}
                copy={category.copy}
                index={index}
                name={category.name}
                shortCopy={category.shortCopy}
                variant={isActive ? "feature" : "compact"}
              />
            </div>
          );
        })}

        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between gap-4 text-sm text-[#fff8e8]/65">
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(productCategories.length).padStart(2, "0")}
          </span>
          <div aria-label="Category position" className="flex gap-2" role="tablist">
            {productCategories.map((category, index) => (
              <button
                aria-label={`Show ${category.name}`}
                aria-selected={index === activeIndex}
                className={`h-2.5 rounded-full transition ${
                  index === activeIndex ? "w-10 bg-[#f4c84a]" : "w-2.5 bg-white/30"
                }`}
                key={category.name}
                onClick={() => goTo(index)}
                role="tab"
                type="button"
              />
            ))}
          </div>
          <span className="hidden sm:inline">{activeCategory.name}</span>
        </div>
      </div>
    </section>
  );
}
