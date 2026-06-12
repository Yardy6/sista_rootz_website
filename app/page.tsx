import Image from "next/image";
import Link from "next/link";
import { FluidLogo } from "./components/FluidLogo";
import { BrandTicker } from "./components/BrandTicker";
import { ProductCategoryCard } from "./components/ProductCategoryCard";
import { Section, SectionLabel } from "./components/Section";
import { productCategories, site } from "./lib/site-content";

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
      <section className="home-hero relative overflow-hidden px-5 text-[#fff8e8] lg:px-8">
        <div className="home-hero-image" aria-hidden="true" />
        <div className="home-hero-shade" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between pb-8 pt-28 lg:pb-10 lg:pt-32">
          <div className="flex justify-end">
            <p className="max-w-[190px] border-r border-white/35 pr-4 text-right text-[10px] font-bold uppercase leading-5 text-white/65">
              Adults 21+ only
              <br />
              Coming soon
              <br />
              No online ordering
            </p>
          </div>

          <div className="home-hero-brand mx-auto flex w-full max-w-5xl flex-col items-center text-center">
            <FluidLogo className="home-hero-logo w-full max-w-[500px]" priority />
            <p className="mt-5 text-xs font-bold uppercase text-white/75 sm:text-sm">
              Rooted in culture · Growing with purpose
            </p>
          </div>

          <div className="home-hero-bottom grid gap-5 border-t border-white/25 pt-5 md:grid-cols-[0.85fr_1fr_1fr] md:items-end">
            <Link
              className="home-feature-link group flex items-center gap-4 border border-white/20 bg-black/25 p-3 text-left backdrop-blur-sm"
              href="/about"
            >
              <Image
                alt=""
                className="h-20 w-20 object-contain"
                height={635}
                src="/images/sista-rootz-logo-transparent.png"
                width={800}
              />
              <span className="text-xs font-semibold leading-5 text-white/80">
                Honoring Sista Ruth through culture, wellness, and community.
                <span className="mt-1 flex items-center gap-2 font-bold uppercase text-[#f4c84a]">
                  Our story <ArrowIcon />
                </span>
              </span>
            </Link>

            <div className="text-sm leading-6 text-white/70">
              <p className="text-[10px] font-bold uppercase text-[#f4c84a]">
                Expected Opening
              </p>
              <p className="font-display mt-1 text-3xl font-bold text-white">
                {site.opening}
              </p>
              <p className="mt-2 max-w-sm">
                A modern, urban, Rastafarian-inspired spiritual and wellness
                dispensary for adults 21+.
              </p>
            </div>

            <div className="text-sm leading-6 text-white/70 md:text-right">
              <p>
                Explore the mission, prepare for a first visit, and preview the
                categories planned for the future Sista Rootz experience.
              </p>
              <Link
                className="mt-3 inline-flex items-center gap-2 border-b border-white/40 pb-1 font-bold uppercase text-white transition hover:border-[#f4c84a] hover:text-[#f4c84a]"
                href="/menu-shop"
              >
                Explore what’s coming <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandTicker />

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
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-md border border-[#d8b84f]/40 px-5 text-sm font-black uppercase text-[#fff8e8] transition hover:border-[#f4c84a]"
            href="/menu-shop"
          >
            Open Menu / Shop Preview <ArrowIcon />
          </Link>
        </div>
        <div className="grid gap-px overflow-hidden border border-[#d8b84f]/20 bg-[#d8b84f]/20 md:grid-cols-3">
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
              className="mt-8 inline-flex min-h-12 items-center gap-2 bg-[#0d351f] px-5 text-sm font-black uppercase text-[#fff8e8] transition hover:bg-[#148b50]"
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
            className="mt-8 inline-flex min-h-12 items-center gap-2 bg-[#f4c84a] px-6 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffdc60]"
            href="/contact"
          >
            Contact / Vendor Inquiry <ArrowIcon />
          </Link>
        </div>
      </Section>
    </main>
  );
}
