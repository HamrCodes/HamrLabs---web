import { ExtLink, P, StepLink, Tip } from "@/components/guides/guide-parts";
import { PartnerIdBox } from "@/components/guides/partner-id-box";
import { HAMR_LABS_BUSINESS_ID, type GuideContent } from "@/lib/guides";

/**
 * Postup ověřený proti rozhraní Mety k datu `updated` v lib/guides.ts.
 * Meta občas přejmenuje tlačítka; při úpravě textu drž názvy tak, jak je
 * vidí klient v češtině.
 */
export const businessManager: GuideContent = {
  lead: (
    <>
      Business Manager je místo, kde má Vaše firma pohromadě stránku,
      Instagram, reklamní účet a platby. Meta mu dnes říká firemní portfolio,
      jde o totéž. Založíte ho za 10 minut a pak mi jen nasdílíte přístup.
      Účty zůstávají Vaše, i kdybychom spolupráci ukončili.
    </>
  ),

  needs: [
    "Osobní profil na Facebooku. Slouží jen k přihlášení.",
    "Firemní e-mail pro potvrzení od Mety.",
    "Plný přístup k firemní stránce na Facebooku (a k Instagramu, pokud ho máte).",
    "Firemní platební kartu na reklamu.",
  ],

  steps: [
    {
      title: "Založte firemní portfolio",
      body: (
        <>
          <P>
            Otevřete{" "}
            <ExtLink href="https://business.facebook.com/overview">
              business.facebook.com/overview
            </ExtLink>{" "}
            a klikněte na <strong className="font-semibold">Vytvořit účet</strong>.
            Přihlaste se svým osobním Facebookem.
          </P>
          <P>
            Vyplňte název firmy, své jméno a firemní e-mail. Název pište stejně
            jako na fakturách. Nakonec potvrďte e-mail přes odkaz, který Vám
            Meta pošle.
          </P>
          <Tip label="Už ho máte?">
            Business Manager z dřívějška stačí. Nový nezakládejte a pokračujte{" "}
            <StepLink n={2}>krokem 2</StepLink>.
          </Tip>
        </>
      ),
    },
    {
      title: "Přidejte firemní stránku",
      body: (
        <>
          <P>
            Otevřete{" "}
            <ExtLink href="https://business.facebook.com/settings">
              Nastavení firmy
            </ExtLink>
            . V levém menu klikněte na <strong className="font-semibold">Účty</strong>{" "}
            a pak na <strong className="font-semibold">Stránky</strong>.
          </P>
          <P>
            Klikněte na <strong className="font-semibold">Přidat</strong>, zvolte
            přidání existující stránky a vyhledejte ji podle názvu. Stránku
            nemáte? Ve stejném menu ji rovnou vytvoříte.
          </P>
          <Tip label="Pozor">
            Stránku přidáte, jen když k ní máte plný přístup. Zakládal ji někdo
            jiný, třeba grafik nebo dřívější agentura? Požádejte ho, ať Vám plný
            přístup předá.
          </Tip>
        </>
      ),
    },
    {
      title: "Připojte Instagram",
      body: (
        <>
          <P>
            V Nastavení firmy otevřete <strong className="font-semibold">Účty</strong>{" "}
            a pak <strong className="font-semibold">Instagramové účty</strong>.
            Klikněte na <strong className="font-semibold">Přidat</strong> a
            přihlaste se do firemního Instagramu.
          </P>
          <P>
            Instagram musí být profesionální účet. Přepnete ho v aplikaci
            Instagram v nastavení účtu, trvá to minutu. Instagram nemáte? Tenhle
            krok přeskočte.
          </P>
        </>
      ),
    },
    {
      title: "Vytvořte reklamní účet",
      body: (
        <>
          <P>
            V Nastavení firmy otevřete <strong className="font-semibold">Účty</strong>{" "}
            a pak <strong className="font-semibold">Reklamní účty</strong>.
            Klikněte na <strong className="font-semibold">Přidat</strong> a zvolte
            vytvoření nového reklamního účtu.
          </P>
          <P>
            Účet pojmenujte podle firmy. Časové pásmo nastavte na Prahu a měnu
            na české koruny (CZK). Na otázku, pro koho účet bude, zvolte{" "}
            <strong className="font-semibold">Moje firma</strong>.
          </P>
          <Tip label="Pozor">
            Měnu ani časové pásmo už potom nejde změnit. Zkontrolujte je dvakrát.
          </Tip>
          <P>
            Reklamní účet už máte, třeba z dřívějšího boostování? Nový
            nezakládejte a přidejte do portfolia ten stávající.
          </P>
        </>
      ),
    },
    {
      title: "Přidejte platební kartu",
      body: (
        <>
          <P>
            Otevřete <strong className="font-semibold">Fakturace a platby</strong>,
            vyberte nový reklamní účet a přidejte firemní kartu.
          </P>
          <P>
            Reklamu platíte přímo Metě z Vaší karty a faktury za ni Vám chodí
            od Mety. Svoji odměnu fakturuji zvlášť.
          </P>
          <Tip>
            Chcete mít útratu pod kontrolou? Nastavte si v platbách limit útraty
            účtu. Reklama se přes něj nedostane.
          </Tip>
        </>
      ),
    },
    {
      title: "Nasdílejte mi přístup",
      body: (
        <>
          <P>
            V Nastavení firmy otevřete <strong className="font-semibold">Uživatelé</strong>{" "}
            a pak <strong className="font-semibold">Partneři</strong>. Klikněte na{" "}
            <strong className="font-semibold">Přidat</strong> a zvolte udělení
            přístupu k Vašim aktivům. Pak vložte ID mého firemního portfolia:
          </P>
          <PartnerIdBox id={HAMR_LABS_BUSINESS_ID} />
          <P>
            Vyberte stránku, Instagram a reklamní účet. U stránky mi zapněte
            reklamy, leady a statistiky, u reklamního účtu správu kampaní. Plnou
            kontrolu mi dávat nemusíte.
          </P>
          <P>
            Uložte a napište mi, že je hotovo. Zkontroluji, že vše vidím, a do
            24 hodin se Vám ozvu s dalším krokem.
          </P>
        </>
      ),
    },
  ],

  faq: [
    {
      q: "Uvidíte můj osobní Facebook?",
      a: "Ne. Osobní profil slouží jen k přihlášení. Vaše příspěvky, zprávy ani přátele nevidím.",
    },
    {
      q: "Musím Vám posílat heslo?",
      a: "Nikdy. Přístup se sdílí přes ID portfolia a heslo si neposíláme. Kdyby po Vás heslo někdo chtěl, jde o podvod.",
    },
    {
      q: "Co když spolupráci ukončíme?",
      a: "V Nastavení firmy otevřete Partneři a přístup mi jedním kliknutím odeberete. Stránka, reklamní účet i všechna data zůstávají Vaše.",
    },
  ],
};
