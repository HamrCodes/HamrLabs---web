// Cuts the phone metadata the contact forms need out of libphonenumber-js
// "max" metadata: Czechia (default), Slovakia, Germany, Poland and Austria.
//
// Why not the library's default import: its "min" metadata only checks the
// length of a number, so "+420 600 000 000" passes as valid and Calendly then
// rejects it. "max" knows the real number ranges, but all of it would add
// about 50 kB gzip to every page. This cut is about 2 kB gzip.
//
// Runs as "prebuild", so a library upgrade regenerates the cut. The output
// (lib/telefon-metadata.json) is committed; the relay hamr-capi uses the same
// library version with the full "max" metadata.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.join(root, "lib", "telefon-metadata.json");

const CALLING_CODES = ["420", "421", "48", "49", "43"];
const COUNTRIES = ["CZ", "SK", "DE", "PL", "AT"];

const max = require("libphonenumber-js/metadata.max.json");

const country_calling_codes = {};
for (const code of CALLING_CODES) {
  const list = max.country_calling_codes[code];
  if (!list) throw new Error(`Calling code ${code} missing in metadata.max.json`);
  // Each of these codes belongs to exactly one country; keep only ours anyway.
  country_calling_codes[code] = list.filter((c) => COUNTRIES.includes(c));
}

const countries = {};
for (const country of COUNTRIES) {
  const data = max.countries[country];
  if (!data) throw new Error(`Country ${country} missing in metadata.max.json`);
  countries[country] = data;
}

// nonGeographic (+800, +882 and the like) stays empty: those are not numbers
// anyone calls back. The key itself keeps the MetadataJson shape.
const cut = { version: max.version, country_calling_codes, countries, nonGeographic: {} };
const json = JSON.stringify(cut) + "\n";

// Compare without CR: a Windows checkout (core.autocrlf) has the file with
// CRLF, and rewriting it on every build would leave a phantom git change.
const current = fs.existsSync(target)
  ? fs.readFileSync(target, "utf8").replace(/\r\n/g, "\n")
  : null;
if (current === json) {
  console.log(`telefon-metadata: ${path.relative(root, target)} is up to date`);
} else {
  fs.writeFileSync(target, json);
  console.log(`telefon-metadata: wrote ${path.relative(root, target)} (${json.length} B)`);
}
