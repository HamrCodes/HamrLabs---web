import { createHash } from "crypto";
import { META_PIXEL_ID } from "./meta-pixel-config";

const GRAPH_VERSION = "v21.0";

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

// Meta expects digits only for phone hashing (no +, spaces, dashes).
function normalizePhone(value: string): string {
  return value.replace(/[^\d]/g, "");
}

export interface MetaCapiEventInput {
  eventName: string;
  eventId: string;
  eventSourceUrl: string;
  clientIpAddress?: string;
  clientUserAgent?: string;
  fbp?: string;
  fbc?: string;
  email?: string;
  phone?: string;
  customData?: Record<string, unknown>;
}

/**
 * Sends one event to the Meta Conversions API. Best-effort: never throws,
 * only logs. A missing access token is a configuration gap, not a reason
 * to break the caller's UX (form submit, page view, etc).
 */
export async function sendMetaCapiEvent(input: MetaCapiEventInput): Promise<void> {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!accessToken) {
    console.warn(
      "[meta-capi] META_CAPI_ACCESS_TOKEN missing — skipping server-side event",
      input.eventName,
    );
    return;
  }

  const userData: Record<string, unknown> = {};
  if (input.clientIpAddress) userData.client_ip_address = input.clientIpAddress;
  if (input.clientUserAgent) userData.client_user_agent = input.clientUserAgent;
  if (input.fbp) userData.fbp = input.fbp;
  if (input.fbc) userData.fbc = input.fbc;
  if (input.email) userData.em = [sha256(input.email)];
  if (input.phone) userData.ph = [sha256(normalizePhone(input.phone))];

  const payload = {
    data: [
      {
        event_name: input.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: input.eventId,
        event_source_url: input.eventSourceUrl,
        action_source: "website",
        user_data: userData,
        ...(input.customData ? { custom_data: input.customData } : {}),
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${META_PIXEL_ID}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    if (!res.ok) {
      console.error("[meta-capi] send failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("[meta-capi] request error", err);
  }
}
