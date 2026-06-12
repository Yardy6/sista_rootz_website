import { PageHero } from "../components/PageHero";
import { ProductCategoryCarousel } from "../components/ProductCategoryCarousel";
import { Section } from "../components/Section";

export default function MenuShopPage() {
  return (
    <main>
      <PageHero
        copy="Explore the expected Sista Rootz product categories through a modern preview carousel. This page is informational only and does not represent live inventory, online ordering, pricing, checkout, carts, or products available for purchase today."
        note="Preview Only"
        title="Menu / Shop is a coming-soon category preview."
      />

      <Section tone="dark">
        <ProductCategoryCarousel />
      </Section>

      <Section tone="gold">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
            No live inventory. No online sales. No checkout.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4f493e]">
            Flower, Edibles, Concentrates, Accessories, Merchandise, and
            Educational Materials are expected categories for the future
            experience. Final menus, availability, hours, store policies, and
            product details will be announced later.
          </p>
        </div>
      </Section>
    </main>
  );
}
