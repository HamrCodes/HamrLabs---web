import { Clock, ShieldCheck, BarChart3 } from "lucide-react";

const trustSignals = [
  { icon: Clock, label: "První výsledky do 14 dnů" },
  { icon: ShieldCheck, label: "Bez výpovědních lhůt" },
  { icon: BarChart3, label: "Výsledky vidíte kdykoliv, 24/7" },
];

export function ProcessTrustBar() {
  return (
    <div className="trust-bar" aria-label="Co spolupráce zahrnuje">
      {trustSignals.map((signal) => {
        const Icon = signal.icon;
        return (
          <div key={signal.label} className="trust-bar-item">
            <Icon
              className="trust-bar-icon"
              strokeWidth={1.5}
              aria-hidden="true"
              focusable={false}
            />
            <span className="trust-bar-label">{signal.label}</span>
          </div>
        );
      })}
    </div>
  );
}
