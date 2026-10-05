import type { Metadata, Viewport } from "next";
import { Audiowide, Space_Grotesk, Inter } from "next/font/google";
import { LiquidGlassSVG } from "@/components/ui/liquid-glass-svg";
import { CookieBar } from "@/components/ui/cookie-bar";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { Clarity } from "@/components/analytics/clarity";
import { JsonLd } from "@/components/seo/json-ld";
import {
  graph,
  organizationNode,
  websiteNode,
  personNode,
  videoObjectNode,
  ORGANIZATION_ID,
} from "@/lib/seo";
import "./globals.css";

// Audiowide — Display / Hero / H1 / H2 / H3 (brand manual)
const display = Audiowide({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
});

// Space Grotesk — Sublines / Caption / Label / Small uppercase
// (kept as --font-mono for backward CSS compat — all .font-mono uses get this)
const mono = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Inter — Body / Button text
const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hamrlabs.cz"),
  title: {
    default: "Hamr Labs | Reklama, která nosí poptávky",
    template: "%s | Hamr Labs",
  },
  description:
    "Reklama na Facebooku a Instagramu pro stavební firmy, řemeslníky, výrobní podniky a nábor. První poptávky do 14 dnů. Výsledky doložené čísly z kampaní.",
  alternates: {
    canonical: "/",
    languages: {
      "cs-CZ": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://hamrlabs.cz",
    siteName: "Hamr Labs",
    title: "Hamr Labs | Reklama, která nosí poptávky",
    description:
      "Reklama na Facebooku a Instagramu, ze které chodí poptávky a kandidáti. Pro firmy, které chtějí vidět čísla, ne sliby.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hamr Labs. Přivedu Vám zákazníky, ne jen lajky.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamr Labs | Reklama, která nosí poptávky",
    description:
      "Reklama na sociálních sítích pro stavební firmy, řemeslníky a nábor. Výsledky do 14 dnů.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    other: {
      "facebook-domain-verification": "w4hto3wk1utlxj39ypdnw7hsdr84tx",
      // TODO: add Google Search Console token (see SEO-README.md)
      // "google-site-verification": "...",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

// Kept in sync with the three visible service cards (components/services/
// services-data.ts) — structured data must match what the page shows.
const serviceNodes = [
  {
    "@type": "Service",
    name: "Reklama na Facebooku a Instagramu",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "CZ",
    description:
      "Vymyslím, spustím a denně hlídám Vaše reklamy. Od prvního vizuálu až po vyhodnocení, co skutečně vydělalo.",
  },
  {
    "@type": "Service",
    name: "Přísun poptávek",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "CZ",
    description:
      "Systém, který každý týden nosí nové poptávky. U každé víte, kolik stála.",
  },
  {
    "@type": "Service",
    name: "Nábor zaměstnanců",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "CZ",
    description:
      "Kandidáti na řemeslné a výrobní pozice přes reklamu na Facebooku. Bez pracovních portálů a za zlomek jejich ceny.",
  },
];

const siteJsonLd = graph([
  organizationNode(),
  websiteNode(),
  personNode(),
  videoObjectNode(),
  ...serviceNodes,
]);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className={`${display.variable} ${mono.variable} ${sans.variable}`}
    >
      <head>
        <JsonLd data={siteJsonLd} />
      </head>
      <body>
        <LiquidGlassSVG />
        <a href="#main" className="skip-link">
          Přeskočit na obsah
        </a>
        {children}
        <CookieBar />
        <MetaPixel />
        <Clarity />
      </body>
    </html>
  );
}
