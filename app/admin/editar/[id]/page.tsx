"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function EditarSite() {
  const params = useParams();
  const id = params.id;

  const [site, setSite] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      carregarSite();
    }
  }, [id]);

  async function carregarSite() {
    const { data } = await supabase
      .from("sites")
      .select("*")
      .eq("id", Number(id))
      .single();

    setSite(data);
  }

  async function salvarAlteracoes() {
    setLoading(true);

    await supabase
      .from("sites")
      .update({
        nome: site.nome,
        dominio: site.dominio,
        whatsapp: site.whatsapp,
        email: site.email,
        sobrenos: site.sobrenos,
        missao: site.missao,
      })
      .eq("id", Number(id));

    alert("Site atualizado com sucesso!");

    setLoading(false);
  }

  if (!site) {
    return (
      <div className="min-h-screen bg-black text-white p-10">
        Carregando...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Editar Site
      </h1>

      <div className="space-y-6 max-w-5xl bg-[#07140f] border border-green-900/40 p-8 rounded-3xl shadow-2xl">

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Nome
          </label>

          <input
            value={site.nome || ""}
            onChange={(e) =>
              setSite({ ...site, nome: e.target.value })
            }
            className="w-full p-4 bg-[#0b1f17] border border-green-900/40 rounded-2xl text-white focus:outline-none focus:border-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Domínio
          </label>

          <input
            value={site.dominio || ""}
            onChange={(e) =>
              setSite({ ...site, dominio: e.target.value })
            }
            className="w-full p-4 bg-[#0b1f17] border border-green-900/40 rounded-2xl text-white focus:outline-none focus:border-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            WhatsApp
          </label>

          <input
            value={site.whatsapp || ""}
            onChange={(e) =>
              setSite({ ...site, whatsapp: e.target.value })
            }
            className="w-full p-4 bg-[#0b1f17] border border-green-900/40 rounded-2xl text-white focus:outline-none focus:border-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Email
          </label>

          <input
            value={site.email || ""}
            onChange={(e) =>
              setSite({ ...site, email: e.target.value })
            }
            className="w-full p-4 bg-[#0b1f17] border border-green-900/40 rounded-2xl text-white focus:outline-none focus:border-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Sobre nós
          </label>

          <textarea
            value={site.sobrenos || ""}
            onChange={(e) =>
              setSite({ ...site, sobrenos: e.target.value })
            }
            className="w-full h-48 p-4 bg-[#0b1f17] border border-green-900/40 rounded-2xl text-white focus:outline-none focus:border-green-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-zinc-400">
            Missão
          </label>

          <textarea
            value={site.missao || ""}
            onChange={(e) =>
              setSite({ ...site, missao: e.target.value })
            }
            className="w-full h-48 p-4 bg-[#0b1f17] border border-green-900/40 rounded-2xl text-white focus:outline-none focus:border-green-500"
          />
        </div>

        <button
          onClick={salvarAlteracoes}
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 transition p-4 rounded-2xl font-bold text-lg"
        >
          {loading ? "Salvando..." : "Salvar alterações"}
        </button>

      </div>
    </div>
  );
}