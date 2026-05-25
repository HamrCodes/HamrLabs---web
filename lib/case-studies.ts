export interface Stat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  caseNumber: string;
  client: string;
  industry: string;
  tag: string;
  body: string;
  metricValue: string;
  metricLabel: string;
  isPlaceholder?: boolean;

  // Modal content
  stats: Stat[];
  context: string;
  howItWorked: string;
  bullets?: string[];
  proof: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "flach",
    caseNumber: "01",
    client: "Flach s.r.o.",
    industry: "Stavebnictví · Rekonstrukce · Olomoucký kraj",
    tag: "Stavebnictví",
    body: "Rebuild Meta Ads kampaně. Nové kreativy, regionální targeting a tracking od piky. Klient přestal platit za leady mimo svozovou oblast.",
    metricValue: "−58%",
    metricLabel: "Cost per lead za 90 dní",
    stats: [
      { value: "−58%", label: "Cost per lead" },
      { value: "90 dní", label: "Doba změny" },
      { value: "+42%", label: "Kvalifikované leady" },
    ],
    context:
      "Klient platil za leady, které nebyly relevantní. Většina zájemců přicházela mimo svozovou oblast, což znamenalo zbytečné náklady a frustraci na obou stranách. Reklamy běžely bez tracking stacku, takže nebylo jasné, co skutečně přináší výsledky.",
    howItWorked:
      "Kompletní rebuild Meta Ads kampaně. Setup Pixelu, server-side události, regionální targeting na svozovou oblast a nové kreativy odpovídající brand voicem. Důraz na měřitelnost: každý lead trackovaný od kliknutí po podpis.",
    bullets: [
      "Regionální targeting na svozovou oblast",
      "Setup Pixel + CAPI",
      "Nové kreativy zaměřené na konkrétní typy zakázek",
      "Weekly reporting v Loomu",
    ],
    proof:
      "Snížení Cost per lead o 58 % za 90 dní při zachování kvality. Klient přestal platit za leady mimo dosah a fokusoval rozpočet na regiony, které reálně generují obchody.",
  },
  {
    slug: "elegant-dogs",
    caseNumber: "02",
    client: "Elegant Dog's Barber",
    industry: "Služby · Psí grooming · Brno",
    tag: "Služby",
    body: "Setup Pixelu, server-side události a struktura kampaní pro lokální službu. Z chaotické historie čistý profil, který škáluje.",
    metricValue: "+3,2×",
    metricLabel: "ROAS oproti baseline",
    stats: [
      { value: "+3,2×", label: "ROAS oproti baseline" },
      { value: "60 dní", label: "Doba změny" },
      { value: "Brno", label: "Lokalita kampaně" },
    ],
    context:
      "Lokální psí salon s chaotickou historií Meta účtu. Pixel byl špatně nastavený, kampaně se křížily, audiences byly přebité. Klient nevěděl, kolik ho stojí jeden booking.",
    howItWorked:
      "Reset Meta účtu, čistý setup Pixel + Conversions API. Struktura kampaní podle lokality a typu služby. Kreativy zaměřené na konkrétní emoční moment (péče o psa).",
    bullets: [
      "Reset Meta účtu a Pixel setup od nuly",
      "Server-side events přes CAPI",
      "Struktura kampaní podle služby + lokality",
      "Lifecycle audience management",
    ],
    proof:
      "ROAS 3,2× oproti baseline. Klient získal čistý profil, kterému rozumí a který škáluje. Každý booking má attribuci, každá kampaň má jasné KPI.",
  },
  {
    slug: "klub-moderniho-psa",
    caseNumber: "03",
    client: "Klub moderního psa",
    industry: "E-commerce · E-shop · ČR + SK",
    tag: "E-commerce",
    body: "AI audit, PDF report s konkrétními doporučeními a navazující Python/pandas analýza historických dat. Implementace v dalším sprintu.",
    metricValue: "+41%",
    metricLabel: "Konverzní poměr e-shopu",
    stats: [
      { value: "+41%", label: "Konverzní poměr" },
      { value: "30 dní", label: "Analýza + report" },
      { value: "12 měsíců", label: "Data v auditu" },
    ],
    context:
      "E-shop s velkým objemem dat, ale bez systematické analýzy. Klient měl pocit, že některé produkty neperformují, ale nevěděl která, kdy a proč. Reklamy se vyhodnocovaly podle ROAS, ale bez kontextu LTV nebo cohort behavior.",
    howItWorked:
      "Hloubková analýza historických dat za 12 měsíců přes Python/pandas. AI-driven audit Meta účtu, identifikace anomálií, segmentace produktů podle profitability. Výstupem PDF report s konkrétními doporučeními pro implementaci.",
    bullets: [
      "Python/pandas analýza 12 měsíců dat",
      "AI audit Meta účtu s anomaly detection",
      "Segmentace produktů podle profitability",
      "PDF report s implementačními kroky",
    ],
    proof:
      "Po implementaci doporučení vzrostl konverzní poměr e-shopu o 41 %. Klient teď rozumí, které produkty stojí za reklamu, které ne, a kde je největší prostor pro růst.",
  },
  // Placeholder cases (4-9) — Matyáš nahradí reálnými
  {
    slug: "placeholder-04",
    caseNumber: "04",
    client: "Lokální gastro provoz",
    industry: "Gastronomie · Restaurace · Brno",
    tag: "Gastronomie",
    body: "Performance kampaně pro plnění víkendových rezervací. Tracking od kliknutí po rezervaci přes integraci s rezervačním systémem.",
    metricValue: "+62%",
    metricLabel: "Víkendové rezervace",
    isPlaceholder: true,
    stats: [
      { value: "+62%", label: "Rezervace" },
      { value: "−34%", label: "CPA" },
      { value: "60 dní", label: "Doba změny" },
    ],
    context:
      "Detailní case study připravujeme. Zatím přiblížení: lokální restaurace s problémem nedostatečné obsazenosti během víkendů a předplnění rezervačního systému přes Meta kampaně.",
    howItWorked: "Detailní popis bude doplněn.",
    proof: "Detailní popis bude doplněn.",
  },
  {
    slug: "placeholder-05",
    caseNumber: "05",
    client: "Beauty studio",
    industry: "Beauty · Wellness · Praha",
    tag: "Beauty",
    body: "Lead generation kampaně pro nová ošetření a sezónní akce. Příprava lifecycle audience pro retention.",
    metricValue: "+148%",
    metricLabel: "Kvalifikované leady",
    isPlaceholder: true,
    stats: [
      { value: "+148%", label: "Leady" },
      { value: "−42%", label: "CPL" },
      { value: "45 dní", label: "Setup" },
    ],
    context: "Detailní case study připravujeme.",
    howItWorked: "Detailní popis bude doplněn.",
    proof: "Detailní popis bude doplněn.",
  },
  {
    slug: "placeholder-06",
    caseNumber: "06",
    client: "B2B SaaS startup",
    industry: "Tech · B2B SaaS · ČR + EU",
    tag: "SaaS",
    body: "Akviziční kampaně pro free trial. Audit funnelu, optimalizace landing pages, lookalike audiences z paying users.",
    metricValue: "+3,8×",
    metricLabel: "Trial signups",
    isPlaceholder: true,
    stats: [
      { value: "+3,8×", label: "Signups" },
      { value: "−51%", label: "CAC" },
      { value: "90 dní", label: "Doba změny" },
    ],
    context: "Detailní case study připravujeme.",
    howItWorked: "Detailní popis bude doplněn.",
    proof: "Detailní popis bude doplněn.",
  },
  {
    slug: "placeholder-07",
    caseNumber: "07",
    client: "E-shop fashion",
    industry: "E-commerce · Móda · ČR",
    tag: "E-commerce",
    body: "Catalog ads a dynamic retargeting. Server-side eventy, kvalitní product feed, segmentace podle behavior.",
    metricValue: "+87%",
    metricLabel: "ROAS oproti baseline",
    isPlaceholder: true,
    stats: [
      { value: "+87%", label: "ROAS" },
      { value: "−28%", label: "CPA" },
      { value: "+41%", label: "AOV" },
    ],
    context: "Detailní case study připravujeme.",
    howItWorked: "Detailní popis bude doplněn.",
    proof: "Detailní popis bude doplněn.",
  },
  {
    slug: "placeholder-08",
    caseNumber: "08",
    client: "Realitní kancelář",
    industry: "Reality · Lokální · Praha",
    tag: "Reality",
    body: "Lead generation kampaně na konkrétní lokality. Custom audiences podle příjmu, věku, lifestyle indicators.",
    metricValue: "+92%",
    metricLabel: "Kvalifikované leady",
    isPlaceholder: true,
    stats: [
      { value: "+92%", label: "Leady" },
      { value: "−38%", label: "CPL" },
      { value: "75 dní", label: "Doba změny" },
    ],
    context: "Detailní case study připravujeme.",
    howItWorked: "Detailní popis bude doplněn.",
    proof: "Detailní popis bude doplněn.",
  },
  {
    slug: "placeholder-09",
    caseNumber: "09",
    client: "Fitness studio",
    industry: "Wellness · Fitness · Olomouc",
    tag: "Fitness",
    body: "Akviziční kampaně pro členství a personal training. Local awareness ads, conversion campaigns, weekend boosts.",
    metricValue: "+215%",
    metricLabel: "Nová členství",
    isPlaceholder: true,
    stats: [
      { value: "+215%", label: "Členství" },
      { value: "−45%", label: "CPA" },
      { value: "60 dní", label: "Doba změny" },
    ],
    context: "Detailní case study připravujeme.",
    howItWorked: "Detailní popis bude doplněn.",
    proof: "Detailní popis bude doplněn.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
