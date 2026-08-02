"use client";

export interface FunnelSubmission {
  branch: "call" | "message";
  answers: Record<string, string>;
}

// Sends the "Napsat zprávu" form to Tomáš via the serverless relay
// (hamr-capi.vercel.app/api/contact), which delivers it through Resend. The
// site itself is a static export with no server, so it can't hold the Resend
// key or call Resend directly — the relay does both.
const CONTACT_ENDPOINT = "https://hamr-capi.vercel.app/api/contact";

export async function submitFunnel(
  submission: FunnelSubmission,
): Promise<{ ok: boolean }> {
  try {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        branch: submission.branch,
        answers: submission.answers,
      }),
    });
    const data = await res.json().catch(() => ({ ok: false }));
    if (!data.ok) {
      console.error("[funnel] contact relay rejected submission", data);
    }
    return { ok: Boolean(data.ok) };
  } catch (err) {
    console.error("[funnel] contact relay request error", err);
    return { ok: false };
  }
}
