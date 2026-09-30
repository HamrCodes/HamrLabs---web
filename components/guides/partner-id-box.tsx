"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * ID firemního portfolia, které klient vkládá do Mety při sdílení přístupu.
 * Tlačítko ho zkopíruje; když prohlížeč schránku nepustí, číslo jde
 * označit ručně (select-all).
 */
export function PartnerIdBox({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
    } catch {
      // Schránka zablokovaná: číslo zůstává viditelné a jde označit.
    }
  }

  return (
    <div className="my-6 flex max-w-prose flex-col gap-4 rounded-2xl border border-rule bg-bg-elevated p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
          ID firemního portfolia Hamr Labs
        </p>
        <p
          translate="no"
          className="mt-2 select-all font-mono text-2xl md:text-3xl tabular-nums tracking-[0.04em] text-fg break-all"
        >
          {id}
        </p>
      </div>
      <button
        type="button"
        onClick={copy}
        className="touch-manipulation inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-rule-strong px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-fg transition-colors hover:border-accent hover:text-accent sm:self-auto"
      >
        {copied ? (
          <Check aria-hidden className="h-4 w-4" strokeWidth={1.5} />
        ) : (
          <Copy aria-hidden className="h-4 w-4" strokeWidth={1.5} />
        )}
        {copied ? "Zkopírováno" : "Zkopírovat ID"}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "ID je ve schránce" : ""}
      </span>
    </div>
  );
}
