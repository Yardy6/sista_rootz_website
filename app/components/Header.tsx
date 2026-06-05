"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../lib/site-content";
import { RootLine } from "./RootLine";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#d8b84f]/20 bg-[#070806]/88 px-4 py-3 text-[#fff8e8] shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-3 lg:grid-cols-[190px_1fr_170px]">
        <Link
          aria-label="Sista Rootz home"
          className="inline-flex w-fit items-center"
          href="/"
        >
          <Image
            alt=""
            className="h-14 w-36 rounded-md border border-[#d8b84f]/35 bg-black object-contain p-1"
            height={1080}
            priority
            src="/images/sista-rootz-logo.jpg"
            width={1080}
          />
        </Link>

        <div className="relative">
          <nav
            aria-label="Main navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.82rem] font-black uppercase tracking-[0.02em] text-[#fff8e8]/82"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  className={`relative transition hover:text-[#f4c84a] ${
                    isActive ? "text-[#f4c84a]" : ""
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <RootLine className="pointer-events-none mx-auto mt-1 hidden h-5 max-w-[520px] text-[#12864a]/70 sm:block" />
        </div>

        <Link
          className="hidden min-h-11 items-center justify-center rounded-md bg-[#f4c84a] px-5 text-sm font-black uppercase text-[#07140d] transition hover:bg-[#ffdc60] lg:inline-flex"
          href="/contact"
        >
          Vendor Inquiry
        </Link>
      </div>
    </header>
  );
}
