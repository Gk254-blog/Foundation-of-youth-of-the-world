
const layers = [
  {
    number: "01",
    title: "Strategic Intelligence",
    description: "Research, strategic priorities, and institutional direction.",
    status: "Foundation stage",
  },
  {
    number: "02",
    title: "Innovation & Technology",
    description: "AI, emerging technologies, innovation, and opportunities.",
    status: "Foundation stage",
  },
  {
    number: "03",
    title: "Decision & Evidence",
    description: "Evidence analysis, insights, and decision support.",
    status: "Foundation stage",
  },
  {
    number: "04",
    title: "Master Intelligence Coordinator",
    description: "Connects agents and coordinates their research outputs.",
    status: "Foundation stage",
  },
  {
    number: "05",
    title: "Institutional Memory",
    description: "Preserves knowledge, research, and institutional learning.",
    status: "Foundation stage",
  },
];

export default function Home() {
  return (
    <main style={{ padding: "32px", maxWidth: "1100px", margin: "auto" }}>
      <header style={{ marginBottom: "40px" }}>
        <p style={{ color: "#60a5fa", letterSpacing: "2px" }}>
          YOUTH CAPITAL AND COMPLIANCE CORPORATION
        </p>
        <h1>Youth of the World</h1>
        <p>Coordinated Intelligence Dashboard</p>
      </header>

      <section style={{
        background: "#172338",
        padding: "24px",
        borderRadius: "12px",
        marginBottom: "32px"
      }}>
        <h2>Institutional Intelligence System</h2>
        <p>
          A coordinated environment for research, innovation,
          evidence-based decisions, and institutional memory.
        </p>
        <p style={{ color: "#fbbf24" }}>
          System status: Initial implementation
        </p>
      </section>

      <h2>Five Intelligence Layers</h2>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px"
      }}>
        {layers.map((layer) => (
          <article key={layer.number} style={{
            background: "#172338",
            border: "1px solid #334155",
            padding: "22px",
            borderRadius: "12px"
          }}>
            <p style={{ color: "#60a5fa" }}>{layer.number}</p>
            <h3>{layer.title}</h3>
            <p>{layer.description}</p>
            <small style={{ color: "#fbbf24" }}>{layer.status}</small>
          </article>
        ))}
      </section>

      <footer style={{ marginTop: "48px", color: "#94a3b8" }}>
        <p>Foundation of Youth of the World</p>
        <p>Research • Innovation • Evidence • Institutional Memory</p>
      </footer>
    </main>
  );
}
