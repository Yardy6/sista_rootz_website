import { PageHero } from "../components/PageHero";
import { ProductPreviewCard } from "../components/ProductPreviewCard";
import { Section } from "../components/Section";
import { productCategories } from "../lib/site-content";

export default function WhatsComingPage() {
  return (
    <main>
      <PageHero
        copy="A future menu preview based on the brand book. This page is informational only and does not represent live inventory."
        eyebrow="What's Coming / Menu Preview"
        title="Planned categories for the future Sista.Rootz experience."
      />

      <Section tone="dark">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
            Preview Only
          </p>
          <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
            Not live inventory. Not available to buy today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#fff8e8]/68">
            Final menus, prices, availability, hours, and ordering details will
            be announced later. No online ordering or purchasing is available on
            this website.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <ProductPreviewCard
              copy={category.copy}
              index={index}
              key={category.name}
              name={category.name}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
