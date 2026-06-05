type ProductPreviewCardProps = {
  index: number;
  name: string;
  copy: string;
};

export function ProductPreviewCard({ index, name, copy }: ProductPreviewCardProps) {
  return (
    <article className="group relative min-h-60 overflow-hidden rounded-lg border border-[#d8b84f]/24 bg-[#11130f] p-6 text-[#fff8e8] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
      <div className="root-corner right-4 top-4 opacity-35 transition group-hover:opacity-70" />
      <span className="font-display inline-grid h-12 w-12 place-items-center rounded-full border border-[#d8b84f]/45 text-2xl font-bold text-[#f4c84a]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-8 text-2xl font-black">{name}</h3>
      <p className="mt-4 leading-7 text-[#fff8e8]/66">{copy}</p>
      <div className="brand-gradient mt-6 h-1 w-20 rounded-full" />
    </article>
  );
}
