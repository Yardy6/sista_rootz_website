import Link from "next/link";
import { buyerGuidance } from "../lib/site-content";
import { assetPath } from "../lib/asset-path";
import { Section, SectionLabel } from "./Section";
import { ScrollLogoAnimation } from "./ScrollLogoAnimation";

const discoveryCategories = [
  {
    name: "Flower",
    copy: "Premium strains, aroma notes, and approachable potency guidance.",
    image: "/images/products/mock-flower.png"
  },
  {
    name: "Pre-Rolls",
    copy: "Ready-to-go singles and packs for easy customer discovery.",
    image: "/images/products/mock-preroll.png"
  },
  {
    name: "Vapes",
    copy: "Cartridges and discreet formats with clear product education.",
    image: "/images/products/mock-vape.png"
  },
  {
    name: "Edibles",
    copy: "Gummies, chocolate, and serving-aware wellness options.",
    image: "/images/products/mock-edible.png"
  },
  {
    name: "Concentrates",
    copy: "Terpene-rich jars and refined premium selections.",
    image: "/images/products/mock-concentrate.png"
  },
  {
    name: "Merch",
    copy: "Community apparel and lifestyle goods rooted in the brand.",
    image: "/images/products/mock-merch.png"
  }
];

const featuredProducts = [
  {
    name: "Roots & Harmony",
    meta: "Flower · Hybrid · THC 24%",
    price: "$45.00",
    image: "/images/products/mock-flower.png"
  },
  {
    name: "Mango Sun Gummies",
    meta: "Edibles · Sativa · 10 pieces",
    price: "$22.00",
    image: "/images/products/mock-edible.png"
  },
  {
    name: "Green Gold Cart",
    meta: "Vapes · Hybrid · 0.5g",
    price: "$36.00",
    image: "/images/products/mock-vape.png"
  },
  {
    name: "First-Time Buyer Kit",
    meta: "Bundle · Education + essentials",
    price: "$49.00",
    image: "/images/products/mock-bundle.png"
  }
];

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

export function HomeDiscovery() {
  return (
    <main className="discovery-home">
      <section className="home-hero relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pb-[clamp(2rem,6svh,5rem)] pt-24 text-[#fff8e8] sm:px-8 lg:px-10 lg:pt-28 xl:px-12 xl:pt-32 2xl:px-14 2xl:pt-36 min-[1800px]:pt-40">
        <div className="home-hero-image" aria-hidden="true" />
        <div className="home-hero-shade" aria-hidden="true" />

        <div className="home-hero-sticky relative z-10 mx-auto flex min-h-[calc(100svh-7rem)] w-full max-w-7xl flex-col items-center justify-center pb-[clamp(1.25rem,4svh,4rem)] text-center lg:min-h-[calc(100svh-8rem)] xl:max-w-[1500px] 2xl:min-h-[calc(100svh-9rem)] 2xl:max-w-[1600px]">
          <div className="home-hero-brand mx-auto flex w-full max-w-[1180px] flex-col items-center justify-center text-center min-[1800px]:max-w-[1360px]">
            <div className="home-logo-intro scroll-logo-animation">
              <ScrollLogoAnimation />
            </div>
            <p className="mt-[clamp(1.1rem,1.8vw,2.45rem)] text-[clamp(0.78rem,0.84vw,1.12rem)] font-bold uppercase text-white/80">
              Rooted in culture · Growing with purpose
            </p>
          </div>
        </div>
      </section>

      <section className="discovery-hero">
        <div className="discovery-hero-copy">
          <h1 className="font-display">Product discovery rooted in culture and care.</h1>
          <p>
            Explore Sista Rootz categories, featured picks, first-time buyer
            guidance, and wellness-centered pathways before narrowing down the
            full menu.
          </p>
          <div className="discovery-actions">
            <Link href="/menu-shop">
              Shop Menu <ArrowIcon />
            </Link>
            <Link href="/first-time-buyers">
              First Time Buyers <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="discovery-hero-products" aria-label="Featured Sista Rootz products">
          <article className="discovery-spotlight">
            <div>
              <span>Featured Deal</span>
              <h2 className="font-display">Daily Flower Feature</h2>
              <p>10% off select premium flower.</p>
            </div>
            <img alt="" src={assetPath("/images/products/mock-flower.png")} />
          </article>
          <div className="discovery-mini-grid">
            {featuredProducts.slice(1, 4).map((product) => (
              <article key={product.name}>
                <img alt="" src={assetPath(product.image)} />
                <div>
                  <h3>{product.name}</h3>
                  <span>{product.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="discovery-category-band">
        <div className="discovery-section-head">
          <h2>Shop by category</h2>
          <Link href="/menu-shop">View full menu</Link>
        </div>
        <div className="discovery-category-grid">
          {discoveryCategories.map((category) => (
            <Link href="/menu-shop" key={category.name}>
              <img alt="" src={assetPath(category.image)} />
              <div>
                <h3>{category.name}</h3>
                <p>{category.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="discovery-featured-products">
        <div className="discovery-section-head">
          <h2>Popular paths into the menu</h2>
          <Link href="/menu-shop">Search products</Link>
        </div>
        <div className="discovery-product-row">
          {featuredProducts.map((product) => (
            <article key={product.name}>
              <img alt="" src={assetPath(product.image)} />
              <div>
                <span>{product.meta}</span>
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
              </div>
              <Link href="/menu-shop">View</Link>
            </article>
          ))}
        </div>
      </section>

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <SectionLabel>Rooted In Culture</SectionLabel>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              Culture, education, and careful curation lead the experience.
            </h2>
          </div>
          <div className="border-l border-[#12864a]/35 pl-7 text-lg leading-8 text-[#4d4332]">
            <p>
              Sista Rootz is being shaped as a polished cannabis dispensary and
              wellness-centered brand for adults 21+, honoring Sista Ruth and the
              roots that inspired the name.
            </p>
            <p className="mt-5">
              Customers can browse featured categories, learn what fits their
              needs, then move into a focused menu to filter, search, compare,
              and build a bag.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.12em] text-[#f4c84a]">
              Customer Care
            </p>
            <h2 className="font-display mt-4 text-5xl font-bold leading-[0.95] sm:text-6xl">
              Helpful guidance before shopping the full menu.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#fff8e8]/70">
            Shopping pairs with responsible-use education, staff picks,
            first-time-buyer language, and clear 21+ compliance messaging.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {buyerGuidance.slice(0, 4).map((note) => (
            <article className="shop-guidance-card" key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.copy}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
