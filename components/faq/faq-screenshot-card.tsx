interface Props {
  metricValue: string;
  metricLabel: string;
  caption: string;
  image?: string;
  index: number;
}

export function FaqScreenshotCard({
  metricValue,
  metricLabel,
  caption,
  image,
  index,
}: Props) {
  return (
    <div
      className={`faq-screenshot-card reveal${image ? " faq-screenshot-card--has-image" : ""}`}
      aria-hidden="true"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="faq-screenshot-bg">
        {image ? (
          <img src={image} alt="" className="faq-screenshot-img" loading="lazy" />
        ) : (
          <span className="faq-screenshot-placeholder-label">
            Meta Ads screenshot
          </span>
        )}
      </div>

      <div className="faq-screenshot-content">
        <span className="faq-screenshot-metric">{metricValue}</span>
        <span className="faq-screenshot-metric-label">{metricLabel}</span>
        <span className="faq-screenshot-caption">{caption}</span>
      </div>
    </div>
  );
}
