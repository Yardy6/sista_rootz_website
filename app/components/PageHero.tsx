import { RootLine } from "./RootLine";

type PageHeroProps = {
  title: string;
  copy: string;
  note?: string;
};

export function PageHero({ title, copy, note }: PageHeroProps) {
  return (
    <section className="page-hero-surface px-5 pb-16 pt-40 text-[#fff8e8] lg:px-8 lg:pb-24 lg:pt-48">
      <div className="page-hero-image" aria-hidden="true" />
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.4fr] lg:items-end">
        <div>
          <h1 className="font-display max-w-5xl text-5xl font-bold leading-[0.92] sm:text-6xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-[#fff8e8]/75">
            {copy}
          </p>
        </div>
        <div className="page-hero-note relative overflow-hidden border-l border-[#f4c84a]/70 p-6">
          <p className="font-display text-4xl font-bold leading-none text-[#f4c84a]">
            {note ?? "Coming Soon"}
          </p>
          <p className="mt-4 text-sm leading-7 text-[#fff8e8]/70">
            Under construction, adults 21+ only, and preview information only.
          </p>
          <RootLine className="mt-5 h-7 text-[#f4c84a]/70" />
        </div>
      </div>
    </section>
  );
}
