export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "30px",
        }}
      >
        Painel Admin
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "16px",
          }}
        >
          <h3>Usuários</h3>
          <p
            style={{
              fontSize: "42px",
              fontWeight: "bold",
            }}
          >
            12
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "16px",
          }}
        >
          <h3>Sites</h3>
          <p
            style={{
              fontSize: "42px",
              fontWeight: "bold",
            }}
          >
            8
          </p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "16px",
          }}
        >
          <h3>Domínios</h3>
          <p
            style={{
              fontSize: "42px",
              fontWeight: "bold",
            }}
          >
            5
          </p>
        </div>
      </section>
    </main>
  );
}