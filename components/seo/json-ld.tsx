/**
 * Renders a JSON-LD <script>. The `<` escape prevents any string value from
 * breaking out of the script tag (XSS-safe serialization).
 */
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
