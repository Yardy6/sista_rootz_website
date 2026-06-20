"use client";

import { useCallback, useEffect, useRef } from "react";
import { assetPath } from "../lib/asset-path";

const storageKey = "sistaRootzAgeVerified";
const logoIntroKey = "sistaRootzLogoIntroPlayed";
const ageVerifiedEvent = "sista-rootz-age-verified";
const stillHoldProgress = 0.07;
const animationClearProgress = 0.94;
const videoCrop = {
  x: 42,
  y: 30,
  width: 724,
  height: 410
};

export function HomeLogoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const stillRef = useRef<HTMLImageElement>(null);
  const introPlayingRef = useRef(false);
  const durationRef = useRef(10);
  const seekFrameRef = useRef<number | null>(null);
  const renderFrameRef = useRef<number | null>(null);
  const scrollProgressRef = useRef(0);

  const updateMediaVisibility = useCallback(() => {
    const shell = shellRef.current;
    const still = stillRef.current;
    const video = videoRef.current;

    if (!shell || !still) {
      return;
    }

    const videoProgress =
      video && durationRef.current > 0
        ? Math.min(Math.max(video.currentTime / durationRef.current, 0), 1)
        : 1;
    const showAnimation =
      (introPlayingRef.current && videoProgress > 0.03) ||
      (scrollProgressRef.current >= stillHoldProgress &&
        scrollProgressRef.current < animationClearProgress);
    const showStill =
      !introPlayingRef.current && scrollProgressRef.current < stillHoldProgress;

    still.style.opacity = showStill ? "1" : "0";
    shell.style.setProperty("--video-bg-opacity", "0");
    shell.style.setProperty("--video-media-opacity", showAnimation ? "1" : "0");
  }, []);

  const renderFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const shell = shellRef.current;
    const still = stillRef.current;

    if (
      !video ||
      !canvas ||
      !shell ||
      !still ||
      video.readyState < 2 ||
      !still.complete
    ) {
      return;
    }

    const sourceWidth = video.videoWidth || 854;
    const sourceHeight = video.videoHeight || 480;
    const cropScaleX = sourceWidth / 854;
    const cropScaleY = sourceHeight / 480;
    const cropX = Math.round(videoCrop.x * cropScaleX);
    const cropY = Math.round(videoCrop.y * cropScaleY);
    const cropWidth = Math.round(videoCrop.width * cropScaleX);
    const cropHeight = Math.round(videoCrop.height * cropScaleY);
    const naturalWidth = still.naturalWidth || 800;
    const naturalHeight = still.naturalHeight || 635;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = Math.min(
      naturalWidth,
      Math.max(Math.round(shell.clientWidth * pixelRatio), 320)
    );
    const height = Math.round((width * naturalHeight) / naturalWidth);

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

    const context = canvas.getContext("2d", { willReadFrequently: true });
    const maskContext = maskCanvas.getContext("2d", { willReadFrequently: true });

    if (!context || !maskContext) {
      return;
    }

    context.clearRect(0, 0, width, height);
    context.drawImage(still, 0, 0, width, height);
    maskContext.clearRect(0, 0, width, height);
    maskContext.drawImage(video, cropX, cropY, cropWidth, cropHeight, 0, 0, width, height);

    const frame = context.getImageData(0, 0, width, height);
    const mask = maskContext.getImageData(0, 0, width, height);
    const pixels = frame.data;
    const maskPixels = mask.data;
    const videoProgress =
      durationRef.current > 0
        ? Math.min(Math.max(video.currentTime / durationRef.current, 0), 1)
        : 1;
    const fillRevealAlpha = Math.round(
      Math.min(Math.max((videoProgress - 0.88) / 0.12, 0), 1) * 255
    );

    for (let index = 0; index < pixels.length; index += 4) {
      const pixel = index / 4;
      const pixelX = pixel % width;
      const pixelY = Math.floor(pixel / width);
      const originalAlpha = pixels[index + 3];
      const stillRed = pixels[index];
      const stillGreen = pixels[index + 1];
      const stillBlue = pixels[index + 2];
      const stillMaxChannel = Math.max(stillRed, stillGreen, stillBlue);
      const stillMinChannel = Math.min(stillRed, stillGreen, stillBlue);
      const red = maskPixels[index];
      const green = maskPixels[index + 1];
      const blue = maskPixels[index + 2];
      const maxChannel = Math.max(red, green, blue);
      const minChannel = Math.min(red, green, blue);
      const isStillFill = stillMaxChannel < 34 && stillMaxChannel - stillMinChannel < 18;
      const isRightEdgeWatermark =
        pixelX > width - 48 &&
        pixelY > height * 0.42 &&
        maxChannel > 112 &&
        maxChannel - minChannel < 46;
      const isVideoPerimeterFrame =
        maxChannel > 82 &&
        (pixelY < height * 0.08 ||
          pixelY > height * 0.985 ||
          pixelX < width * 0.12 ||
          pixelX > width * 0.89);
      const isLowContrastMaskNoise =
        maxChannel < 125 && maxChannel - minChannel < 28;
      let maskAlpha = 0;

      if (
        isRightEdgeWatermark ||
        isVideoPerimeterFrame ||
        isLowContrastMaskNoise ||
        maxChannel < 30
      ) {
        maskAlpha = 0;
      } else if (maxChannel < 76) {
        maskAlpha = Math.round(((maxChannel - 30) / 46) * 255);
      } else {
        maskAlpha = 255;
      }

      pixels[index + 3] = Math.round(
        (originalAlpha * (isStillFill ? fillRevealAlpha : maskAlpha)) / 255
      );
    }

    context.putImageData(frame, 0, 0);
    updateMediaVisibility();
  }, [updateMediaVisibility]);

  const startRenderLoop = useCallback(() => {
    if (renderFrameRef.current !== null) {
      return;
    }

    const draw = () => {
      renderFrame();

      if (introPlayingRef.current) {
        renderFrameRef.current = window.requestAnimationFrame(draw);
      } else {
        renderFrameRef.current = null;
      }
    };

    renderFrameRef.current = window.requestAnimationFrame(draw);
  }, [renderFrame]);

  const seekFromScroll = useCallback(() => {
    const video = videoRef.current;
    const hero = video?.closest(".home-hero");

    if (!video || !hero || video.readyState < 1 || introPlayingRef.current) {
      return;
    }

    const rect = hero.getBoundingClientRect();
    const scrollRange = Math.max(hero.clientHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(-rect.top / scrollRange, 0), 1);
    scrollProgressRef.current = progress;
    updateMediaVisibility();
    const scrubProgress = Math.min(
      Math.max((progress - stillHoldProgress) / (1 - stillHoldProgress), 0),
      1
    );
    const targetTime = durationRef.current * (1 - scrubProgress);

    try {
      video.currentTime = Math.min(
        Math.max(targetTime, 0),
        Math.max(durationRef.current - 0.04, 0)
      );
    } catch {
      // Safari can briefly reject seeks while metadata settles.
    }
  }, [updateMediaVisibility]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.pause();

    const requestSeek = () => {
      if (seekFrameRef.current !== null) {
        return;
      }

      seekFrameRef.current = window.requestAnimationFrame(() => {
        seekFrameRef.current = null;
        seekFromScroll();
      });
    };

    const stopIntro = () => {
      introPlayingRef.current = false;
      video.pause();
      renderFrame();
    };

    const playIntroOnce = () => {
      const verified = window.localStorage.getItem(storageKey) === "true";
      const alreadyPlayed = window.sessionStorage.getItem(logoIntroKey) === "true";

      if (!verified || alreadyPlayed || introPlayingRef.current) {
        requestSeek();
        return;
      }

      window.sessionStorage.setItem(logoIntroKey, "true");
      introPlayingRef.current = true;
      video.currentTime = 0;
      video
        .play()
        .then(startRenderLoop)
        .catch(() => {
          introPlayingRef.current = false;
          seekFromScroll();
        });
    };

    const handleScroll = () => {
      if (introPlayingRef.current) {
        stopIntro();
      }

      requestSeek();
    };

    const handleMetadata = () => {
      durationRef.current =
        Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 10;
      playIntroOnce();
    };

    if (video.readyState >= 1) {
      handleMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleMetadata, { once: true });
      video.load();
    }

    video.addEventListener("ended", stopIntro);
    video.addEventListener("loadeddata", renderFrame);
    video.addEventListener("seeked", renderFrame);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", requestSeek);
    window.addEventListener(ageVerifiedEvent, playIntroOnce);

    return () => {
      if (seekFrameRef.current !== null) {
        window.cancelAnimationFrame(seekFrameRef.current);
      }

      if (renderFrameRef.current !== null) {
        window.cancelAnimationFrame(renderFrameRef.current);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", requestSeek);
      window.removeEventListener(ageVerifiedEvent, playIntroOnce);
      video.removeEventListener("ended", stopIntro);
      video.removeEventListener("loadeddata", renderFrame);
      video.removeEventListener("loadedmetadata", handleMetadata);
      video.removeEventListener("seeked", renderFrame);
    };
  }, [renderFrame, seekFromScroll, startRenderLoop]);

  return (
    <div className="home-logo-intro">
      <div className="home-logo-video-shell" ref={shellRef}>
        <video
          aria-hidden="true"
          className="home-logo-video-source"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        >
          <source
            src={assetPath("/videos/sista-rootz-logo-animation-alpha.webm")}
            type="video/webm"
          />
          <source
            src={assetPath("/videos/sista-rootz-logo-animation.mp4")}
            type="video/mp4"
          />
        </video>
        <img
          alt=""
          aria-hidden="true"
          className="home-logo-still"
          ref={stillRef}
          src={assetPath("/images/sista-rootz-logo-transparent.png")}
        />
        <canvas
          aria-label="Animated Sista Rootz logo"
          className="home-logo-canvas"
          ref={canvasRef}
          role="img"
        />
      </div>
    </div>
  );
}
