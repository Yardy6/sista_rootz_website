import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { RootLine } from "../components/RootLine";
import { Section, SectionLabel } from "../components/Section";

const pillars = [
  {
    title: "Honor",
    copy:
      "The brand honors the late Sista Ruth with a name and presence shaped around memory, dignity, roots, and community care."
  },
  {
    title: "Culture",
    copy:
      "Rastafarian inspiration guides the visual language, respect for natural living, spiritual grounding, and social consciousness."
  },
  {
    title: "Education",
    copy:
      "Sista Rootz plans to help adults understand product types, responsible use, cultural context, and wellness-centered choices."
  },
  {
    title: "Quality",
    copy:
      "The future retail experience is being built around premium presentation, thoughtful guidance, and carefully curated categories."
  }
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        copy="Sista Rootz honors the late Sista Ruth while preparing a future cannabis dispensary experience centered on Rastafarian culture, natural living, spirituality, wellness education, community, and premium quality."
        note="Honor + Roots"
        title="Honoring Sista Ruth with a future rooted in purpose."
      />

      <Section tone="gold">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <div className="relative">
            <Image
              alt="Sista Rootz brand artwork"
              className="brand-artwork border border-black/10 shadow-2xl"
              height={1200}
              src="/images/brand-book-cover.png"
              width={927}
            />
            <div className="brand-gradient absolute -bottom-3 left-5 right-5 h-1" />
          </div>
          <div>
            <SectionLabel>Mission</SectionLabel>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              A spiritual and wellness-centered dispensary is being shaped.
            </h2>
            <div className="mt-8 grid gap-5 text-lg leading-8 text-[#4f493e]">
              <p>
                Sista Rootz is a coming-soon cannabis dispensary and brand
                experience for adults 21+. It is being created as a modern,
                urban, classy environment where culture, education, wellness,
                and premium service can meet.
              </p>
              <p>
                The name carries tribute to Sista Ruth and reflects a deeper
                respect for roots: family roots, cultural roots, plant roots,
                spiritual roots, and the community roots that make a business
                feel alive before the doors even open.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
              Rastafarian inspiration, handled with respect.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#fff8e8]/70">
              The identity draws from green, gold, red, black, roots, vines,
              farming, natural materials, and spiritual symbolism. The goal is
              not costume or gimmick; it is a grounded expression of culture,
              wellness, dignity, and connection.
            </p>
            <RootLine className="mt-7 h-8 max-w-md text-[#148b50]/80" />
          </div>
          <div className="editorial-list">
            {pillars.map((pillar, index) => (
              <article
                className="editorial-list-row interactive-panel relative overflow-hidden border-t border-[#d8b84f]/35 py-7"
                key={pillar.title}
              >
                <span className="font-display text-2xl text-[#f4c84a]/60">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-display text-4xl font-bold text-[#f4c84a]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-7 text-[#fff8e8]/70">{pillar.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="warm">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
            Coming soon means the story can be built with care.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4f493e]">
            Location, hours, final policies, and product availability will be
            shared only when confirmed. Until then, this website introduces the
            purpose, expected categories, and first-time buyer education without
            online ordering, live inventory, prices, checkout, carts, or
            payments.
          </p>
        </div>
      </Section>
    </main>
  );
}
