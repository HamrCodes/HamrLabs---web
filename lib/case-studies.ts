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
    body: "Firma, která rekonstruuje byty a domy. Postavil jsem jí systém, ze kterého chodí poptávky každý týden. A u každé přesně víme, kolik stála.",
    metricValue: "454",
    metricLabel: "poptávek po 526 Kč",
    image: "/case-laft.png",
    imageAlt:
      "Meta Ads Manager: LEAD GENERATION LAFT — 454 výsledků, 1 703 287 zobrazení, dosah 537 698, cena za výsledek 525,59 Kč",
    stats: [
      { value: "454", label: "Získaných poptávek" },
      { value: "526 Kč", label: "Cena za poptávku" },
      { value: "1,7M+", label: "Zobrazení" },
    ],
    context:
      "Firma, která rekonstruuje byty a domy. Zakázky chodily z doporučení a nárazově. Žádný stálý zdroj poptávek, žádná čísla. Majitel nevěděl, kolik ho jedna poptávka stojí ani kolik jich příští měsíc přijde.",
    howItWorked:
      "Rozdělil jsem reklamy podle typu rekonstrukce. Vizuály jsem postavil na fotkách z reálných zakázek, včetně srovnání před a po. Ve formuláři jsou otázky, které odfiltrují zvědavce, takže chodí lidé připravení stavět.",
    bullets: [
      "Nastavené měření, takže je vidět každá poptávka",
      "Reklamy rozdělené podle typu rekonstrukce",
      "Fotky z reálných zakázek, včetně před a po",
      "Otázky ve formuláři proti nezávazným poptávkám",
    ],
    proof:
      "454 poptávek za průměrných 526 Kč. Přes 1,7 milionu zobrazení a dosah přes půl milionu lidí. Firma poprvé přesně ví, kolik stojí jedna poptávka, a má zdroj zakázek, který běží celý rok, ne jen v sezóně.",
  },
  {
    slug: "namontuj-si",
    caseNumber: "02",
    client: "Namontuj si",
    industry: "Služby · Pergoly a zasklení · SK + CZ",
    tag: "Služby",
    body: "Pergoly a zasklení teras na Slovensku i v Česku. Místo náhodného boostování příspěvků dostala firma systém: reklama, formulář, poptávka. Pořád dokola.",
    metricValue: "1 957",
    metricLabel: "poptávek po 4,25 €",
    image: "/case-namontujsi.png",
    imageAlt:
      "Meta Ads Manager: Namontuj si — 1 957 poptávek, 1 945 969 zobrazení, dosah 240 297, průměrná cena za poptávku 4,25 €",
    stats: [
      { value: "1 957", label: "Získaných poptávek" },
      { value: "4,25 €", label: "Cena za poptávku" },
      { value: "1,9M+", label: "Zobrazení" },
    ],
    context:
      "Montážní firma roky mačkala tlačítko Propagovat příspěvek. Tisíce eur za lajky a dosah, ale ani jedna poptávka, kterou by šlo spočítat. Majitel netušil, co mu reklama přináší a kolik ho stojí jeden zákazník.",
    howItWorked:
      "Konec propagovaných příspěvků. Reklamy jsem rozdělil podle země, přidal formulář přímo na Facebooku a použil fotky reálných realizací, které do té doby sbíraly jen lajky.",
    bullets: [
      "Konec propagovaných příspěvků, místo nich reklamy na poptávky",
      "Reklamy rozdělené podle země (SK a CZ)",
      "Formulář přímo na Facebooku místo lajků a dosahu",
      "Fotky z reálných montáží u zákazníků",
    ],
    proof:
      "1 957 poptávek za průměrných 4,25 €. Hlavní slovenská reklama nosí přes 350 poptávek měsíčně za 4,06 € za kus. Stejné fotky, stejná firma, jiný systém.",
  },
  {
    slug: "service-estate",
    caseNumber: "03",
    client: "Service Estate",
    industry: "Služby · Výkup nemovitostí · ČR",
    tag: "Reality",
    body: "Firma, která vykupuje nemovitosti. Její zákazníky nenajdete v žádné databázi. Reklama je našla podle toho, co právě řeší.",
    metricValue: "165",
    metricLabel: "poptávek po 165 Kč",
    image: "/case-serviceestate.png",
    imageAlt:
      "Meta Ads Manager: Service Estate — 165 poptávek, 113 722 zobrazení, dosah 42 310, průměrná cena za poptávku 165,07 Kč",
    stats: [
      { value: "165", label: "Získaných poptávek" },
      { value: "165 Kč", label: "Cena za poptávku" },
      { value: "45 Kč", label: "Cena za poptávku: půda" },
    ],
    context:
      "Firma vykupuje spoluvlastnické podíly, zemědělskou půdu a nemovitosti v komplikovaných situacích. Tyhle lidi nejde nikde vyhledat. Člověk, co zdědil podíl po babičce nebo má pole, které dvacet let nevyužívá, nesedí v žádném seznamu zájmů.",
    howItWorked:
      "Každý typ výkupu dostal vlastní reklamu a vlastní řeč. Texty mluvily o konkrétní životní situaci, ne o realitách. Ve formuláři se rovnou ptám na vlastnictví, aby chodili majitelé, ne zvědavci.",
    bullets: [
      "Samostatná reklama pro každý typ výkupu: podíly, půda, nemovitosti",
      "Texty postavené na konkrétní životní situaci",
      "Ověření vlastnictví rovnou ve formuláři",
      "Ladění ceny za poptávku podle typu výkupu",
    ],
    proof:
      "165 poptávek za průměrných 165 Kč. U zemědělské půdy stojí poptávka 45 Kč. V byznysu, kde jedna zakázka znamená statisíce, je poptávka za stovku položka, která se v rozpočtu ztratí.",
  },
  {
    slug: "gdr-work",
    caseNumber: "04",
    client: "GDR Work s.r.o.",
    industry: "Nábor · Řemesla · ČR + DE",
    tag: "Nábor",
    body: "Řemeslná firma, která potřebovala lidi. Místo drahých pracovních portálů reklama na Facebooku. Jeden kandidát vyšel na 21 korun.",
    metricValue: "582",
    metricLabel: "kandidátů po 21 Kč",
    image: "/case-gdr.png",
    imageAlt:
      "Meta Ads Manager: GDR Work — 582 kandidátů, 119 724 zobrazení, dosah 54 637, průměrná cena za kandidáta 20,72 Kč",
    stats: [
      { value: "582", label: "Získaných kandidátů" },
      { value: "21 Kč", label: "Cena za kandidáta" },
      { value: "ČR + DE", label: "Trhy" },
    ],
    context:
      "Stavební firma se zakázkami v Česku a Německu. Růst nebrzdily zakázky, ale lidi. Nábor přes portály byl drahý a pomalý, inzeráty visely týdny a řemeslníci skoro nechodili.",
    howItWorked:
      "Nábor jsem přesunul z portálů na Facebook. Reklamy rozdělené podle profese a země, přihláška přímo v aplikaci, takže kandidát reaguje na pár kliknutí. Otázky ve formuláři odfiltrovaly lidi bez praxe.",
    bullets: [
      "Reklamy rozdělené podle profese a země (ČR a DE)",
      "Přihláška přímo na Facebooku místo pracovních portálů",
      "Otázky na praxi rovnou ve formuláři",
      "Ladění ceny za jednoho kandidáta",
    ],
    proof:
      "582 kandidátů za průměrných 21 Kč. Nejlepší reklama přivedla fasádníky a zedníky pro Německo za 9,61 Kč za kandidáta. Celý nábor stál zhruba tolik co pár inzerátů na portálu a firma má kanál, který zapne, kdykoliv potřebuje lidi.",
  },
  {
    slug: "bez-dluhu",
    caseNumber: "05",
    client: "Bez dluhů",
    industry: "Služby · Oddlužení a finance · ČR",
    tag: "Finance",
    body: "Oddlužení a úvěry. Obor, kde lidi nikomu nevěří. Přesto z jednoho systému chodily stovky poptávek s jasnou cenou za každou z nich.",
    metricValue: "265",
    metricLabel: "poptávek po 189 Kč",
    image: "/case-bezdluhu.png",
    imageAlt:
      "Meta Ads Manager: Bez dluhů — 265 poptávek, 195 748 zobrazení, dosah 65 750, průměrná cena za poptávku 189,13 Kč",
    stats: [
      { value: "265", label: "Získaných poptávek" },
      { value: "189 Kč", label: "Cena za poptávku" },
      { value: "86 Kč", label: "Cena za poptávku: oddlužení" },
    ],
    context:
      "Finanční služba pro lidi v dluzích: oddlužení, úvěry, výkup nemovitostí. Nejtěžší publikum, jaké existuje. Lidé se za svou situaci stydí, nikomu nevěří a na běžnou reklamu nereagují. Facebook navíc u financí omezuje, koho smíte oslovit.",
    howItWorked:
      "Tři služby, tři samostatné reklamy, každá s vlastní řečí. Formulář s nízkou bariérou, aby první krok nebolel. Texty postavené na úlevě a konkrétním řešení, ne na strachu.",
    bullets: [
      "Reklamy rozdělené podle služby: oddlužení, úvěry, výkup",
      "Formulář, u kterého první krok nebolí",
      "Řeč postavená na úlevě a řešení, ne na strachu",
      "Ladění ceny za poptávku napříč službami",
    ],
    proof:
      "265 poptávek za průměrných 189 Kč. Nejsilnější služba, oddlužení, nosí poptávky za 86 Kč. V oboru, kde platforma omezuje cílení a lidé nikomu nevěří, rozhoduje stavba reklam a tón, ne velikost rozpočtu.",
  },
  {
    slug: "strankonator",
    caseNumber: "06",
    client: "Stránkonátor",
    industry: "Služby · Tvorba webů · ČR",
    tag: "Služby",
    body: "Tvorba webů. Trh, kde to samé nabízí každý druhý. I tak chodily poptávky předvídatelně, týden co týden.",
    metricValue: "236",
    metricLabel: "poptávek po 269 Kč",
    image: "/case-strankonator.png",
    imageAlt:
      "Meta Ads Manager: LEAD GENERATION STRÁNKONÁTOR — 236 výsledků, 162 479 zobrazení, dosah 49 930, cena za výsledek 269,45 Kč",
    stats: [
      { value: "236", label: "Získaných poptávek" },
      { value: "269 Kč", label: "Cena za poptávku" },
      { value: "162K+", label: "Zobrazení" },
    ],
    context:
      "Tvorba webů v jednom z nejpřeplněnějších trhů v Česku. Poptávky chodily nárazově přes doporučení a majitel neměl jak plánovat růst. Konkurence tlačí cenu dolů, takže se musí počítat každá poptávka.",
    howItWorked:
      "Reklamy postavené na jasné nabídce. Místo obecných slibů ukazovaly hotové weby a konkrétní výsledek. Ve formuláři otázky na rozpočet a termín, aby chodili lidé připravení zadat zakázku.",
    bullets: [
      "Reklamy postavené na hotových webech, ne na slibech",
      "Jasná nabídka s konkrétním výstupem a cenou",
      "Otázky na rozpočet a termín ve formuláři",
      "Ladění ceny za poptávku",
    ],
    proof:
      "236 poptávek za průměrných 269 Kč. V trhu, kde se o každou zakázku pere deset dodavatelů, má firma stálý přísun poptávek s předvídatelnou cenou a jasnou návratností.",
  },
  {
    slug: "merry-cleaning",
    caseNumber: "07",
    client: "Merry Cleaning",
    industry: "Služby · Úklid · USA",
    tag: "Úklid",
    body: "Úklidová služba na Floridě. Nejdražší reklamní trh na světě. I tam se dá poptávka koupit za rozumnou cenu.",
    metricValue: "$31",
    metricLabel: "za poptávku v USA",
    image: "/case-merrycleaning.png",
    imageAlt:
      "Meta Ads Manager: Merry Cleaning — Lead Generation Naples FL, 24 poptávek, 10 799 zobrazení, dosah 4 805, cena za poptávku $30,94",
    stats: [
      { value: "$31", label: "Cena za poptávku" },
      { value: "Naples, FL", label: "Lokalita kampaně" },
      { value: "50 km", label: "Cílený rádius" },
    ],
    context:
      "Úklidová služba v Naples na Floridě. Americký trh, kde je reklama několikanásobně dražší než v Česku a konkurence na každém rohu. Firma potřebovala poptávky na pravidelný úklid z konkrétního okolí, ne dosah přes celý stát.",
    howItWorked:
      "Reklama cílená jen na Naples a 50 km okolo. Formulář s otázkami na rozsah úklidu, aby chodili lidé se zájmem o pravidelnou spolupráci, ne jednorázoví lovci nejnižší ceny.",
    bullets: [
      "Cílení jen na Naples a 50 km okolo",
      "Otázky na rozsah úklidu ve formuláři",
      "Řeč postavená na pravidelném úklidu, ne na slevě",
      "Ladění ceny za poptávku",
    ],
    proof:
      "Poptávky za $31 na trhu, kde se úklidové firmy perou o každé kliknutí. U pravidelného úklidu se poptávka zaplatí prvním termínem a každý další měsíc je marže. Stejný systém jako v Česku, jen v dolarech.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
