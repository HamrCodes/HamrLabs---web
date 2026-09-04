"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/meta-track-client";
import { caseStudyViewParams } from "@/lib/meta-events";

interface Props {
  slug: string;
  title: string;
}

/** Fires Meta's ViewContent event when a visitor opens a case study sub-page. */
export function CaseStudyViewTracker({ slug, title }: Props) {
  useEffect(() => {
    trackMetaEvent("ViewContent", caseStudyViewParams(slug, title));
  }, [slug, title]);

  return null;
}
