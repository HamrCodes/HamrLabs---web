"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/meta-track-client";

interface Props {
  slug: string;
  title: string;
}

/** Fires Meta's ViewContent event when a visitor opens a case study sub-page. */
export function CaseStudyViewTracker({ slug, title }: Props) {
  useEffect(() => {
    trackMetaEvent("ViewContent", {
      customData: {
        content_name: title,
        content_ids: [slug],
        content_type: "product",
      },
    });
  }, [slug, title]);

  return null;
}
