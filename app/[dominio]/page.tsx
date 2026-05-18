import { notFound } from "next/navigation";

export default function DominioPage({
  params,
}: {
  params: { dominio: string };
}) {
  if (params.dominio === "multisite-saas") {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-black mb-4">
          MultiSite SaaS
        </h1>

        <p className="text-zinc-400 mb-10">
          Plataforma de criação de sites
        </p>

        <a
          href="/admin"
          className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg transition"
        >
          Entrar no Admin
        </a>
      </main>
    );
  }

  return notFound();
}