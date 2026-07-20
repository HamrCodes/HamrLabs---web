"use client";

export interface FunnelSubmission {
  branch: "call" | "message";
  answers: Record<string, string>;
}

// Human-readable labels for the Web3Forms notification email.
const FIELD_LABELS: Record<string, string> = {
  experience: "Zkušenosti s marketingem",
  project: "Popis projektu",
  name: "Jméno",
  company: "Firma",
  phone: "Telefon",
  email: "E-mail",
  slot: "Termín hovoru",
};

/**
 * Static-hosting-friendly replacement for the old Resend Server Action.
 * Web3Forms' access key is designed to be public (their docs explicitly
 * say it's safe in client-side code, same model as a Google Form ID) —
 * it identifies the destination inbox, it isn't a secret credential.
 */
export async function submitFunnel(
  submission: FunnelSubmission,
): Promise<{ ok: boolean }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    console.warn(
      "[funnel] NEXT_PUBLIC_WEB3FORMS_KEY missing — skipping send.",
      submission,
    );
    return { ok: false };
  }

  const branchLabel =
    submission.branch === "call" ? "Nezávazná konzultace" : "Napsat zprávu";
  const name = submission.answers.name || "Neznámý";

  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(submission.answers)) {
    fields[FIELD_LABELS[key] ?? key] = value;
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[${branchLabel}] Nová zpráva od ${name}`,
        from_name: "Hamr Labs web",
        replyto: submission.answers.email,
        ...fields,
      }),
    });
    const data = await res.json();
    if (!data.success) {
      console.error("[funnel] Web3Forms rejected submission", data);
    }
    return { ok: Boolean(data.success) };
  } catch (err) {
    console.error("[funnel] Web3Forms request error", err);
    return { ok: false };
  }
}
