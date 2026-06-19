import type { Metadata } from "next";
import { Audiowide, Space_Grotesk, Inter } from "next/font/google";
import { LiquidGlassSVG } from "@/components/ui/liquid-glass-svg";
import { CookieBar } from "@/components/ui/cookie-bar";
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
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://hamrlabs.cz",
    siteName: "Hamr Labs",
    title: "Hamr Labs — Marketing nové generace",
    description:
      "Meta reklamy, lead generation a AI obsah pro firmy, které měří všechno.",
    // og:image is provided by app/opengraph-image.tsx (dynamic)
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamr Labs — Marketing nové generace",
    description: "Marketing nové generace pro české firmy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://hamrlabs.cz/#tomas",
      name: "Tomáš Hamerník",
      jobTitle: "AI Performance Marketing Konzultant",
      url: "https://hamrlabs.cz",
      sameAs: [
        "https://instagram.com/hamrlabs",
        "https://facebook.com/HamrLabs",
      ],
      worksFor: { "@id": "https://hamrlabs.cz/#org" },
    },
    {
      "@type": "Organization",
      "@id": "https://hamrlabs.cz/#org",
      name: "Hamr Labs",
      legalName: "Hamr Labs s.r.o.",
      url: "https://hamrlabs.cz",
      logo: "https://hamrlabs.cz/logo.png",
      founder: { "@id": "https://hamrlabs.cz/#tomas" },
      areaServed: "CZ",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "ICO",
        value: "29675855",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kaprova 42/14",
        addressLocality: "Praha",
        postalCode: "110 00",
        addressCountry: "CZ",
      },
      sameAs: [
        "https://instagram.com/hamrlabs",
        "https://facebook.com/HamrLabs",
      ],
    },
    {
      "@type": "Service",
      name: "Meta Ads",
      provider: { "@id": "https://hamrlabs.cz/#org" },
      areaServed: "CZ",
      description:
        "Kampaně na Facebooku a Instagramu od struktury přes kreativy až po škálování.",
    },
    {
      "@type": "Service",
      name: "Lead Generation",
      provider: { "@id": "https://hamrlabs.cz/#org" },
      areaServed: "CZ",
      description:
        "Systémy na získávání kvalifikovaných leadů. Data místo dojmů.",
    },
    {
      "@type": "Service",
      name: "AI Obsah",
      provider: { "@id": "https://hamrlabs.cz/#org" },
      areaServed: "CZ",
      description: "Kreativy, karusely, copy a videa s AI podporou.",
    },
    {
      "@type": "Service",
      name: "Audit & Strategie",
      provider: { "@id": "https://hamrlabs.cz/#org" },
      areaServed: "CZ",
      description: "Kompletní audit Meta účtu a strategická mapa kampaní.",
    },
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LiquidGlassSVG />
        <a href="#main" className="skip-link">
          Přeskočit na obsah
        </a>
        {children}
        <CookieBar />
      </body>
    </html>
  );
}
