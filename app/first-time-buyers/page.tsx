import Link from "next/link";
import { PageHero } from "../components/PageHero";
import { ProductCategoryCard } from "../components/ProductCategoryCard";
import { RootLine } from "../components/RootLine";
import { Section, SectionLabel } from "../components/Section";
import { buyerGuidance, productCategories } from "../lib/site-content";

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

export default function FirstTimeBuyersPage() {
  return (
    <main>
      <PageHero
        copy="A welcoming guide for adults who may be new to dispensaries, Rastafarian-inspired wellness, product education, and responsible cannabis use. The store is not open yet, and products are not currently for sale online."
        note="Adults 21+"
        title="First Time Buyers can learn before the doors open."
      />

      <Section tone="gold">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr]">
          <div>
            <SectionLabel>Culture + Society</SectionLabel>
            <h2 className="font-display max-w-2xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              Rastafarian meaning is part of the education.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#4f493e]">
              Rastafarianism has long represented spiritual discipline, natural
              living, resistance to oppression, cultural pride, music, farming,
              community care, and a search for dignity within society. Sista
              Rootz takes inspiration from those values while building a future
              dispensary environment that feels respectful, polished, and
              grounded.
            </p>
            <RootLine className="mt-7 h-8 max-w-md text-[#12864a]/75" />
          </div>

          <div className="editorial-list">
            {buyerGuidance.map((note, index) => (
              <article
                className="editorial-list-row interactive-panel relative overflow-hidden border-t border-black/15 py-6"
                key={note.title}
              >
                <span className="font-display text-2xl text-[#12864a]/60">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-black uppercase text-[#12864a]">
                    {note.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5c5549]">{note.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
              Fresh products are planned, not available today.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#fff8e8]/70">
            Future buyers can expect education around product categories,
            responsible-use language, freshness, potency awareness, and personal
            comfort. Sista Rootz is still under construction, and this website
            does not sell products online.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {productCategories.slice(0, 3).map((category, index) => (
            <ProductCategoryCard
              accent={category.accent}
              copy={category.copy}
              imagePosition={category.imagePosition}
              index={index}
              key={category.name}
              name={category.name}
              shortCopy={category.shortCopy}
            />
          ))}
        </div>
      </Section>

      <Section tone="green">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
            Bring questions. Bring valid ID. Move with care.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#fff8e8]/70">
            Adults 21+ should expect valid ID requirements, final store policies,
            and responsible-use guidance when opening details are announced.
            Online purchasing, live ordering, carts, prices, and checkout are
            not available here.
          </p>
          <Link
            className="button-gold mt-8 inline-flex min-h-12 items-center gap-2 px-5 text-sm font-black uppercase text-[#07140d]"
            href="/menu-shop"
          >
            Preview Menu / Shop <ArrowIcon />
          </Link>
        </div>
      </Section>
    </main>
  );
}
