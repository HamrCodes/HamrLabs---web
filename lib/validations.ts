import { z } from "zod";

export const interestOptions = [
  { value: "meta-ads", label: "Meta Ads" },
  { value: "lead-gen", label: "Lead Generation" },
  { value: "ai-content", label: "AI Obsah" },
  { value: "audit", label: "Audit & Strategie" },
  { value: "full", label: "Kompletní spolupráce" },
] as const;

export const interestValues = interestOptions.map((o) => o.value) as [
  (typeof interestOptions)[number]["value"],
  ...(typeof interestOptions)[number]["value"][],
];

export const contactSchema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  company: z.string().optional(),
  email: z.string().email("Neplatný formát e-mailu"),
  interest: z.enum(interestValues).optional().or(z.literal("")),
  message: z.string().optional(),
  // honeypot must be empty
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
