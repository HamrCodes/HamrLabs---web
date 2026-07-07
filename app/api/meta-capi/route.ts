import { NextRequest, NextResponse } from "next/server";
import { sendMetaCapiEvent } from "@/lib/meta-capi";

interface Body {
  eventName?: string;
  eventId?: string;
  eventSourceUrl?: string;
  email?: string;
  phone?: string;
  customData?: Record<string, unknown>;
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { eventName, eventId, eventSourceUrl, email, phone, customData } = body;
  if (!eventName || !eventId || !eventSourceUrl) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const forwardedFor = req.headers.get("x-forwarded-for");
  const clientIpAddress =
    forwardedFor?.split(",")[0]?.trim() ?? req.headers.get("x-real-ip") ?? undefined;
  const clientUserAgent = req.headers.get("user-agent") ?? undefined;
  const fbp = req.cookies.get("_fbp")?.value;
  const fbc = req.cookies.get("_fbc")?.value;

  // Fire-and-forget: the caller doesn't need to wait on Meta's response.
  sendMetaCapiEvent({
    eventName,
    eventId,
    eventSourceUrl,
    clientIpAddress,
    clientUserAgent,
    fbp,
    fbc,
    email,
    phone,
    customData,
  }).catch(() => {});

  return NextResponse.json({ ok: true });
}
