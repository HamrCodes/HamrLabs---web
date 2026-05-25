interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "5M+ Kč", label: "Spravované budgety" },
  { value: "3,2×", label: "Průměrné ROAS" },
  { value: "−38%", label: "Průměrný pokles CPL" },
];

export function AboutStatsGrid() {
  return (
    <div className="about-stats-grid">
      {stats.map((stat, idx) => (
        <div
          key={stat.label}
          className="about-stat-tile reveal"
          style={{ transitionDelay: `${idx * 80}ms` }}
        >
          <span className="about-stat-value">{stat.value}</span>
          <span className="about-stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
