import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">
          MultiSite SaaS
        </h1>

        <p className="text-zinc-400 text-xl mb-8">
          Plataforma moderna de criação de sites
        </p>

        <Link
          href="/admin"
          className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:opacity-80 transition"
        >
          Entrar no Admin
        </Link>
      </div>
    </main>
  );
}