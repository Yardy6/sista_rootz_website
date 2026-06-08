import Image from "next/image";
import Link from "next/link";
import { DesignOptionPreview } from "./components/DesignOptionPreview";
import { ProductCategoryCard } from "./components/ProductCategoryCard";
import { RootLine } from "./components/RootLine";
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
      <section className="home-hero relative overflow-hidden px-5 pb-16 pt-36 text-[#fff8e8] lg:px-8 lg:pb-20 lg:pt-40">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="relative z-10">
            <h1 className="font-display max-w-5xl text-6xl font-bold leading-[0.86] sm:text-7xl lg:text-8xl">
              Sista Rootz
            </h1>
            <div className="mt-6 grid gap-3 text-xl font-black uppercase text-[#f4c84a] sm:text-2xl">
              <p>Dispensary Coming Soon</p>
              <p>Under Construction</p>
            </div>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#fff8e8]/80">
              Expected Opening: {site.opening}. Read About What Is To Come as
              Sista Rootz prepares a modern, urban, Rastafarian-inspired
              cannabis dispensary rooted in wellness, farming, education, and
              community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#f4c84a] px-5 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffdc60]"
                href="/about"
              >
                About Sista Rootz <ArrowIcon />
              </Link>
              <Link
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/25 bg-white/[0.08] px-5 text-sm font-black uppercase text-[#fff8e8] transition hover:border-[#f4c84a]/70"
                href="/first-time-buyers"
              >
                First Time Buyers
              </Link>
              <Link
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/25 bg-white/[0.08] px-5 text-sm font-black uppercase text-[#fff8e8] transition hover:border-[#f4c84a]/70"
                href="/menu-shop"
              >
                Menu / Shop Preview
              </Link>
            </div>
          </div>

          <aside className="hero-status-panel relative z-10 overflow-hidden rounded-lg border border-[#f4c84a]/30 p-7 shadow-2xl">
            <div className="vine-frame right-5 top-5" aria-hidden="true" />
            <Image
              alt="Sista Rootz Spiritual and Wellness Center logo"
              className="mb-7 h-auto w-full max-w-[340px] object-contain"
              height={1080}
              priority
              src="/images/sista-rootz-logo.jpg"
              width={1080}
            />
            <p className="text-sm font-black uppercase text-[#f4c84a]">
              Expected Opening
            </p>
            <p className="font-display mt-4 text-6xl font-bold leading-none text-[#fff8e8]">
              {site.opening}
            </p>
            <RootLine className="my-6 h-8 w-full text-[#148b50]/85" />
            <div className="grid gap-5 text-sm">
              <div>
                <p className="font-black uppercase text-[#f4c84a]">Website Goals</p>
                <p className="mt-2 leading-7 text-[#fff8e8]/75">
                  Announce the coming dispensary, share the cultural mission,
                  prepare first time buyers, and preview expected categories.
                </p>
              </div>
              <div>
                <p className="font-black uppercase text-[#f4c84a]">Availability</p>
                <p className="mt-2 leading-7 text-[#fff8e8]/75">
                  Preview only. No products are available to purchase online
                  today.
                </p>
              </div>
              <div>
                <p className="font-black uppercase text-[#f4c84a]">Contact</p>
                <p className="mt-2 text-[#fff8e8]/80">
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Section tone="gold">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Rooted In Culture</SectionLabel>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              A brighter premium dispensary experience is taking root.
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-[#4d4332]">
            <p>
              Sista Rootz is being shaped as a polished cannabis dispensary and
              wellness-centered brand for adults 21+, honoring the late Sista
              Ruth and the cultural roots that inspired the name.
            </p>
            <p>
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
        <div className="grid gap-4 md:grid-cols-3">
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
        <DesignOptionPreview />
      </Section>

      <Section tone="green">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              Vendor and contact details remain open for review.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#fff8e8]/70">
              Forms are placeholders only unless a backend is added later.
              Contact information is available for project coordination and
              vendor inquiry while the website is under construction.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-[#f4c84a]/25 bg-black/25 p-7">
            <div className="vine-frame right-4 top-4 opacity-45" aria-hidden="true" />
            <p className="font-black uppercase text-[#f4c84a]">Main Phone</p>
            <p className="mt-2 text-2xl font-bold">
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
            <p className="mt-6 font-black uppercase text-[#f4c84a]">
              Website Decisions
            </p>
            <p className="mt-2 text-lg">
              {site.contactName}:{" "}
              <a href={site.contactPhoneHref}>{site.contactPhoneDisplay}</a>
            </p>
            <Link
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-[#f4c84a] px-5 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffdc60]"
              href="/contact"
            >
              Contact / Vendor Inquiry <ArrowIcon />
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
