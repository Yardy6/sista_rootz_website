import { ContactFormPlaceholder } from "../components/ContactFormPlaceholder";
import { PageHero } from "../components/PageHero";
import { Section } from "../components/Section";
import { site } from "../lib/site-content";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        copy="Contact details and placeholder inquiry forms for customers, partners, and vendors while opening plans are finalized."
        eyebrow="Contact / Vendor Inquiry"
        title="Connect with Sista.Rootz."
      />

      <Section tone="warm">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1fr]">
          <aside className="dark-panel relative overflow-hidden rounded-lg border border-[#d8b84f]/25 p-8 text-[#fff8e8] shadow-xl">
            <div className="root-corner right-5 top-5 opacity-50" />
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
              Business Details
            </p>
            <h2 className="font-display text-5xl font-bold leading-none">
              Opening details are coming soon.
            </h2>
            <dl className="mt-8 grid gap-5">
              <div className="border-b border-white/12 pb-5">
                <dt className="text-xs font-black uppercase text-[#f4c84a]">
                  Main Phone
                </dt>
                <dd className="mt-2 text-lg font-bold">
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </dd>
              </div>
              <div className="border-b border-white/12 pb-5">
                <dt className="text-xs font-black uppercase text-[#f4c84a]">
                  Website Decisions
                </dt>
                <dd className="mt-2 text-[#fff8e8]/82">
                  {site.contactName}, <a href={site.contactPhoneHref}>{site.contactPhoneDisplay}</a>
                </dd>
              </div>
              <div className="border-b border-white/12 pb-5">
                <dt className="text-xs font-black uppercase text-[#f4c84a]">
                  Business Email
                </dt>
                <dd className="mt-2 text-[#fff8e8]/82">Email to be confirmed</dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase text-[#f4c84a]">
                  Vendor Email
                </dt>
                <dd className="mt-2 text-[#fff8e8]/82">Vendor email to be confirmed</dd>
              </div>
            </dl>
          </aside>

          <section className="dark-panel rounded-lg border border-[#d8b84f]/25 p-8 text-[#fff8e8] shadow-xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
              Placeholder Form
            </p>
            <h2 className="font-display text-5xl font-bold leading-none">
              Vendor inquiry
            </h2>
            <p className="mt-5 leading-8 text-[#fff8e8]/68">
              These fields are placeholders for layout and review only. They are
              not connected to a backend or email service yet.
            </p>
            <div className="mt-8">
              <ContactFormPlaceholder />
            </div>
          </section>
        </div>
      </Section>
    </main>
  );
}
