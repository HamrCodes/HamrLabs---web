"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackMetaEvent } from "@/lib/meta-track-client";
import { konzultaceParams } from "@/lib/meta-events";
import { submitKonzultace, type KonzultaceKontakt } from "@/lib/submit-konzultace";
import { overTelefon } from "@/lib/telefon";
import { CHYBA_EMAIL, EMAIL_RE } from "./funnel-data";

/**
 * Krátký formulář před kalendářem: jméno, e-mail, telefon a souhlas.
 * Kontakt jde do Systému hned (nedokončená rezervace), takže navolávač
 * zavolá i tomu, kdo kalendář zavře bez výběru termínu. Pak se otevře
 * Calendly s předvyplněnými údaji.
 *
 * Telefon se ověří proti číselným plánům CZ, SK, DE, PL a AT (lib/telefon).
 * Neplatné číslo zastaví odeslání s chybou u pole; Calendly by ho stejně
 * odmítlo. Do Systému, Mety i Calendly jde číslo v E.164.
 *
 * Na kliknutí se žádný Lead neposílá. KonzultaceFormular odejde až po
 * zápisu do Systému a jen s marketingovým souhlasem (trackMetaEvent).
 */
export function FunnelKonzultace({ onDone }: { onDone: (kontakt: KonzultaceKontakt) => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+420 ");
  const [souhlas, setSouhlas] = useState(false);
  const [sending, setSending] = useState(false);
  const [zkouseno, setZkouseno] = useState(false);

  const telefon = overTelefon(phone);
  const chyby = {
    name: name.trim().length < 2 ? "Vyplňte jméno a příjmení." : null,
    email: !EMAIL_RE.test(email.trim()) ? CHYBA_EMAIL : null,
    phone: telefon.ok ? null : telefon.chyba,
    souhlas: !souhlas ? "Bez souhlasu Vám termín domluvit nemůžu." : null,
  };
  const platne = !chyby.name && !chyby.email && !chyby.phone && !chyby.souhlas;

  // After leaving the field a valid number shows in the international form
  // ("+420 774 964 919"), so the visitor sees what goes out, +420 included.
  const ucesatTelefon = () => {
    if (telefon.ok && phone !== telefon.hezky) setPhone(telefon.hezky);
  };

  const odeslat = async (e: React.FormEvent) => {
    e.preventDefault();
    setZkouseno(true);
    if (!platne || !telefon.ok || sending) return;
    const kontakt = { name: name.trim(), email: email.trim(), phone: telefon.e164 };
    setSending(true);
    const { ok } = await submitKonzultace(kontakt);
    setSending(false);
    if (ok) trackMetaEvent("KonzultaceFormular", konzultaceParams(), kontakt);
    // Kalendář se otevře vždy: rezervaci nesmí zablokovat výpadek Systému.
    onDone(kontakt);
  };

  const chyba = (pole: keyof typeof chyby) =>
    zkouseno && chyby[pole] ? (
      <span id={`konzultace-${pole}-chyba`} className="funnel-field-error" role="alert">
        {chyby[pole]}
      </span>
    ) : null;

  return (
    <form className="funnel-step" onSubmit={odeslat} noValidate>
      <h2 className="funnel-step-heading">Nezávazná konzultace</h2>
      <p className="funnel-step-subheading">
        Nechte mi na sebe kontakt a pak si vyberte termín. Kdybyste termín
        nevybrali, ozvu se Vám a domluvíme ho spolu.
      </p>

      <div className="funnel-step-questions">
        <div className="funnel-question">
          <label htmlFor="konzultace-name" className="funnel-question-label">
            Jméno a příjmení
          </label>
          <input
            id="konzultace-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jan Novák"
            aria-invalid={zkouseno && Boolean(chyby.name)}
            aria-describedby={zkouseno && chyby.name ? "konzultace-name-chyba" : undefined}
            className="funnel-input"
          />
          {chyba("name")}
        </div>
        <div className="funnel-question">
          <label htmlFor="konzultace-email" className="funnel-question-label">
            E-mail
          </label>
          <input
            id="konzultace-email"
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jan@novakstavby.cz"
            aria-invalid={zkouseno && Boolean(chyby.email)}
            aria-describedby={zkouseno && chyby.email ? "konzultace-email-chyba" : undefined}
            className="funnel-input"
          />
          {chyba("email")}
        </div>
        <div className="funnel-question">
          <label htmlFor="konzultace-phone" className="funnel-question-label">
            Telefon
          </label>
          <input
            id="konzultace-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={ucesatTelefon}
            placeholder="+420 777 123 456"
            aria-invalid={zkouseno && Boolean(chyby.phone)}
            aria-describedby={zkouseno && chyby.phone ? "konzultace-phone-chyba" : undefined}
            className="funnel-input"
          />
          {chyba("phone")}
        </div>
        <div className="funnel-question">
          <label htmlFor="konzultace-souhlas" className="funnel-consent">
            <input
              id="konzultace-souhlas"
              name="souhlas"
              type="checkbox"
              checked={souhlas}
              onChange={(e) => setSouhlas(e.target.checked)}
              aria-invalid={zkouseno && Boolean(chyby.souhlas)}
              aria-describedby={zkouseno && chyby.souhlas ? "konzultace-souhlas-chyba" : undefined}
            />
            <span>
              Souhlasím se zpracováním osobních údajů za účelem domluvení
              konzultace podle{" "}
              <a href="/privacy/" target="_blank" rel="noopener noreferrer">
                zásad ochrany osobních údajů
              </a>
              .
            </span>
          </label>
          {chyba("souhlas")}
        </div>
      </div>

      <div className="funnel-nav funnel-nav--single">
        <button type="submit" disabled={sending} className="funnel-nav-button funnel-nav-button--next">
          <span>{sending ? "Ukládám…" : "Pokračovat k výběru termínu"}</span>
          <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden focusable={false} />
        </button>
      </div>
      <p className="funnel-microcopy">Údaje použiju jen k domluvení konzultace.</p>
    </form>
  );
}
