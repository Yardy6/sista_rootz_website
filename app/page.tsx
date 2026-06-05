import Image from "next/image";
import Link from "next/link";
import { ProductPreviewCard } from "./components/ProductPreviewCard";
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
      <section className="hero-field organic-divider relative isolate min-h-screen overflow-hidden px-5 pb-16 pt-40 text-[#fff8e8] lg:px-8 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,rgba(7,8,6,0.98)_0%,rgba(7,8,6,0.9)_47%,rgba(7,8,6,0.54)_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[760px] lg:grid-cols-[1fr_0.78fr]">
          <div>
            <Image
              alt="Sista Rootz Spiritual and Wellness Center logo"
              className="mb-8 h-auto w-full max-w-[520px] rounded-lg border border-[#d8b84f]/30 bg-black/70 object-contain p-4 shadow-2xl"
              height={1080}
              priority
              src="/images/sista-rootz-logo.jpg"
              width={1080}
            />
            <h1 className="font-display max-w-4xl text-[clamp(4.2rem,11vw,9rem)] font-bold uppercase leading-[0.82] text-[#f4c84a]">
              Coming Soon
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-9 text-[#fff8e8]/86">
              Sista.Rootz is preparing a spiritual and wellness-centered
              cannabis dispensary rooted in Rastafarian inspiration, cultural
              education, community, and premium adult-use service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#f4c84a] px-5 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffdc60]"
                href="/about"
              >
                Learn the Story <ArrowIcon />
              </Link>
              <Link
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/28 bg-white/8 px-5 text-sm font-black uppercase text-[#fff8e8] transition hover:border-[#f4c84a]/60"
                href="/contact"
              >
                Contact / Vendor Inquiry
              </Link>
            </div>
          </div>

          <aside className="dark-panel relative overflow-hidden rounded-lg border border-[#d8b84f]/35 p-7 shadow-2xl lg:ml-auto lg:max-w-md">
            <div className="root-corner right-5 top-5" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f4c84a]">
              Expected Opening
            </p>
            <p className="font-display mt-4 text-6xl font-bold leading-none text-[#fff8e8]">
              {site.opening}
            </p>
            <RootLine className="my-6 h-8 w-full text-[#12864a]/80" />
            <dl className="grid gap-5 text-sm">
              <div>
                <dt className="font-black uppercase text-[#f4c84a]">Phone</dt>
                <dd className="mt-1 text-lg font-bold">
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt className="font-black uppercase text-[#f4c84a]">Location</dt>
                <dd className="mt-1 text-[#fff8e8]/75">Location coming soon</dd>
              </div>
              <div>
                <dt className="font-black uppercase text-[#f4c84a]">
                  Website Contact
                </dt>
                <dd className="mt-1 text-[#fff8e8]/75">
                  {site.contactName}, <a href={site.contactPhoneHref}>{site.contactPhoneDisplay}</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Rooted In Culture</SectionLabel>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              A coming-soon sanctuary for wellness, education, and community.
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-[#4f493e]">
            <p>
              Created in tribute to Sista Ruth, Sista.Rootz is being shaped as a
              modern, urban, classy dispensary experience with a Rastafarian-
              inspired wellness identity.
            </p>
            <p>
              The first public website is intentionally announcement-focused:
              learn about the mission, preview planned categories, and connect
              for updates or vendor inquiries while opening details are finalized.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
              What&apos;s Coming
            </p>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              Future menu preview, not live inventory.
            </h2>
          </div>
          <Link
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-md border border-[#d8b84f]/40 px-5 text-sm font-black uppercase text-[#fff8e8] transition hover:border-[#f4c84a]"
            href="/whats-coming"
          >
            View all categories <ArrowIcon />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {productCategories.slice(0, 3).map((category, index) => (
            <ProductPreviewCard
              copy={category.copy}
              index={index}
              key={category.name}
              name={category.name}
            />
          ))}
        </div>
      </Section>

      <Section tone="warm">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["About", "Honor Sista Ruth and the cultural mission behind the brand.", "/about"],
            [
              "First-Time Visitors",
              "Learn what new adult visitors can expect as details are announced.",
              "/first-time-visitors"
            ],
            [
              "Vendor Inquiry",
              "Reach out through placeholder-friendly contact details and form fields.",
              "/contact"
            ]
          ].map(([title, copy, href]) => (
            <Link
              className="group relative overflow-hidden rounded-lg border border-black/10 bg-[#fff8e8]/78 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              href={href}
              key={title}
            >
              <div className="root-corner right-4 top-4 opacity-30 group-hover:opacity-70" />
              <h3 className="font-display text-4xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-[#5c5549]">{copy}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#12864a]">
                Open page <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
