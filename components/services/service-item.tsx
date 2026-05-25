import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceItem({ icon: Icon, title, description, index }: Props) {
  return (
    <div
      className="service-item reveal"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Icon
        className="service-item-icon"
        strokeWidth={1.5}
        aria-hidden="true"
        focusable={false}
      />
      <div className="service-item-content">
        <h3 className="service-item-title">{title}</h3>
        <p className="service-item-description">{description}</p>
      </div>
    </div>
  );
}
