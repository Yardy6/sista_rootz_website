import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "../lib/site-content";
import { RootLine } from "./RootLine";

export function Footer() {
  return (
    <footer className="border-t border-[#d8b84f]/25 bg-[#070806] px-5 py-10 text-[#fff8e8]/68 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[260px_1fr_260px]">
        <div>
          <Image
            alt="Sista Rootz Spiritual and Wellness Center"
            className="h-auto w-40 rounded-md border border-white/12 object-contain"
            height={1080}
            src="/images/sista-rootz-logo.jpg"
            width={1080}
          />
          <p className="mt-4 text-sm">Business/legal name: {site.legalName}</p>
        </div>

        <div>
          <RootLine className="mb-5 h-8 w-full max-w-xl text-[#f4c84a]/55" />
          <p className="max-w-3xl text-sm leading-7">
            Adults 21+ only. Sista.Rootz is coming soon with expected opening in
            {` ${site.opening}`}. This website is for informational and
            announcement purposes only. No online ordering, ecommerce, POS,
            checkout, carts, payments, live ordering, live inventory, or product
            purchasing is available yet.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="grid gap-2 text-sm">
          {navItems.map((item) => (
            <Link className="transition hover:text-[#f4c84a]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
