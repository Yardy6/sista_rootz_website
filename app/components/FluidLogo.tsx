"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type FluidLogoProps = {
  className?: string;
  priority?: boolean;
};

export function FluidLogo({ className = "", priority = false }: FluidLogoProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const element = logoRef.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const offset = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - viewportCenter) / viewportCenter));
      element.style.setProperty("--fluid-scroll", `${offset * 18}px`);
    }

    function requestUpdate() {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className={`fluid-logo ${className}`} ref={logoRef}>
      <Image
        alt="Sista Rootz Spiritual and Wellness Center"
        className="fluid-logo-base"
        height={635}
        priority={priority}
        src="/images/sista-rootz-logo-transparent.png"
        width={800}
      />
      <div className="fluid-logo-motion" aria-hidden="true">
        <Image
          alt=""
          className="fluid-logo-motion-image"
          height={635}
          src="/images/sista-rootz-logo-transparent.png"
          width={800}
        />
      </div>
      <div className="fluid-logo-sheen" aria-hidden="true" />
    </div>
  );
}
