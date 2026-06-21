"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { assetPath } from "../lib/asset-path";

type ProductCategory =
  | "Flower"
  | "Pre-Rolls"
  | "Vapes"
  | "Edibles"
  | "Concentrates"
  | "Tinctures"
  | "Accessories"
  | "Merch"
  | "Bundles";

type ProductImageStyle =
  | "flower"
  | "preroll"
  | "vape"
  | "edible"
  | "concentrate"
  | "tincture"
  | "accessory"
  | "merch"
  | "bundle";

type Product = {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  type: "Hybrid" | "Indica" | "Sativa" | "CBD" | "Gear" | "Apparel" | "Bundle";
  format: string;
  effects: string[];
  thc?: string;
  cbd?: string;
  price: number;
  compareAt?: number;
  note: string;
  accent: string;
  imageStyle: ProductImageStyle;
};

type BagItem = {
  product: Product;
  quantity: number;
};

const categories: Array<ProductCategory | "All"> = [
  "All",
  "Flower",
  "Pre-Rolls",
  "Vapes",
  "Edibles",
  "Concentrates",
  "Tinctures",
  "Accessories",
  "Merch",
  "Bundles"
];

const typeFilters = ["All", "Hybrid", "Indica", "Sativa", "CBD", "Gear", "Apparel", "Bundle"];

const productImages: Record<ProductImageStyle, string> = {
  accessory: assetPath("/images/products/mock-accessory.png"),
  bundle: assetPath("/images/products/mock-bundle.png"),
  concentrate: assetPath("/images/products/mock-concentrate.png"),
  edible: assetPath("/images/products/mock-edible.png"),
  flower: assetPath("/images/products/mock-flower.png"),
  merch: assetPath("/images/products/mock-merch.png"),
  preroll: assetPath("/images/products/mock-preroll.png"),
  tincture: assetPath("/images/products/mock-tincture.png"),
  vape: assetPath("/images/products/mock-vape.png")
};

const products: Product[] = [
  {
    id: "roots-harmony",
    name: "Roots & Harmony",
    brand: "Sista Reserve",
    category: "Flower",
    type: "Hybrid",
    format: "1/8 oz (3.5g)",
    effects: ["Balanced", "Happy"],
    thc: "24.1%",
    cbd: "0.1%",
    price: 45,
    note: "Tropical zkittlez, kush mint, and warm citrus aroma.",
    accent: "#148b50",
    imageStyle: "flower"
  },
  {
    id: "midnight-textures",
    name: "Midnight Textures",
    brand: "Rootline Farms",
    category: "Flower",
    type: "Indica",
    format: "1/8 oz (3.5g)",
    effects: ["Relaxed", "Sleepy"],
    thc: "26.3%",
    cbd: "0.2%",
    price: 48,
    note: "Dense purple flower with cocoa, pine, and berry notes.",
    accent: "#5b3d62",
    imageStyle: "flower"
  },
  {
    id: "golden-crown",
    name: "Golden Crown",
    brand: "Sista Reserve",
    category: "Flower",
    type: "Sativa",
    format: "1/8 oz (3.5g)",
    effects: ["Uplifted", "Creative"],
    thc: "22.7%",
    cbd: "0.1%",
    price: 42,
    note: "Jack Herer-inspired brightness with lemon and skunk.",
    accent: "#f4c84a",
    imageStyle: "flower"
  },
  {
    id: "heritage-z",
    name: "Heritage Z",
    brand: "Rootline Farms",
    category: "Flower",
    type: "Hybrid",
    format: "1/8 oz (3.5g)",
    effects: ["Happy", "Focused"],
    thc: "23.8%",
    cbd: "0.1%",
    price: 46,
    note: "Sweet sherbet profile with earthy, late-afternoon balance.",
    accent: "#d94b3d",
    imageStyle: "flower"
  },
  {
    id: "zion-walkers",
    name: "Zion Walkers",
    brand: "Community Cut",
    category: "Pre-Rolls",
    type: "Hybrid",
    format: "5 pack · 0.5g each",
    effects: ["Balanced", "Social"],
    thc: "21.4%",
    price: 32,
    compareAt: 38,
    note: "Evenly packed mini pre-rolls for an easy category starter.",
    accent: "#cba63b",
    imageStyle: "preroll"
  },
  {
    id: "sunrise-single",
    name: "Sunrise Single",
    brand: "Rootline Farms",
    category: "Pre-Rolls",
    type: "Sativa",
    format: "1g pre-roll",
    effects: ["Energetic", "Clear"],
    thc: "20.9%",
    price: 12,
    note: "Bright citrus single with a simple pickup-ready presentation.",
    accent: "#e2b832",
    imageStyle: "preroll"
  },
  {
    id: "deep-roots-roll",
    name: "Deep Roots Roll",
    brand: "Sista Reserve",
    category: "Pre-Rolls",
    type: "Indica",
    format: "2 pack · 1g each",
    effects: ["Calm", "Rest"],
    thc: "25.0%",
    price: 24,
    note: "Slow evening profile with resin-forward flower.",
    accent: "#72516b",
    imageStyle: "preroll"
  },
  {
    id: "green-gold-cart",
    name: "Green Gold Cart",
    brand: "Sista Labs",
    category: "Vapes",
    type: "Hybrid",
    format: "0.5g cartridge",
    effects: ["Balanced", "Smooth"],
    thc: "78.2%",
    price: 36,
    note: "Ceramic-tip cartridge with pine, lime, and pepper notes.",
    accent: "#148b50",
    imageStyle: "vape"
  },
  {
    id: "red-earth-disposable",
    name: "Red Earth Disposable",
    brand: "Sista Labs",
    category: "Vapes",
    type: "Indica",
    format: "0.5g disposable",
    effects: ["Calm", "Mellow"],
    thc: "80.6%",
    price: 42,
    note: "Compact disposable with warm berry, earth, and quiet evening notes.",
    accent: "#d94b3d",
    imageStyle: "vape"
  },
  {
    id: "mango-sun-gummies",
    name: "Mango Sun Gummies",
    brand: "Root Pantry",
    category: "Edibles",
    type: "Sativa",
    format: "10 pieces · 100mg total",
    effects: ["Bright", "Social"],
    thc: "10mg / piece",
    cbd: "0mg",
    price: 22,
    note: "Mango-forward gummies with clear serving education.",
    accent: "#f4c84a",
    imageStyle: "edible"
  },
  {
    id: "hibiscus-chill",
    name: "Hibiscus Chill Chews",
    brand: "Root Pantry",
    category: "Edibles",
    type: "CBD",
    format: "20 pieces · 1:1",
    effects: ["Calm", "Body"],
    thc: "5mg / piece",
    cbd: "5mg / piece",
    price: 28,
    note: "Balanced fruit chews designed for responsible pacing copy.",
    accent: "#b03c50",
    imageStyle: "edible"
  },
  {
    id: "golden-roots-chocolate",
    name: "Golden Roots Chocolate",
    brand: "Root Pantry",
    category: "Edibles",
    type: "Hybrid",
    format: "10 squares · 100mg total",
    effects: ["Cozy", "Balanced"],
    thc: "10mg / square",
    price: 26,
    note: "Dark chocolate bar with spice and citrus notes.",
    accent: "#8a5a2f",
    imageStyle: "edible"
  },
  {
    id: "temple-rosin",
    name: "Temple Rosin",
    brand: "Sista Labs",
    category: "Concentrates",
    type: "Hybrid",
    format: "1g live rosin",
    effects: ["Focused", "Rich"],
    thc: "72.4%",
    price: 64,
    note: "Premium concentrate with a golden terpene-forward profile.",
    accent: "#efbd39",
    imageStyle: "concentrate"
  },
  {
    id: "roots-badder",
    name: "Roots Badder",
    brand: "Sista Labs",
    category: "Concentrates",
    type: "Indica",
    format: "1g badder",
    effects: ["Relaxed", "Heavy"],
    thc: "74.8%",
    price: 58,
    note: "Soft badder jar with earthy kush aroma notes.",
    accent: "#d17f38",
    imageStyle: "concentrate"
  },
  {
    id: "balance-drops",
    name: "Balance Drops",
    brand: "Root Wellness",
    category: "Tinctures",
    type: "CBD",
    format: "30ml tincture · 1:1",
    effects: ["Centered", "Gentle"],
    thc: "2.5mg / ml",
    cbd: "2.5mg / ml",
    price: 38,
    note: "Wellness-style tincture with measured dosing language.",
    accent: "#2f704d",
    imageStyle: "tincture"
  },
  {
    id: "gold-leaf-drops",
    name: "Gold Leaf Drops",
    brand: "Root Wellness",
    category: "Tinctures",
    type: "Hybrid",
    format: "30ml tincture",
    effects: ["Ease", "Steady"],
    thc: "5mg / ml",
    price: 44,
    note: "Warm terpene profile with a clean wellness-focused presentation.",
    accent: "#cba63b",
    imageStyle: "tincture"
  },
  {
    id: "root-grinder",
    name: "Root Etched Grinder",
    brand: "Sista Goods",
    category: "Accessories",
    type: "Gear",
    format: "4-piece aluminum",
    effects: ["Utility"],
    price: 24,
    note: "Matte black grinder with subtle gold root-line detailing.",
    accent: "#111711",
    imageStyle: "accessory"
  },
  {
    id: "glass-stem-kit",
    name: "Glass Stem Kit",
    brand: "Sista Goods",
    category: "Accessories",
    type: "Gear",
    format: "cleaning + stem set",
    effects: ["Utility"],
    price: 18,
    note: "Accessory bundle for essentials and care.",
    accent: "#148b50",
    imageStyle: "accessory"
  },
  {
    id: "heritage-tee",
    name: "Heritage Tee",
    brand: "Sista Rootz",
    category: "Merch",
    type: "Apparel",
    format: "cotton tee",
    effects: ["Community"],
    price: 32,
    note: "Black tee with a restrained red-gold-green mark.",
    accent: "#d94b3d",
    imageStyle: "merch"
  },
  {
    id: "culture-cap",
    name: "Culture Cap",
    brand: "Sista Rootz",
    category: "Merch",
    type: "Apparel",
    format: "embroidered cap",
    effects: ["Community"],
    price: 28,
    note: "Low-profile cap for brand merch and community wear.",
    accent: "#f4c84a",
    imageStyle: "merch"
  },
  {
    id: "new-buyer-kit",
    name: "First-Time Buyer Kit",
    brand: "Sista Rootz",
    category: "Bundles",
    type: "Bundle",
    format: "education + essentials",
    effects: ["Guided", "Intro"],
    price: 49,
    compareAt: 62,
    note: "Starter bundle connecting education, accessories, and menu picks.",
    accent: "#148b50",
    imageStyle: "bundle"
  },
  {
    id: "culture-care-kit",
    name: "Culture Care Kit",
    brand: "Sista Rootz",
    category: "Bundles",
    type: "Bundle",
    format: "wellness pack",
    effects: ["Wellness", "Care"],
    price: 58,
    note: "Wellness bundle for customer storytelling and merchandising.",
    accent: "#d8ae3a",
    imageStyle: "bundle"
  }
];

const specials = [
  {
    title: "Daily Flower Feature",
    copy: "10% off select premium flower",
    style: "flower" as Product["imageStyle"],
    accent: "#148b50"
  },
  {
    title: "Pre-Roll Pack",
    copy: "Buy 3, get 1 rolled with care",
    style: "preroll" as Product["imageStyle"],
    accent: "#f4c84a"
  },
  {
    title: "Edibles Feature",
    copy: "15% off gummies",
    style: "edible" as Product["imageStyle"],
    accent: "#d94b3d"
  },
  {
    title: "Concentrate Deal",
    copy: "$10 off grams",
    style: "concentrate" as Product["imageStyle"],
    accent: "#efbd39"
  }
];

const featuredProductOrder = new Map<string, number>(
  [
    "roots-harmony",
    "zion-walkers",
    "green-gold-cart",
    "mango-sun-gummies",
    "temple-rosin",
    "balance-drops",
    "root-grinder",
    "heritage-tee",
    "new-buyer-kit",
    "midnight-textures",
    "sunrise-single",
    "red-earth-disposable",
    "hibiscus-chill",
    "roots-badder",
    "gold-leaf-drops",
    "glass-stem-kit",
    "culture-cap",
    "culture-care-kit",
    "golden-crown",
    "deep-roots-roll",
    "golden-roots-chocolate",
    "heritage-z"
  ].map((id, index) => [id, index] as const)
);

function Currency({ value }: { value: number }) {
  return <>{value.toLocaleString("en-US", { currency: "USD", style: "currency" })}</>;
}

function BagIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M6.5 8.5h11l.8 11H5.7l.8-11Zm3 0V7a2.5 2.5 0 0 1 5 0v1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="m20 20-4.2-4.2m1.3-5.3a6.6 6.6 0 1 1-13.2 0 6.6 6.6 0 0 1 13.2 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ProductArt({
  style,
  accent
}: {
  style: Product["imageStyle"];
  accent: string;
}) {
  const cssVars = { "--product-accent": accent } as CSSProperties & Record<"--product-accent", string>;

  return (
    <div className="pos-art pos-art-photo" style={cssVars} aria-hidden="true">
      <img alt="" loading="lazy" src={productImages[style]} />
    </div>
  );
}

function CategoryIcon({ category }: { category: ProductCategory | "All" }) {
  if (category === "All") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m12 3 1.6 5.1L19 9.8l-4.4 3.1.2 5.5L12 15.1l-2.8 3.3.2-5.5L5 9.8l5.4-1.7L12 3Z" />
      </svg>
    );
  }

  if (category === "Flower") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 21c-1.1-3.4-1.1-6.6 0-9.6m0 0c-2.9-.4-5.3-1.9-7.1-4.7 3.6-.8 6.1.3 7.1 4.7Zm0 0c2.9-.4 5.3-1.9 7.1-4.7-3.6-.8-6.1.3-7.1 4.7Zm0 0c-2.2-2.2-2.8-5-1.8-8.4 2.9 2.1 3.5 4.9 1.8 8.4Zm0 0c2.2-2.2 2.8-5 1.8-8.4-2.9 2.1-3.5 4.9-1.8 8.4Z" />
      </svg>
    );
  }

  if (category === "Pre-Rolls") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 14.5 18.2 8l1.1 2.3L6.1 16.8 5 14.5Zm1.8 3.6 2.7-1.3M17 8.6l1.8 3.6" />
      </svg>
    );
  }

  if (category === "Vapes") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M10 4h4v12.4c0 1.4-.9 2.6-2 2.6s-2-1.2-2-2.6V4Zm-.8 4h5.6M10 14h4" />
      </svg>
    );
  }

  if (category === "Edibles") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 4c4.5 0 8 3.1 8 7.8 0 4.6-3.5 8.2-8 8.2s-8-3.6-8-8.2C4 7.1 7.5 4 12 4Zm-2 6h.1M14.5 8.8h.1M15 14h.1M9 15.2h.1" />
      </svg>
    );
  }

  if (category === "Concentrates") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M7 8.5h10l1 8.3c.1 1.7-1.2 3.2-3 3.2H9c-1.8 0-3.1-1.5-3-3.2l1-8.3Zm1.2 0C8.5 6 10 4.5 12 4.5S15.5 6 15.8 8.5M9 13.2h6" />
      </svg>
    );
  }

  if (category === "Tinctures") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M10 4h4v3l2 2v9.2c0 1-.8 1.8-1.8 1.8H9.8c-1 0-1.8-.8-1.8-1.8V9l2-2V4Zm0 7h4m-4 3.5h4" />
      </svg>
    );
  }

  if (category === "Accessories") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M7 8.5h10v10H7v-10Zm2-3h6l2 3H7l2-3Zm1.2 7h3.6m-3.6 3h3.6" />
      </svg>
    );
  }

  if (category === "Merch") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m8 5 2.2 1.4a3.4 3.4 0 0 0 3.6 0L16 5l4 3.4-2.5 3V20h-11v-8.6L4 8.4 8 5Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 8.5 12 5l7 3.5v7L12 19l-7-3.5v-7Zm7 3.5 7-3.5M12 12 5 8.5m7 3.5v7" />
    </svg>
  );
}

function getCategoryCount(category: ProductCategory | "All") {
  return category === "All" ? products.length : products.filter((product) => product.category === category).length;
}

export function POSPreviewStore() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");
  const [activeType, setActiveType] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Most Popular");
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [bag, setBag] = useState<BagItem[]>([
    { product: products[0], quantity: 1 },
    { product: products[5], quantity: 1 },
    { product: products[9], quantity: 1 }
  ]);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const matching = products.filter((product) => {
      const categoryMatch = activeCategory === "All" || product.category === activeCategory;
      const typeMatch = activeType === "All" || product.type === activeType;
      const queryMatch =
        !query ||
        [product.name, product.brand, product.category, product.type, product.format, product.note, ...product.effects]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return categoryMatch && typeMatch && queryMatch;
    });

    return [...matching].sort((a, b) => {
      if (sort === "Price Low") {
        return a.price - b.price;
      }

      if (sort === "Price High") {
        return b.price - a.price;
      }

      if (sort === "THC") {
        return Number.parseFloat(b.thc ?? "0") - Number.parseFloat(a.thc ?? "0");
      }

      if (activeCategory === "All") {
        return (featuredProductOrder.get(a.id) ?? 999) - (featuredProductOrder.get(b.id) ?? 999);
      }

      return products.indexOf(a) - products.indexOf(b);
    });
  }, [activeCategory, activeType, search, sort]);

  const selectedProduct = products.find((product) => product.id === selectedProductId) ?? filteredProducts[0] ?? products[0];
  const subtotal = bag.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const estimatedTaxes = subtotal * 0.0635;
  const estimatedTotal = subtotal + estimatedTaxes;
  const itemCount = bag.reduce((sum, item) => sum + item.quantity, 0);
  const menuTitle = activeCategory === "All" ? "All Products" : activeCategory;

  function addToBag(product: Product) {
    setSelectedProductId(product.id);
    setBag((current) => {
      const existing = current.find((item) => item.product.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...current, { product, quantity: 1 }];
    });
  }

  function updateQuantity(productId: string, quantity: number) {
    setBag((current) =>
      current
        .map((item) => (item.product.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <section className="storefront-menu" aria-label="Sista Rootz menu">
      <div className="storefront-offer-bar">
        <span>Want $5 off your first order?</span>
        <div>
          <button type="button">Log In</button>
          <button type="button">Sign Up</button>
        </div>
      </div>

      <div className="storefront-service-bar">
        <div className="storefront-location">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M4.5 10.2 12 4l7.5 6.2v8.3a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-8.3Zm3.5 9.3v-6h8v6" />
          </svg>
          <div>
            <span>Pickup at</span>
            <strong>Hartford-area location</strong>
          </div>
        </div>
        <div className="storefront-order-switch" aria-label="Order type">
          <button className="is-active" type="button">Pickup</button>
          <button type="button">Delivery</button>
          <button type="button">In-store</button>
        </div>
        <div className="storefront-hours">
          <span>Hours</span>
          <strong>10:00am - 9:00pm</strong>
        </div>
        <span className="storefront-use-pill">Adult Use</span>
      </div>

      <div className="storefront-page">
        <section className="storefront-deals" aria-label="Featured deals">
          <div className="storefront-section-title">
            <h2>Featured Deals</h2>
            <button type="button">View all {specials.length}</button>
          </div>
          <div className="storefront-deal-hero">
            <div>
              <span>Daily Flower Feature</span>
              <h3 className="font-display">10% off select premium flower</h3>
              <p>Rooted in culture, grown with purpose, and curated for adult-use customers.</p>
              <button type="button">
                Shop Deals
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>
            </div>
            <div className="storefront-deal-art">
              <ProductArt accent="#148b50" style="flower" />
              <ProductArt accent="#efbd39" style="concentrate" />
            </div>
          </div>
        </section>

        <section className="storefront-category-section" aria-label="Product categories">
          <div className="storefront-section-title">
            <h2>Hartford, CT Dispensary Menu</h2>
            <div className="storefront-arrow-group" aria-hidden="true">
              <span />
              <span />
            </div>
          </div>
          <div className="storefront-category-tiles">
            {categories.map((category) => (
              <button
                className={category === activeCategory ? "is-active" : ""}
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveType("All");
                  setSelectedProductId(products.find((product) => category === "All" || product.category === category)?.id ?? products[0].id);
                }}
                type="button"
              >
                <span>
                  <CategoryIcon category={category} />
                </span>
                <b>{category}</b>
              </button>
            ))}
          </div>
        </section>

        <section className="storefront-products" aria-label="Products">
          <aside className="storefront-filters" aria-label="Menu filters">
            <div className="storefront-filter-heading">
              <h2>Filters</h2>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setActiveType("All");
                  setSearch("");
                }}
                type="button"
              >
                Clear all
              </button>
            </div>
            <div className="storefront-filter-pills">
              <button className="is-active" type="button">Deals</button>
              <button type="button">Popular</button>
            </div>
            <div className="storefront-filter-group">
              <h3>Strain prevalence</h3>
              <div className="storefront-filter-stack">
                {typeFilters.map((filter) => (
                  <button
                    className={filter === activeType ? "is-active" : ""}
                    key={filter}
                    onClick={() => setActiveType(filter)}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="storefront-filter-group">
              <h3>Category</h3>
              <div className="storefront-check-list">
                {categories.slice(1).map((category) => (
                  <button
                    className={category === activeCategory ? "is-active" : ""}
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setSelectedProductId(products.find((product) => product.category === category)?.id ?? products[0].id);
                    }}
                    type="button"
                  >
                    <span />
                    {category}
                    <small>{getCategoryCount(category)}</small>
                  </button>
                ))}
              </div>
            </div>
            <div className="storefront-filter-group">
              <h3>THC Range</h3>
              <div className="storefront-range" aria-hidden="true">
                <span />
              </div>
              <div className="storefront-range-labels">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>
          </aside>

          <div className="storefront-listing">
            <div className="storefront-breadcrumbs">Home / Menu</div>
            <div className="storefront-listing-head">
              <div>
                <h1>{menuTitle}</h1>
                <p>{filteredProducts.length} results</p>
              </div>
              <div className="storefront-tools">
                <label className="storefront-search">
                  <SearchIcon />
                  <input
                    aria-label="Search products"
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search products"
                    value={search}
                  />
                </label>
                <label className="storefront-sort">
                  <span>Sort</span>
                  <select
                    aria-label="Sort products"
                    onChange={(event) => setSort(event.target.value)}
                    value={sort}
                  >
                    <option>Most Popular</option>
                    <option>Price Low</option>
                    <option>Price High</option>
                    <option>THC</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="storefront-category-chips" aria-label="Quick product filters">
              {categories.slice(1).map((category) => (
                <button
                  className={category === activeCategory ? "is-active" : ""}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="storefront-product-grid">
              {filteredProducts.map((product) => (
                <article
                  className={`storefront-product-card ${product.id === selectedProduct.id ? "is-selected" : ""}`}
                  key={product.id}
                >
                  <button
                    aria-label={`View ${product.name}`}
                    className="storefront-product-media"
                    onClick={() => setSelectedProductId(product.id)}
                    type="button"
                  >
                    {product.compareAt ? <span className="storefront-deal-dot">%</span> : null}
                    <ProductArt accent={product.accent} style={product.imageStyle} />
                    <span className="storefront-add-corner" aria-hidden="true">+</span>
                  </button>
                  <div className="storefront-product-copy">
                    <p>{product.category}</p>
                    <h3>{product.name}</h3>
                    <span>{product.type} · {product.thc ? `THC ${product.thc}` : product.format}</span>
                    <small>{product.format}</small>
                    <div className="storefront-product-footer">
                      <div>
                        <strong><Currency value={product.price} /></strong>
                        {product.compareAt ? <s><Currency value={product.compareAt} /></s> : null}
                      </div>
                      <button onClick={() => addToBag(product)} type="button">
                        <BagIcon />
                        Add
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="storefront-bag" aria-label="Your bag">
            <div className="storefront-bag-card">
              <div className="storefront-bag-head">
                <div>
                  <span>Your Bag ({itemCount})</span>
                  <strong>{itemCount} item{itemCount === 1 ? "" : "s"}</strong>
                </div>
                <button onClick={() => setBag([])} type="button">Edit</button>
              </div>
              <div className="storefront-selected">
                <ProductArt accent={selectedProduct.accent} style={selectedProduct.imageStyle} />
                <div>
                  <p>{selectedProduct.category} · {selectedProduct.type}</p>
                  <h3>{selectedProduct.name}</h3>
                  <span>{selectedProduct.note}</span>
                </div>
              </div>
              <div className="storefront-bag-items">
                {bag.length === 0 ? (
                  <p className="storefront-empty-bag">Your bag is empty.</p>
                ) : (
                  bag.map((item) => (
                    <article key={item.product.id}>
                      <ProductArt accent={item.product.accent} style={item.product.imageStyle} />
                      <div>
                        <h4>{item.product.name}</h4>
                        <span>{item.product.format}</span>
                        <div className="storefront-qty-row">
                          <button
                            aria-label={`Decrease ${item.product.name}`}
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            type="button"
                          >
                            -
                          </button>
                          <strong>{item.quantity}</strong>
                          <button
                            aria-label={`Increase ${item.product.name}`}
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            type="button"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <strong><Currency value={item.product.price * item.quantity} /></strong>
                    </article>
                  ))
                )}
              </div>
              <div className="storefront-totals">
                <span>Subtotal <b><Currency value={subtotal} /></b></span>
                <span>Est. Taxes <b><Currency value={estimatedTaxes} /></b></span>
                <span>Est. Total <b><Currency value={estimatedTotal} /></b></span>
              </div>
              <button className="storefront-checkout" type="button">
                Checkout
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>
              <button className="storefront-view-bag" type="button">View Bag</button>
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
}
