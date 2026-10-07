import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SHORT_WORD = /(^|[\s ])([ksvzouaiKSVZOUAI]) /g;

/**
 * Czech typography: a one-letter preposition or conjunction ("s Meta",
 * "u Vás") must not end a line, so it is glued to the next word with a
 * no-break space. Two passes, because one match eats the space in front of
 * the next one ("a v balíčku"). No lookbehind: older Safari cannot parse it.
 */
export function keepShortWords(text: string): string {
  const glue = (t: string) => t.replace(SHORT_WORD, "$1$2 ");
  return glue(glue(text));
}
