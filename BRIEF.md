# Hamr Labs — Web Brief

**Cíl dokumentu:** Kompletní podklad pro redesign webu hamrlabs.cz. Použitelný jako vstup do designerských nástrojů (v0, Lovable, Cursor + design skills, Figma AI plugin, Webflow AI) i jako brief pro lidského UI/UX designera. Obsahuje obsah, brand, design system, anti-AI direktivy a konkrétní výstupní požadavky.

**Status:** v1.1 · květen 2026 · jediný soubor `Hamr Labs.html` (988 řádků, single-file MVP) je referenční verze. Tento brief slouží k jeho **přepracování na produkční web**, ne k jeho doslovnému znovuvyrobení.

**v1.1 changelog:** Korekce color palette. Klient (Tomáš) potvrdil, že **dark + cyan #00F0FF + teal #00B8C8** je schválená brand identita, ne kandidát na výměnu. Sekce 4 (Design System) a sekce 6 (Anti-AI checklist) upraveny. Cesta B (Refined Technical / Dark) je primárně schválený směr. Cesta A (Editorial light) zůstává jen jako historická alternativa.

**Repo:** github.com/HamrCodes/HamrLabs---web

---

## 1. Brand & Positioning

### 1.1 Co Hamr Labs je
Performance marketingová agentura postavená kolem AI workflow. Specializace: **Meta Ads, lead generation, AI obsah, audit & strategie**. Czech-only operace, klienti zatím e-shopy + lokální služby + B2B SMB.

### 1.2 Pro koho web mluví
Primární návštěvník je **majitel/marketing manager české SMB firmy** (e-shop 5–50 M Kč obrat, lokální služba s 1–10 zaměstnanci, nebo regionální B2B), který:
- Zkusil 1–2 agentury a nebyl spokojený (mlha, drahá kreativita bez výsledku, žargon).
- Měsíční mediální rozpočet 30–200 tis. Kč.
- Reaguje na čísla, ne na sliby. Chce vidět ukázky práce a metriky před prvním callem.
- Není tech-naivní, ale taky není performance marketer — chce, aby mu někdo *vysvětlil*, ne *prodal*.

Sekundární cíl: **klient klientů** (interní marketing manager hledající dodavatele), který potřebuje brief web ukázat vedení a obhájit volbu.

### 1.3 Hodnota / proč si Hamr Labs vybrat
1. **Měřitelnost end-to-end.** Tracking stack, server-side události, real-time dashboard 24/7. Žádný pohled "do skleněné koule".
2. **AI jako rychlostní násobič, ne náhrada.** Kreativy, copy varianty, anomálie v datech, segmentace — vše s AI podporou, ale s lidskou kontrolou a brand voicem.
3. **Bez "balíčků".** Žádné fixní 9 990 Kč packages. Spolupráce se škáluje s rozpočtem a fází byznysu.
4. **Český mid-market focus.** Ne enterprise, ne freelance. Sweet spot je firma 5–100 lidí, která ví, že potřebuje růst, ale ne za cenu chaosu.

### 1.4 Co Hamr Labs NENÍ (kontrastní pozicování)
- Není SEO agentura. (Sekundárně ano, ale ne v primárním pitch.)
- Není creative agency / branding studio. (Děláme performance kreativy, ne logo design.)
- Není no-code/web development. (Ne, neumíme ti udělat web.)
- Není enterprise dodavatel. (Pod 30k Kč/měsíc rozpočtu nemá smysl začínat.)

### 1.5 Brand pillars (tři tóny)
Tyto tři vlastnosti definují **každý** copy a design rozhodnutí:

1. **Přímý, ne drzý.** Říkáme co si myslíme. Čísla, ne vzduch. Když něco nefunguje, řekneme to první — ale konstruktivně.
2. **Technologický, ne technický.** AI a data zjednodušují život klienta. Nepoužíváme žargon abychom působili chytře. Vysvětlujeme.
3. **Sebejistý, ne nafoukaný.** Výsledky mluví. Web neflexuje awards a logos roll, ale ukazuje konkrétní data z konkrétních účtů.

### 1.6 Tone of voice — copy guidelines
- **Krátké věty.** Průměr 8–14 slov. Občas jedno slovo jako tečka.
- **Aktivní rod.** "Snížíme CPL." NE: "CPL bude sníženo."
- **Specifická čísla.** "−64 %", "60 dní", "3.2×". NE: "podstatně lépe", "rychle", "několikanásobně".
- **Žádné superlativy.** Ne "nejlepší", "vůdce trhu", "průlomový".
- **Žádné prázdné fráze.** "Pomáháme firmám růst", "Inovativní řešení", "Digitální transformace" — ban.
- **Český jazyk korektní + lehce neformální.** Tykáme. ("Přivedeme ti zákazníky.") Ale gramaticky čistě, žádné "tvůj brand voice".
- **Tečka místo vykřičníku.** "Odpovíme do 24 hodin." Ne "...do 24 hodin!"
- **Trochu sucha / dry wit.** "Bez sklepových reportů." "Ne jen lajky." Není to standup, ale není to ani Adobe brožura.

**Pozitivní reference (voice):** Linear.app, Stripe, Vercel, [Basecamp/37signals](https://37signals.com), Wise — věcné, sebejisté, bez marketingové omáčky.
**Negativní reference (čeho se vyhnout):** typická SaaS agentura ("Empower your brand to thrive in the digital age"), korporátní češtinou napsaný web ("naše společnost se specializuje na poskytování"), generická AI startup copy ("Revolutionizing X with the power of AI").

---

## 2. Information Architecture

### 2.1 Single-page vs multi-page
**Doporučení:** Single-page scroll site + 1–3 sub-pages pro detail.

Sub-pages:
- `/pripadovky/flach`, `/pripadovky/elegant-dog`, `/pripadovky/klub-moderniho-psa` — full case studies (problém / řešení / data / lessons), každá ~600–1200 slov + 3–5 vizuálů.
- `/blog` (pokud bude obsah) — volitelné, nevýznamné ve fázi v1.
- Žádné dedikované `/services`, `/about`, `/contact` jako separátní stránky — vše scroll-anchor na hlavní.

### 2.2 Sekce hlavní stránky (v pořadí)

| # | Anchor | Účel | Klíčový obsah |
|---|--------|------|--------------|
| 1 | `#hero` | Lead/hook + okamžitý důkaz hodnoty | Headline, statistiky, live výsledky card, 2 CTA |
| 2 | `#marquee` (volitelně) | Vizuální dech mezi sekcemi + brand keywords | Meta Ads · Lead Gen · AI Obsah · Performance · ... |
| 3 | `#sluzby` | Co děláme | 4 služby s ikonou, popisem, tagem |
| 4 | `#proces` | Jak pracujeme | 4 týdny / 4 kroky s detailem |
| 5 | `#o-nas` | Důvěra + brand voice | 3 pillars, "Hamr.AI" mascot, about copy, badges |
| 6 | `#pripadovky` | Sociální důkaz | 3 reálné case studies s metrikami → link na detail |
| 7 | `#faq` | Předpřipravené odpovědi na frikční otázky | 5 Q&A (rozpočet, timeline, reporting, scope, onboarding) |
| 8 | `#kontakt` | Konverze | Form (name, firma, email, zájem, zpráva) + socials |
| 9 | `footer` | Navigace, legal, sekundární info | Nav links, social, copyright, Meta Business Partner badge |

### 2.3 Konverzní cesta
1. **Hero** uchopí pozornost (headline + okamžité číslo).
2. **Sluzby + Proces** odpoví "co dostanu a jak to bude probíhat".
3. **O nás** dodá důvěru přes tone + pillars.
4. **Případovky** dodá důkaz přes data.
5. **FAQ** odbouchne frikční otázky (rozpočet je nejvíc).
6. **Kontakt** je konverzní bod.

CTA hierarchie: **Primary "Chci výsledky → Kontakt"** (nav + hero + footer). Secondary "Ukázky práce → Případovky" (hero, jako podpora).

---

## 3. Obsah (Copy Deck — Czech, finální)

> **Důležité:** Tento copy je **zkontrolován a schválen**. Designer/AI nástroj ho NEMÁ přepisovat, jen umisťovat. Pokud potřebuješ víc copy (např. CTA varianty pro A/B test), přidej, ale neměň existující.

### 3.1 Navigace (sticky top bar)
- **Logo:** Hamr Labs (s hammer SVG iconem)
- **Links:** Služby · O nás · Případovky · FAQ
- **CTA button:** Kontakt

### 3.2 Hero
- **Eyebrow:** AI marketing agency · Česká republika
- **Headline (h1, large display):**
  > Přivedeme ti zákazníky.
  > Ne jen lajky.
- **Subhead:** Meta reklamy, lead generation a AI obsah pro firmy, které chtějí výsledky — ne omáčku.
- **CTA primary:** Chci výsledky →
- **CTA secondary:** Ukázky práce
- **Statistiky (3 metriky):**
  - −64 % · Průměrný pokles CPL
  - 60 dní · Do prvních výsledků
  - 3× · Průměrné ROAS
- **Live results card (vpravo / pod):**
  - Badge: Live výsledky · Q1 / 26
  - −64 % CPL pokles za 60 dní
  - ROAS 3.2×
  - Leads / měsíc +184 %

### 3.3 Marquee (volitelný divider)
```
Meta Ads · Lead Generation · AI Obsah · Performance Marketing · Hamr Labs · [repeat]
```

### 3.4 Služby
- **Eyebrow:** 01 — Co děláme
- **Title:** Naše služby
- **Lead:** Čtyři disciplíny. Jeden cíl — měřitelný růst. Žádné měsíční reporty, kde se hraje na barvičky.

| Služba | Description | Tag |
|--------|-------------|-----|
| **Meta Ads** | Kampaně na Facebooku a Instagramu od struktury přes kreativy až po škálování. | Performance |
| **Lead Generation** | Systémy na získávání kvalifikovaných leadů. Data místo dojmů. | Pipeline |
| **AI Obsah** | Kreativy, karusely, copy a videa s AI — rychleji, s přesným brand hlasem. | Creative |
| **Audit & Strategie** | Kompletní audit Meta účtu. Najdeme co nefunguje, navrhneme co bude. | Strategy |

### 3.5 Proces
- **Eyebrow:** 02 — Proces
- **Title:** Jak pracujeme
- **Lead:** Čtyři týdny od podpisu k prvním optimalizovaným kampaním. Žádný kouř, žádné PowerPointy navíc.

**Týden 1 — Onboarding**
Briefing, přístupy do Business Manageru, nastavení projektu, sdílených dokumentů a komunikačních kanálů. Definujeme očekávání a KPI.
- Onboarding call (60 min)
- Audit přístupů a domén
- Setup tracking stacku
- Brand & tone přehled

**Týden 2 — Průzkum**
Analýza účtu, konkurence a unit economics. Vychází z čísel, ne z domněnek. Výstupem je strategická mapa kampaní.
- Account audit (12 měsíců)
- Competitor benchmark
- Unit economics & LTV
- Strategy deck

**Týden 3 — Setup**
Tvorba kreativ, nastavení kampaní, tracking a server-side události. Vše napojené, vše měřené, vše připravené k testování.
- Kreativy & varianty
- Kampaně + audiences
- Pixel + CAPI
- Reporting dashboard

**Týden 4+ — Výsledky**
Reporty, weekly optimalizace, škálování vítězných kreativ a struktur. Tým je k dispozici v Slacku — odpovídáme v hodinách, ne dnech.
- Weekly call & report
- Creative refresh
- Škálování vítězů
- Slack support

### 3.6 O nás
- **Eyebrow:** 03 — O nás
- **Title:** Hamr Labs

**Tři pillars (s číslovkami 01 / 02 / 03):**

1. **Přímý, ne drzý** — Říkáme co si myslíme. Čísla, ne vzduch. Když něco nefunguje, řekneme to první.
2. **Technologický, ne technický** — AI a data používáme k zjednodušení života klienta. Bez žargonu, bez vyhýbavých termínů.
3. **Sebejistý, ne nafoukaný** — Výsledky mluví za sebe. Naše práce je dělat čísla — ne se prezentovat.

**Hamr.AI mascot block:**
> **HAMR.AI** — náš interní asistent
> Trénovaný na všech našich kampaních. Pomáhá nám hledat patterny, které člověk přehlédne.

**About paragraph (right column or stacked):**
> Jsme malý tým performance marketérů a inženýrů, kteří uvěřili, že AI nezmění marketing tím, že nahradí lidi — ale tím, že kvalitní práci umožní dělat rychleji a transparentněji.
>
> Pracujeme s e-shopy, službami a místními firmami v Česku. Bez „balíčků za 9 990 Kč", bez sklepových reportů, bez slibů, které nejdou splnit. Vše, co děláme, je vidět v Business Manageru a v reportingu, ke kterému máte přístup 24/7.

**Pull quote (klient nebo metric callout):**
> "CPL kleslo o 64 %. Za 60 dní. Přestali jsme střílet naslepo."

**Badges row:**
- Meta Business Partner (s oficiální značkou)
- AI-Powered
- Czech Republic

### 3.7 Případové studie
- **Eyebrow:** 04 — Případovky
- **Title:** Případové studie
- **Lead:** Tři aktuální projekty. Bez vybarvených grafů a fiktivních metrik — všechno z Business Manageru.

**Case 1: Flach s.r.o.**
- Tag: Stavebnictví
- Industry: Rekonstrukce · Olomoucký kraj
- Body: Rebuild Meta Ads kampaně. Nové kreativy, regionální targeting a tracking od piky. Klient přestal platit za leady mimo svozovou oblast.
- Metric: **−58 %** Cost per lead za 90 dní

**Case 2: Elegant Dog's Barber**
- Tag: Služby
- Industry: Psí grooming · Brno
- Body: Setup Pixelu, server-side události a struktura kampaní pro lokální službu. Z chaotické historie čistý profil, který škáluje.
- Metric: **+3.2×** ROAS oproti baseline

**Case 3: Klub moderního psa**
- Tag: E-commerce
- Industry: E-shop · ČR + SK
- Body: AI audit, PDF report s konkrétními doporučeními a navazující Python/pandas analýza historických dat. Implementace v dalším sprintu.
- Metric: **+41 %** Konverzní poměr e-shopu

### 3.8 FAQ
- **Eyebrow:** 05 — FAQ
- **Title:** Časté dotazy
- **Lead:** Pět věcí, na které se ptá většina klientů ještě před prvním callem. Pokud nenajdete odpověď, napište nám do DM.

**Q1: Jak rychle uvidíme výsledky?**
První signály z účtu typicky 7–14 dní po spuštění kampaní. Stabilní snížení CPL a růst ROAS pak v horizontu 30–60 dní, kdy už máme dostatek dat na optimalizaci a škálování vítězných kreativ.

**Q2: S jakým minimálním rozpočtem pracujete?**
Doporučený mediální rozpočet startuje na 30 000 Kč / měsíc, abychom měli statisticky relevantní data pro testování. Pod tuto hranici typicky nedoporučujeme začínat — výsledky by byly nečitelné.

**Q3: Zahrnuje spolupráce i tvorbu obsahu?**
Ano. Kreativy, statické vizuály, karusely i video formáty děláme in-house s podporou AI nástrojů. Pracujeme s vaším brand voicem a vizuálním systémem, ne proti nim.

**Q4: Jak probíhá onboarding?**
První týden: briefing, audit přístupů, nastavení tracking stacku a sdílených dokumentů. Druhý týden: hluboká analýza účtu, konkurence a unit economics. Třetí: setup kampaní a kreativ. Detail najdete v sekci „Jak pracujeme".

**Q5: Jak reportujete výsledky?**
Týdenní krátký report v Loomu nebo Slacku + měsíční reportingový dashboard s KPI, do kterého máte přístup 24/7. Žádné 30stránkové PDF, které nikdo nečte.

### 3.9 Kontakt
- **Eyebrow:** 06 — Kontakt
- **Title (2 lines):**
  > Napiš do DM.
  > Odpovíme do 24 hodin.
- **Lead:** Stručný brief stačí. Pošleš firmu, rozpočet a co řešíš — vrátíme ti návrh, jak na to bychom šli my.

**Form fields:**
| Label | Type | Placeholder | Required |
|-------|------|-------------|----------|
| Jméno | text | Jan Novák | ✓ |
| Firma | text | Hamr Labs s.r.o. | — |
| E-mail | email | jan@firma.cz | ✓ |
| Zájem o | select | Meta Ads / Lead Generation / AI Obsah / Kompletní spolupráce / Audit | — |
| Zpráva | textarea | Pár vět o tom, co řešíš a jaký je rozpočet. | — |

**Submit button:** Odeslat zprávu →
**Success state:** Odesláno ✓ (button text change, 2.2s, pak reset)

**Social row:**
- Instagram · @hamrlabs · https://instagram.com/hamrlabs
- Facebook · /HamrLabs · https://facebook.com/HamrLabs

### 3.10 Footer
**Brand block:**
- Logo + "Hamr Labs"
- Tagline: AI marketing agentura. Meta Ads, lead generation a AI obsah pro firmy, které měří všechno.
- Meta Business Partner badge

**Nav column (h5: Navigace):** Služby · Jak pracujeme · Případovky · FAQ · Kontakt

**Social column (h5: Social):** Instagram @hamrlabs · Facebook /HamrLabs · E-mail (DM)

**Footer bottom:**
- © 2026 Hamr Labs · Česká republika
- Brand Guidelines v1.0 · 2026

---

## 4. Design System

### 4.1 Brand direction (potvrzeno klientem)

**Schválená vizuální identita Hamr Labs:**
- **Tmavé pozadí** #0A0A0A jako primární surface
- **Cyan #00F0FF + teal #00B8C8** jako brand accent (rozeznávací znak Hamr Labs)
- **Off-white #F5F5F5 + frost #F0FAFA** pro text a sekundární surfaces

Tahle paleta je **brand-correct**, ne template-default. Cyan/teal je rozhodnutí klienta (Tomáš) a Hamr Labs ho dlouhodobě používá. Naše práce není ji měnit, ale **executovat ji tak ostře, aby se nepletla s genericickými AI/SaaS šablonami.**

### 4.1.1 Jak udělat dark + cyan / teal a NEvypadat jako šablona

Riziko: dark + cyan + glassmorphism + Inter = pattern, který produkují v0, Lovable a Cursor v 70 % outputů. Aby Hamr Labs vypadal jako záměr a ne jako defaultní generování:

1. **Žádný cheap glassmorphism.** Pokud glass card, tak s **ostrým 1px inset borderem v cyan, hard outer shadow** a **rich background za ním** (gradient, mesh, screenshot). Nikdy glass nad flat barvou, vypadá špinavě.
2. **Cyan jen jako akcent**, ne jako fill. Maximálně 5 % plochy v cyan. Pozadí černá, text white, cyan pro highlights, CTA borders, metric callouts.
3. **Mono font pro display** (JetBrains Mono / Berkeley Mono / Departure Mono) místo generického Inter + Inter. Tahle volba okamžitě signalizuje "engineering", ne "agency template".
4. **Audiowide ven.** Z v1 HTML vyřadit. Audiowide = 2010s arcade vibe, datovaný a v marketing agentuře vypadá hloupě.
5. **Reálné screenshots** (Meta Ads Manager, Looker dashboard, Slack thread) jako hero/section asset. Žádný abstract animated SVG wave.
6. **Reduce micro-interactions na 1 až 2 signature pohyby.** V1 mělo cursor glow + wave canvas + reveal + counter + hover. Příliš. Drž counter + scroll reveal. Zbytek pryč.
7. **Asymetrický grid**, intentional whitespace, žádný "3 cards pod heroem".

### 4.1.2 Cesta A (alternativa, light editorial)
Pouze historicky, pro případ že by klient otočil směr. Pokud by Hamr Labs šel proti dosavadní brand identitě, defaultní volba by byla:
- Světlé pozadí + jediný warm akcent (vermilion / signal yellow)
- Big editorial typography (serif display)
- Žádný cyan

**Tato cesta NENÍ aktuálně schválená.** Default je 4.1.1 (dark + cyan refined).

### 4.2 Color palette (schválená brand identita)

| Token | Hex | Role |
|-------|-----|------|
| `--black` | `#0A0A0A` | Primary background, hero, většina ploch |
| `--dark` | `#1E1E1E` | Sekundární surface, sekce vsuvky |
| `--grey` | `#2D2D2D` | Cards, elevated surfaces, third tier surface |
| `--white` | `#F5F5F5` | Primary text na dark, body, headings |
| `--frost` | `#F0FAFA` | Frost-tinted off-white, lehký nádech cyan pro headings |
| `--cyan` | `#00F0FF` | Primary brand accent: eyebrows, CTA borders, metric callouts, links |
| `--teal` | `#00B8C8` | Sekundární accent, gradient pair s cyan pro buttony, deeper cyan tone |

**Alpha varianty (pro borders, subtle accents):**

| Token | Value | Role |
|-------|-------|------|
| `--w65` | `rgba(245,245,245,0.65)` | Secondary text (labels, descriptive) |
| `--w40` | `rgba(245,245,245,0.40)` | Tertiary text |
| `--w15` | `rgba(245,245,245,0.15)` | Borders, dividers na dark |
| `--w08` | `rgba(245,245,245,0.08)` | Subtle borders |
| `--cyan15` | `rgba(0,240,255,0.15)` | Light cyan overlays, glass tint, badges |
| `--cyan08` | `rgba(0,240,255,0.08)` | Subtle cyan accents |

**Klíč:** Cyan #00F0FF a teal #00B8C8 jsou Hamr Labs brand. Nepřepisovat. Použít je **jako akcent, ne jako fill**, maximálně 5 až 10 % plochy. Většina webu je černá + bílá, cyan je signal.

**Pravidla použití:**
- Hero text gradient (lehký cyan → teal → frost) je OK pro 1 keyword v headline, ne pro celý text.
- Primary CTA: button s cyan/teal gradient + black text. Hover: brightness 1.1.
- Sekundární CTA: transparent + cyan border + cyan text.
- Metrics (−64 %, 3.2×, +184 %): cyan nebo white, mono font.
- Eyebrows ("01 / Co děláme"): cyan, mono, uppercase, 11 až 12px.
- Borders mezi sekcemi a cards: `--w08` nebo `--w15`. **Žádné cyan borders všude**, jen na focused / hover stavech.
- Live data card / pull quote: subtle `--cyan08` background OR `--w08` border, ne plný cyan fill.

**Inverzní light sekce (volitelné):** Pokud by se měla objevit jedna světlá sekce pro kontrast (např. "Letter from CEO" nebo testimonial), invert na `--white` bg + `--black` text + same `--cyan` accent. Použít sparingly, max 1× na celé stránce.

### 4.3 Typografie (pro dark + cyan direction)

| Role | Font | Weights | Velikosti (desktop) |
|------|------|---------|----------------------|
| **Display** | **JetBrains Mono Bold** nebo **Berkeley Mono Bold** | 600, 700, 800 | h1: 80 až 140px, h2: 56 až 80px, h3: 28 až 40px |
| **Body** | **Inter Tight** nebo **Söhne** | 400, 500 | 16 až 17px, line-height 1.55 |
| **Mono / Metrics** | Same as display, JetBrains Mono | 500, 700 | Stats: 48 až 80px, inline: 13 až 14px |
| **Eyebrow / Label** | Mono, uppercase, 11 až 12px, tracking 0.08 až 0.10em, cyan color |

**Free fallback stack (default, žádný licenční budget):**
- Display + Metrics: **JetBrains Mono** (Google Fonts free)
- Body: **Inter Tight** (Google Fonts free) nebo **Geist** (Vercel, free)

**Premium upgrade pokud bude budget:**
- Display: **Berkeley Mono** (~$95 osobní, ~$300 firma) místo JetBrains
- Body: **Söhne** (~$300/rok) místo Inter Tight

**Ne:**
- **Audiowide** (z v1), 2010s arcade vibe, vypadá jako template, ven.
- Orbitron, Press Start 2P, Major Mono Display, všechno sci-fi retro.
- Space Grotesk samostatně bez mono páru, overused v AI generování.
- Inter + Inter combo (generic).

**Hierarchie pravidla:**
- Maximální 2 fonty na page (mono pro display + mono pro metrics může být stejný font, nebo mono pro display + sans pro body).
- Headlines mohou jít **až do 140px+** na desktopu, technical/data scale (větší než typický SaaS, menší než editorial serif).
- Body 16 až 17px, line-height 1.55. Čitelnost na dark bg má větší dosah než na light, drž minimum 16px.
- Tracking: 0 na body, −0.02em až −0.04em na mono display (tight = confident, technical).
- **Cyan barva jen na eyebrows, metrics, links, hover states.** Body text = white (#F5F5F5). Headings = white nebo frost (#F0FAFA). Cyan headline jen pro 1 keyword v hero ("[lajky]" v cyan).

### 4.4 Layout & Grid

- **Container:** 1200px max, padding 24px (mobile) / 48px (desktop).
- **12-col grid** s 24px gutter, ale **používat asymetricky**. Hero text 7-col, metric card 4-col + offset. Ne každý section centered.
- **Section padding:** 96–160px vertical desktop, 64–96px mobile. **Velký dech**.
- **Vertical rhythm:** 8px base. Všechno spacing v násobcích (8, 16, 24, 32, 48, 64, 96).

### 4.5 Komponenty

**Buttons**
- Primary: solid `--accent` background, `--accent-ink` text, 14px font, padding 14×22, border-radius **2–4px** (ne 8+, ne fully rounded). Hover: 4% darker bg, žádný transform jump.
- Secondary: transparent, 1px `--ink` border, `--ink` text. Hover: bg `--ink`, color `--paper`.
- Žádné neon glow shadows. Žádný gradient na buttonu.

**Cards (services, case studies)**
- 1px solid `--rule` border, no shadow, no glass effect.
- Padding 32px.
- Hover: `--accent` border + `2px` translateY-up. Jemně.

**Metric callouts (statistiky)**
- Mono font, číslo **velké** (48–80px), label malé.
- Žádný card background. Stojí volně na grid.

**Form inputs**
- 1px `--rule` border, 0 border-radius nebo 2px.
- Focus: border `--accent`, no box-shadow ring (nebo extrémně subtle).
- Label nad inputem, ne floating, ne placeholder-as-label.

**FAQ accordion**
- Plain text, žádné cards. Divider mezi položkami 1px `--rule`.
- Chevron rotuje 90° při expand. Plain icon, no fill.

**Nav**
- Sticky, ale **bez backdrop-blur na scroll**. Místo toho: solid `--paper` bg s 1px bottom border `--rule` po scroll past hero. Cleaner, ne-AI.

### 4.6 Imagery & Assets

**Co MÁ být na webu:**
- **Reálné UI screenshoty** Meta Ads Managera, Looker dashboardu, Slack threadu (mockovat citlivá data, ale zachovat strukturu). Tohle je **největší odlišovatel** — agentury 99 % toto nedělají.
- **Pull quotes z reálných klientů** (s jménem firmy, ne anonymně).
- **Hand-drawn / illustrované diagramy procesu** (Excalidraw style) místo SVG icon setu.
- **1 hero asset:** buď **velká fotografie laptopu s Meta Adsem** (high-res, custom shot, ne stock), nebo **rendered 3D objekt** (Spline-style), nebo **typografická hero** bez obrazku.

**Co NEMÁ být:**
- ❌ Stock fotografie z Unsplash (handshakes, business meetings, glowing screens).
- ❌ Generic SVG illustrations (Storyset, unDraw, Notion-style cute characters).
- ❌ Heroicons / Lucide ikony all-over (OK jako utility v UI, ne jako brand prvek).
- ❌ Cyan-purple gradient blobs.
- ❌ Animated wave SVG backgrounds.
- ❌ Floating "particles" / mesh gradients.

**Ikony:**
- Pokud potřeba, použij **vlastní 1.5px stroke set** s konzistentním grid (24px). Vyber jeden styl a držet ho. Alternativa: **úplně bez ikon**, jen typografie a čísla.

### 4.7 Motion & Interaction

**Pravidla:**
1. **Méně je víc.** 1–2 signature animace, ne 10.
2. **Žádné parallax**, žádné scroll-jacking, žádné horizontal scroll sections (pokud není 100% intentional).
3. **Žádný cursor glow / cursor follower.** Defaultní kurzor.
4. **Žádný animated background canvas.**

**Doporučené pohyby:**
- **Counter animation na metrics** při scroll into view (1.2s, ease-out-expo). Tohle JEDNO si nech — funguje a posiluje "data-first" pozici.
- **Subtle fade-up reveal** (12px translate + opacity) na sekce při scroll. Stagger 50ms. Respektuj `prefers-reduced-motion`.
- **Hover na cards:** translateY(-2px) + border color change. 200ms ease.
- **Page transitions** (pokud sub-pages): instant nebo crossfade 200ms. Žádné View Transitions API gimmicky.

### 4.8 Responsive

- **Mobile-first.** Design pro 375px width, scale up.
- Breakpoints: 640 / 768 / 1024 / 1280.
- **Hero na mobile:** headline scale down na 40–48px (ne menší), CTA full-width, statistiky stack vertikálně.
- **Nav na mobile:** hamburger → full-screen drawer s velkou typografií (28px+ links). Ne malé text menu.
- **Touch targets:** minimum 44×44px.

### 4.9 Dark mode
**Návrh:** **Žádný dark mode toggle.** Web je defaultně světlý s tmavými sekcemi pro kontrast. Toggle = další UI prvek + dvojnásobná údržba, bez business value. Drž jeden mode, udělej ho perfektně.

---

## 5. Technické požadavky

### 5.1 Stack (doporučení)

| Vrstva | Volba | Důvod |
|--------|-------|-------|
| **Framework** | Next.js 16 (App Router) | SSR/SSG, image optimization, fonts, dobrá DX |
| **Hosting** | Vercel | Default volba, integrace s Next.js, edge cache |
| **Styling** | Tailwind CSS v4 + CSS variables pro tokens | Rychlé prototypování + brand tokens v jednom |
| **CMS pro case studies** | MDX v repu | Stačí, neplať za Contentful |
| **Form backend** | Resend + Vercel Function | Email notifikace, žádný DB |
| **Analytics** | Vercel Analytics + Plausible | Privacy-first, GDPR-friendly |
| **Forms anti-spam** | Vercel BotID | Native integrace |

### 5.2 Performance targets
- **Lighthouse Performance ≥ 95** (mobile + desktop).
- **LCP ≤ 1.5s** (Largest Contentful Paint).
- **CLS ≤ 0.05**.
- **JS bundle ≤ 120 KB** initial gzip.
- **Žádné externí fonts loaded blocking** — self-host nebo `next/font`.

### 5.3 SEO & Meta
**Chybělo ve v1, MUSÍ být v produkční verzi:**
- Meta description (155–160 znaků). Návrh: *"Hamr Labs je česká AI marketing agentura. Meta Ads, lead generation, AI obsah a audit pro e-shopy a služby. CPL pokles o 64 % za 60 dní."*
- Open Graph tags (og:title, og:description, og:image 1200×630, og:url).
- Twitter Card (summary_large_image).
- Canonical URL.
- JSON-LD structured data: `Organization` + `LocalBusiness` (s adresou, IČO) + `Service` (4 služby).
- `robots.txt` + `sitemap.xml`.
- Czech `lang="cs"` na html.

### 5.4 Accessibility (musí splnit)
- WCAG 2.2 AA contrast (zkontroluj zejména `--muted` na `--paper`).
- Keyboard navigation funkční (Tab order, focus visible).
- Form labels správně napojené (`for`/`id`), error states screen-reader friendly.
- Reduced motion respect (`prefers-reduced-motion`).
- Alt texty na obrázcích.
- Skip-to-content link.

### 5.5 Privacy / GDPR
- Cookie banner — minimalistický, pokud budou cookies. Vercel Analytics + Plausible bez cookies → můžeš se banneru vyhnout.
- Privacy policy stránka (`/privacy`) + odkaz v footeru.
- Form data flow: submit → Resend (transactional email do Hamr inboxu) → opcionálně Notion/Airtable jako CRM log. Žádné storage bez consentu.

### 5.6 Formulářová logika
**Současný stav (v1):** Form je client-side only, "Odesláno ✓" je fake confirmace. **MUSÍ se opravit.**

**Cílový flow:**
1. Submit → Vercel Server Action.
2. Validace (zod schema): email format, name min 2 znaky, required fields.
3. Spam check (Vercel BotID + honeypot field).
4. Pokud OK: Resend pošle email na `hamr@hamrlabs.cz` (nebo configurovaný) + auto-reply na uživatele.
5. Pokud chyba: inline error pod fieldem.
6. Success state: real confirmation card "Díky, ozveme se do 24 h. — Tým Hamr Labs", ne jen button text swap.

### 5.7 Analytika & konverze
- **Vercel Analytics** (page views, top pages).
- **Plausible** (UTM tracking, kampaně).
- **Conversion event** = form submit. Trackovat zvlášť (Plausible custom event "Contact Submit").
- **Meta Pixel + CAPI**, pokud Hamr bude dělat retargeting na vlastní web. Add later, není nutné v MVP.
- **Žádné GA4 ve výchozím stavu** (kvůli GDPR cookie banneru — pokud není nutné, vyhneš se mu).

---

## 6. Anti-AI Checklist — Co dělat / co NE

Tahle sekce je pro **AI design nástroje** (v0, Lovable, atd.). Když používáš tenhle brief jako prompt, **explicitně instruuj nástroj** těmito direktivami:

### 6.1 NE-DĚLEJ (red flags)
- ❌ **Purple / pink / violet gradients.** Generic SaaS palette. Cyan/teal je brand, purple ne.
- ❌ **Cheap glassmorphism**, frosted blur cards bez ostrého borderu, nad flat barvou. Pokud glass card, tak s 1px cyan inset, hard outer shadow, a rich background za ním.
- ❌ **Centered hero s velkým gradient text na celém H1.** Gradient jen na 1 keyword, ne na celé větě.
- ❌ **3-column features grid s ikonkami.** Najdi jiný layout (2x2 matrix, asymetrický split, vertikální stack s rules).
- ❌ **"Trusted by" logo grid** s generickými logy. Pokud má Hamr klienty s reálnými logy, OK. Jinak ven.
- ❌ **Floating gradient blobs / mesh backgrounds** (Stripe-clone effect).
- ❌ **Animated number counters** ve více než JEDNÉ sekci.
- ❌ **Cursor follower / cyan glow following mouse.** Drop, příliš template.
- ❌ **Particles / animated dots background.**
- ❌ **Animated SVG wave canvas v heroi.** V1 to měl, ven, příliš v0/Lovable default.
- ❌ **Hero illustration** (3D abstract shapes, Spline scenes generic).
- ❌ **Audiowide / Orbitron / Press Start font.** Datovaný sci-fi vibe.
- ❌ **Generic font kombo Inter + Inter.** Použij mono pro display + Inter Tight pro body.
- ❌ **Lorem ipsum / generic copy.** Veškerý copy je v sekci 3 tohoto briefu, používat doslovně.
- ❌ **Smooth scroll sections s parallax obrázky.**
- ❌ **"Get started" / "Sign up" CTAs.** CTA copy je "Chci výsledky →", "Domluvit hovor", "Kontakt".
- ❌ **Cyan jako fill barvy** (cyan pozadí, cyan sekce, cyan buttony jako fill). Cyan je signal, max 5 až 10 % plochy.

### 6.2 DĚLEJ (markers of quality)
- ✅ **Asymetrický layout.** Hero text není centered, je left-aligned with offset. Live data card v offsetu vpravo.
- ✅ **Mono display typography scale.** JetBrains Mono / Berkeley Mono 80 až 140px na hero, technical confidence.
- ✅ **Cyan #00F0FF + teal #00B8C8 jako brand accent.** Maximálně 5 až 10 % plochy. Zbytek black + white monochrome.
- ✅ **Reálná data / screenshots.** Meta Ads Manager mock, dashboard mock, screenshot Looker s anonymizovanými daty.
- ✅ **Citace s reálnými jmény klientů** (Flach, Elegant Dog's Barber, Klub moderního psa).
- ✅ **Mono font na metrikách.** −64 % v JetBrains Mono vypadá vážně, tabular-nums povinné.
- ✅ **Velký whitespace.** Sekce 96 až 160px vertical padding na dark bg.
- ✅ **Specifická čísla v copy.** 60 dní, 30 000 Kč, 3.2×. Žádné "rychle", "více".
- ✅ **Czech-first.** Žádné anglické UI prvky kromě brand termínů (Meta Ads, ROAS, CPL, ROI).
- ✅ **Edge cases polished.** Empty form state, error state, mobile menu open state, loading skeleton.
- ✅ **One signature interaction.** Vyber JEDNU, counter na metrics + subtle scroll reveal. Ne magnetic cursor + counter + glow + wave + parallax.
- ✅ **Hard 1px borders, ne shadows.** Borders v `--w08` nebo `--w15` na dark, cyan border jen na hover/focus.
- ✅ **Live data feel.** Pulsing dot u "Live výsledky", real-time tabular data, ticker / marquee s keywords.

### 6.3 Test "vypadá to jako AI?"
Před deploy ukázat 3 lidem (ideálně 1× designer, 1× non-tech, 1× potenciální klient) a zeptat se:
1. *Působí to na tebe jako template nebo jako custom?*
2. *Z jakého roku ten web vypadá?* (Cíl: 2026, ne 2021.)
3. *Co je první věc, kterou si pamatuješ?* (Cíl: konkrétní číslo nebo větu z copy, ne "ten cyan vzhled".)

Pokud někdo řekne "vypadá to jako [SaaS X]" — refactor.

---

## 7. Referenční weby (pro inspiraci, ne kopírování)

### 7.1 Cesta A (Editorial)
- **stripe.com/press** — typography scale, density, confidence.
- **linear.app** — copy, restraint, single accent.
- **vercel.com/blog** — magazine layout, real screenshots, editorial.
- **basecamp.com** — opinionated copy, anti-template positioning.
- **mschf.com** — radical layout, but TOO radical pro B2B (sleduj jen pro vibe).
- **wise.com** — clean, číselná data, multi-color accent (kdyby chtěl víc barev).

### 7.2 Cesta B (Technical / Dark refined)
- **bun.sh** — dark + signal color + mono + tech aesthetic, ale ne AI generic.
- **railway.app** — gradient ale custom, dark done right.
- **tailwindcss.com** (homepage) — dark sections, code snippets, restrained.
- **plausible.io** — anti-corporate, opinionated dark.

### 7.3 Marketing agentury, které NEvypadají jako AI
- **basicagency.com** — editorial layout, big type, restraint.
- **manual.is** (defunct, archive.org) — editorial agency style.
- **studiothomson.com** — typographic discipline.
- **instrument.com** — case study depth.

### 7.4 Czech context
- **kentico.com** (homepage, recent redesign) — domácí kvalita.
- **livesport.eu** — czech B2B done well.
- **productboard.com** — czech founder, global polish.

---

## 8. Deliverables & Milestones

### 8.1 Co designer/AI nástroj má dodat (v tomto pořadí)

**Phase 1 — Design exploration** (1 týden)
- 2 design směry (Cesta A i B), každý jako Figma board nebo HTML mockup.
- Pouze hero + 1 podsekce. Schvalovaný rozhodovací moment.

**Phase 2 — Full design** (2 týdny)
- Schválený směr rozpracovaný do všech 9 sekcí + 1 case study sub-page.
- Mobile + desktop.
- Component library v Figma (tokens, types, buttons, cards, forms).

**Phase 3 — Implementace** (2–3 týdny)
- Next.js 16 build (viz sekce 5.1).
- Vercel deployment.
- Form backend (Resend).
- Analytics setup.
- SEO meta complete.
- Lighthouse audit pass.

**Phase 4 — Launch & iterate** (ongoing)
- Domain switch (hamrlabs.cz → Vercel).
- Sledování konverze první 2 týdny.
- A/B test hero headline (pokud traffic dovolí).

### 8.2 Co Hamr/Matyáš dodá

- [ ] Doménu hamrlabs.cz (nebo jiná) s DNS přístupem.
- [ ] Resend API key (nebo libovolný transactional email provider).
- [ ] Vercel team access.
- [ ] Reálné screenshots z Business Manageru pro case studies (3× klient, redacted).
- [ ] Logo soubory ve vektoru (současný hammer SVG).
- [ ] Meta Business Partner badge oficiální.
- [ ] Privacy policy text (může být generický template, ale schválený).
- [ ] IČO + adresa pro footer + structured data.

### 8.3 Co je explicitně out-of-scope (v1)

- Blog / článková sekce.
- Multilingual (EN verze).
- Klient portal / login.
- Cookie consent banner (pokud Plausible + bezcookies analytics).
- A/B testing infrastructure.
- Chatbot widget.
- Booking / Calendly embed (možná v2).

---

## 9. Použití tohoto briefu

### 9.1 Pro AI design nástroje (v0 / Lovable / Cursor)

Doporučený prompt-skeleton:

> Postavme produkční web pro českou AI marketingovou agenturu Hamr Labs.
>
> Brief je v souboru BRIEF.md. **Drž se ho přesně.** Veškerý copy je v sekci 3, používej ho doslovně (Czech). Design system v sekci 4, brand colors jsou **dark + cyan #00F0FF + teal #00B8C8** (schválené klientem, neměnit). Anti-AI direktivy v sekci 6, nedělej nic, co je tam označené.
>
> Stack: Next.js 16 App Router, Tailwind v4, MDX pro případovky, Resend pro formulář.
>
> Začni hero sekcí. Předtím, než budeš generovat kód, ukaž mi 2 layoutové varianty hero v ASCII / mockupu a nech mě vybrat.

### 9.2 Pro lidského designera (Figma)

- Začni s **sekcí 3 (copy)** jako truth source. Žádný lorem ipsum.
- **Sekce 4 (design system)** je závazná — barvy, fonty, spacing.
- **Sekce 6 (anti-AI checklist)** je tvůj review checklist před každým review meetingem.
- **Sekce 7 (reference)** = mood-board start, ne template-source.

### 9.3 Pro programátora

- **Sekce 5 (technical)** je závazná — stack, performance, SEO, a11y.
- **Form behavior v 5.6** je MUSÍ-implementovat. Současný "Odesláno ✓" fake je ne-go pro produkci.
- **Performance targets v 5.2** — měřit před každým merge to main.

---

## 10. Otevřené otázky (k rozhodnutí před startem)

1. ~~Cesta A vs B?~~ **Vyřešeno v1.1:** Dark + cyan/teal brand identita potvrzena klientem (Tomáš). Cesta B (refined technical dark).
2. ~~Akcent barva?~~ **Vyřešeno v1.1:** Cyan #00F0FF + teal #00B8C8 (Hamr Labs brand).
3. **Display font budget?** Default free: JetBrains Mono (display + metrics) + Inter Tight (body). Premium upgrade ($95 osobní / $300 firma): Berkeley Mono pro display. Schválit budget.
4. **Real screenshots z Meta Ads Manager** — máš permission od klientů (Flach, Elegant Dog's, Klub moderního psa) na použití dat (anonymizováno)? **Tohle je největší trust signal**, vyplatí se si je vyžádat.
5. **Doména** — hamrlabs.cz, hamrlabs.com, hamr-labs.cz? Co je registrované?
6. **Tým ve fotce nebo bez foto?** "Malý tým performance marketérů a inženýrů" — kolik lidí, ukázat tváře, nebo držet anonymitu?
7. **Pricing transparentnost?** Současný web má jen "minimum 30 000 Kč/měsíc" v FAQ. Chceš tabulku tiers, nebo "talk to us"?
8. **Blog / publishing roadmap?** Pokud ano, sub-page `/blog` v Next 16 MDX. Pokud ne, footer odkaz na LinkedIn článkový kanál.

---

## Appendix A — Glossary

| Pojem | Definice (pro non-marketer čtenáře briefu) |
|-------|--------------------------------------------|
| **CPL** | Cost per Lead — kolik stojí získat jeden lead. |
| **ROAS** | Return on Ad Spend — kolik vrátí v tržbě každá utracená koruna. ROAS 3× = 3 Kč tržba na 1 Kč v reklamě. |
| **CAPI** | Conversions API — server-side event tracking Meta, doplňuje pixel. |
| **Pixel** | Meta tracking script v prohlížeči klienta. |
| **LTV** | Lifetime Value — kolik klient v průměru přinese tržby. |
| **Unit economics** | Ekonomika 1 zákazníka: kolik stojí získat vs. kolik vrátí. |
| **Creative refresh** | Periodická obnova reklamních kreativ kvůli ad fatigue. |

---

**Konec briefu v1.0.** Aktualizace: dopiš poznámku pod nadpis a inkrementuj verzi.
