"use server";

import { Resend } from "resend";

const DEFAULT_TO_EMAIL = "tomas.hammernik@gmail.com";

export type ContactState = {
  status: "idle" | "success" | "error";
  error?: string;
};

export interface FunnelSubmission {
  branch: "call" | "message";
  answers: Record<string, string>;
}

function escape(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatAnswers(answers: Record<string, string>): string {
  const labels: Record<string, string> = {
    experience: "Zkušenosti s marketingem",
    project: "Popis projektu",
    name: "Jméno",
    company: "Firma",
    phone: "Telefon",
    email: "E-mail",
    slot: "Termín hovoru",
  };
  return Object.entries(answers)
    .map(([k, v]) => {
      const label = labels[k] || k;
      return `<p><strong>${escape(label)}:</strong> ${escape(v)}</p>`;
    })
    .join("");
}

export async function submitFunnel(
  submission: FunnelSubmission,
): Promise<ContactState> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.RESEND_TO_EMAIL || DEFAULT_TO_EMAIL;

  if (!apiKey) {
    console.warn("[funnel] RESEND_API_KEY missing — skipping send.", submission);
    return { status: "success" };
  }

  const replyTo = submission.answers.email;
  const name = submission.answers.name || "Neznámý";
  const branchLabel =
    submission.branch === "call" ? "Nezávazná konzultace" : "Kontaktovat tým";

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Hamr Labs <noreply@hamrlabs.cz>",
      to: toEmail,
      replyTo,
      subject: `[${branchLabel}] Nová zpráva od ${name}`,
      html: `
        <h2>Nová zpráva z webu — ${branchLabel}</h2>
        ${formatAnswers(submission.answers)}
      `,
    });
    return { status: "success" };
  } catch (err) {
    console.error("[funnel] Resend error", err);
    return {
      status: "error",
      error: "Něco se rozbilo. Zkuste to znovu, nebo napište přímo na e-mail.",
    };
  }
}
