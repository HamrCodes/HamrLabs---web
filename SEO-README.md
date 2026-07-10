# SEO architektura — Hamr Labs

Kompletní technická SEO vrstva webu. Obsah článků je oddělený; tohle popisuje
jen technickou vrstvu kolem něj a co je potřeba ještě doplnit ručně.

## Architektura

| Vrstva | Kde | Co dělá |
|---|---|---|
| Identita (single source of truth) | `lib/seo.ts` | Konstanty (`SITE_URL`, `@id`) + buildery Schema.org nodů (Organization, WebSite, Person, BlogPosting, BreadcrumbList, FAQPage) |
| FAQ parser | `lib/faq-parser.ts` | Vytáhne FAQ z raw MDX (oba formáty: `### otázka` i `**otázka?**`) + `wordCount`. FAQPage tak sedí slovo od slova s viditelným obsahem |
| JSON-LD komponenta | `components/seo/json-ld.tsx` | XSS-safe `<script type="application/ld+json">` (escapuje `<`) |
| Site-wide graf | `app/layout.tsx` | Jednou emituje `@graph`: Organization + WebSite + Person + 4× Service. Plus `metadataBase`, title šablona, robots, OG/Twitter defaults, `viewport`/`themeColor`, hreflang cs-CZ + x-default, verification |
| Article metadata + graf | `app/blog/[slug]/page.tsx` | `generateMetadata` (title, description, keywords, canonical, OG article) + `@graph` (BlogPosting + BreadcrumbList + FAQPage) + viditelné breadcrumbs |
| Per-article OG obrázek | `app/blog/[slug]/opengraph-image.tsx` | Značkový 1200×630 PNG generovaný staticky při buildu (font `og-assets/og-regular.ttf` s podporou češtiny) |
| Sitemap | `app/sitemap.ts` | Všechny stránky, `priority` (homepage 1.0, pilíř 0.9, clustery 0.8, blog index 0.7, legal 0.3), `changeFrequency` |
| Robots | `app/robots.ts` | `allow: /` + odkaz na sitemapu |

### Rich results, které web nárokuje
- **Article** (BlogPosting) na každém článku
- **FAQ** (FAQPage) na každém článku, který má sekci `## Časté dotazy`
- **Breadcrumbs** (BreadcrumbList) — schéma se shoduje s viditelnou drobečkovou navigací

### Statický export — poznámky
Web běží jako statický export na Apache (Active24). Proto:
- Per-article OG se generuje jako soubor `opengraph-image` **bez přípony**;
  `.htaccess` mu přes `ForceType image/png` vynucuje správný MIME type.
- `next/image` runtime optimalizace (AVIF/WebP) není dostupná; obrázky jsou
  `<img>` s `width`/`height` (CLS) + `loading`/`decoding`.

## Jak přidat nový článek (aby měl automaticky plné SEO)

1. Vytvoř `content/blog/<slug>.mdx` — jen tělo článku (bez frontmatteru, bez H1;
   H1 se renderuje z titulku). Pokud chceš FAQ rich result, přidej sekci
   `## Časté dotazy` a pod ní otázky (buď `### Otázka`, nebo `**Otázka?**`)
   následované odstavcem odpovědi.
2. Přidej záznam do `lib/blog.ts` (`blogPosts`):
   ```ts
   {
     slug: "<slug>",
     title: "…",           // do ~60 znaků pro title
     excerpt: "…",         // 140–155 znaků = meta description + OG
     date: "YYYY-MM-DD",
     tag: "Meta Ads",      // = kategorie = articleSection + badge
     readingMinutes: 7,
     keywords: ["…", "…"], // meta keywords + JSON-LD keywords + OG tags
     pillar: false,        // true jen pro hub článek
   }
   ```
3. Hotovo. Metadata, canonical, hreflang, BlogPosting + BreadcrumbList + FAQPage,
   per-article OG obrázek i sitemapa se vygenerují automaticky.

## TODO — placeholdery, které vyžadují reálná data

Nic z toho není vymyšlené; doplň skutečné hodnoty:

- [ ] **`sameAs` profily** — `lib/seo.ts` (`ORG_SAME_AS`) má Instagram + Facebook.
      Chybí **LinkedIn** (Organizace i Person `Tomáš Hamerník`). Až budeš mít URL,
      přidej je do `ORG_SAME_AS` a do `personNode()` (`sameAs`).
- [ ] **Google Search Console** — v `app/layout.tsx` je zakomentovaný
      `google-site-verification`. Vlož ověřovací token z GSC a odkomentuj.
- [ ] **IndexNow** (volitelné, rychlejší indexace v Bing/Seznam) — vygeneruj klíč,
      ulož ho jako `public/<klíč>.txt` (obsah = ten klíč) a poté pinguj
      `https://api.indexnow.org/indexnow?url=…&key=<klíč>` po nasazení.
- [ ] **Obrázky v článcích** — články měly `[OBRÁZEK: popis | alt: …]` placeholdery,
      které jsou teď odstraněné (články fungují jako text). Až budeš mít obrázky,
      vlož je na daná místa; alt text ber z původní poznámky.
- [ ] **Ověřit IG/FB URL** — `instagram.com/hamrlabs`, `facebook.com/HamrLabs`
      (jestli sedí přesně).

## Ověřeno (build-time)

- Každý článek: BlogPosting (bez chybějících polí, headline ≤110), BreadcrumbList
  [1,2,3], FAQPage (3–5 Q&A), `wordCount`, per-article OG, canonical + hreflang.
- FAQ ve schématu se shoduje se zdrojovým MDX slovo od slova.
- Homepage: Organization + WebSite + Person + Service, propojené přes `@id`.
- Sitemap: 32 URL se správnými prioritami, robots.txt odkazuje na sitemapu.

## Zbývá ověřit externě (potřebuje živý web)
- Google Rich Results Test (Article, FAQ, Breadcrumbs)
- Schema Markup Validator (validator.schema.org) — 0 errorů
- Lighthouse SEO 100 (+ Performance/Accessibility v zelené)
- OG/Twitter náhledy (opengraph.xyz / FB Sharing Debugger)
