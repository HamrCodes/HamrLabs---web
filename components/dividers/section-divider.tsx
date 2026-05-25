interface Props {
  label: string;
}

export function SectionDivider({ label }: Props) {
  return (
    <div className="section-divider container-ultra" aria-hidden="true">
      <span className="section-divider-line" />
      <span className="section-divider-label">{label}</span>
      <span className="section-divider-line" />
    </div>
  );
}
