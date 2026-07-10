export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  tag: string;
  readingMinutes: number;
  /** SEO keywords (also emitted into <meta keywords> + JSON-LD) */
  keywords: string[];
  /** Pillar/hub article that links out to the whole cluster */
  pillar?: boolean;
}

// Body lives in content/blog/{slug}.mdx. Pillar first, then by category.
export const blogPosts: BlogPost[] = [
  {
    slug: "reklama-na-facebooku-pro-firmy",
    title: "Reklama na Facebooku pro firmy: zákazníci, ne lajky",
    excerpt:
      "Reklama na Facebooku pro firmy má přinášet měřitelné poptávky, ne lajky. Ukážu Vám výkonnostní přístup, tracking, kreativu a strukturu kampaní.",
    date: "2026-07-10",
    tag: "Meta Ads",
    readingMinutes: 12,
    keywords: ["reklama na Facebooku pro firmy", "Meta Ads", "lead generation", "výkonnostní marketing", "reklama na Instagramu"],
    pillar: true,
  },
  {
    slug: "ai-tvorba-kreativ",
    title: "AI pro tvorbu kreativ: kde zrychluje a kde ne",
    excerpt:
      "AI pro tvorbu kreativ zrychlí Vaši práci, ale úsudek nenahradí. Ukážu svůj konkrétní workflow a kde AI v tvorbě reklam pomáhá a kde naopak škodí.",
    date: "2026-07-10",
    tag: "Meta Ads",
    readingMinutes: 7,
    keywords: ["AI pro tvorbu kreativ", "AI reklama", "workflow kreativ"],
  },
  {
    slug: "boostovani-vs-lead-gen",
    title: "Boostování vs lead gen: rozdíl mezi lajky a zakázkami",
    excerpt:
      "Boostování vs lead gen: kdy boost dává smysl a kdy jedině lead gen kampaň. Case study Namontuj si: 1 957 poptávek za 4,25 € místo pouhých lajků.",
    date: "2026-07-10",
    tag: "Meta Ads",
    readingMinutes: 9,
    keywords: ["boostování vs lead gen", "propagace příspěvku", "lead gen kampaň"],
  },
  {
    slug: "meta-andromeda",
    title: "Meta Andromeda: proč je kreativa nový targeting",
    excerpt:
      "Meta Andromeda změnila doručování reklam a kreativa je nový targeting. Vysvětlím, co to prakticky znamená pro firmy a lead gen účty v roce 2026.",
    date: "2026-07-10",
    tag: "Meta Ads",
    readingMinutes: 7,
    keywords: ["Meta Andromeda", "Advantage+", "algoritmus Meta 2026"],
  },
  {
    slug: "kreativy-before-after",
    title: "Reklamní kreativy before after: reálné fotky poráží stock",
    excerpt:
      "Reklamní kreativy before after fungují líp než stock fotky. Ukážu proč a co má mít fotka reálné realizace, aby v Metě prodávala poptávky v roce 2026.",
    date: "2026-07-10",
    tag: "Meta Ads",
    readingMinutes: 7,
    keywords: ["reklamní kreativy before after", "kreativa na Facebook", "UGC vs stock"],
  },
  {
    slug: "struktura-meta-kampani",
    title: "Struktura Meta kampaní podle služby a trhu",
    excerpt:
      "Struktura Meta kampaní: jak rozdělit kampaně podle služby, trhu a záměru, aby data dávala smysl. Praktická pravidla i vliv Andromedy v roce 2026.",
    date: "2026-07-10",
    tag: "Meta Ads",
    readingMinutes: 8,
    keywords: ["struktura Meta kampaní", "struktura kampaní Facebook", "kampaně podle trhu"],
  },
  {
    slug: "skalovani-meta-kampani",
    title: "Škálování Meta kampaní bez růstu ceny za poptávku",
    excerpt:
      "Škálování Meta kampaní bez růstu CPL má jasná pravidla. Ukážu, jak navyšovat rozpočet po 20 %, hlídat ROAS a držet cenu za poptávku stabilní.",
    date: "2026-07-10",
    tag: "Meta Ads",
    readingMinutes: 7,
    keywords: ["škálování Meta kampaní", "stabilní CPL", "navýšení rozpočtu"],
  },
  {
    slug: "kolik-leadu-potrebuji",
    title: "Kolik leadů potřebuji, abych byl ziskový",
    excerpt:
      "Kolik leadů potřebuji k zisku. Ukážu Vám výpočet od poptávky přes schůzku po zakázku a jak z něj vyjde maximální CPL. Včetně modelové tabulky.",
    date: "2026-07-10",
    tag: "Lead Generation",
    readingMinutes: 7,
    keywords: ["kolik leadů potřebuji", "unit economics leadů", "návratnost reklamy", "cena zakázky", "konverzní poměr"],
  },
  {
    slug: "kvalifikacni-otazky-lead-formular",
    title: "Kvalifikace leadů formulář: 4 otázky pro lepší poptávky",
    excerpt:
      "Kvalifikace leadů ve formuláři: přidejte 2 až 4 otázky a odfiltrujte nevážné poptávky. Konkrétní otázky na rozpočet, termín, lokalitu a typ zakázky.",
    date: "2026-07-10",
    tag: "Lead Generation",
    readingMinutes: 7,
    keywords: ["kvalifikace leadů formulář", "lead formulář otázky", "kvalita poptávek"],
  },
  {
    slug: "kvalita-leadu-vs-cena",
    title: "Kvalita leadů: proč nejlevnější poptávka není levná",
    excerpt:
      "Kvalita leadů rozhoduje víc než cena. Ukážu Vám, proč levný lead z formuláře může vyjít dráž než dražší poptávka z webu. S čísly konverze a příkladem.",
    date: "2026-07-10",
    tag: "Lead Generation",
    readingMinutes: 7,
    keywords: ["kvalita leadů", "levné leady", "kvalifikovaný lead", "cena vs návratnost", "konverze leadu"],
  },
  {
    slug: "lead-formular-vs-web",
    title: "Lead formulář vs web: co konvertuje líp a kdy",
    excerpt:
      "Lead formulář vs web: nativní Meta formulář konvertuje 6 až 10 %, web 1,5 až 4 %. Srovnání kvality leadů, CPL a jasné pravidlo, kdy použít co.",
    date: "2026-07-10",
    tag: "Lead Generation",
    readingMinutes: 8,
    keywords: ["lead formulář vs web", "Facebook lead ads", "konverze formuláře"],
  },
  {
    slug: "conversions-api-pro-sluzby",
    title: "Conversions API pro poptávkové weby, ne jen e-shopy",
    excerpt:
      "Conversions API pro služby měří poptávky a formuláře, ne košík. Ukážu Vám, jaké události nastavit na lead gen webu a proč je to jinak než e-shop.",
    date: "2026-07-10",
    tag: "Tracking",
    readingMinutes: 8,
    keywords: ["Conversions API pro služby", "CAPI setup", "server-side tracking", "poptávkový web", "měření poptávek"],
  },
  {
    slug: "pixel-podhodnocuje-konverze",
    title: "Proč Vám Pixel ukazuje míň konverzí, než máte",
    excerpt:
      "Pixel podhodnocuje konverze, protože žije v prohlížeči. Vysvětlím Vám, proč vzniká ztráta dat a jak Conversions API část konverzí vrací zpět ze serveru.",
    date: "2026-07-10",
    tag: "Tracking",
    readingMinutes: 8,
    keywords: ["Pixel podhodnocuje konverze", "měření konverzí", "ztráta dat", "event match quality", "chybějící konverze"],
  },
  {
    slug: "reporting-meta-ads",
    title: "Reporting Meta Ads, kterému rozumíte za minutu",
    excerpt:
      "Reporting Meta Ads nemusí být tabulka plná čísel. Ukážu Vám 4 až 6 metrik, které reálně sledovat, a jak postavit přehled, kterému rozumí i majitel.",
    date: "2026-07-10",
    tag: "Tracking",
    readingMinutes: 7,
    keywords: ["reporting Meta Ads", "dashboard reklamy", "KPI reklama", "Business Manager report", "metriky reklamy"],
  },
  {
    slug: "nabor-remeslniku-facebook",
    title: "Nábor přes Facebook: řemeslníci místo pracovních portálů",
    excerpt:
      "Nábor přes Facebook dostane řemeslníky levněji a rychleji než portály. Case study: 582 kandidátů za 21 Kč za kus. Jak na náborové kampaně na Meta.",
    date: "2026-07-10",
    tag: "Nábor",
    readingMinutes: 8,
    keywords: ["nábor přes Facebook", "náborové kampaně", "nábor řemeslníků"],
  },
  {
    slug: "hyperlokalni-cileni-sluzby",
    title: "Hyperlokální cílení pro lokální služby krok za krokem",
    excerpt:
      "Hyperlokální cílení přivede poptávky z okolí provozovny. Ukážu postup, okruh i case s poptávkami za 31 USD. Návod pro lokální služby krok za krokem.",
    date: "2026-07-10",
    tag: "Vertikály",
    readingMinutes: 7,
    keywords: ["hyperlokální cílení", "lokální reklama", "cílení do okruhu"],
  },
  {
    slug: "marketing-pro-rekonstrukce",
    title: "Marketing pro rekonstrukce: ze sezóny stálý kanál poptávek",
    excerpt:
      "Marketing pro rekonstrukce mění nárazové poptávky na stálý kanál. Case study: 454 poptávek za 526 Kč. Jak měřit cenu poptávky a běžet i mimo sezónu.",
    date: "2026-07-10",
    tag: "Vertikály",
    readingMinutes: 8,
    keywords: ["marketing pro rekonstrukce", "reklama stavební firma", "poptávky rekonstrukce"],
  },
  {
    slug: "marketing-pro-tvorbu-webu",
    title: "Marketing pro tvorbu webů v přesyceném trhu přes Meta",
    excerpt:
      "Marketing pro tvorbu webů v přesyceném trhu. Ukážu kreativy z hotových webů a kvalifikaci, které přinesly 236 poptávek za 269 Kč. Návod z praxe.",
    date: "2026-07-10",
    tag: "Vertikály",
    readingMinutes: 7,
    keywords: ["marketing pro tvorbu webů", "získávání klientů web", "přesycený trh"],
  },
  {
    slug: "reklama-na-oddluzeni",
    title: "Reklama na oddlužení tam, kde nikdo nevěří",
    excerpt:
      "Reklama na oddlužení funguje i přes restrikce Meta. Ukážu tón a strukturu kampaní, které přinesly 265 poptávek za 189 Kč. S reálnými čísly z praxe.",
    date: "2026-07-10",
    tag: "Vertikály",
    readingMinutes: 7,
    keywords: ["reklama na oddlužení", "finanční marketing", "Meta restrikce cílení"],
  },
  {
    slug: "reklama-vykup-nemovitosti",
    title: "Reklama výkup nemovitostí: jak generovat poptávky",
    excerpt:
      "Reklama výkup nemovitostí i tam, kde je cílení těžké a nedůvěra vysoká. Case study: 165 poptávek za 165 Kč. Jak strukturou kampaní porazit slabé cílení.",
    date: "2026-07-10",
    tag: "Vertikály",
    readingMinutes: 9,
    keywords: ["reklama výkup nemovitostí", "poptávky výkup nemovitostí", "výkup podílů"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
