"use client";

import type { CSSProperties } from "react";
import { CheckCircle2 } from "lucide-react";

export function PhotoCollage() {
  return (
    <div className="photo-collage">
      {/* Photo 1 — large portrét, top-left, rotate -2deg */}
      <div
        className="photo-card photo-card--main"
        style={{ "--rotate": "-2deg", "--z": "2" } as CSSProperties}
      >
        <div className="photo-card-frame">
          {/* TODO: replace with portrait photo of Tomáš */}
          <div className="photo-card-placeholder">
            <span className="photo-card-label">Foto Tomáš</span>
            <span className="photo-card-sublabel">Portrét</span>
          </div>
        </div>
      </div>

      {/* Photo 2 — small, middle-right, rotate +3deg */}
      <div
        className="photo-card photo-card--work"
        style={{ "--rotate": "3deg", "--z": "3" } as CSSProperties}
      >
        <div className="photo-card-frame">
          {/* TODO: replace with behind-the-scenes work photo */}
          <div className="photo-card-placeholder">
            <span className="photo-card-label">Pracovní moment</span>
            <span className="photo-card-sublabel">Behind the scenes</span>
          </div>
        </div>
      </div>

      {/* Photo 3 — screenshot, bottom-left, rotate +1deg */}
      <div
        className="photo-card photo-card--result"
        style={{ "--rotate": "1deg", "--z": "1" } as CSSProperties}
      >
        <div className="photo-card-frame">
          {/* TODO: replace with Meta Business Manager screenshot (anonymized) */}
          <div className="photo-card-placeholder">
            <span className="photo-card-label">Výsledek kampaně</span>
            <span className="photo-card-sublabel">Meta Business</span>
          </div>
        </div>
      </div>

      {/* Achievement card — liquid glass cyan, bottom-right, rotate -1deg */}
      <div
        className="photo-card photo-card--achievement"
        style={{ "--rotate": "-1deg", "--z": "4" } as CSSProperties}
      >
        <div className="photo-card-frame photo-card-frame--glass">
          <div className="achievement-card-inner">
            <CheckCircle2
              className="achievement-icon"
              strokeWidth={1.5}
              aria-hidden
            />
            <div className="achievement-content">
              <span className="achievement-label">Meta Business Partner</span>
              <span className="achievement-sublabel">Ověřeno · 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
