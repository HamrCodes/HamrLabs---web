// ESLint flat config (Next 16 removed `next lint`). Same base as the
// create-next-app template: Next core web vitals plus the TypeScript rules.
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The site is a static export on Active24. Links between pages are
      // plain <a> on purpose: a full page load re-runs the hash handler that
      // opens the consultation form (/#konzultace) and the Pixel's PageView.
      "@next/next/no-html-link-for-pages": "off",
      // Several components read browser-only state (localStorage consent,
      // prefers-reduced-motion, scroll position) once after mount, which the
      // prerendered HTML cannot know. Kept visible as a warning, not an error.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
