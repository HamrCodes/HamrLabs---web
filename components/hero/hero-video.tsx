"use client";

import { useEffect, useRef } from "react";
import { PlayCircle } from "lucide-react";

interface Props {
  /** Whether public/hero.mp4 exists (checked at build time). */
  hasVideo: boolean;
  /** Whether public/hero-poster.jpg exists (checked at build time). */
  hasPoster: boolean;
}

/**
 * Hero showreel.
 *
 * To publish a video: drop a 16:9 H.264 MP4 at `public/hero.mp4` (optionally a
 * still frame at `public/hero-poster.jpg`) and redeploy. Nothing else to wire
 * up — it starts playing on load, muted and looping, which is what browsers
 * require before they allow autoplay.
 *
 * Until that file exists the placeholder renders in the exact same 16:9 box,
 * so adding the video later shifts nothing.
 */
export function HeroVideo({ hasVideo, hasPoster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Respect reduced-motion: those visitors get the first frame and controls
    // rather than motion they did not ask for.
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const started = el.play();
    if (started) started.catch(() => {});
  }, []);

  if (!hasVideo) {
    return (
      <div className="hero-video hero-video--placeholder">
        <div className="flex flex-col items-center gap-3 text-fg-subtle">
          <PlayCircle className="w-14 h-14" strokeWidth={1.5} aria-hidden />
          <span className="font-mono text-xs uppercase tracking-widest">
            Video
          </span>
        </div>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className="hero-video"
      src="/hero.mp4"
      poster={hasPoster ? "/hero-poster.jpg" : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      controls
      aria-label="Ukázka práce Hamr Labs"
    />
  );
}
