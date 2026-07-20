"use client";

import { useEffect, useRef, useState } from "react";
import { Flag, PlayCircle } from "lucide-react";

interface Props {
  /** Whether public/hero.mp4 exists (checked at build time). */
  hasVideo: boolean;
  /** Whether public/hero-poster.jpg exists (checked at build time). */
  hasPoster: boolean;
}

/**
 * Hero showreel: a race-style progress timer, the video itself, and the
 * invitation to watch it.
 *
 * To publish a video, drop a 16:9 H.264 MP4 at `public/hero.mp4` (optionally a
 * still frame at `public/hero-poster.jpg`) and redeploy. It then autoplays
 * muted, looping and inline, which is what browsers require before they allow
 * autoplay at all.
 */
export function HeroShowreel({ hasVideo, hasPoster }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!reduced) {
      const started = el.play();
      if (started) started.catch(() => {});
    }

    // rAF rather than the `timeupdate` event, which only fires ~4x a second
    // and makes the bar visibly step.
    let frame = 0;
    const tick = () => {
      if (el.duration > 0) {
        const t = Math.min(el.currentTime / el.duration, 1);
        // Ease-out: leaps away at the start, then eases toward the flag.
        setProgress(1 - Math.pow(1 - t, 1.7));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const pct = Math.round(progress * 100);
  const finished = pct >= 99;

  return (
    <>
      {/* Timer: runs toward the finish flag */}
      <div className="relative z-[3] showreel-bar">
        <div
          className="showreel-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          aria-label="Průběh videa"
        >
          <span className="showreel-fill" style={{ width: `${pct}%` }} />
          <span className="showreel-dot" style={{ left: `${pct}%` }} />
        </div>
        <Flag
          className={`showreel-flag${finished ? " showreel-flag--reached" : ""}`}
          strokeWidth={1.5}
          aria-hidden
        />
      </div>

      {/* Showreel — fixed 16:9 so the layout never shifts when the file loads */}
      <div className="relative z-[3] hero-video-frame">
        {hasVideo ? (
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
        ) : (
          <div className="hero-video hero-video--placeholder">
            <div className="flex flex-col items-center gap-3 text-fg-subtle">
              <PlayCircle className="w-14 h-14" strokeWidth={1.5} aria-hidden />
              <span className="font-mono text-xs uppercase tracking-widest">
                Video
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Invitation to watch */}
      <p className="relative z-[3] showreel-caption">
        Koukněte na krátké video a dozvíte se vše, co potřebujete
      </p>
    </>
  );
}
