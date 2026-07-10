import type { Metadata, Viewport } from "next";
import { Audiowide, Space_Grotesk, Inter } from "next/font/google";
import { LiquidGlassSVG } from "@/components/ui/liquid-glass-svg";
import { CookieBar } from "@/components/ui/cookie-bar";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { JsonLd } from "@/components/seo/json-ld";
import {
  graph,
  organizationNode,
  websiteNode,
  personNode,
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
    default: "Hamr Labs — Marketing nové generace",
    template: "%s — Hamr Labs",
  },
  description:
    "Tomáš Hamerník: Meta reklamy, lead generation a AI obsah pro e-shopy a služby. CPL pokles o 64 % za 60 dní.",
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
    title: "Hamr Labs — Marketing nové generace",
    description:
      "Meta reklamy, lead generation a AI obsah pro firmy, které měří všechno.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hamr Labs — Přivedu ti zákazníky. Ne jen lajky.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamr Labs — Marketing nové generace",
    description: "Marketing nové generace pro české firmy",
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

const serviceNodes = [
  {
    "@type": "Service",
    name: "Meta Ads",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "CZ",
    description:
      "Kampaně na Facebooku a Instagramu od struktury přes kreativy až po škálování.",
  },
  {
    "@type": "Service",
    name: "Lead Generation",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "CZ",
    description:
      "Systémy na získávání kvalifikovaných leadů. Data místo dojmů.",
  },
  {
    "@type": "Service",
    name: "AI Obsah",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "CZ",
    description: "Kreativy, karusely, copy a videa s AI podporou.",
  },
  {
    "@type": "Service",
    name: "Audit & Strategie",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "CZ",
    description: "Kompletní audit Meta účtu a strategická mapa kampaní.",
  },
];

const siteJsonLd = graph([
  organizationNode(),
  websiteNode(),
  personNode(),
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
      </body>
    </html>
  );
}
