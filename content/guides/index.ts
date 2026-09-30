import type { GuideContent } from "@/lib/guides";
import { businessManager } from "./business-manager";

/** Obsah návodů podle slugu z lib/guides.ts. */
export const guideContent: Record<string, GuideContent> = {
  "business-manager": businessManager,
};
