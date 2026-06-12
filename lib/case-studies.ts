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
  /** Screenshot shown in card preview + top of modal (path in /public) */
  image?: string;
  imageAlt?: string;

  // Modal content
  stats: Stat[];
  context: string;
  howItWorked: string;
  bullets?: string[];
  proof: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "laft-rekonstrukce",
    caseNumber: "01",
    client: "LAFT Rekonstrukce",
    industry: "Služby · Rekonstrukce · ČR",
    tag: "Rekonstrukce",
    body: "Lead gen systém pro rekonstrukční firmu. Stabilní přísun poptávek s jasnou cenou za každou z nich.",
    metricValue: "454",
    metricLabel: "Poptávek za 526 Kč/ks",
    image: "/case-laft.png",
    imageAlt:
      "Meta Ads Manager: LEAD GENERATION LAFT — 454 výsledků, 1 703 287 zobrazení, dosah 537 698, cena za výsledek 525,59 Kč",
    stats: [
      { value: "454", label: "Získaných poptávek" },
      { value: "526 Kč", label: "Cena za poptávku" },
      { value: "1,7M+", label: "Zobrazení" },
    ],
    context:
      "Rekonstrukční firma závislá na doporučeních a nárazových poptávkách. Žádný předvídatelný kanál, žádná data. Klient nevěděl, kolik ho stojí jedna poptávka a kolik jich příští měsíc přijde.",
    howItWorked:
      "Lead gen kampaně na Meta postavené podle typu rekonstrukce. Kreativy z reálných zakázek, before/after z hotových projektů. Formuláře s kvalifikačními otázkami, aby chodily poptávky připravené stavět, ne zvědavci.",
    bullets: [
      "Kompletní setup Pixelu a Conversions API",
      "Struktura kampaní podle typu rekonstrukce",
      "Kreativy z reálných zakázek, before/after",
      "Kvalifikační formuláře proti balastním poptávkám",
    ],
    proof:
      "454 poptávek za průměrných 526 Kč. Přes 1,7 milionu zobrazení a dosah přes půl milionu lidí. Firma poprvé přesně ví, kolik stojí jedna poptávka, a má kanál, který běží dlouhodobě, ne jen v sezóně.",
  },
  {
    slug: "namontuj-si",
    caseNumber: "02",
    client: "Namontuj si",
    industry: "Služby · Pergoly a zasklení · SK + CZ",
    tag: "Služby",
    body: "Z boostování příspěvků na měřitelný lead gen systém. Stabilní přísun poptávek na pergoly a zasklení teras v SK i ČR.",
    metricValue: "1 957",
    metricLabel: "Poptávek za 4,25 €/ks",
    image: "/case-namontujsi.png",
    imageAlt:
      "Meta Ads Manager: Namontuj si — 1 957 poptávek, 1 945 969 zobrazení, dosah 240 297, průměrná cena za poptávku 4,25 €",
    stats: [
      { value: "1 957", label: "Získaných poptávek" },
      { value: "4,25 €", label: "Cena za poptávku" },
      { value: "1,9M+", label: "Zobrazení" },
    ],
    context:
      "Montážní firma roky řešila reklamu tlačítkem Boostovat příspěvek. Tisíce eur v propagovaných postech, lajky a dosah, ale ani jedna měřitelná poptávka. Klient nevěděl, co mu reklama reálně přináší a kolik stojí jeden zákazník.",
    howItWorked:
      "Konec boostů, přechod na lead gen strukturu. Kampaně rozdělené podle trhu (SK/CZ), lead formuláře přímo v platformě a kreativy postavené na fotkách reálných realizací, které dřív sbíraly jen lajky.",
    bullets: [
      "Konec boostování příspěvků, přechod na lead gen kampaně",
      "Struktura rozdělená podle trhu (SK/CZ)",
      "Lead formuláře místo lajků a dosahu",
      "Kreativy z reálných realizací u zákazníků",
    ],
    proof:
      "1 957 poptávek za průměrných 4,25 €. Hlavní slovenská kampaň generuje přes 350 poptávek měsíčně za 4,06 € za kus. Stejné fotky, stejná firma, jiný systém. Rozdíl mezi boostem a funnelem je rozdíl mezi lajky a zakázkami.",
  },
  {
    slug: "service-estate",
    caseNumber: "03",
    client: "Service Estate",
    industry: "Služby · Výkup nemovitostí · ČR",
    tag: "Reality",
    body: "Lead gen pro výkupovou realitní firmu. Poptávky od lidí, kteří se nedají zacílit žádným publikem, jen situací.",
    metricValue: "165",
    metricLabel: "Poptávek za 165 Kč/ks",
    image: "/case-serviceestate.png",
    imageAlt:
      "Meta Ads Manager: Service Estate — 165 poptávek, 113 722 zobrazení, dosah 42 310, průměrná cena za poptávku 165,07 Kč",
    stats: [
      { value: "165", label: "Získaných poptávek" },
      { value: "165 Kč", label: "Cena za poptávku" },
      { value: "45 Kč", label: "CPL zemědělská půda" },
    ],
    context:
      "Výkupová firma zaměřená na spoluvlastnické podíly, zemědělskou půdu a nemovitosti v komplikovaných situacích. Nejhůř zacílitelná skupina v realitách. Člověk, co zdědil podíl po babičce nebo má pole, které dvacet let nevyužívá, není v žádném zájmovém publiku.",
    howItWorked:
      "Každý typ výkupu dostal vlastní kampaň a vlastní jazyk. Kreativy mluvily na konkrétní životní situaci, ne na realitní fráze. Lead formuláře s předkvalifikací vlastnictví, aby do CRM chodili majitelé, ne zvědavci.",
    bullets: [
      "Samostatná kampaň pro každý typ výkupu (podíly, půda, nemovitosti)",
      "Kreativy postavené na konkrétní životní situaci",
      "Lead formuláře s předkvalifikací vlastnictví",
      "Optimalizace na cenu za poptávku podle segmentu",
    ],
    proof:
      "165 poptávek za průměrných 165 Kč. Výkup zemědělské půdy generuje poptávky za 45 Kč za kus. U byznysu, kde jedna zakázka znamená statisíce na marži, je poptávka za stovku položka, která se v rozpočtu ztratí.",
  },
  {
    slug: "gdr-work",
    caseNumber: "04",
    client: "GDR Work s.r.o.",
    industry: "Nábor · Řemesla · ČR + DE",
    tag: "Nábor",
    body: "Náborový funnel přes Meta Ads. Kandidáti na řemeslné pozice bez pracovních portálů, za zlomek jejich ceny.",
    metricValue: "582",
    metricLabel: "Kandidátů za 21 Kč/ks",
    image: "/case-gdr.png",
    imageAlt:
      "Meta Ads Manager: GDR Work — 582 kandidátů, 119 724 zobrazení, dosah 54 637, průměrná cena za kandidáta 20,72 Kč",
    stats: [
      { value: "582", label: "Získaných kandidátů" },
      { value: "21 Kč", label: "Cena za kandidáta" },
      { value: "ČR + DE", label: "Trhy kampaní" },
    ],
    context:
      "Stavební firma s realizacemi v ČR a Německu. Růst nebrzdily zakázky, ale lidi. Nábor přes portály byl drahý a pomalý, inzeráty visely týdny a kandidáti na řemesla skoro nechodili.",
    howItWorked:
      "Náborové kampaně na Meta místo pracovních portálů. Struktura rozdělená podle profese a trhu, lead formuláře přímo v platformě, takže kandidát reaguje na pár kliknutí. Kvalifikační otázky odfiltrovaly lidi bez praxe.",
    bullets: [
      "Kampaně rozdělené podle profese a trhu (ČR/DE)",
      "Nativní lead formuláře místo pracovních portálů",
      "Kvalifikační otázky přímo ve formuláři",
      "Optimalizace na cenu za kandidáta",
    ],
    proof:
      "582 kandidátů za průměrných 21 Kč. Nejvýkonnější kampaň přivedla fasádníky a zedníky pro Německo za 9,61 Kč za kandidáta. Celý nábor stál zhruba tolik, co pár inzerátů na portálu, a firma má kanál, který zapne, kdykoliv potřebuje lidi.",
  },
  {
    slug: "bez-dluhu",
    caseNumber: "05",
    client: "Bez dluhů",
    industry: "Služby · Oddlužení a finance · ČR",
    tag: "Finance",
    body: "Lead gen ve finanční vertikále, kde cílovka nikomu nevěří. Poptávky na oddlužení, úvěry a výkup nemovitostí z jednoho systému.",
    metricValue: "265",
    metricLabel: "Poptávek za 189 Kč/ks",
    image: "/case-bezdluhu.png",
    imageAlt:
      "Meta Ads Manager: Bez dluhů — 265 poptávek, 195 748 zobrazení, dosah 65 750, průměrná cena za poptávku 189,13 Kč",
    stats: [
      { value: "265", label: "Získaných poptávek" },
      { value: "189 Kč", label: "Cena za poptávku" },
      { value: "86 Kč", label: "CPL oddlužení" },
    ],
    context:
      "Finanční služba pro lidi v dluzích: oddlužení, úvěry, výkup nemovitostí. Nejtěžší cílovka, jaká existuje. Lidé se za svou situaci stydí, nikomu nevěří a na klasickou reklamu nereagují. Meta navíc ve finanční kategorii omezuje cílení, takže nelze spoléhat na publika.",
    howItWorked:
      "Tři služby, tři samostatné kampaně, každá s vlastní komunikací. Lead formuláře s nízkou bariérou, aby první krok nebolel. Kreativy postavené na úlevě a konkrétním řešení, ne na strachu a vymáhání.",
    bullets: [
      "Kampaně rozdělené podle služby (oddlužení, úvěry, výkup nemovitostí)",
      "Lead formuláře s nízkou bariérou vstupu",
      "Komunikace postavená na úlevě a řešení, ne na strachu",
      "Optimalizace na cenu za poptávku napříč službami",
    ],
    proof:
      "265 poptávek za průměrných 189 Kč. Nejsilnější služba, oddlužení, generuje poptávky za 86 Kč za kus. Ve vertikále, kde platforma omezuje cílení a publikum nikomu nevěří, rozhoduje struktura kampaní a tón komunikace, ne rozpočet.",
  },
  {
    slug: "strankonator",
    caseNumber: "06",
    client: "Stránkonátor",
    industry: "Služby · Tvorba webů · ČR",
    tag: "Služby",
    body: "Lead gen pro službu na tvorbu webů. Předvídatelný přísun poptávek v trhu, kde weby nabízí každý druhý freelancer.",
    metricValue: "236",
    metricLabel: "Poptávek za 269 Kč/ks",
    image: "/case-strankonator.png",
    imageAlt:
      "Meta Ads Manager: LEAD GENERATION STRÁNKONÁTOR — 236 výsledků, 162 479 zobrazení, dosah 49 930, cena za výsledek 269,45 Kč",
    stats: [
      { value: "236", label: "Získaných poptávek" },
      { value: "269 Kč", label: "Cena za poptávku" },
      { value: "162K+", label: "Zobrazení" },
    ],
    context:
      "Služba na tvorbu webů v jednom z nejpřesycenějších trhů v ČR. Poptávky chodily nárazově přes doporučení a klient neměl jak růst plánovat. Konkurence tlačí cenu dolů, takže každá poptávka se musí počítat.",
    howItWorked:
      "Lead gen kampaně postavené na jasné nabídce. Kreativy ukazovaly hotové weby a konkrétní výstup, ne obecné sliby. Formuláře s kvalifikačními otázkami na rozpočet a termín, aby chodili lidé připravení zadat zakázku.",
    bullets: [
      "Kreativy postavené na hotových webech, ne na slibech",
      "Jasná nabídka s konkrétním výstupem a cenou",
      "Kvalifikační otázky na rozpočet a termín",
      "Optimalizace na cenu za poptávku",
    ],
    proof:
      "236 poptávek za průměrných 269 Kč. V trhu, kde se o každou zakázku pere deset dodavatelů, má klient kanál s předvídatelnou cenou za poptávku a jasnou návratností na každou utracenou korunu.",
  },
  {
    slug: "merry-cleaning",
    caseNumber: "07",
    client: "Merry Cleaning",
    industry: "Služby · Úklid · USA",
    tag: "Úklid",
    body: "Lead gen pro úklidovou službu na Floridě. Lokální poptávky na nejkonkurenčnějším reklamním trhu světa.",
    metricValue: "$31",
    metricLabel: "Cena za poptávku v USA",
    image: "/case-merrycleaning.png",
    imageAlt:
      "Meta Ads Manager: Merry Cleaning — Lead Generation Naples FL, 24 poptávek, 10 799 zobrazení, dosah 4 805, cena za poptávku $30,94",
    stats: [
      { value: "$31", label: "Cena za poptávku" },
      { value: "Naples, FL", label: "Lokalita kampaně" },
      { value: "50 km", label: "Cílený rádius" },
    ],
    context:
      "Úklidová služba v Naples na Floridě. Americký trh s několikanásobně dražšími CPM než v Česku a konkurencí na každém rohu. Firma potřebovala poptávky na pravidelné úklidy z konkrétního rádiusu, ne dosah napříč státem.",
    howItWorked:
      "Hyperlokální kampaň cílená na Naples a 50 km okolo. Lead formuláře s kvalifikací poptávky, aby chodili lidé s reálným zájmem o pravidelný úklid, ne jednorázoví hledači nejnižší ceny.",
    bullets: [
      "Hyperlokální cílení Naples + 50 km",
      "Lead formuláře s kvalifikací poptávky",
      "Komunikace postavená na pravidelném úklidu, ne na slevě",
      "Optimalizace na cenu za poptávku",
    ],
    proof:
      "Poptávky za $31 na trhu, kde se home services perou o každý klik. U pravidelného úklidu se poptávka zaplatí prvním termínem a každý další měsíc je marže. Stejný systém jako v ČR, jen v dolarech.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
