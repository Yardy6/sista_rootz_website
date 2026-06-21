"use client";

import { useEffect, useRef, useState } from "react";
import { assetPath } from "../lib/asset-path";

const storageKey = "sistaRootzAgeVerified";
const ageVerifiedEvent = "sista-rootz-age-verified";
const mobileAlphaVideoSrc = assetPath(
  "/videos/sista-rootz-logo-animation-mobile-alpha.mp4"
);
const staticLogoSrc = assetPath("/images/sista-rootz-logo-transparent.png");
const scrollRangeMultiplier = 0.7;
const introPlayedKey = "sistaRootzScrollLogoIntroPlayed";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ScrollLogoAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const renderFrameRef = useRef<number | null>(null);
  const durationRef = useRef(0);
  const introCompleteRef = useRef(false);
  const introPlayingRef = useRef(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showStaticFallback, setShowStaticFallback] = useState(true);

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

    const renderCanvasFrame = () => {
      const canvas = canvasRef.current;

      if (
        !canvas ||
        video.readyState < 2 ||
        video.videoWidth < 2
      ) {
        return;
      }

      const sourceWidth = Math.round(video.videoWidth / 2);
      const sourceHeight = video.videoHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.min(
        1280,
        Math.max(Math.round((canvas.clientWidth || 640) * pixelRatio), 320)
      );
      const height = Math.round((width * sourceHeight) / sourceWidth);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      if (!maskCanvasRef.current) {
        maskCanvasRef.current = document.createElement("canvas");
      }

      const maskCanvas = maskCanvasRef.current;

      if (maskCanvas.width !== width || maskCanvas.height !== height) {
        maskCanvas.width = width;
        maskCanvas.height = height;
      }

      const context = canvas.getContext("2d");
      const maskContext = maskCanvas.getContext("2d", {
        willReadFrequently: true
      });

      if (!context || !maskContext) {
        return;
      }

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";
      context.drawImage(
        video,
        0,
        0,
        sourceWidth,
        sourceHeight,
        0,
        0,
        width,
        height
      );

      maskContext.clearRect(0, 0, width, height);
      maskContext.drawImage(
        video,
        sourceWidth,
        0,
        sourceWidth,
        sourceHeight,
        0,
        0,
        width,
        height
      );

      const alphaFrame = maskContext.getImageData(0, 0, width, height);
      const alphaPixels = alphaFrame.data;
      const cornerIndexes = [
        0,
        (width - 1) * 4,
        (height - 1) * width * 4,
        (width * height - 1) * 4
      ];
      const blackLevel = Math.round(
        cornerIndexes.reduce(
          (total, index) => total + alphaPixels[index],
          0
        ) / cornerIndexes.length
      );
      const usesVideoRange = blackLevel >= 8;
      const whiteLevel = 235;

      for (let index = 0; index < alphaPixels.length; index += 4) {
        const alpha = alphaPixels[index];

        alphaPixels[index + 3] = usesVideoRange
          ? Math.max(
              0,
              Math.min(
                255,
                Math.round(
                  ((alpha - blackLevel) * 255) /
                    Math.max(1, whiteLevel - blackLevel)
                )
              )
            )
          : alpha;
      }

      maskContext.putImageData(alphaFrame, 0, 0);
      context.globalCompositeOperation = "destination-in";
      context.drawImage(maskCanvas, 0, 0);
      context.globalCompositeOperation = "source-over";
    };

    const startRenderLoop = () => {
      if (renderFrameRef.current !== null) {
        return;
      }

      const draw = () => {
        renderCanvasFrame();

        if (introPlayingRef.current) {
          renderFrameRef.current = window.requestAnimationFrame(draw);
        } else {
          renderFrameRef.current = null;
        }
      };

      renderFrameRef.current = window.requestAnimationFrame(draw);
    };

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

      renderCanvasFrame();
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

      window.sessionStorage.setItem(introPlayedKey, "true");
      setShowStaticFallback(window.scrollY <= 2);
      renderCanvasFrame();
      requestScrub();
    };

    const playIntro = () => {
      const verified = window.localStorage.getItem(storageKey) === "true";

      if (!verified || introPlayingRef.current) {
        return;
      }

      durationRef.current =
        Number.isFinite(video.duration) && video.duration > 0
          ? video.duration
          : durationRef.current;

      if (window.sessionStorage.getItem(introPlayedKey) === "true") {
        introPlayingRef.current = false;
        introCompleteRef.current = true;
        video.pause();

        if (durationRef.current > 0) {
          try {
            video.currentTime = durationRef.current;
          } catch {
            // Some browsers can briefly reject seeks while video metadata settles.
          }
        }

        setShowStaticFallback(true);
        renderCanvasFrame();
        requestScrub();
        return;
      }

      if (introCompleteRef.current) {
        return;
      }

      introPlayingRef.current = true;
      video.currentTime = 0;
      video.playbackRate = 1;
      video
        .play()
        .then(() => {
          setShowStaticFallback(false);
          startRenderLoop();
        })
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
        introCompleteRef.current = true;
        introPlayingRef.current = false;
        video.pause();
      }

      setShowStaticFallback(false);
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
    video.addEventListener("loadeddata", renderCanvasFrame);
    video.addEventListener("seeked", renderCanvasFrame);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", requestScrub);
    window.addEventListener(ageVerifiedEvent, playIntro);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      if (renderFrameRef.current !== null) {
        window.cancelAnimationFrame(renderFrameRef.current);
      }

      video.pause();
      video.removeEventListener("ended", finishIntro);
      video.removeEventListener("loadeddata", renderCanvasFrame);
      video.removeEventListener("loadedmetadata", handleMetadata);
      video.removeEventListener("seeked", renderCanvasFrame);
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
    <div
      className={`scroll-logo-animation-frame ${
        showStaticFallback ? "scroll-logo-animation-frame-static" : ""
      }`}
    >
      <img
        alt=""
        aria-hidden="true"
        className={`scroll-logo-animation-static ${
          showStaticFallback ? "" : "scroll-logo-animation-static-hidden"
        }`}
        src={staticLogoSrc}
      />
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
        <source src={mobileAlphaVideoSrc} type="video/mp4" />
      </video>
      <canvas
        aria-label="Animated Sista Rootz Spiritual and Wellness Center logo"
        className="scroll-logo-animation-canvas"
        ref={canvasRef}
        role="img"
      />
    </div>
  );
}
