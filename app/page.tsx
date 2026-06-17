import Image from "next/image";
import Link from "next/link";
import { HomeLogoIntro } from "./components/HomeLogoIntro";
import { ProductCategoryCard } from "./components/ProductCategoryCard";
import { Section, SectionLabel } from "./components/Section";
import { productCategories } from "./lib/site-content";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="home-hero relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-10 pt-24 text-[#fff8e8] sm:px-8 lg:px-10 lg:pt-28 xl:pt-32 2xl:px-12">
        <div className="home-hero-image" aria-hidden="true" />
        <div className="home-hero-shade" aria-hidden="true" />

        <div className="home-hero-sticky relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1600px] flex-col items-center justify-center">
          <div />

          <div className="home-hero-brand mx-auto flex w-full max-w-[1100px] flex-col items-center justify-center text-center min-[1800px]:max-w-[1240px]">
            <HomeLogoIntro />
            <p className="mt-[clamp(1.25rem,2.2vw,2.35rem)] text-[clamp(0.78rem,0.9vw,1.05rem)] font-bold uppercase text-white/80">
              Rooted in culture · Growing with purpose
            </p>
          </div>
        </div>
      </section>

      <Section tone="gold">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Rooted In Culture</SectionLabel>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              Cannabis, culture, education, and care belong together.
            </h2>
          </div>
          <div className="border-l border-[#12864a]/35 pl-7 text-lg leading-8 text-[#4d4332]">
            <p>
              Sista Rootz is being shaped as a polished cannabis dispensary and
              wellness-centered brand for adults 21+, honoring the late Sista
              Ruth and the cultural roots that inspired the name.
            </p>
            <p className="mt-5">
              The website is intentionally under construction: explore the
              mission, learn what is planned, preview future categories, and
              connect for vendor inquiry while opening details are finalized.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              Expected product categories, shown as preview only.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#fff8e8]/70">
              These categories are planned for the future Sista Rootz
              experience. They are not live inventory and cannot be purchased on
              this website.
            </p>
          </div>
          <Link
            className="button-outline inline-flex min-h-12 w-fit items-center gap-2 px-5 text-sm font-black uppercase text-[#fff8e8]"
            href="/menu-shop"
          >
            Open Menu / Shop Preview <ArrowIcon />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {productCategories.slice(0, 3).map((category, index) => (
            <ProductCategoryCard
              accent={category.accent}
              copy={category.copy}
              index={index}
              key={category.name}
              name={category.name}
              shortCopy={category.shortCopy}
            />
          ))}
        </div>
      </Section>

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <Image
            alt="Sista Rootz brand artwork"
            className="h-auto w-full border border-black/10 object-contain shadow-xl"
            height={1200}
            src="/images/brand-book-cover.png"
            width={927}
          />
          <div>
            <SectionLabel>Honor + Community</SectionLabel>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              Built in honor of Sista Ruth. Designed for the community.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f493e]">
              The Sista Rootz identity connects family roots, plant roots,
              spiritual roots, and the neighborhood relationships that give a
              wellness-centered dispensary its purpose.
            </p>
            <Link
              className="button-primary mt-8 inline-flex min-h-12 items-center gap-2 px-5 text-sm font-black uppercase text-[#fff8e8]"
              href="/about"
            >
              Read the Sista Ruth Story <ArrowIcon />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="green">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase text-[#f4c84a]">Stay Connected</p>
          <h2 className="font-display mt-5 text-5xl font-bold leading-[0.95] sm:text-7xl">
            Opening details and vendor conversations start here.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#fff8e8]/70">
            Sista Rootz is coming soon. Contact the team while opening details
            and future announcements are prepared.
          </p>
          <Link
            className="button-gold mt-8 inline-flex min-h-12 items-center gap-2 px-6 text-sm font-black uppercase text-[#07140d]"
            href="/contact"
          >
            Contact / Inquiry <ArrowIcon />
          </Link>
        </div>
      </Section>
    </main>
  );
}
