import { RootLine } from "./RootLine";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  copy: string;
};

export function PageHero({ eyebrow, title, copy }: PageHeroProps) {
  return (
    <section className="root-hero px-5 pb-16 pt-40 text-[#fff8e8] lg:px-8 lg:pb-20 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        {eyebrow ? (
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f4c84a]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display mt-5 max-w-5xl text-6xl font-bold leading-[0.9] sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-[#fff8e8]/75">
          {copy}
        </p>
        <RootLine className="mt-8 h-8 max-w-xl text-[#12864a]/80" />
      </div>
    </section>
  );
}
