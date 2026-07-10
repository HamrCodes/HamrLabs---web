import createMDX from "@next/mdx";

// remark-gfm enables GitHub-flavored markdown in MDX (tables, strikethrough,
// autolinks) — the SEO blog articles use markdown tables. Under Turbopack the
// plugin MUST be given as a string tuple, not an imported function, so the
// loader options stay serializable.
const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-gfm", {}]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  devIndicators: false,
  // Active24 classic hosting is Apache-based static hosting — no Node.js
  // runtime. Every page here is either static or pre-rendered via
  // generateStaticParams, so a full static export is safe.
  output: "export",
  // Emit /path/index.html instead of /path.html so Apache serves each
  // route as a real directory (matches DirectorySlash behavior).
  trailingSlash: true,
};

export default withMDX(nextConfig);
