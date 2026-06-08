import type { CSSProperties } from "react";

type ProductCategoryCardProps = {
  accent?: string;
  copy: string;
  index: number;
  name: string;
  shortCopy?: string;
  variant?: "compact" | "feature";
};

export function ProductCategoryCard({
  accent = "#148b50",
  copy,
  index,
  name,
  shortCopy,
  variant = "compact"
}: ProductCategoryCardProps) {
  const isFeature = variant === "feature";

  return (
    <article
      className={`category-card group relative overflow-hidden rounded-lg border border-[#d8b84f]/25 bg-[#10160d] text-[#fff8e8] shadow-[0_18px_50px_rgba(0,0,0,0.18)] ${
        isFeature ? "min-h-[380px] p-7 md:p-8" : "min-h-72 p-6"
      }`}
      style={{ "--category-accent": accent } as CSSProperties & Record<"--category-accent", string>}
    >
      <div className="vine-frame right-4 top-4 opacity-35 transition group-hover:opacity-70" />
      <span className="font-display inline-grid h-14 w-14 place-items-center rounded-full border border-[#d8b84f]/45 text-2xl font-bold text-[#f4c84a]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className={isFeature ? "mt-10" : "mt-10"}>
        <h3
          className={`font-display font-bold leading-none ${
            isFeature ? "text-5xl md:text-6xl" : "text-4xl"
          }`}
        >
          {name}
        </h3>
        <p className={`mt-5 leading-8 text-[#fff8e8]/70 ${isFeature ? "max-w-lg text-lg" : ""}`}>
          {isFeature ? copy : shortCopy ?? copy}
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <span className="inline-flex min-h-11 items-center rounded-md bg-[#f4c84a] px-4 text-sm font-black uppercase text-[#07140d]">
          Coming Soon
        </span>
        <span className="inline-flex min-h-11 items-center rounded-md border border-white/20 px-4 text-sm font-black uppercase text-[#fff8e8]/80">
          Preview Category
        </span>
      </div>
    </article>
  );
}
