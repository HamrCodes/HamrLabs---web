# CLAUDE.md — Hamr Labs Project Context

> **Tento soubor je persistent context pro Claude Code.** Čte se automaticky v každé konverzaci. Drž se ho jako jediného zdroje pravdy pro branding, design a kódové konvence napříč všemi sekcemi a fázemi projektu. Pokud něco v promptu konkrétní sekce odporuje tomuto souboru, nejdřív se zeptej, neproveď silently.

---

## 1. Project Identity

### 1.1 Co stavíme
**Personal brand web pro Tomáše Hamerníka**, českého performance marketing konzultanta operujícího pod značkou **Hamr Labs**. Repo: `github.com/HamrCodes/HamrLabs---web`.

### 1.2 Důležitý nuance: Personal brand, ne agentura
Web je **personal brand**. Tomáš je tvář značky. V hero copy se mluví v první osobě singuláru („Přivedu ti zákazníky"), v O nás je Tomášova fotka a osobní příběh. Hamr Labs je značka/entita, ale komunikace je osobní, ne korporátní.

### 1.3 Cíl webu
Primární cíl: **konverze na discovery call** přes kontaktní formulář (a později booking).
Sekundární cíl: budovat credibility přes data, případovky a tone of voice.

### 1.4 Cílovka — aktualizováno copy v2 (2026-07)
Jednatel nebo majitel **stavební firmy, řemeslné dílny, výrobního podniku**
(30+ let), případně firma, která shání lidi. Sjednoceno s Tomášovým videem;
mezi sedmi případovkami není jediný e-shop, takže dřívější „e-shopy" cílení je
obsolete. Tento člověk **nezná žargon** (CPL, ROAS, lead gen, Pixel, CAPI):
copy mluví o ceně za poptávku, návratnosti a přísunu poptávek. Dál platí, že:
- Měsíční mediální rozpočet 30 až 200 tis. Kč
- Reaguje na čísla, ne na sliby
- Není tech-naivní, ale není performance marketer
- Chce vidět ukázky práce a metriky před prvním callem

---

## 2. Brand & Positioning

### 2.1 Co Tomáš dělá (3 služby) — aktualizováno copy v2 (2026-07)
1. **Reklama na Facebooku a Instagramu** — vymyslí, spustí a denně hlídá kampaně
2. **Přísun poptávek** — systém, který každý týden nosí poptávky se známou cenou
3. **Nábor zaměstnanců** — kandidáti na řemeslné a výrobní pozice bez pracovních portálů

Školení už není samostatná služba: přesunulo se do posledního odstavce sekce
O mně („zaškolím Váš tým"). Tyto tři služby musí zůstat v souladu se
`components/services/services-data.ts` **i** se `Service` uzly v JSON-LD
(`app/layout.tsx`), protože structured data musí odpovídat viditelnému obsahu.

### 2.2 Brand pillars (tři tóny, definují každé copy a design rozhodnutí)
1. **Přímý, ne drzý.** Říká co si myslí. Čísla, ne vzduch. Když něco nefunguje, řekne to první.
2. **Technologický, ne technický.** AI a data zjednodušují život klienta. Bez žargonu, bez vyhýbavých termínů.
3. **Sebejistý, ne nafoukaný.** Výsledky mluví. Práce je dělat čísla, ne se prezentovat.

### 2.3 USP (proč Tomáš a ne konkurence)
1. **Měřitelnost end-to-end.** Tracking stack, server-side události, real-time dashboard 24/7.
2. **AI jako rychlostní násobič, ne náhrada.** Kreativy, copy varianty, anomálie v datech, segmentace.
3. **Bez „balíčků".** Žádné fixní 9 990 Kč packages. Spolupráce se škáluje s rozpočtem.
4. **Český mid-market focus.** Ne enterprise, ne freelance.

### 2.4 Čím Hamr Labs NENÍ (kontrastní pozicování)
- Ne SEO agentura
- Ne creative agency / branding studio
- Ne no-code / web development
- Ne enterprise dodavatel (pod 30k Kč/měsíc rozpočtu nemá smysl začínat)

---

## 3. Tone of Voice & Copy Rules

### 3.1 Voice rules
- **Krátké věty.** Průměr 8 až 14 slov. Občas jedno slovo jako tečka.
- **Aktivní rod.** „Snížím CPL." NE: „CPL bude sníženo."
- **Specifická čísla.** „64 %", „60 dní", „3,2×". NE: „podstatně lépe", „rychle".
- **Žádné superlativy.** Ne „nejlepší", „vůdce trhu", „průlomový".
- **Žádné prázdné fráze.** Ban: „Pomáháme firmám růst", „Inovativní řešení", „Digitální transformace".
- **Vykání s velkým V (Vy/Vám/Váš).** „Přivedu Vám zákazníky." Důvod: B2B sales web, profesionální oslovení, ne overfamiliarity. Cílí na majitele firem a marketing manažery, kde velké V signalizuje respekt + professional distance.
- **Tečka místo vykřičníku.** „Odpovím do 24 hodin."
- **Trochu suchého dry wit.** „Bez sklepových reportů." „Ne jen lajky." Není to standup, ale není to Adobe brožura.

### 3.2 Personal brand voice
- První osoba singulár v hero a primárních CTA (já, přivedu, ozvu se)
- Plurál „my" je OK v About sekci pokud se odkazuje na tým za Tomášem
- Vyhnout se obojí v jedné větě (nemíchat já a my)

### 3.3 Jazyk
- **Vše česky.** Žádné anglické UI prvky kromě industry termínů (Meta Ads, ROAS, CPL, ROI, CAPI, Pixel).
- Czech-first content. `lang="cs"` na `<html>`.

### 3.4 Voice reference
**Pozitivní:** Linear.app, Stripe, Vercel, Basecamp, Wise (věcné, sebejisté).
**Negativní:** typická SaaS agentura („Empower your brand"), korporátní češtinou napsaný web („naše společnost se specializuje").

### 3.5 CTA copy (závazný seznam) — aktualizováno copy v2 (2026-07)
- Nav: „Chci konzultaci"
- Primary hero: „Chci nové poptávky"
- Secondary hero: „Podívat se na výsledky"
- Live card: „Prozkoumat výsledky"
- Kontaktní sekce: „Chci nezávaznou konzultaci", „Napsat zprávu"
- **Ban:** „Get Started", „Sign Up", „Learn More", „Click Here", „Kontaktovat tým"
  (Hamr Labs je jeden člověk, ne tým)

### 3.6 Formatting rules v copy
- **Žádné pomlčky** jako separator v běžných větách (Matyášova preference). Místo nich: dvojtečky, závorky, nové věty, čárky.
- Výjimky: en-dash pro number ranges („7 až 14 dní" preferováno, ale „7–14" je akceptovatelné v tight UI), minus znaménko (`−`) v negativních číslech („−64 %").
- **Žádné emoji** kdekoliv v copy, button textu, error messages, success states.
- **Žádné emotikony** ani text symboly nahrazující emoji (`:)`, `<3`).

---

## 4. Tech Stack

| Vrstva | Volba |
|--------|-------|
| Framework | Next.js 16 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties pro design tokens |
| Animations | GSAP + ScrollTrigger (magnetic buttons, scroll reveals) |
| Fonts | JetBrains Mono (display + metrics) + Inter Tight (body), self-host via `next/font/google` |
| Icons | lucide-react (utility) + custom inline SVG (brand) |
| Forms | Server Actions + Resend (transactional email) + zod (validation) |
| Anti-spam | Vercel BotID + honeypot field |
| CMS pro case studies | MDX v repu (`/content/case-studies/*.mdx`) |
| Analytics | Vercel Analytics + Plausible (privacy-first) |
| Hosting | Vercel (edge) |

### 4.1 Stack rules
- **Žádné Bootstrap, žádné UI kit knihovny** (Material UI, Chakra, etc.).
- **shadcn/ui je OK** pokud potřeba primitive (Dialog, Accordion, atd.), customizováno v Hamr Labs stylu.
- **Žádný state manager** v Phase 1 až 3 (React useState/useReducer stačí). Zustand až pokud se přidá complex shared state.
- **TypeScript strict mode.** Žádné `any`, žádné `@ts-ignore`.

---

## 5. Design System

### 5.1 Color tokens (CSS variables v `app/globals.css`)

```css
:root {
  /* Surfaces */
  --bg: #0A0A0A;              /* primary surface */
  --bg-elevated: #111111;     /* cards, modals */
  --bg-overlay: #1A1A1A;      /* hover states */

  /* Foreground */
  --fg: #F5F5F5;              /* primary text */
  --fg-muted: #A0A0A0;        /* secondary text */
  --fg-subtle: #6A6A6A;       /* tertiary text */

  /* Brand accent (cyan/teal, max 5 až 10 % plochy webu) */
  --accent: #00F0FF;          /* primary cyan */
  --accent-deep: #00B8C8;     /* deeper teal */
  --accent-glow: rgba(0, 240, 255, 0.15);

  /* Rules and borders */
  --rule: rgba(255, 255, 255, 0.08);
  --rule-strong: rgba(255, 255, 255, 0.15);
  --rule-accent: rgba(0, 240, 255, 0.4);

  /* Glass tokens (liquid glass system) */
  --glass-bg-1: rgba(255, 255, 255, 0.03);
  --glass-bg-2: rgba(255, 255, 255, 0.01);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-hover: rgba(0, 240, 255, 0.4);
  --glass-shadow: rgba(0, 0, 0, 0.5);
  --glass-highlight: rgba(255, 255, 255, 0.1);
  --glass-inset: rgba(0, 0, 0, 0.4);

  /* Semantic */
  --success: #4ADE80;
  --danger: #EF4444;
}
```

### 5.2 Color usage rules
- `--bg` (#0A0A0A) je defaultní pozadí všech sekcí
- `--accent` (#00F0FF cyan) je **NIKDY fill barva**. Pouze:
  - 1px borders na hover/focus
  - Text highlight na 1 keyword v headlines („Ne jen lajky.")
  - Metric numbers v Live Results Card
  - Pulsing dots u "Live výsledky" badge
  - Subtle glow shadows na hover (max 40px blur)
  - Aurora background gradient (low opacity)
- Cyan jako fill bg button = ZAKÁZÁNO
- Cyan section background = ZAKÁZÁNO
- Maximální podíl cyan na ploše webu: 5 až 10 %

### 5.3 Typography

**Brand manual v1 (2026-05) — 3 fonty per Hamr Labs brand guidelines:**

| Font | CSS variable | Tailwind class | Použití |
|---|---|---|---|
| **Audiowide** | `--font-display` | `font-display` | Display / Hero / H1 / H2 / H3 (všechny velké headlines) |
| **Space Grotesk Medium** | `--font-mono` | `font-mono` | Subline / Caption / Label / small uppercase (badges, eyebrows, week labels, button labels) |
| **Inter Regular** | `--font-sans` | `font-sans` | Body / paragraphy / form inputs / buttons |

**POZN.:** Variable `--font-mono` historicky pojmenováno z JetBrains Mono ery (Phase 1), teď ukazuje na Space Grotesk Medium. Naming kept pro backwards compat všech `.font-mono` Tailwind class instances. Pro nové headings použít `--font-display`/`font-display`.

**Setup v `app/layout.tsx`:**
```typescript
import { Audiowide, Space_Grotesk, Inter } from "next/font/google";

const display = Audiowide({ subsets: ["latin", "latin-ext"], variable: "--font-display", weight: ["400"] });
const mono = Space_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-mono", weight: ["400", "500", "600", "700"] });
const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans", weight: ["400", "500", "600"] });
```

**Tailwind config:**
```typescript
fontFamily: {
  display: ["var(--font-display)", "sans-serif"],
  mono: ["var(--font-mono)", "sans-serif"],
  sans: ["var(--font-sans)", "system-ui", "sans-serif"],
}
```

**Změna oproti Phase 1:** dropnuto JetBrains Mono + Inter Tight. Důvod: Audiowide je core brand display font (potvrzeno brand manual v2). Předchozí pravidlo „Audiowide ven" je obsolete.

### 5.4 Type scale

| Token | Size | Font | Weight | Tracking | Použití |
|-------|------|------|--------|----------|---------|
| `text-eyebrow` | 12px | mono | 500 | 0.2em uppercase | Eyebrows nad section headlines |
| `text-h1` | clamp(48px, 8vw, 120px) | mono | 500 | -0.04em | Hero headline |
| `text-h2` | clamp(32px, 4vw, 72px) | mono | 500 | -0.03em | Section headlines |
| `text-h3` | clamp(20px, 2vw, 32px) | mono | 500 | -0.02em | Sub-section headlines |
| `text-lead` | 18-20px | sans | 400 | normal | Sub-headers, large body |
| `text-body` | 16px | sans | 400 | normal | Běžný text |
| `text-small` | 14px | sans | 400 | normal | Secondary text |
| `text-metric` | clamp(36px, 4vw, 56px) | mono | 500 tabular-nums | -0.02em | Velká čísla v stats |
| `text-meta` | 12px | mono | 500 | 0.15em uppercase | Badges, labels, tags |
| `text-button` | 14-16px | mono | 600 | 0.05em | Button labels |

**Pravidla:**
- Mono font NA všechny headlines, čísla, badges, button labels, UI metadata
- Sans font NA paragraphs, lead text, form inputs, body content
- `tabular-nums` POVINNÉ na všech metrikách (zarovnání čísel v sloupcích)
- Nikdy nemíchat tři font sizes v jednom bloku (max 2 v cards, max 3 v complex sections)

### 5.5 Spacing scale

Tailwind defaultní spacing scale. Klíčové hodnoty:
- Section vertical padding: 96px (mobile) až 160px (desktop)
- Container horizontal padding: 24px (mobile) až 48px (desktop) až 0 (>1920px ultrawide, content cap)
- Card padding: 24px až 32px
- Stack gap mezi elementy: 16/24/32/48/64/96px
- Grid gutter: 24px (desktop), 16px (mobile)

### 5.6 Border radius
- **Cards a containers:** 12-16px (`rounded-xl` až `rounded-2xl`)
- **Buttons (všechny variants):** `rounded-full` (pill). Konzistentní napříč webem, žádné mixování pill + sharp buttonů. Tertiary (link-style) zůstává bez radiusu protože nemá border/bg.
- **Pills v marquee, badges:** `rounded-full`
- **Form inputs:** 4px nebo 0
- **Liquid glass cards:** 16-24px (`rounded-2xl` až `rounded-3xl`)

### 5.7 Fold sales funnel strategy

Hero zone je designed na **single-fold sales funnel** na 1920x1080:
- Hero main content (text + card) ~520px (hero-grid `min-height: 480px; max-height: 560px`)
- Hero-to-services divider ~64px (`<HeroToServicesDivider />` jako sibling mezi Hero a ServicesSection v page.tsx)
- Services row ~220px (3 inline icons + popis)
- Total ~800px + padding = fold-fit

Hero `min-height` NIKDY 100vh — content-driven sizing přes `min-height: auto` + `max-height` na hero-grid pro symmetry.

User vidí na první fold: kdo jsem (eyebrow), co dělám (H1 + subhead), čím prokazuju výsledky (Live Results Card), jak začít (CTA), přehled disciplín (services row). Žádný scroll potřeba pro lead generation hook.

Section padding utility classes:
- `.section-pad-compact` (clamp 48-80px) → Hero, Services
- `.section-pad` (clamp 80-140px) → Moje výsledky, Proces, O mně, FAQ, Kontakt

---

## 6. Layout Rules

### 6.1 Full-bleed strategy
- Web je **full-bleed** na desktopu: sekce se táhnou edge-to-edge, žádný globální max-width container kolem celé page
- **Cap na ultrawide:** content uvnitř sekce má `max-width: 1920px` a je centrovaný (margin-x auto); background sekce se táhne edge-to-edge
- **Implementace:**
  ```jsx
  <section className="w-full bg-[var(--bg)]">  {/* full bleed bg */}
    <div className="mx-auto max-w-[1920px] px-6 md:px-12 lg:px-24">  {/* content cap */}
      {/* content */}
    </div>
  </section>
  ```

### 6.2 Responsive breakpoints

| BP | Width | Použití |
|----|-------|---------|
| (default) | 0px+ | Mobile, 1-column stack |
| `sm:` | 640px+ | Velký telefon, 2-column kde má smysl |
| `md:` | 768px+ | Tablet portrait |
| `lg:` | 1024px+ | Tablet landscape / small desktop, full grid kicks in |
| `xl:` | 1280px+ | Desktop |
| `2xl:` | 1536px+ | Large desktop |
| custom 1920 | 1920px+ | Ultrawide cap point |

### 6.3 Grid
Hlavní content grid: 12 columns, 24px gutter na desktopu (`lg+`), 16px na tabletu (`md`), single column na mobilu.

### 6.4 Section heights
- Hero: `min-h-[100vh]` na desktopu, `min-h-[90vh]` na mobilu
- Standard section: padding 96 až 160px vertical, content určuje height
- Sticky elements: max viewport height minus nav height

---

## 7. Component Patterns

### 7.1 Buttons

**Primary CTA:**
```jsx
<button className="
  bg-[var(--fg)] text-[var(--bg)]
  px-7 py-4 font-mono font-semibold text-sm
  border border-[var(--fg)]
  hover:scale-[1.02] hover:shadow-[0_0_40px_var(--accent-glow)]
  transition-all duration-200 ease-out
  uppercase tracking-wider
">
  Chci výsledky →
</button>
```

**Secondary CTA:**
```jsx
<button className="
  bg-transparent text-[var(--fg)]
  px-7 py-4 font-mono font-semibold text-sm
  border border-[var(--rule-strong)]
  hover:border-[var(--accent)]
  transition-all duration-200 ease-out
  uppercase tracking-wider
">
  Ukázky práce
</button>
```

**Tertiary / link:** plain text, underline-offset 4px, hover color `--accent`.

**Magnetic button (GSAP):** Reusable primitive `<MagneticButton>` v `components/ui/`. Mousemove → translateX/Y * 0.4, rotateX/Y * 0.15, scale 1.05. Mouseleave → elastic ease back to 0. Inspirováno 21st.dev CinematicFooter componentem.

### 7.2 Liquid glass card

Reusable component `<GlassCard>`:
```jsx
<div className="glass rounded-2xl overflow-hidden">
  {/* content */}
</div>
```

`.glass` utility class (v `globals.css`):
```css
.glass {
  background: linear-gradient(145deg, var(--glass-bg-1) 0%, var(--glass-bg-2) 100%);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid var(--glass-border);
  box-shadow:
    0 20px 60px -20px var(--glass-shadow),
    inset 0 1px 1px var(--glass-highlight),
    inset 0 -1px 2px var(--glass-inset);
  transition: border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass:hover {
  border-color: var(--glass-border-hover);
  box-shadow:
    0 30px 80px -20px var(--glass-shadow),
    inset 0 1px 1px var(--glass-highlight),
    0 0 40px -10px var(--accent-glow);
}
```

**Použití liquid glass (kde ano, kde ne):**
- ✅ Live Results Card v heru
- ✅ Sticky top nav po scroll past hero
- ✅ Result/Case study popup modals
- ✅ Working flow step cards (sekce Proces)
- ✅ Footer CTA pills
- ❌ Hero CTA buttons (zůstávají solid)
- ❌ Form inputs (zůstávají flat s 1px border)
- ❌ FAQ accordion (zůstává flat s dividers)

### 7.3 Badges

Dvě varianty podle funkce. Tvar (radius) signalizuje typ.

**1. Inline tag badge — `rounded-sm` (4px)**

Informational tag uvnitř content. Technical, flat, konzistentní s mono uppercase typografií. Použití: tag na service cards (PERFORMANCE, PIPELINE, CREATIVE, STRATEGY), tag na case study cards (Stavebnictví, Služby, E-commerce).

```jsx
<span className="
  inline-block px-2.5 py-1 rounded-sm
  font-mono text-[10px] uppercase tracking-widest
  border border-[var(--rule)] text-[var(--fg-muted)]
">
  Performance
</span>
```

**2. Floating pill badge — `rounded-full`**

Status indicator standalone, ne informational tag. Použití: Live výsledky badge v hero card, Meta Business Partner badge, AI-Powered badge, Czech Republic badge.

```jsx
{/* Pill se status dot (Live varianta) */}
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--rule)] font-mono text-xs uppercase tracking-widest text-[var(--fg-muted)]">
  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse-dot" />
  Live výsledky · Q1 / 26
</div>

{/* Pill text-only (status varianta) */}
<span className="inline-block px-3 py-1.5 rounded-full border border-[var(--rule)] font-mono text-[10px] uppercase tracking-widest text-[var(--fg-muted)]">
  Meta Business Partner
</span>
```

**Pravidlo rozhodnutí:** "Je to informational tag uvnitř contentu nebo status indicator standalone?" → tag = `rounded-sm`, status = `rounded-full`.

### 7.4 Service / Case patterns (dvě varianty)

**Pravidlo rozhodnutí:** podle hierarchie sekce. Mini-section (intro strip) = minimal inline, deep-dive section = flat cards.

**Varianta A — Minimal inline items (Služby).**

**Výjimka od copy v2 (2026-07):** sekce Služby má nově H2 „Co dělám"
(`.services-h2`). Je záměrně menší než ostatní H2 a padding sekce je zkrácený,
aby řada služeb pořád sedla do foldu na 1920x1080 (viz 5.7). Když se s tímto
nadpisem bude hýbat, vždy přeměř `.services-grid` bottom ≤ 1080.

Jinak: grid položek vertical-stack icon → title → description, bez eyebrow/lead. Žádný card border / bg / padding. Hover effect jen na icon-wrapper (cyan glow + scale 1.08), ne na celou položku. Použití: Služby (4 disciplíny jako post-hero intro strip).

```jsx
<div className="service-item">
  <div className="service-item-icon-wrapper"> {/* 56x56 cyan-tinted square */}
    <Icon className="service-item-icon" /> {/* 28px lucide stroke 1.5 cyan */}
  </div>
  <h3 className="service-item-title">{title}</h3>
  <p className="service-item-description">{description}</p>
</div>
```

**Varianta B — Flat cards (Případovky).**

Plné cards s chrome pro deep-dive content. Použití: Případové studie (case cards s screenshot top + metric callout).
- Background `--bg-elevated` (#111111)
- 1px border `--rule`
- Padding 0 top (image edge-to-edge) + 28px content
- Hover: `translateY(-2px)` + border-color `--accent` + cyan glow
- Transition 200ms ease-out
- Border-radius 16px

**Kdy která:** krátký informational content (název + jedna věta) = Varianta A. Hierarchical content s metric/image/CTA = Varianta B.

### 7.5 Form inputs

```jsx
<input className="
  w-full bg-[var(--bg-elevated)]
  border border-[var(--rule)]
  px-4 py-3 font-sans text-base
  text-[var(--fg)] placeholder:text-[var(--fg-subtle)]
  focus:outline-none focus:border-[var(--accent)]
  transition-colors duration-200
" />
```

- 1px solid border (žádný box-shadow ring na focus)
- Label NAD inputem, ne floating, ne placeholder-as-label
- Error message pod inputem, color `--danger`, font-mono text-xs

### 7.6 FAQ accordion

Plain text, žádné cards. Mezi položkami 1px divider `--rule`. Chevron rotuje 90deg při expand. Plain icon, no fill.

### 7.7 Sticky nav

- Position: sticky top-0, z-50
- **Phase 1:** placeholder div (transparent, no functional nav)
- **Phase 2 onwards:** 
  - Initial state (na heru): transparent background, no border
  - Scroll past hero: solid `--bg` background, 1px bottom border `--rule`, **NEBO** glass utility class (rozhodnout v Phase 2)
- Height 72px desktop, 64px mobile

---

## 8. Animation & Motion

### 8.1 Princip
**Méně je víc.** 1 až 2 signature animations celkem na webu, ne 10. Účel je zvýraznit data-first pozici, ne dekorovat.

### 8.2 Schválené signature animations
1. **Counter animation na metrics** při scroll into view (1.2s, ease-out-expo). Toto je hlavní signature, používat na všech `--metric` číslech v hero, sekce Stats, case studies.
2. **Subtle fade-up reveal** sekcí na scroll (12px translate + opacity, 600ms, stagger 50-80ms mezi child elementy).

### 8.3 Hover micro-interactions (OK)
- Cards: `translateY(-2px)` + border color change, 200ms ease
- Buttons primary: scale 1.02 + accent glow shadow
- Buttons secondary: border color → accent
- Glass cards: border color + 0 0 40px accent glow shadow
- Magnetic buttons (GSAP): position offset + rotateX/Y, elastic return

### 8.4 Loading reveals
- Hero on load: stagger fade-up sekvence (eyebrow → headline → subhead → CTA → stats), 80ms stagger, 600ms duration each
- Live Results Card: slide-in z right (translateX 40px → 0, opacity 0 → 1), 800ms, delay 200ms

### 8.5 Pulsing dots
- Pouze u "Live výsledky" badge
- 2s ease-in-out infinite, opacity 1 → 0.5, scale 1 → 0.85

### 8.6 ZAKÁZANÉ animace
- Parallax background
- Scroll-jacking
- Horizontal scroll sections (unless 100 % intentional pro specifický feature)
- Cursor glow / cursor follower / magnetic cursor
- Animated background canvas (waves, particles, dots, mesh)
- Multiple counter animations v jiných než hero/stats sekcích
- View Transitions API gimmicks
- Page transition fades delší než 200ms

### 8.7 Reduced motion
**POVINNÉ:** všechny animace respektují `prefers-reduced-motion: reduce`. Při reduce: 
- Disable counter animations (čísla se zobrazí instant)
- Disable fade-up reveals (vše instant visible)
- Disable hover translateY effects
- Disable pulsing dots

---

## 9. Imagery & Assets

### 9.1 Co MÁ být na webu
- **Reálné UI screenshoty** Meta Ads Managera, Looker dashboardu, Slack threadu. Pro redacted data: maskovat citlivé info, zachovat strukturu.
- **Velká fotka Tomáše Hamerníka** v O nás sekci (high-res custom shot)
- **Pull quotes z reálných klientů** (s jménem firmy, ne anonymně). Klienti: Flach, Elegant Dog's Barber, Klub moderního psa.
- **Hand-drawn / illustrované diagramy** procesu (Excalidraw style) místo SVG icon setu.
- **Meta Business Partner badge** oficiální (Tomáš dodá)

### 9.2 Co NEMÁ být
- ❌ Stock fotografie z Unsplash, Pexels, Pixabay
- ❌ Generic SVG illustrations (Storyset, unDraw, Notion-style cute characters)
- ❌ Heroicons / Lucide ikony all-over jako brand prvek (OK jako utility v UI, ne jako hero feature)
- ❌ Cyan-purple gradient blobs
- ❌ Animated wave SVG backgrounds
- ❌ Floating particles / mesh gradients
- ❌ Generic 3D Spline scenes
- ❌ AI-generated hero images

### 9.3 Placeholders v Phase 1-2
Dokud Tomáš nedodá assety, používáme:
- **Logo:** placeholder box 240x60px s textem "LOGO" v mono fontu, border 1px `--rule`, background `--bg-elevated`
- **Video v heru:** placeholder div s aspect-ratio 16:9, background `--bg-elevated`, centered `<PlayCircle>` icon + text "VIDEO"
- **Foto Tomáše:** placeholder div s aspect-ratio 3:4, background `--bg-elevated`, centered text "FOTO TOMÁŠ"
- **Screenshoty Meta Ads:** placeholder div s aspect-ratio 16:10, background `--bg-elevated`, centered text "META ADS SCREENSHOT"
- Vždy přidat komentář v kódu: `{/* TODO: replace with <asset description> from Tomáš */}`

### 9.4 Ikony
- **lucide-react** pro utility (Instagram, Facebook, ChevronDown, ArrowRight, PlayCircle, Activity, etc.)
- Stroke-width: 1.5px konzistentně
- Size: 16, 20, nebo 24px standard
- Color: `--fg-muted` default, `--accent` na hover/active
- **Žádný custom 3D ikon set** v Phase 1-3

---

## 10. Anti-AI Directives

### 10.1 NE-DĚLEJ (red flags z briefu a anti-AI checklistu)

- ❌ **Purple / pink / violet gradients.** Generic SaaS palette. Cyan je brand, purple ne.
- ❌ **Cheap glassmorphism.** Glass cards bez ostrého borderu nad flat barvou. Pokud glass card, vždy s 1px border, hard outer shadow, rich background za ním.
- ❌ **Centered hero s gradient text na celém H1.** Gradient/accent jen na 1 keyword, ne na celé větě.
- ❌ **3-column features grid s ikonkami** jako default. Použít asymetrický split, 2x2 matrix, nebo vertical stack s rules. (Výjimka: Procesní 3-4 step cards je OK pokud má smysl.)
- ❌ **"Trusted by" logo grid** s generickými logy. Pokud Tomáš má klienty s reálnými logy, OK.
- ❌ **Floating gradient blobs / mesh backgrounds** (Stripe-clone effect).
- ❌ **Animated number counters ve více než jedné sekci.** (Hero stats + případně sekce Výsledky, ne víc.)
- ❌ **Cursor follower / cyan glow following mouse.** Drop.
- ❌ **Particles / animated dots background.**
- ❌ **Animated SVG wave canvas** v heru nebo kdekoliv.
- ❌ **Hero illustration** (3D abstract shapes, Spline scenes generic).
- ❌ **Audiowide / Orbitron / Press Start font.** Datovaný sci-fi vibe.
- ❌ **Generic font kombo Inter + Inter.** Mono pro display je závazný.
- ❌ **Lorem ipsum.** Veškerý copy je v Czech, schválený. Použij doslovně.
- ❌ **Smooth scroll sections s parallax obrázky.**
- ❌ **"Get started" / "Sign up" CTAs.** CTA copy je definovaná v section 3.5.
- ❌ **Cyan jako fill barvy** (cyan pozadí, cyan sekce, cyan buttony jako fill).
- ❌ **Dark mode toggle.** Web je jednotný dark theme, žádný toggle.

### 10.2 DĚLEJ (markers of quality)

- ✅ **Asymetrický layout.** Text není centered, je left-aligned with offset. Cards v offsetu.
- ✅ **Mono display typography scale.** 80 až 140px na hero, technical confidence.
- ✅ **Cyan #00F0FF + teal #00B8C8 jako brand accent.** Maximálně 5 až 10 % plochy. Zbytek dark monochrome.
- ✅ **Reálná data / screenshots** (po dodání od Tomáše).
- ✅ **Citace s reálnými jmény klientů** (Flach, Elegant Dog's Barber, Klub moderního psa).
- ✅ **Mono font na metrikách.** Tabular-nums povinné.
- ✅ **Velký whitespace.** Sekce 96 až 160px vertical padding.
- ✅ **Specifická čísla v copy.** 60 dní, 30 000 Kč, 3,2×.
- ✅ **Czech-first.** Žádné anglické UI prvky kromě brand termínů.
- ✅ **Edge cases polished.** Empty form state, error state, mobile menu open state, loading skeleton.
- ✅ **Hard 1px borders, ne shadows.** Shadows pouze na liquid glass a hover states.
- ✅ **Liquid glass jen na schválených místech** (viz section 7.2).

### 10.3 Test „vypadá to jako AI?"
Před dokončením sekce mentální checkpoint:
1. *Působí to jako template nebo jako custom?*
2. *Z jakého roku to vypadá?* (Cíl: 2026, ne 2021.)
3. *Co je první věc, kterou si návštěvník zapamatuje?* (Cíl: konkrétní číslo nebo větu z copy, ne „ten cyan vzhled".)

Pokud výstup pasuje na popis „typický AI-generated SaaS landing page", refaktoruj.

---

## 11. Accessibility & Performance

### 11.1 Performance targets (per page)
- **Lighthouse Performance ≥ 95** (mobile + desktop)
- **LCP ≤ 1,5s** (Largest Contentful Paint)
- **CLS ≤ 0,05** (Cumulative Layout Shift)
- **INP ≤ 200ms** (Interaction to Next Paint)
- **JS bundle ≤ 120 KB** initial gzip
- **Žádné externí fonty blocking** (self-host via `next/font/google`)

### 11.2 Accessibility (WCAG 2.2 AA)
- Contrast: zkontroluj `--fg-muted` (#A0A0A0) na `--bg` (#0A0A0A) → contrast ratio ≥ 4,5:1 (OK)
- Keyboard navigation: Tab order logický, focus visible s 2px outline `--accent` offset 2px
- Form labels správně napojené (`for`/`id`), error states screen-reader friendly (aria-describedby)
- Reduced motion respect (`prefers-reduced-motion: reduce`)
- Alt texty na obrázcích (nebo `aria-hidden` pokud decorative)
- Skip-to-content link na začátku body
- Semantic HTML: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- Lang attribute: `lang="cs"` na `<html>`

### 11.3 SEO (per page)
- Meta description 155 až 160 znaků, unikátní per page
- Open Graph tags (og:title, og:description, og:image 1200x630, og:url, og:locale "cs_CZ")
- Twitter Card (summary_large_image)
- Canonical URL
- JSON-LD structured data: `Organization` + `Person` (Tomáš) + `LocalBusiness` (s IČO) + `Service` (4 služby)
- `robots.txt` + `sitemap.xml`

---

## 12. File Structure

```
/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Homepage (single scroll page)
│   ├── globals.css          # CSS variables, utilities, animations
│   ├── pripadovky/
│   │   ├── [slug]/
│   │   │   └── page.tsx     # Case study sub-page (MDX)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # Form submission handler
│   └── privacy/
│       └── page.tsx
├── components/
│   ├── hero/                # Phase 1
│   │   ├── hero.tsx
│   │   ├── social-sidebar.tsx
│   │   ├── live-results-card.tsx
│   │   └── hero-stats.tsx
│   ├── services/            # Phase 2
│   │   ├── services-section.tsx
│   │   └── service-card.tsx
│   ├── process/             # Phase 3
│   ├── about/               # Phase 4
│   ├── case-studies/        # Phase 5
│   ├── faq/                 # Phase 6
│   ├── contact/             # Phase 7
│   ├── nav/
│   │   └── nav.tsx
│   ├── footer/
│   │   └── footer.tsx       # Phase 8
│   └── ui/                  # Reusable primitives
│       ├── button.tsx
│       ├── glass-card.tsx
│       ├── magnetic-button.tsx
│       ├── badge.tsx
│       └── stat.tsx
├── content/
│   └── case-studies/        # MDX files
│       ├── flach.mdx
│       ├── elegant-dogs.mdx
│       └── klub-moderniho-psa.mdx
├── lib/
│   ├── utils.ts             # cn() helper, formatters
│   └── validations.ts       # zod schemas
├── public/
│   ├── images/
│   ├── icons/
│   └── og/                  # OG images
├── styles/
│   └── (pokud potřeba)
├── BRIEF.md                 # Original brief (reference)
├── CLAUDE.md                # Tento soubor
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

### 12.1 Naming conventions
- Komponenty: PascalCase (`HeroSection.tsx`, `LiveResultsCard.tsx`)
- Utility funkce: camelCase (`formatMetric.ts`)
- File názvy v `components/`: kebab-case (`hero.tsx`, `social-sidebar.tsx`)
- CSS classes: kebab-case (`glass`, `aurora-bg`, `animate-pulse-dot`)
- CSS variables: kebab-case s `--` prefix (`--accent`, `--glass-bg-1`)

### 12.2 Import order
1. React / Next imports
2. External libraries (gsap, lucide-react, etc.)
3. Internal components
4. Internal utils / lib
5. Types
6. Styles (pokud potřeba mimo Tailwind)

---

## 13. Workflow & Phases

### 13.1 Aktuální fáze
**Phase 1: Project Setup + Hero Section**

### 13.2 Plánované fáze (multi-konverzační build)
1. ✅/⏳ Phase 1: Setup + Hero
2. ⏳ Phase 2: Sticky Nav + Sekce Služby (4 disciplíny)
3. ⏳ Phase 3: Sekce Proces (4 týdny working flow s glass cards)
4. ⏳ Phase 4: Sekce O nás (foto Tomáše, příběh, 3 pillars, Hamr.AI block, badges)
5. ⏳ Phase 5: Sekce Případovky (3 cards s metric overlay, modal popup detail)
6. ⏳ Phase 6: Sekce FAQ (accordion, 5 Q&A)
7. ⏳ Phase 7: Sekce Kontakt + Form backend (Resend, server action)
8. ⏳ Phase 8: Footer (liquid glass pills, social, copyright)
9. ⏳ Phase 9: Case study sub-pages (MDX template)
10. ⏳ Phase 10: Performance, SEO, accessibility, deployment polish

### 13.3 Workflow rules
- **Jedna fáze = jedna konverzace.** Nemíchat fáze.
- **Před generováním kódu v každé fázi:** Claude Code shrne v 5 bodech co dělá + ukáže ASCII layout. Až po schválení píše kód.
- **Po dokončení fáze:** Claude Code spustí `npm run build`, zkontroluje že build pass, zkontroluje Lighthouse score (ideálně), commit message format „Phase X: [popis]".
- **Pokud něco v promptu fáze odporuje CLAUDE.md:** zeptat se, neimplementovat silently.

---

## 14. Common Pitfalls (předcházej těmto)

1. **Hardcoded barvy.** Vždy CSS variables, nikdy `#00F0FF` přímo v komponentě. Důvod: změny brandu se pak dělají na jednom místě.
2. **`max-w-7xl` jako default container.** Default je `max-w-[1920px]` (ultrawide cap).
3. **`bg-cyan-500` z Tailwind palety.** Cyan je brand color, používej `bg-[var(--accent)]` nebo přes Tailwind config alias.
4. **Animace bez `prefers-reduced-motion` checku.** Vždy testovat fallback.
5. **`<form>` bez Server Action handleru.** Nepouštět form bez backendu (Resend setup).
6. **Inline styles místo Tailwind/CSS variables.** Inline jen pro dynamic values (např. JS-calculated).
7. **Komentáře v Czech ne, v Anglictině ano.** Code komentáře EN (širší srozumitelnost), copy a UI text CZ.
8. **`alt=""` na obrázcích bez rozmyslu.** Decorative images mají `alt=""` + `aria-hidden`. Significant images mají descriptive alt.
9. **`className={``}` template strings místo `cn()`.** Vždy `cn()` helper z `lib/utils.ts` pro conditional classes.
10. **Forgotten loading states.** Form submit má disabled state, button má pending state, async data má skeleton.

---

## 15. Když si nejsi jistý

1. **Zkontroluj `BRIEF.md`** v root projektu pro detail copy a obsahu sekcí
2. **Zkontroluj tento `CLAUDE.md`** pro design system a konvence
3. **Pokud konflikt mezi BRIEF a CLAUDE:** CLAUDE.md vyhrává (je novější a živý)
4. **Pokud konflikt mezi promptem fáze a CLAUDE.md:** zeptej se Matyáše, neimplementuj silently
5. **Pokud Matyáš sám sobě protiřečí v prompt fáze a CLAUDE.md:** preferuj prompt fáze (recent intent), ale zmiň konflikt

### 15.1 Conflict check protocol (závazný)

Když nový prompt sahá na existující komponentu / pravidlo / sekci CLAUDE.md, **před prvním řádkem kódu:**

1. Identifikuj všechny rozpory mezi (a) novým promptem, (b) předchozí implementací, (c) CLAUDE.md, (d) sousedními komponentami
2. Vypiš každý rozpor jako otázku s 2-3 variantami a krátkým trade-off
3. Zahrň cascade implications (např. „update SectionEyebrow → cascadne do 6 sekcí")
4. Počkej na odpověď
5. Až po schválení jeď

Cíl: lepší 4 otázky před kódem než 4 refaktory po něm. Platí i v auto mode pokud konflikt má cascade dopad přes víc souborů.

---

**End of CLAUDE.md.**

Last updated: 2026-05. Maintainer: Matyáš (matyas@keepitcool.life).
