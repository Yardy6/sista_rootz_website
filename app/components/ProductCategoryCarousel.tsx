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
      <div className="carousel-heading">
        <h2 className="font-display text-5xl font-bold leading-none text-[#15120d] md:text-6xl">
          What’s coming
        </h2>
        <div className="mt-5 h-px bg-black/15" />
        <p className="mt-5 max-w-2xl leading-7 text-[#4f493e]">
          A visual preview of planned categories. No live inventory, purchasing,
          pricing, or online ordering is available.
        </p>
      </div>

      <div
        className="category-stage relative h-[660px] overflow-hidden"
        onPointerCancel={() => {
          dragStartRef.current = null;
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerEnd}
        style={{ touchAction: "pan-y" }}
      >
        {categoryPositions.map(({ category, index, offset }) => {
          const isActive = offset === 0;

          return (
            <div
              aria-label={!isActive ? `Show ${category.name}` : undefined}
              aria-hidden={Math.abs(offset) > 1}
              className={`category-slide ${isActive ? "category-slide-active" : ""}`}
              key={category.name}
              onClick={() => {
                if (!isActive) {
                  goTo(index);
                }
              }}
              onKeyDown={(event) => {
                if (!isActive && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  goTo(index);
                }
              }}
              role={!isActive ? "button" : undefined}
              style={{
                opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.72,
                transform: `translateX(${offset * 82}%) scale(${isActive ? 1 : 0.78})`,
                zIndex: 10 - Math.abs(offset)
              }}
              tabIndex={!isActive && Math.abs(offset) === 1 ? 0 : -1}
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

        <button
          aria-label="Previous category"
          className="carousel-arrow carousel-arrow-left"
          onClick={() => goTo(activeIndex - 1)}
          type="button"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          aria-label="Next category"
          className="carousel-arrow carousel-arrow-right"
          onClick={() => goTo(activeIndex + 1)}
          type="button"
        >
          <ArrowIcon direction="right" />
        </button>

        <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-center">
          <div aria-label="Category position" className="flex gap-2" role="tablist">
            {productCategories.map((category, index) => (
              <button
                aria-label={`Show ${category.name}`}
                aria-selected={index === activeIndex}
                className={`h-1 rounded-full transition ${
                  index === activeIndex ? "w-12 bg-[#148b50]" : "w-5 bg-black/20"
                }`}
                key={category.name}
                onClick={() => goTo(index)}
                role="tab"
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs font-black uppercase text-[#12864a]">
        {activeCategory.name} · Coming soon
      </p>
    </section>
  );
}
