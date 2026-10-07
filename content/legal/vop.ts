// Verbatim text of VOP_Hamr_Labs.docx (Všeobecné obchodní podmínky,
// effective 12 June 2026). Do not edit the wording here: change the docx,
// re-export it and regenerate this file. Numbers and letters are separate
// fields; the EN SPACE (U+2002) that followed them in the docx is dropped.

export interface VopBod {
  /** Letter without the bracket, rendered as "a)". */
  pismeno: string;
  text: string;
}

export interface VopOdstavec {
  /** Paragraph number, e.g. "5.3". */
  cislo: string;
  text: string;
  /** Points a) to d); they always close the paragraph. */
  body?: VopBod[];
}

export interface VopClanek {
  cislo: number;
  nadpis: string;
  odstavce: VopOdstavec[];
}

export const VOP_NAZEV_DOKUMENTU = "VŠEOBECNÉ OBCHODNÍ PODMÍNKY";
export const VOP_PODTITUL = "pro poskytování marketingových služeb společnosti Hamr Labs s.r.o.";
export const VOP_PREAMBULE = "(dále jen „VOP“), platná od 12.06.2026";
export const VOP_PLATNOST_OD = "2026-06-12";
export const VOP_PDF = "/vop-hamr-labs-2026-06-12.pdf";

export const vopClanky: VopClanek[] = [
  {
    cislo: 1,
    nadpis: "Úvodní ustanovení",
    odstavce: [
      {
        cislo: "1.1",
        text: "Tyto Všeobecné obchodní podmínky (dále jen „VOP“) vydává společnost Hamr Labs s.r.o., IČO: 29675855, se sídlem Kaprova 42/14, Staré Město, 110 00 Praha 1, zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 450163 (dále jen „Poskytovatel“), a upravují vzájemná práva a povinnosti Poskytovatele a jeho smluvních partnerů (dále jen „Objednatel“) vznikající v souvislosti s poskytováním marketingových služeb na základě smlouvy o poskytování marketingových služeb (dále jen „Smlouva“), jejíž jsou tyto VOP nedílnou součástí.",
      },
      {
        cislo: "1.2",
        text: "Tyto VOP se vydávají ve smyslu § 1751 zákona č. 89/2012 Sb., občanský zákoník, v platném znění (dále jen „občanský zákoník“ nebo „OZ“).",
      },
      {
        cislo: "1.3",
        text: "Tyto VOP upravují výhradně vztahy, v nichž Objednatel jedná jako podnikatel v rámci své podnikatelské činnosti; nevztahují se na vztahy, v nichž by Objednatel vystupoval jako spotřebitel ve smyslu § 419 OZ. Bude-li Objednatelem osoba jednající mimo rámec své podnikatelské činnosti, je Poskytovatel oprávněn podmínit uzavření Smlouvy sjednáním odchylných podmínek.",
      },
      {
        cislo: "1.4",
        text: "Odchylná ujednání obsažená ve Smlouvě mají přednost před zněním těchto VOP.",
      },
    ],
  },
  {
    cislo: 2,
    nadpis: "Definice pojmů",
    odstavce: [
      {
        cislo: "2.1",
        text: "„Poskytovatelem“ se rozumí Hamr Labs s.r.o., IČO: 29675855, se sídlem Kaprova 42/14, Staré Město, 110 00 Praha 1.",
      },
      {
        cislo: "2.2",
        text: "„Objednatelem“ se rozumí osoba, se kterou Poskytovatel uzavřel Smlouvu, ať už se jedná o fyzickou osobu podnikající na základě živnostenského oprávnění nebo jiného zvláštního zákona (OSVČ), nebo o právnickou osobu, vždy však v postavení podnikatele ve smyslu § 420 a násl. OZ.",
      },
      {
        cislo: "2.3",
        text: "„Službami“ se rozumí marketingové a reklamní služby specifikované ve Smlouvě, zejména správa reklamních kampaní na Reklamních platformách, tvorba reklamního obsahu (i s využitím nástrojů umělé inteligence) a nastavení a správa nástrojů pro generování poptávek (leadů).",
      },
      {
        cislo: "2.4",
        text: "„Reklamními platformami“ se rozumí zejména platformy provozované společností Meta Platforms, Inc. (Facebook, Instagram), případně další platformy dohodnuté Smluvními stranami.",
      },
      {
        cislo: "2.5",
        text: "„Reklamním účtem“ se rozumí účet Objednatele, případně účet zřízený Poskytovatelem pro Objednatele, na příslušné Reklamní platformě, prostřednictvím kterého jsou spravovány reklamní kampaně.",
      },
      {
        cislo: "2.6",
        text: "„Počáteční dobou“ se rozumí doba 3 (tří) kalendářních měsíců dle čl. 5.1 těchto VOP.",
      },
      {
        cislo: "2.7",
        text: "„Nabídkou“ se rozumí návrh Poskytovatele na uzavření Smlouvy, obsahující zejména vymezení Služeb a jejich cenu, zaslaný Objednateli. Potvrzením (odsouhlasením) Nabídky ze strany Objednatele (dále jen „Objednávka“) dochází k uzavření Smlouvy postupem dle čl. 3 těchto VOP.",
      },
    ],
  },
  {
    cislo: 3,
    nadpis: "Uzavření smlouvy",
    odstavce: [
      {
        cislo: "3.1",
        text: "Objednávku, resp. Smlouvu, lze uzavřít v listinné podobě podpisem obou Smluvních stran, jakož i distančním způsobem, tedy bez fyzické přítomnosti Smluvních stran, zejména některým z následujících způsobů:",
        body: [
          { pismeno: "a", text: "výměnou skenů či elektronických kopií podepsané Smlouvy, případně podpisem prostřednictvím nástroje pro elektronický podpis;" },
          { pismeno: "b", text: "výměnou e-mailových zpráv, v nichž Poskytovatel zašle Objednateli Nabídku (návrh Smlouvy, případně nabídku Služeb a cenovou nabídku) a Objednatel ji z e-mailové adresy uvedené ve Smlouvě, nebo jinak Poskytovateli známé jako adresa oprávněné osoby Objednatele, výslovně písemně potvrdí (např. odpovědí „souhlasím“, „potvrzuji objednávku“ apod.);" },
          { pismeno: "c", text: "potvrzením zaslaným Objednatelem prostřednictvím aplikace WhatsApp (případně obdobné komunikační aplikace) z telefonního čísla uvedeného Objednatelem jako kontaktní, obsahujícím jednoznačný souhlas s Nabídkou;" },
          { pismeno: "d", text: "ústním souhlasem uděleným telefonicky, pokud je telefonický hovor Poskytovatelem nahráván a Objednatel byl na tuto skutečnost předem upozorněn." },
        ],
      },
      {
        cislo: "3.2",
        text: "Smluvní strany se v souladu s § 1770 a § 562 odst. 1 OZ dohodly, že veškeré způsoby jednání uvedené v čl. 3.1 těchto VOP považují za rovnocenné písemné formě právního jednání a že takto uzavřená Smlouva je pro obě Smluvní strany od okamžiku jejího uzavření právně závazná ve stejném rozsahu, jako by byla uzavřena v listinné podobě s vlastnoručními podpisy.",
      },
      {
        cislo: "3.3",
        text: "Smlouva vzniká (je uzavřena) okamžikem, kdy Poskytovateli dojde Objednávka, tj. potvrzení (odsouhlasení) Nabídky Objednatelem učiněné některým ze způsobů uvedených v čl. 3.1 těchto VOP.",
      },
      {
        cislo: "3.4",
        text: "Poskytovatel je oprávněn i po uzavření Smlouvy některým ze způsobů uvedených v čl. 3.1 požádat Objednatele o dodatečné podepsání písemného vyhotovení Smlouvy; nesplnění této žádosti nemá vliv na platnost a účinnost již uzavřené Smlouvy.",
      },
      {
        cislo: "3.5",
        text: "Objednatel odpovídá za to, že osoba jednající jeho jménem (ať už podpisem, e-mailem, telefonicky nebo prostřednictvím aplikace WhatsApp) je k takovému jednání oprávněna; Poskytovatel je oprávněn spoléhat na kontaktní údaje (e-mail, telefonní číslo) sdělené mu Objednatelem.",
      },
    ],
  },
  {
    cislo: 4,
    nadpis: "Odstoupení od Smlouvy po jejím uzavření",
    odstavce: [
      {
        cislo: "4.1",
        text: "Objednatel je oprávněn od Smlouvy odstoupit i bez uvedení důvodu, a to kdykoli přede dnem zahájení poskytování Služeb, za podmínek uvedených v tomto článku.",
      },
      {
        cislo: "4.2",
        text: "Odstoupí-li Objednatel od Smlouvy ve lhůtě 2 (dvou) pracovních dnů ode dne jejího uzavření dle čl. 3 těchto VOP (dále jen „Lhůta pro odstoupení“), nevzniká Poskytovateli nárok na Odstupné dle čl. 4.4 těchto VOP ani na jinou úhradu, s výjimkou nákladů, které Poskytovatel prokazatelně a účelně vynaložil vůči třetím osobám v přímé souvislosti s plněním Smlouvy ještě před doručením odstoupení. Odstoupení musí být Poskytovateli doručeno některým ze způsobů uvedených v čl. 3.1 těchto VOP, případně jiným prokazatelným způsobem.",
      },
      {
        cislo: "4.3",
        text: "Po uplynutí Lhůty pro odstoupení trvá právo Objednatele od Smlouvy odstoupit dle čl. 4.1 těchto VOP i nadále, avšak pouze pod podmínkou, že Objednatel zaplatí Poskytovateli odstupné ve smyslu § 1992 OZ (dále jen „Odstupné“); účinky odstoupení nastávají až zaplacením Odstupného.",
      },
      {
        cislo: "4.4",
        text: "Odstupné dle čl. 4.3 těchto VOP činí 100 % Odměny sjednané za první kalendářní měsíc poskytování Služeb. Poskytovatel vyúčtuje Odstupné daňovým dokladem (fakturou) se splatností 14 dnů ode dne jeho vystavení.",
      },
      {
        cislo: "4.5",
        text: "Ustanoveními tohoto článku není dotčeno právo Poskytovatele na Kompenzaci dle čl. 5.5 těchto VOP, dojde-li k ukončení Smlouvy Objednatelem až po zahájení poskytování Služeb.",
      },
    ],
  },
  {
    cislo: 5,
    nadpis: "Doba trvání a ukončení smlouvy",
    odstavce: [
      {
        cislo: "5.1",
        text: "Smlouva se uzavírá na dobu určitou v délce 3 (tří) kalendářních měsíců ode dne nabytí účinnosti Smlouvy (dále jen „Počáteční doba“). Sjednání minimální Počáteční doby je odůvodněno zejména potřebou počátečního nastavení a optimalizace reklamních kampaní, sběru dostatečného množství dat a časem nezbytným k dosažení výsledků v kvalitě deklarované Poskytovatelem.",
      },
      {
        cislo: "5.2",
        text: "Neoznámí-li kterákoli ze Smluvních stran druhé Smluvní straně nejpozději 30 dnů před uplynutím Počáteční doby, že o další pokračování spolupráce nemá zájem, mění se Smlouva uplynutím Počáteční doby na smlouvu na dobu neurčitou.",
      },
      {
        cislo: "5.3",
        text: "Smlouvu uzavřenou na dobu neurčitou (tj. po uplynutí Počáteční doby dle čl. 5.2) může kterákoli ze Smluvních stran vypovědět i bez udání důvodu, a to písemnou výpovědí doručenou druhé Smluvní straně. Výpovědní doba činí 1 (jeden) kalendářní měsíc a začíná běžet prvním dnem kalendářního měsíce následujícího po doručení výpovědi druhé Smluvní straně.",
      },
      {
        cislo: "5.4",
        text: "Objednatel je oprávněn Smlouvu vypovědět i v průběhu Počáteční doby, a to i bez udání důvodu. V takovém případě poskytování Služeb ze strany Poskytovatele končí dnem doručení výpovědi Poskytovateli, případně pozdějším dnem uvedeným ve výpovědi, nejpozději však uplynutím Počáteční doby.",
      },
      {
        cislo: "5.5",
        text: "Vzhledem k tomu, že se Smluvní strany dohodly na Počáteční době v délce 3 měsíců jako podmínce nezbytné pro poskytnutí Služeb v deklarované kvalitě dle čl. 5.1, je Poskytovatel v případě předčasného ukončení poskytování Služeb dle čl. 5.4 oprávněn požadovat po Objednateli úhradu Odměny za zbývající kalendářní měsíce Počáteční doby (tj. za období od skutečného ukončení poskytování Služeb do konce Počáteční doby), a to i tehdy, pokud v tomto období již Služby fakticky neposkytuje (dále jen „Kompenzace“). Kompenzace představuje náhradu odměny odpovídající minimální sjednané době spolupráce, nikoli smluvní pokutu.",
      },
      {
        cislo: "5.6",
        text: "Poskytovatel vyúčtuje Kompenzaci daňovým dokladem (fakturou) se splatností 14 dnů ode dne jejího vystavení; Poskytovatel je oprávněn vystavit fakturu na Kompenzaci za všechny zbývající měsíce Počáteční doby najednou, nebo postupně vždy k prvnímu dni příslušného kalendářního měsíce.",
      },
      {
        cislo: "5.7",
        text: "Ustanoveními čl. 5.4 až 5.6 není dotčeno právo kterékoli Smluvní strany odstoupit od Smlouvy s okamžitými účinky v případě podstatného porušení povinností druhou Smluvní stranou ve smyslu § 2002 OZ, zejména:",
        body: [
          { pismeno: "a", text: "je-li Objednatel v prodlení s úhradou splatné Odměny (nebo její části) déle než 15 dnů, a to i po marném uplynutí dodatečné přiměřené lhůty k nápravě poskytnuté Poskytovatelem;" },
          { pismeno: "b", text: "porušuje-li Objednatel opakovaně povinnost poskytovat součinnost dle čl. 7.3 těchto VOP takovým způsobem, že znemožňuje řádné poskytování Služeb;" },
          { pismeno: "c", text: "poruší-li kterákoli Smluvní strana povinnost mlčenlivosti dle čl. 9 těchto VOP." },
        ],
      },
      {
        cislo: "5.8",
        text: "Odstoupí-li Poskytovatel od Smlouvy z důvodů na straně Objednatele dle čl. 5.7 v průběhu Počáteční doby, náleží Poskytovateli nárok na Kompenzaci dle čl. 5.5 obdobně.",
      },
      {
        cislo: "5.9",
        text: "Ukončením Smlouvy (výpovědí, odstoupením či jinak) není dotčen nárok Poskytovatele na úhradu Odměny za Služby řádně poskytnuté do okamžiku ukončení Smlouvy, ani nárok na náhradu účelně vynaložených nákladů (např. závazně rezervovaný reklamní prostor nebo předplacené nástroje), které nelze zpětně stornovat.",
      },
    ],
  },
  {
    cislo: 6,
    nadpis: "Cena a platební podmínky",
    odstavce: [
      {
        cislo: "6.1",
        text: "Odměna Poskytovatele je sjednána jako pevná měsíční paušální částka dle Smlouvy a je uvedena bez DPH; Poskytovatel v současné době není plátcem DPH. Stane-li se Poskytovatel plátcem DPH, bude DPH k Odměně připočtena dle platných právních předpisů.",
      },
      {
        cislo: "6.2",
        text: "Odměna nezahrnuje reklamní rozpočet (media budget) vynakládaný na Reklamních platformách; způsob jeho hrazení (přímo Objednatelem provozovateli Reklamní platformy, nebo prostřednictvím Poskytovatele na základě zvláštní dohody) je upraven ve Smlouvě.",
      },
      {
        cislo: "6.3",
        text: "Poskytovatel vystaví daňový doklad (fakturu) na Odměnu vždy k prvnímu dni kalendářního měsíce, za který se Odměna hradí, se splatností 14 dnů ode dne vystavení, není-li ve Smlouvě sjednáno jinak.",
      },
      {
        cislo: "6.4",
        text: "V případě prodlení Objednatele s úhradou Odměny je Poskytovatel oprávněn požadovat úrok z prodlení ve výši stanovené nařízením vlády č. 351/2013 Sb., v platném znění.",
      },
      {
        cislo: "6.5",
        text: "Je-li Objednatel v prodlení s úhradou splatné Odměny déle než 10 dnů, je Poskytovatel oprávněn pozastavit poskytování Služeb až do úplného uhrazení dlužné částky, aniž by se tím dostal do prodlení se svými povinnostmi; běh Počáteční doby ani jiné sjednané doby trvání Smlouvy se po dobu takového pozastavení nestaví.",
      },
      {
        cislo: "6.6",
        text: "Vedle úroku z prodlení dle čl. 6.4 těchto VOP je Poskytovatel v případě prodlení Objednatele s úhradou jakékoli splatné peněžité částky dle Smlouvy oprávněn požadovat smluvní pokutu ve výši 0,1 % z dlužné částky za každý započatý den prodlení. Ujednáním o smluvní pokutě není dotčen nárok Poskytovatele na náhradu škody v rozsahu přesahujícím smluvní pokutu.",
      },
      {
        cislo: "6.7",
        text: "Nerozporuje-li Objednatel vystavený daňový doklad (fakturu) písemně u Poskytovatele do 10 dnů ode dne jeho doručení, považuje se jím vyúčtovaná částka za uznanou Objednatelem co do důvodu i výše.",
      },
      {
        cislo: "6.8",
        text: "Je-li Objednatel v prodlení s úhradou Odměny nebo její části déle než 30 dnů, je Poskytovatel oprávněn vyzvat Objednatele k písemnému uznání dluhu co do důvodu i výše ve smyslu § 2053 OZ; Objednatel se zavazuje takové výzvě vyhovět do 10 dnů od jejího doručení. Smluvní strany berou na vědomí, že v souladu s § 639 OZ se v případě uznání dluhu promlčecí lhůta k jeho vymáhání prodlužuje na 10 let ode dne uznání; za uznání dluhu se ve smyslu § 2054 OZ považuje i částečné plnění dluhu nebo placení úroku z dlužné částky.",
      },
      {
        cislo: "6.9",
        text: "Umožní-li Poskytovatel Objednateli ohledně dlužné částky splátkový kalendář, platí, že nezaplatí-li Objednatel řádně a včas kteroukoli jednotlivou splátku, stává se splatným celý zbývající dluh (ztráta výhody splátek), aniž by to muselo být Objednateli zvlášť oznámeno.",
      },
    ],
  },
  {
    cislo: 7,
    nadpis: "Práva a povinnosti smluvních stran",
    odstavce: [
      {
        cislo: "7.1",
        text: "Poskytovatel se zavazuje poskytovat Služby s odbornou péčí, v souladu s obecně závaznými právními předpisy a s platnými pravidly a podmínkami příslušných Reklamních platforem.",
      },
      {
        cislo: "7.2",
        text: "Poskytovatel neodpovídá za výsledky závislé na okolnostech mimo jeho kontrolu, zejména za změny algoritmů, pravidel, cen aukcí či funkčnosti Reklamních platforem, za jednání jejich provozovatelů (včetně pozastavení či zrušení Reklamního účtu, zamítnutí reklam apod.), za situaci na trhu, chování konkurence, sezónnost, ani za konkrétní obchodní výsledky (počet konverzí, výše obratu apod.) Objednatele, pokud nebyly výslovně písemně garantovány ve Smlouvě.",
      },
      {
        cislo: "7.3",
        text: "Objednatel se zavazuje poskytovat Poskytovateli řádnou a včasnou součinnost nezbytnou k poskytování Služeb, zejména zajistit přístupy do Reklamního účtu a souvisejících nástrojů, dodat podklady (texty, obrazový a video materiál, informace o produktech/službách) a schvalovat návrhy kreativ a kampaní v přiměřené lhůtě, nejpozději však do 3 pracovních dnů od vyžádání, nedohodnou-li se Smluvní strany jinak.",
      },
      {
        cislo: "7.4",
        text: "Objednatel odpovídá za soulad podkladů, tvrzení a materiálů, které Poskytovateli pro účely tvorby reklamního obsahu poskytne, s právními předpisy (zejména právem na ochranu spotřebitele, právem duševního vlastnictví třetích osob a předpisy upravujícími reklamu v příslušném oboru), a nese odpovědnost za škody vzniklé porušením této povinnosti.",
      },
    ],
  },
  {
    cislo: 8,
    nadpis: "Ochrana osobních údajů",
    odstavce: [
      {
        cislo: "8.1",
        text: "Bude-li Poskytovatel v rámci poskytování Služeb zpracovávat osobní údaje, k nimž je správcem Objednatel (např. údaje z formulářů pro generování poptávek/leadů), zavazují se Smluvní strany uzavřít samostatnou smlouvu o zpracování osobních údajů dle čl. 28 nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR), která bude tvořit přílohu Smlouvy.",
      },
      {
        cislo: "8.2",
        text: "Osobní údaje kontaktních osob Smluvních stran jsou zpracovávány v souladu s GDPR výhradně za účelem plnění Smlouvy a vzájemné komunikace Smluvních stran.",
      },
    ],
  },
  {
    cislo: 9,
    nadpis: "Mlčenlivost a ochrana dobré pověsti Poskytovatele",
    odstavce: [
      {
        cislo: "9.1",
        text: "Smluvní strany se zavazují zachovávat mlčenlivost o veškerých skutečnostech obchodní, technické či jiné povahy, se kterými se v souvislosti s plněním Smlouvy seznámí a které nejsou veřejně dostupné (dále jen „Důvěrné informace“), a nezpřístupnit je třetím osobám bez předchozího souhlasu druhé Smluvní strany, ledaže jejich zpřístupnění vyžaduje zákon.",
      },
      {
        cislo: "9.2",
        text: "Povinnost mlčenlivosti trvá i po ukončení Smlouvy, a to po dobu 3 let od jejího ukončení.",
      },
      {
        cislo: "9.3",
        text: "Poskytovatel je oprávněn uvést Objednatele (obchodní firmu, logo) v seznamu svých referencí a v marketingových materiálech Poskytovatele, ledaže mu Objednatel písemně sdělí, že si toto nepřeje.",
      },
      {
        cislo: "9.4",
        text: "Objednatel se zavazuje nezveřejňovat ani jinak nešířit, ať už sám nebo jeho prostřednictvím třetí osoba, o Poskytovateli, jím poskytovaných Službách nebo jeho spolupracovnících nepravdivá nebo vědomě zavádějící tvrzení způsobilá přivodit újmu na dobré pověsti Poskytovatele, zejména:",
        body: [
          { pismeno: "a", text: "hodnocení nebo recenzi na veřejně přístupné platformě (např. Google, Facebook, Instagram, Seznam.cz, Firmy.cz apod.), která neodpovídá skutečnému průběhu spolupráce nebo zkresluje její podstatné okolnosti;" },
          { pismeno: "b", text: "tvrzení o neplnění povinností Poskytovatele dle Smlouvy, které neodpovídá skutečnosti;" },
          { pismeno: "c", text: "jiné veřejné vyjádření (příspěvek na sociální síti, diskusním fóru, v tisku apod.) obsahující nepravdivé nebo vědomě zavádějící tvrzení o Poskytovateli." },
        ],
      },
      {
        cislo: "9.5",
        text: "Ustanovením čl. 9.4 těchto VOP není dotčeno právo Objednatele vyjádřit pravdivou, věcně podloženou a přiměřenou kritiku kvality poskytnutých Služeb; toto ustanovení směřuje výhradně proti tvrzením dle čl. 9.4 písm. a) až c) těchto VOP.",
      },
      {
        cislo: "9.6",
        text: "Poruší-li Objednatel kteroukoli z povinností dle čl. 9.4 písm. a) až c) těchto VOP, je povinen zaplatit Poskytovateli smluvní pokutu ve výši trojnásobku měsíční Odměny sjednané ve Smlouvě za každé jednotlivé porušení; za jednotlivé porušení se považuje i každá jednotlivá recenze, příspěvek nebo vyjádření. V případě trvajícího porušení (např. nestažení závadné recenze či příspěvku na výzvu Poskytovatele) vzniká nárok na smluvní pokutu za každý započatý týden trvání závadného stavu. Zaplacením smluvní pokuty není dotčen nárok Poskytovatele na náhradu škody v rozsahu přesahujícím smluvní pokutu, ani jeho právo požadovat odstranění závadného obsahu.",
      },
    ],
  },
  {
    cislo: 10,
    nadpis: "Duševní vlastnictví",
    odstavce: [
      {
        cislo: "10.1",
        text: "Nevyplývá-li ze Smlouvy jinak, uděluje Poskytovatel Objednateli okamžikem úplného zaplacení příslušné Odměny licenci k užití reklamních materiálů (kreativ, textů, grafiky, videí) vytvořených Poskytovatelem specificky pro Objednatele v rámci poskytování Služeb (dále jen „Dílo“), a to ve smyslu § 2358 a násl. OZ a zákona č. 121/2000 Sb., o právu autorském a o právech souvisejících s právem autorským (autorský zákon), v platném znění.",
      },
      {
        cislo: "10.2",
        text: "Licence se uděluje jako nevýhradní; Poskytovatel je i po jejím udělení oprávněn Dílo nebo jeho části dále užívat, zejména pro účely prezentace vlastní činnosti a jako referenci dle čl. 9.3 těchto VOP, případně je poskytnout i jiné osobě.",
      },
      {
        cislo: "10.3",
        text: "Licence se uděluje pro území České republiky a Slovenské republiky, nedohodnou-li se Smluvní strany ve Smlouvě jinak, a to na dobu trvání majetkových autorských práv k Dílu.",
      },
      {
        cislo: "10.4",
        text: "Licence se uděluje ke způsobům užití Díla souvisejícím s účelem, pro který bylo vytvořeno, zejména k užití v rámci reklamních kampaní na Reklamních platformách, na webových stránkách a profilech Objednatele na sociálních sítích a v jeho dalších marketingových materiálech.",
      },
      {
        cislo: "10.5",
        text: "Objednatel není oprávněn Dílo upravovat ani do něj jinak zasahovat, ani je spojovat s jiným dílem způsobem snižujícím jeho hodnotu nebo poškozujícím dobré jméno Poskytovatele, bez jeho předchozího souhlasu.",
      },
      {
        cislo: "10.6",
        text: "Licence dle čl. 10.1 těchto VOP se nevztahuje na obecné know-how, postupy, šablony, nástroje a metodiky Poskytovatele, které zůstávají jeho výhradním vlastnictvím i po ukončení Smlouvy.",
      },
      {
        cislo: "10.7",
        text: "Po ukončení Smlouvy poskytne Poskytovatel Objednateli na jeho žádost součinnost při předání přístupů k Reklamnímu účtu a datům v rozsahu, v jakém jsou vedeny na účtech vlastněných Objednatelem.",
      },
    ],
  },
  {
    cislo: 11,
    nadpis: "Omezení odpovědnosti",
    odstavce: [
      {
        cislo: "11.1",
        text: "Celková náhrada škody, kterou je Poskytovatel povinen uhradit Objednateli v souvislosti s plněním Smlouvy, je omezena do výše souhrnu Odměn uhrazených Objednatelem Poskytovateli za posledních 6 kalendářních měsíců předcházejících vzniku škodní události, nejde-li o škodu způsobenou úmyslně nebo z hrubé nedbalosti.",
      },
      {
        cislo: "11.2",
        text: "Poskytovatel neodpovídá za ušlý zisk Objednatele ani za nepřímé nebo následné škody.",
      },
      {
        cislo: "11.3",
        text: "Žádná ze Smluvních stran neodpovídá za nesplnění povinností způsobené okolnostmi vylučujícími odpovědnost (vyšší moc) ve smyslu § 2913 odst. 2 OZ, zejména za výpadky nebo změny na straně provozovatelů Reklamních platforem, mimořádné události, živelní pohromy, epidemie, válečné události a obdobné okolnosti, které daná Smluvní strana nemohla ovlivnit.",
      },
    ],
  },
  {
    cislo: 12,
    nadpis: "Změna VOP",
    odstavce: [
      {
        cislo: "12.1",
        text: "Poskytovatel je oprávněn tyto VOP v přiměřeném rozsahu jednostranně měnit, zejména v reakci na změny právních předpisů, podmínek Reklamních platforem nebo obchodní praxe.",
      },
      {
        cislo: "12.2",
        text: "Poskytovatel oznámí Objednateli změnu VOP nejméně 30 dnů před její účinností, a to na e-mailovou adresu Objednatele uvedenou ve Smlouvě. Nesouhlasí-li Objednatel se změnou VOP, je oprávněn Smlouvu z tohoto důvodu vypovědět s účinností ke dni předcházejícímu účinnost změny VOP; neučiní-li tak, má se za to, že se změnou VOP souhlasí.",
      },
      {
        cislo: "12.3",
        text: "Změna VOP nemá vliv na výši a splatnost peněžitých nároků vzniklých před její účinností.",
      },
    ],
  },
  {
    cislo: 13,
    nadpis: "Řešení sporů a rozhodné právo",
    odstavce: [
      {
        cislo: "13.1",
        text: "Tato Smlouva a VOP, jakož i práva a povinnosti z nich vyplývající, se řídí právním řádem České republiky, zejména občanským zákoníkem.",
      },
      {
        cislo: "13.2",
        text: "Smluvní strany se zavazují řešit případné spory přednostně smírnou cestou.",
      },
      {
        cislo: "13.3",
        text: "Veškeré majetkové spory vznikající z této Smlouvy nebo v souvislosti s ní budou rozhodovány s konečnou platností v rozhodčím řízení, a to jedním rozhodcem jmenovaným předsedou Rozhodčího soudu při Hospodářské komoře České republiky a Agrární komoře České republiky podle Řádu a Pravidel tohoto rozhodčího soudu, kterýžto Řád a Pravidla Smluvní strany prohlašují za sobě známé. Rozhodčí nález je pro Smluvní strany konečný a závazný.",
      },
      {
        cislo: "13.4",
        text: "Nebude-li rozhodčí doložka dle čl. 13.3 těchto VOP z jakéhokoli důvodu použitelná (např. pro neplatnost doložky nebo odmítnutí věc projednat), sjednávají Smluvní strany ve smyslu § 89a zákona č. 99/1963 Sb., občanský soudní řád, v platném znění, místní příslušnost obecného soudu Poskytovatele.",
      },
    ],
  },
  {
    cislo: 14,
    nadpis: "Doručování a závěrečná ustanovení",
    odstavce: [
      {
        cislo: "14.1",
        text: "Písemnosti dle Smlouvy nebo těchto VOP (zejména faktury, výzvy, odstoupení, výpovědi) se doručují na adresu sídla, popřípadě na e-mailovou adresu Smluvní strany uvedenou ve Smlouvě, nedohodnou-li se Smluvní strany na jiném způsobu doručování.",
      },
      {
        cislo: "14.2",
        text: "Nepřevezme-li Objednatel písemnost zaslanou Poskytovatelem prostřednictvím provozovatele poštovních služeb na adresu uvedenou ve Smlouvě, považuje se v souladu s § 573 OZ za doručenou třetí pracovní den po odeslání, byla-li zásilka odeslána na poslední adresu, kterou Poskytovateli Objednatel sdělil; totéž platí, odepře-li Objednatel písemnost převzít.",
      },
      {
        cislo: "14.3",
        text: "Písemnost zaslaná na e-mailovou adresu uvedenou ve Smlouvě se považuje za doručenou okamžikem jejího odeslání, neprokáže-li se, že se do sféry adresáta nedostala z důvodu na straně Poskytovatele.",
      },
      {
        cislo: "14.4",
        text: "Je-li nebo stane-li se některé ustanovení těchto VOP neplatným, neúčinným nebo nevymahatelným, nedotýká se to platnosti, účinnosti ani vymahatelnosti ostatních ustanovení. Smluvní strany se zavazují neplatné, neúčinné či nevymahatelné ustanovení nahradit ustanovením, které se svým účelem a hospodářským výsledkem nejvíce blíží ustanovení původnímu.",
      },
      {
        cislo: "14.5",
        text: "Tyto VOP nabývají platnosti a účinnosti dnem 12.06.2026 a jsou zveřejněny na internetových stránkách Poskytovatele www.hamrlabs.cz/obchodni-podminky.",
      },
    ],
  },
];
