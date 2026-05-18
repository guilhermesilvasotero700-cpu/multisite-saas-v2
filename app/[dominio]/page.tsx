import { supabase } from "../lib/supabase";

export default async function Site({
  params,
}: {
  params: Promise<{ dominio: string }>;
}) {
  const { dominio } = await params;

  const { data: site } = await supabase
    .from("sites")
    .select("*")
    .eq("dominio", dominio)
    .single();

  if (!site) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Site não encontrado
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            {site.nome}
          </h1>

          <nav className="flex gap-8 text-sm text-zinc-400">
            <a href="#sobre">Sobre</a>
            <a href="#missao">Missão</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-5 py-2 mb-8 text-sm tracking-[0.3em] uppercase text-zinc-300">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            Site profissional
          </div>

          <h2 className="text-7xl font-black leading-none mb-8 uppercase">
            {site.nome}
          </h2>

          <p className="text-3xl text-zinc-300 leading-relaxed max-w-3xl">
            {site.slogan}
          </p>

          <div className="flex gap-4 mt-12">
            <a
              href={`https://wa.me/55${site.whatsapp}`}
              target="_blank"
              className="bg-emerald-500 hover:bg-emerald-400 transition px-8 py-4 rounded-xl font-semibold"
            >
              Falar no WhatsApp
            </a>

            <a
              href="#sobre"
              className="border border-white/20 hover:border-white/40 transition px-8 py-4 rounded-xl font-semibold"
            >
              Conhecer empresa
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-emerald-400 uppercase tracking-[0.3em] text-sm">
              Sobre a empresa
            </span>

            <h3 className="text-5xl font-bold mt-6 mb-8">
              Quem somos
            </h3>

            <p className="text-zinc-300 text-xl leading-relaxed whitespace-pre-line">
              {site.sobrenos}
            </p>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-3xl p-10">
            <h4 className="text-3xl font-bold mb-10">
              Informações
            </h4>

            <div className="space-y-8">
              <div>
                <p className="text-zinc-500 text-sm uppercase">
                  CNPJ
                </p>

                <p className="text-2xl font-bold mt-2 text-emerald-400">
                  {site.cnpj}
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm uppercase">
                  Cidade
                </p>

                <p className="text-2xl font-semibold mt-2">
                  {site.cidade} - {site.estado}
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm uppercase">
                  E-mail
                </p>

                <p className="text-xl mt-2">
                  {site.email}
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm uppercase">
                  WhatsApp
                </p>

                <p className="text-xl mt-2">
                  {site.whatsapp}
                </p>
              </div>

              <div>
                <p className="text-zinc-500 text-sm uppercase">
                  Domínio
                </p>

                <p className="text-xl mt-2">
                  {site.dominioreal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section
        id="missao"
        className="border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-8 py-24 text-center">
          <span className="text-emerald-400 uppercase tracking-[0.3em] text-sm">
            Nossa missão
          </span>

          <h3 className="text-6xl font-black mt-8 leading-tight">
            {site.missao}
          </h3>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-8 py-24 text-center">
          <h3 className="text-5xl font-bold mb-8">
            Entre em contato
          </h3>

          <p className="text-zinc-400 text-xl mb-12">
            Fale agora com nossa equipe especializada
          </p>

          <a
            href={`https://wa.me/55${site.whatsapp}`}
            target="_blank"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 transition px-10 py-5 rounded-2xl text-xl font-bold"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between gap-6 text-zinc-500">
          <div>
            © 2025 {site.nome}
          </div>

          <div className="text-emerald-400 font-semibold">
            CNPJ: {site.cnpj}
          </div>

          <div>
            {site.cidade} - {site.estado}
          </div>
        </div>
      </footer>
    </div>
  );
}