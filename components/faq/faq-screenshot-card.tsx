interface Props {
  metricValue: string;
  metricLabel: string;
  caption: string;
  index: number;
}

export function FaqScreenshotCard({
  metricValue,
  metricLabel,
  caption,
  index,
}: Props) {
  return (
    <div
      className="faq-screenshot-card reveal"
      aria-hidden="true"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="faq-screenshot-bg">
        {/* TODO: replace with case-specific Meta Ads screenshot */}
        <span className="faq-screenshot-placeholder-label">
          Meta Ads screenshot
        </span>
      </div>

      <div className="faq-screenshot-content">
        <span className="faq-screenshot-metric">{metricValue}</span>
        <span className="faq-screenshot-metric-label">{metricLabel}</span>
        <span className="faq-screenshot-caption">{caption}</span>
      </div>
    </div>
  );
}
