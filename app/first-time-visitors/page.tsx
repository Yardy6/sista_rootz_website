import { PageHero } from "../components/PageHero";
import { RootLine } from "../components/RootLine";
import { Section, SectionLabel } from "../components/Section";
import { visitorGuidance } from "../lib/site-content";

export default function FirstTimeVisitorsPage() {
  return (
    <main>
      <PageHero
        copy="A welcoming, educational preview for adult visitors who may be new to dispensaries. More policies and visit details will be shared closer to opening."
        eyebrow="First-Time Visitors"
        title="A calmer way to prepare for your first visit."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1fr]">
          <div>
            <SectionLabel>Visitor Guidance</SectionLabel>
            <h2 className="font-display max-w-2xl text-5xl font-bold leading-[0.95] sm:text-6xl">
              Learn first. Ask questions. Move at your own pace.
            </h2>
            <p className="mt-7 text-lg leading-8 text-[#4f493e]">
              Sista.Rootz plans to support first-time adult customers with
              product literacy, responsible-use messaging, and clear
              expectations. The tone is educational and welcoming, especially
              for visitors who want to understand cannabis categories before
              making future decisions.
            </p>
            <RootLine className="mt-7 h-8 max-w-md text-[#12864a]/75" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {visitorGuidance.map((note) => (
              <article
                className="relative overflow-hidden rounded-lg border border-black/10 bg-white/72 p-6 shadow-sm"
                key={note.title}
              >
                <div className="root-corner right-4 top-4 opacity-25" />
                <h3 className="text-xl font-black uppercase text-[#12864a]">
                  {note.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5c5549]">{note.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
            Adults 21+ Only
          </p>
          <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
            Valid ID and responsible use will matter.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#fff8e8]/68">
            Visitors must be 21 or older. Location, hours, policies, and final
            first-visit expectations will be posted when they are confirmed.
          </p>
        </div>
      </Section>
    </main>
  );
}
