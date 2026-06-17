import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "../lib/site-content";

export function Footer() {
  return (
    <footer className="site-footer border-t border-[#d8b84f]/25 bg-[#070806] px-5 py-16 text-[#fff8e8]/70 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[260px_1fr_260px]">
        <div>
          <Image
            alt="Sista Rootz Spiritual and Wellness Center"
            className="h-auto w-44 object-contain"
            height={635}
            src="/images/sista-rootz-logo-transparent.png"
              width={800}
          />
          <p className="mt-4 text-sm">Business/legal name: {site.legalName}</p>
          <p className="mt-2 text-sm">
            <a className="transition hover:text-[#f4c84a]" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
          </p>
        </div>

        <div>
          <p className="max-w-3xl text-sm leading-7">
            Adults 21+ only. Sista Rootz is coming soon with expected opening in{" "}
            {site.opening}. This website is under construction and for
            informational announcement purposes only. No online ordering,
            ecommerce, POS, checkout, carts, payments, live ordering, live
            inventory, or product sales are available yet.
          </p>
          <p className="mt-4 text-sm leading-7">
            Website decisions: {site.contactName},{" "}
            <a className="font-bold text-[#f4c84a]" href={site.contactPhoneHref}>
              {site.contactPhoneDisplay}
            </a>
          </p>
        </div>

        <nav aria-label="Footer navigation" className="grid gap-2 text-sm">
          {footerLinks.map((item) => (
            <Link
              className="transition hover:text-[#f4c84a]"
              href={item.href}
              key={`${item.href}-${item.label}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
