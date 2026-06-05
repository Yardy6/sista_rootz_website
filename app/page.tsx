import Image from "next/image";
import { AgeGate } from "./components/AgeGate";
import { StayUpdatedForm } from "./components/StayUpdatedForm";

const plannedCategories = [
  {
    name: "Flower",
    copy: "Various strains of high-quality cannabis planned with clear education and guidance."
  },
  {
    name: "Edibles",
    copy: "Future consumables selected with attention to natural and organic standards."
  },
  {
    name: "Concentrates",
    copy: "Premium oils, waxes, and tinctures planned for adult customers."
  },
  {
    name: "Accessories",
    copy: "Culturally significant smoking and vaping devices planned for later."
  },
  {
    name: "Merchandise",
    copy: "Branded apparel and Rastafarian-inspired items for the Sista Rootz community."
  },
  {
    name: "Educational Materials",
    copy: "Books, pamphlets, and resources on culture, wellness, and responsible adult use."
  }
];

const visitorNotes = [
  {
    title: "Bring Valid ID",
    copy: "Adults 21+ should expect to show government-issued identification before entry."
  },
  {
    title: "Ask Questions",
    copy: "The Sista Rootz experience is planned around education, comfort, and respect."
  },
  {
    title: "Start Low",
    copy: "First-time adult customers will be guided toward responsible use and clear product literacy."
  }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#12864a]">
      {children}
    </p>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
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
    <>
      <AgeGate />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/12 bg-[#070806]/78 px-5 py-4 text-[#fff8e8] backdrop-blur-xl lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <a className="flex items-center gap-3" href="#top" aria-label="Sista Rootz home">
            <Image
              alt=""
              className="h-11 w-24 rounded border border-[#f4c84a]/35 object-cover"
              height={1080}
              src="/images/sista-rootz-logo.jpg"
              width={1080}
            />
          </a>
          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold text-[#fff8e8]/82"
          >
            <a className="transition hover:text-[#f4c84a]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#f4c84a]" href="#planned">
              What&apos;s Planned
            </a>
            <a className="transition hover:text-[#f4c84a]" href="#first-time">
              First-Time Buyers
            </a>
            <a className="transition hover:text-[#f4c84a]" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="hidden min-h-11 items-center rounded-md bg-[#f4c84a] px-5 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffd95a] sm:inline-flex"
            href="#updates"
          >
            Get Updates
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-field relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-36 text-[#fff8e8] lg:px-10 lg:pb-28 lg:pt-32">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#070806] via-[#070806]/88 to-[#070806]/50" />
          <div className="absolute bottom-0 left-0 right-0 h-36 -z-10 bg-gradient-to-t from-[#070806] to-transparent" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[760px] lg:grid-cols-[0.95fr_0.75fr]">
            <div>
              <Image
                alt="Sista Rootz Spiritual and Wellness Center logo"
                className="mb-8 h-auto w-full max-w-[430px] rounded-lg border border-[#f4c84a]/25 bg-black/62 object-contain p-3 shadow-2xl"
                height={1080}
                priority
                src="/images/sista-rootz-logo.jpg"
                width={1080}
              />
              <h1 className="font-display max-w-4xl text-[clamp(4.5rem,12vw,9rem)] font-bold uppercase leading-[0.82] text-[#f4c84a]">
                Coming Soon
              </h1>
              <p className="mt-7 max-w-2xl text-xl font-semibold leading-9 text-[#fff8e8]/86">
                SISTA ROOTZ is preparing a spiritual and wellness-centered
                dispensary experience rooted in Rastafarian culture, natural
                living, community, and elevated service for adults 21+.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#f4c84a] px-5 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffd95a]"
                  href="#updates"
                >
                  Stay Updated <ArrowIcon />
                </a>
                <a
                  className="inline-flex min-h-12 items-center rounded-md border border-white/28 bg-white/8 px-5 text-sm font-black uppercase text-[#fff8e8] transition hover:border-[#f4c84a]/60"
                  href="#planned"
                >
                  View Future Preview
                </a>
              </div>
            </div>

            <aside className="dark-panel rounded-lg border border-[#f4c84a]/35 p-6 shadow-2xl lg:ml-auto lg:max-w-md">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
                Expected Opening
              </p>
              <p className="font-display mt-3 text-6xl font-bold leading-none text-[#fff8e8]">
                Late August
              </p>
              <div className="brand-gradient my-7 h-1.5 rounded-full" />
              <dl className="grid gap-5 text-sm">
                <div>
                  <dt className="font-black uppercase text-[#f4c84a]">Phone</dt>
                  <dd className="mt-1 text-lg font-bold">
                    <a href="tel:4439220622">443.922.0622</a>
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
                    Nicole Barnes, <a href="tel:4435471124">443.547.1124</a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section
          aria-labelledby="about-title"
          className="paper-texture px-5 py-20 text-[#15120d] lg:px-10 lg:py-28"
          id="about"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.72fr_1fr]">
            <div className="relative">
              <Image
                alt="Sista Rootz brand book cover with logo over coastal imagery"
                className="rounded-lg border border-black/10 shadow-2xl"
                height={1200}
                src="/images/brand-book-cover.png"
                width={927}
              />
              <div className="brand-gradient absolute -bottom-4 left-5 right-5 h-2 rounded-full" />
            </div>
            <div>
              <SectionLabel>Mission / About</SectionLabel>
              <h2
                className="font-display max-w-3xl text-5xl font-bold leading-[0.95] text-[#15120d] sm:text-6xl lg:text-7xl"
                id="about-title"
              >
                Honoring Sista Ruth. Rooted in purpose.
              </h2>
              <div className="mt-8 grid gap-5 text-lg leading-8 text-[#4f493e]">
                <p>
                  SISTA ROOTZ pays tribute to the late Sista Ruth, a cherished
                  member of the Rastafarian community. The dispensary is being
                  shaped as a sanctuary for adults who appreciate natural
                  living, spirituality, cultural education, and a welcoming
                  retail experience.
                </p>
                <p>
                  The brand will honor the cultural and spiritual significance
                  of cannabis in Rastafarianism while preparing to serve
                  recreational adult users with quality, care, and exceptional
                  customer service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="planned-title"
          className="bg-[#070806] px-5 py-20 text-[#fff8e8] lg:px-10 lg:py-28"
          id="planned"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
                Future Menu Preview
              </p>
              <h2
                className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl"
                id="planned-title"
              >
                Curated categories planned for opening.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#fff8e8]/68">
                These categories come from the Sista Rootz brand book. Final
                menu details, pricing, hours, and availability will be announced
                closer to opening.
              </p>
            </div>

            <div className="mt-14 grid border border-[#f4c84a]/20 md:grid-cols-2 lg:grid-cols-3">
              {plannedCategories.map((category, index) => (
                <article
                  className="min-h-56 border-b border-r border-[#f4c84a]/14 bg-white/[0.035] p-7"
                  key={category.name}
                >
                  <span className="font-display inline-grid h-12 w-12 place-items-center rounded-full border border-[#f4c84a]/45 text-2xl font-bold text-[#f4c84a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-7 text-2xl font-black">{category.name}</h3>
                  <p className="mt-3 leading-7 text-[#fff8e8]/65">{category.copy}</p>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-[#f4c84a]/45 px-6 py-5 text-center text-[#fff8e8]/78">
              No online ordering, checkout, payments, carts, or live inventory
              are available on this coming-soon website.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="first-time-title"
          className="paper-texture px-5 py-20 text-[#15120d] lg:px-10 lg:py-28"
          id="first-time"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <SectionLabel>First-Time Buyers</SectionLabel>
              <h2
                className="font-display max-w-2xl text-5xl font-bold leading-[0.95] sm:text-6xl"
                id="first-time-title"
              >
                A calmer way to learn before your first visit.
              </h2>
              <p className="mt-7 text-lg leading-8 text-[#4f493e]">
                Sista Rootz plans to educate first-time adult customers about
                product types, serving expectations, labels, and responsible
                use. More details about location, hours, policies, and menu
                information will be shared as opening gets closer.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {visitorNotes.map((note) => (
                <article
                  className="min-h-56 rounded-lg border border-black/10 bg-white/72 p-6 shadow-sm"
                  key={note.title}
                >
                  <h3 className="text-lg font-black uppercase text-[#12864a]">
                    {note.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#5c5549]">{note.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-label="Stay updated and contact Sista Rootz"
          className="bg-[#e8dcc5] px-5 py-20 text-[#15120d] lg:px-10 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.88fr_1fr]">
            <section
              aria-labelledby="updates-title"
              className="dark-panel rounded-lg border border-[#f4c84a]/25 p-7 text-[#fff8e8] shadow-xl sm:p-10"
              id="updates"
            >
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
                Stay Updated
              </p>
              <h2
                className="font-display text-5xl font-bold leading-none sm:text-6xl"
                id="updates-title"
              >
                Be first to know.
              </h2>
              <p className="mt-5 leading-8 text-[#fff8e8]/70">
                Join the placeholder update list for opening announcements,
                event information, location updates, and future menu notices.
              </p>
              <StayUpdatedForm />
            </section>

            <section
              aria-labelledby="contact-title"
              className="dark-panel rounded-lg border border-[#f4c84a]/25 p-7 text-[#fff8e8] shadow-xl sm:p-10"
              id="contact"
            >
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#f4c84a]">
                Contact / Vendor Inquiry
              </p>
              <h2
                className="font-display text-5xl font-bold leading-none sm:text-6xl"
                id="contact-title"
              >
                Let&apos;s connect.
              </h2>
              <p className="mt-5 leading-8 text-[#fff8e8]/70">
                Customers, community partners, and vendors can reference these
                placeholder-friendly details while the opening plan is finalized.
              </p>
              <dl className="mt-8 grid gap-5">
                <div className="border-b border-white/12 pb-5">
                  <dt className="text-xs font-black uppercase text-[#f4c84a]">
                    Main Phone
                  </dt>
                  <dd className="mt-2 text-lg font-bold">
                    <a href="tel:4439220622">443.922.0622</a>
                  </dd>
                </div>
                <div className="border-b border-white/12 pb-5">
                  <dt className="text-xs font-black uppercase text-[#f4c84a]">
                    Website Decisions
                  </dt>
                  <dd className="mt-2 text-[#fff8e8]/80">
                    Nicole Barnes, <a href="tel:4435471124">443.547.1124</a>
                  </dd>
                </div>
                <div className="border-b border-white/12 pb-5">
                  <dt className="text-xs font-black uppercase text-[#f4c84a]">
                    Business Email
                  </dt>
                  <dd className="mt-2 text-[#fff8e8]/80">Email to be confirmed</dd>
                </div>
                <div>
                  <dt className="text-xs font-black uppercase text-[#f4c84a]">
                    Vendor Inquiry
                  </dt>
                  <dd className="mt-2 text-[#fff8e8]/80">
                    Vendor email to be confirmed
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-[#f4c84a] bg-[#070806] px-5 py-10 text-[#fff8e8]/68 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[240px_1fr]">
          <div>
            <Image
              alt="Sista Rootz Spiritual and Wellness Center"
              className="w-36 rounded border border-white/12"
              height={1080}
              src="/images/sista-rootz-logo.jpg"
              width={1080}
            />
            <p className="mt-4 text-sm">Business/legal name: M.Q LLC</p>
          </div>
          <p className="max-w-4xl text-sm leading-7">
            Adults 21+ only. Sista Rootz is coming soon and expected to open in
            late August. This website is for informational and announcement
            purposes only. No online ordering, checkout, payments, carts, live
            inventory, or product purchasing is available yet. Please consume
            responsibly and follow applicable law.
          </p>
        </div>
      </footer>
    </>
  );
}
