import "./Stats.css"

const stats = [
  {
    id: 1,
    value: "1000+",
    label: "Government Schemes",
  },
  {
    id: 2,
    value: "24/7",
    label: "AI Assistance",
  },
  {
    id: 3,
    value: "100%",
    label: "Free to Use",
  },
  {
    id: 4,
    value: "AI",
    label: "Powered Recommendations",
  },
]

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
