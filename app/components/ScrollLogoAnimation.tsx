"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "../lib/asset-path";

const storageKey = "sistaRootzAgeVerified";
const ageVerifiedEvent = "sista-rootz-age-verified";
const alphaVideoSrc = assetPath("/videos/sista-rootz-logo-animation-alpha.webm");
const videoSrc = assetPath("/videos/sista-rootz-logo-animation.mp4");
const staticLogoSrc = assetPath("/images/sista-rootz-logo-transparent.png");
const scrollRangeMultiplier = 1;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ScrollLogoAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const durationRef = useRef(0);
  const introCompleteRef = useRef(false);
  const introPlayingRef = useRef(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => setReducedMotion(mediaQuery.matches);

    syncReducedMotion();
    mediaQuery.addEventListener("change", syncReducedMotion);

    return () => mediaQuery.removeEventListener("change", syncReducedMotion);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || reducedMotion) {
      return;
    }

    const scrubFromScroll = () => {
      animationFrameRef.current = null;

      if (!introCompleteRef.current || durationRef.current <= 0) {
        return;
      }

      const scrollRange = Math.max(window.innerHeight * scrollRangeMultiplier, 1);
      const progress = clamp(window.scrollY / scrollRange, 0, 1);
      const targetTime = durationRef.current * (1 - progress);

      try {
        video.currentTime = clamp(targetTime, 0, durationRef.current);
      } catch {
        // Some browsers can briefly reject seeks while video metadata settles.
      }
    };

    const requestScrub = () => {
      if (animationFrameRef.current !== null) {
        return;
      }

      animationFrameRef.current = window.requestAnimationFrame(scrubFromScroll);
    };

    const finishIntro = () => {
      introPlayingRef.current = false;
      introCompleteRef.current = true;
      durationRef.current =
        Number.isFinite(video.duration) && video.duration > 0
          ? video.duration
          : durationRef.current;
      video.pause();

      if (durationRef.current > 0) {
        video.currentTime = durationRef.current;
      }

      requestScrub();
    };

    const playIntro = () => {
      const verified = window.localStorage.getItem(storageKey) === "true";

      if (!verified || introPlayingRef.current || introCompleteRef.current) {
        return;
      }

      introPlayingRef.current = true;
      video.currentTime = 0;
      video.playbackRate = 1;
      video
        .play()
        .catch(() => {
          finishIntro();
        });
    };

    const handleMetadata = () => {
      durationRef.current =
        Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
      playIntro();
    };

    const handleScroll = () => {
      if (!introCompleteRef.current) {
        return;
      }

      requestScrub();
    };

    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.loop = false;
    video.controls = false;

    if (video.readyState >= 1) {
      handleMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleMetadata);
      video.load();
    }

    video.addEventListener("ended", finishIntro);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", requestScrub);
    window.addEventListener(ageVerifiedEvent, playIntro);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      video.pause();
      video.removeEventListener("ended", finishIntro);
      video.removeEventListener("loadedmetadata", handleMetadata);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", requestScrub);
      window.removeEventListener(ageVerifiedEvent, playIntro);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="scroll-logo-animation-frame">
        <img
          alt="Sista Rootz Spiritual and Wellness Center logo"
          className="scroll-logo-animation-media"
          src={staticLogoSrc}
        />
      </div>
    );
  }

  return (
    <div className="scroll-logo-animation-frame">
      <video
        aria-label="Animated Sista Rootz Spiritual and Wellness Center logo"
        className="scroll-logo-animation-media scroll-logo-animation-video"
        controls={false}
        disablePictureInPicture
        muted
        playsInline
        preload="auto"
        ref={videoRef}
      >
        <source src={alphaVideoSrc} type="video/webm" />
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
