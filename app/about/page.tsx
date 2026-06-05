import Image from "next/image";
import { PageHero } from "../components/PageHero";
import { RootLine } from "../components/RootLine";
import { Section, SectionLabel } from "../components/Section";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        copy="Sista.Rootz honors the late Sista Ruth while preparing a future dispensary experience centered on culture, wellness, education, and community."
        eyebrow="About Sista.Rootz"
        title="Honoring Sista Ruth. Rooted in purpose."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <div className="relative">
            <Image
              alt="Sista Rootz brand artwork"
              className="rounded-lg border border-black/10 shadow-2xl"
              height={1200}
              src="/images/brand-book-cover.png"
              width={927}
            />
            <div className="brand-gradient absolute -bottom-4 left-5 right-5 h-2 rounded-full" />
          </div>
          <div>
            <SectionLabel>Mission</SectionLabel>
            <h2 className="font-display max-w-3xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              A sanctuary shaped by Rastafarian inspiration.
            </h2>
            <div className="mt-8 grid gap-5 text-lg leading-8 text-[#4f493e]">
              <p>
                Sista.Rootz pays tribute to the late Sista Ruth, a cherished
                member of the Rastafarian community. The brand is being built to
                honor the cultural and spiritual significance of cannabis while
                creating a welcoming place for adults who value natural living,
                education, quality, and respect.
              </p>
              <p>
                The identity blends green, gold, red, black, and warm neutral
                tones with a modern urban polish. The goal is not just a retail
                destination, but a rooted wellness-centered environment where
                community, culture, and premium service can meet.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
              Brand Pillars
            </p>
            <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
              Culture, education, community, and quality.
            </h2>
            <RootLine className="mt-6 h-8 max-w-md text-[#12864a]/80" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Community",
                "A future gathering point for adults who appreciate the Rastafarian lifestyle, cultural values, and local connection."
              ],
              [
                "Education",
                "Planned materials and future events will highlight culture, wellness, responsible use, and product literacy."
              ],
              [
                "Premium Quality",
                "Future categories are intended to be curated carefully and presented with clear guidance."
              ],
              [
                "Welcoming Service",
                "The experience is being designed to support first-time visitors and returning adult customers alike."
              ]
            ].map(([title, copy]) => (
              <article
                className="relative overflow-hidden rounded-lg border border-[#d8b84f]/20 bg-white/[0.045] p-6"
                key={title}
              >
                <div className="root-corner right-4 top-4 opacity-35" />
                <h3 className="text-2xl font-black text-[#f4c84a]">{title}</h3>
                <p className="mt-4 leading-7 text-[#fff8e8]/68">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
