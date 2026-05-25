import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="font-mono font-medium text-3xl md:text-4xl tracking-[-0.03em] text-fg leading-tight mt-16 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-mono font-medium text-xl md:text-2xl tracking-[-0.02em] text-fg leading-tight mt-10 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="font-sans text-base md:text-lg text-fg leading-relaxed mb-5 max-w-prose">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="flex flex-col gap-2 mb-6 max-w-prose font-sans text-base text-fg-muted list-disc pl-6">
        {children}
      </ul>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent underline underline-offset-4 hover:opacity-80"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-accent pl-6 py-2 font-mono italic text-lg text-fg my-6">
        {children}
      </blockquote>
    ),
    ...components,
  };
}
