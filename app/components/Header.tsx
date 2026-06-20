"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "../lib/asset-path";
import { navItems } from "../lib/site-content";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const isOpenRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    isOpenRef.current = isOpen;

    if (isOpen) {
      setIsHeaderVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1023px)");

    const updateHeader = () => {
      scrollFrameRef.current = null;

      if (!mobileQuery.matches) {
        setIsHeaderVisible(true);
        setIsScrolled(false);
        lastScrollYRef.current = window.scrollY;
        return;
      }

      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      setIsScrolled(currentScrollY > 24);

      if (isOpenRef.current || currentScrollY <= 24 || scrollDelta < -6) {
        setIsHeaderVisible(true);
      } else if (scrollDelta > 6 && currentScrollY > 96) {
        setIsHeaderVisible(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    const requestHeaderUpdate = () => {
      if (scrollFrameRef.current !== null) {
        return;
      }

      scrollFrameRef.current = window.requestAnimationFrame(updateHeader);
    };

    lastScrollYRef.current = Math.max(window.scrollY, 0);
    updateHeader();
    window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
    mobileQuery.addEventListener("change", requestHeaderUpdate);

    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }

      window.removeEventListener("scroll", requestHeaderUpdate);
      mobileQuery.removeEventListener("change", requestHeaderUpdate);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsHeaderVisible(true);
  }, [pathname]);

  return (
    <header
      className={`site-header inset-x-0 top-0 z-40 text-[#fff8e8] ${
        isHeaderVisible ? "mobile-header-visible" : "mobile-header-hidden"
      }`}
      data-scrolled={isScrolled}
    >
      <div className="header-main px-4 py-4 sm:px-6 lg:px-10 lg:py-5 2xl:px-14">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-4 lg:h-20 xl:gap-9 2xl:h-24 2xl:gap-12">
          <Link
            aria-label="Sista Rootz home"
            className="header-logo-crop relative z-10 inline-flex w-fit items-center"
            onClick={() => setIsOpen(false)}
            href="/"
          >
            <Image
              alt=""
              className="header-logo-image object-contain"
              height={579}
              priority
              src={assetPath("/images/sista-rootz-logo-top-left.png")}
              width={836}
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="header-nav hidden items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#fff8e8]/75 lg:flex lg:text-sm xl:gap-2 2xl:gap-3 2xl:text-base"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  className={`header-nav-link px-4 py-3 transition hover:text-white xl:px-5 2xl:px-6 ${
                    isActive ? "header-nav-link-active text-[#f4c84a]" : ""
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="inline-grid h-12 w-12 place-items-center border border-[#f4c84a]/30 bg-white/[0.06] text-[#f4c84a] transition hover:bg-white/[0.1] lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path
                d={isOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-shell lg:hidden ${isOpen ? "mobile-nav-shell-open" : ""}`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation" className="grid gap-2">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                className={`px-4 py-4 text-sm font-black uppercase transition ${
                  isActive
                    ? "bg-[#f4c84a] text-[#081006]"
                    : "bg-white/[0.07] text-[#fff8e8] hover:bg-white/[0.12]"
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
