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
      <ul className="flex flex-col gap-2 mb-6 max-w-prose font-sans text-base text-fg-muted list-disc pl-6 marker:text-accent">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="flex flex-col gap-2 mb-6 max-w-prose font-sans text-base text-fg-muted list-decimal pl-6 marker:text-accent marker:font-mono">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-fg">{children}</strong>
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
    hr: () => <hr className="border-0 border-t border-rule my-12" />,
    // Wide tables scroll horizontally instead of overflowing the layout.
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto rounded-xl border border-rule">
        <table className="w-full border-collapse font-sans text-sm md:text-[15px]">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-bg-elevated">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="text-left font-mono text-xs uppercase tracking-[0.08em] text-fg px-4 py-3 border-b border-rule-strong">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="text-fg-muted px-4 py-3 border-b border-rule align-top leading-relaxed">
        {children}
      </td>
    ),
    ...components,
  };
}
