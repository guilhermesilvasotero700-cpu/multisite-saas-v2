export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "260px",
          background: "#111827",
          padding: "30px 20px",
          borderRight: "1px solid #1f2937",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "40px",
          }}
        >
          MultiSite
        </h2>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <a href="#" style={linkStyle}>
            Dashboard
          </a>

          <a href="#" style={linkStyle}>
            Sites
          </a>

          <a href="#" style={linkStyle}>
            Domínios
          </a>

          <a href="#" style={linkStyle}>
            Configurações
          </a>
        </nav>
      </aside>

      {/* Conteúdo */}
      <section
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          Gerencie seus sites e clientes
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3>Total de Sites</h3>
            <p style={numberStyle}>12</p>
          </div>

          <div style={cardStyle}>
            <h3>Clientes</h3>
            <p style={numberStyle}>8</p>
          </div>

          <div style={cardStyle}>
            <h3>Domínios</h3>
            <p style={numberStyle}>5</p>
          </div>
        </div>
      </section>
    </main>
  );
}

const linkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
  padding: "12px 16px",
  borderRadius: "10px",
  background: "#1e293b",
};

const cardStyle = {
  background: "#111827",
  padding: "30px",
  borderRadius: "16px",
};

const numberStyle = {
  fontSize: "42px",
  fontWeight: "bold",
  marginTop: "10px",
};