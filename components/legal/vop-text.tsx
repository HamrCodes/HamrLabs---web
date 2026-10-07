import type { ReactNode } from "react";
import { vopClanky } from "@/content/legal/vop";

// Turns cross-references such as "čl. 5.5", "čl. 3" or "čl. 5.4 až 5.6" into
// links to the matching anchors (#cl-5-5, #cl-3). Only targets that exist in
// the VOP are linked, so "čl. 28 nařízení … (GDPR)" stays plain text. The
// visible text is never changed, only wrapped.

const articleIds = new Set(vopClanky.map((a) => String(a.cislo)));
const paragraphIds = new Set(
  vopClanky.flatMap((a) => a.odstavce.map((p) => p.cislo)),
);

export function vopAnchor(ref: string): string | null {
  if (ref.includes(".")) {
    return paragraphIds.has(ref) ? `cl-${ref.replace(".", "-")}` : null;
  }
  return articleIds.has(ref) ? `cl-${ref}` : null;
}

const REFERENCE = /čl\. (\d+(?:\.\d+)?)(?: až (\d+\.\d+))?/g;

const linkClass =
  "text-fg underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent";

export function VopText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(REFERENCE)) {
    const [, first, rangeEnd] = match;
    const firstAnchor = vopAnchor(first);
    if (!firstAnchor) continue;

    const start = match.index;
    parts.push(text.slice(last, start));
    parts.push(
      <a key={`${start}-a`} href={`#${firstAnchor}`} className={linkClass}>
        čl. {first}
      </a>,
    );
    if (rangeEnd) {
      const endAnchor = vopAnchor(rangeEnd);
      parts.push(" až ");
      parts.push(
        endAnchor ? (
          <a key={`${start}-b`} href={`#${endAnchor}`} className={linkClass}>
            {rangeEnd}
          </a>
        ) : (
          rangeEnd
        ),
      );
    }
    last = start + match[0].length;
  }
  parts.push(text.slice(last));

  return <>{parts}</>;
}
