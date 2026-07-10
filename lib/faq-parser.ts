import type { FaqEntry } from "./seo";

// Strip inline markdown to plain text for schema answer values.
function stripMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> text
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/\*([^*]+)\*/g, "$1") // italic
    .replace(/`([^`]+)`/g, "$1") // inline code
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extracts the FAQ Q&A from a blog article's raw MDX body. Handles both
 * formats used across the articles:
 *   A) "### Question" headings
 *   B) "**Question?**" bold lines
 * The answer is every following paragraph until the next question, next H2,
 * or end of the FAQ section (delimited by the "## Časté dotazy" heading).
 */
export function parseFaq(mdx: string): FaqEntry[] {
  const lines = mdx.split("\n");

  // find the FAQ section bounds
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+Časté dotazy\s*$/.test(lines[i].trim())) {
      start = i + 1;
      break;
    }
  }
  if (start === -1) return [];

  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i]) && !/^###/.test(lines[i])) {
      end = i;
      break;
    }
  }

  const section = lines.slice(start, end);
  const isQuestion = (raw: string): string | null => {
    const l = raw.trim();
    const h3 = l.match(/^###\s+(.+?)\s*$/);
    if (h3) return h3[1];
    const bold = l.match(/^\*\*(.+?)\*\*\s*$/);
    if (bold) return bold[1];
    return null;
  };

  const faqs: FaqEntry[] = [];
  let current: { question: string; answer: string[] } | null = null;
  for (const raw of section) {
    const q = isQuestion(raw);
    if (q) {
      if (current) {
        faqs.push({
          question: stripMarkdown(current.question),
          answer: stripMarkdown(current.answer.join(" ")),
        });
      }
      current = { question: q, answer: [] };
    } else if (current && raw.trim() !== "") {
      current.answer.push(raw.trim());
    }
  }
  if (current) {
    faqs.push({
      question: stripMarkdown(current.question),
      answer: stripMarkdown(current.answer.join(" ")),
    });
  }

  // drop any malformed entries (empty answer)
  return faqs.filter((f) => f.question && f.answer);
}

/** Rough word count of an MDX body (for BlogPosting.wordCount). */
export function wordCount(mdx: string): number {
  const text = mdx
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*`|_\-\]\[()]/g, " ");
  return (text.match(/\p{L}+/gu) || []).length;
}
