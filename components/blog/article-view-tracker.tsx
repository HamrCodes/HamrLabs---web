"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/meta-track-client";
import { articleViewParams } from "@/lib/meta-events";

interface Props {
  slug: string;
  title: string;
}

/**
 * ViewContent on an article. Readers are the top of the funnel here, so this
 * is what remarketing audiences get built from.
 */
export function ArticleViewTracker({ slug, title }: Props) {
  useEffect(() => {
    trackMetaEvent("ViewContent", articleViewParams(slug, title));
  }, [slug, title]);

  return null;
}
