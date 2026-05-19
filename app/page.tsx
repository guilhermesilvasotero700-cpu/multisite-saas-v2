export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
        MultiSite SaaS
      </h1>

      <p style={{ fontSize: "22px", color: "#cbd5e1" }}>
        Plataforma moderna de criação de sites
      </p>

      <a
        href="/admin"
        style={{
          marginTop: "30px",
          background: "#2563eb",
          padding: "15px 30px",
          borderRadius: "10px",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Entrar no Admin
      </a>
    </main>
  );
}