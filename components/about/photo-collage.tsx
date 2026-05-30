"use client";

import type { CSSProperties } from "react";

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

      {/* Achievement card — official Meta Business Partner badge, bottom-right, rotate -1deg */}
      <div
        className="photo-card photo-card--achievement"
        style={{ "--rotate": "-1deg", "--z": "4" } as CSSProperties}
      >
        <div className="photo-card-frame photo-card-frame--meta">
          <img
            src="/meta-partner.png"
            alt="Meta Business Partner"
            className="achievement-meta-img"
            width={826}
            height={412}
          />
        </div>
      </div>
    </div>
  );
}
