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
      className={`category-card group relative overflow-hidden text-[#fff8e8] ${
        isFeature ? "min-h-[470px] p-7 md:p-9" : "min-h-[340px] p-6"
      }`}
      style={
        {
          "--category-accent": accent
        } as CSSProperties & Record<"--category-accent", string>
      }
    >
      <div className="category-card-color" aria-hidden="true" />
      <div className="category-card-shade" aria-hidden="true" />
      <div className="flex items-center justify-between text-[10px] font-black uppercase text-white/70">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>Preview only</span>
      </div>
      <div className="mt-auto">
        <h3
          className={`font-display font-bold leading-[0.82] ${
            isFeature ? "text-7xl md:text-8xl" : "text-5xl"
          }`}
        >
          {name}
        </h3>
        <p className={`mt-5 leading-7 text-white/72 ${isFeature ? "max-w-lg text-base" : "text-sm"}`}>
          {isFeature ? copy : shortCopy ?? copy}
        </p>
        <div className="mt-6 h-px w-full bg-white/25">
          <div className="h-px w-16 bg-[#f4c84a]" />
        </div>
      </div>
    </article>
  );
}
