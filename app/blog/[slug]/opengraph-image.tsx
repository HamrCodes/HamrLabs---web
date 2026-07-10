import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { blogPosts, getBlogPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hamr Labs";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const font = readFileSync(join(process.cwd(), "og-assets", "og-regular.ttf"));
const logo = readFileSync(join(process.cwd(), "public", "logo.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.title ?? "Hamr Labs";
  const category = post?.tag ?? "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1000px 500px at 80% -10%, rgba(0,240,255,0.16), transparent 60%), #0A0A0A",
          padding: "72px 80px",
          fontFamily: "Geist",
        }}
      >
        {/* top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={64} height={64} alt="" />
          <span style={{ fontSize: 34, color: "#F5F5F5", letterSpacing: -0.5 }}>
            Hamr Labs
          </span>
        </div>

        {/* middle: category + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: 6,
              color: "#00F0FF",
            }}
          >
            {category}
          </span>
          <span
            style={{
              fontSize: title.length > 60 ? 60 : 72,
              lineHeight: 1.08,
              color: "#F5F5F5",
              maxWidth: 1000,
            }}
          >
            {title}
          </span>
        </div>

        {/* bottom: domain + accent rule */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              width: "100%",
              height: 4,
              background:
                "linear-gradient(90deg, #00F0FF, rgba(0,240,255,0.1))",
            }}
          />
          <span style={{ fontSize: 26, color: "#A0A0A0", letterSpacing: 1 }}>
            hamrlabs.cz
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: font, weight: 400, style: "normal" }],
    },
  );
}
