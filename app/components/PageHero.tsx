import { RootLine } from "./RootLine";

type PageHeroProps = {
  title: string;
  copy: string;
  note?: string;
};

export function PageHero({ title, copy, note }: PageHeroProps) {
  return (
    <section className="page-hero-surface px-5 pb-16 pt-36 text-[#fff8e8] lg:px-8 lg:pb-20 lg:pt-40">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-end">
        <div>
          <h1 className="font-display max-w-5xl text-5xl font-bold leading-[0.92] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-[#fff8e8]/75">
            {copy}
          </p>
        </div>
        <div className="page-hero-note relative overflow-hidden rounded-lg border border-[#f4c84a]/25 p-6">
          <div className="vine-frame right-4 top-4 opacity-45" aria-hidden="true" />
          <p className="font-display text-4xl font-bold leading-none text-[#f4c84a]">
            {note ?? "Coming Soon"}
          </p>
          <p className="mt-4 text-sm leading-7 text-[#fff8e8]/70">
            Under construction, adults 21+ only, and preview information only.
          </p>
          <RootLine className="mt-5 h-7 text-[#148b50]/80" />
        </div>
      </div>
    </section>
  );
}
