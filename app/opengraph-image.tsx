import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hamr Labs — AI marketing pro české firmy";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "monospace",
          color: "#F5F5F5",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "20px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#A0A0A0",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "9999px",
              background: "#00F0FF",
            }}
          />
          Hamr Labs · Q1 / 26
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div
            style={{
              fontSize: "108px",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Přivedu ti zákazníky.</span>
            <span style={{ color: "#00F0FF" }}>Ne jen lajky.</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "48px",
              fontSize: "32px",
              color: "#A0A0A0",
            }}
          >
            <span>−64 % CPL</span>
            <span>3,2× ROAS</span>
            <span>60 dní</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "18px",
            color: "#6A6A6A",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <span>Tomáš Hamerník · AI marketing</span>
          <span>hamrlabs.cz</span>
        </div>
      </div>
    ),
    size,
  );
}
