"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default function Admin() {
  const [sites, setSites] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    cnpj: "",
    nome: "",
    dominio: "",
    dominio_real: "",
    email: "",
    whatsapp: "",
    cidade: "",
    estado: "",
    slogan: "",
    sobrenos: "",
    missao: "",
  });

  useEffect(() => {
    carregarSites();
  }, []);

  async function carregarSites() {
    const { data } = await supabase
      .from("sites")
      .select("*")
      .order("id", { ascending: false });

    if (data) {
      setSites(data);
    }
  }

  async function gerarDados() {
    if (!form.cnpj) {
      alert("Digite um CNPJ");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${form.cnpj.replace(/\D/g, "")}`
      );

      const data = await response.json();

      const nome = data.razao_social || "";
      const cidade = data.municipio || "";
      const estado = data.uf || "";
      const email = data.email || "";
      const telefone = data.ddd_telefone_1 || "";

      setForm({
        ...form,
        nome,
        cidade,
        estado,
        email,
        whatsapp: telefone,
        slogan: `Especialistas em ${data.cnae_fiscal_descricao || "soluções profissionais"}`,
        sobrenos: `A ${nome}, registrada sob o CNPJ ${form.cnpj}, atua no segmento de ${data.cnae_fiscal_descricao || "serviços"} em ${cidade}/${estado}.`,
        missao: `A missão da ${nome} é atuar com excelência no segmento de ${data.cnae_fiscal_descricao || "serviços"}, oferecendo soluções confiáveis e atendimento profissional.`,
      });
    } catch (error) {
      alert("Erro ao buscar CNPJ");
    } finally {
      setLoading(false);
    }
  }

  async function criarSite() {
    if (!form.nome || !form.dominio) {
      alert("Preencha nome e domínio");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("sites").insert([
      {
        nome: form.nome,
        dominio: form.dominio,
        dominio_real: form.dominio_real,
        whatsapp: form.whatsapp,
        email: form.email,
        cidade: form.cidade,
        estado: form.estado,
        slogan: form.slogan,
        sobrenos: form.sobrenos,
        missao: form.missao,
        cnpj: form.cnpj,
      },
    ]);

    setLoading(false);

    if (error) {
      console.log(error);
      alert("Erro ao salvar");
      return;
    }

    alert("Site criado");

    setForm({
      cnpj: "",
      nome: "",
      dominio: "",
      dominio_real: "",
      email: "",
      whatsapp: "",
      cidade: "",
      estado: "",
      slogan: "",
      sobrenos: "",
      missao: "",
    });

    carregarSites();
  }

  async function excluirSite(id: number) {
    const confirmar = confirm("Deseja excluir?");

    if (!confirmar) return;

    await supabase.from("sites").delete().eq("id", id);

    carregarSites();
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#081028] border border-white/10 rounded-3xl p-8">
          <h1 className="text-5xl font-black mb-10">
            Criar Site
          </h1>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              placeholder="CNPJ"
              value={form.cnpj}
              onChange={(e) =>
                setForm({ ...form, cnpj: e.target.value })
              }
              className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />

            <button
              onClick={gerarDados}
              className="bg-emerald-500 hover:bg-emerald-600 rounded-2xl font-bold"
            >
              {loading ? "Gerando..." : "Gerar dados"}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              placeholder="Razão Social"
              value={form.nome}
              onChange={(e) =>
                setForm({ ...form, nome: e.target.value })
              }
              className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />

            <input
              placeholder="Domínio interno"
              value={form.dominio}
              onChange={(e) =>
                setForm({ ...form, dominio: e.target.value })
              }
              className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              placeholder="Domínio real"
              value={form.dominio_real}
              onChange={(e) =>
                setForm({ ...form, dominio_real: e.target.value })
              }
              className="w-full bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />

            <input
              placeholder="WhatsApp"
              value={form.whatsapp}
              onChange={(e) =>
                setForm({ ...form, whatsapp: e.target.value })
              }
              className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              placeholder="Cidade"
              value={form.cidade}
              onChange={(e) =>
                setForm({ ...form, cidade: e.target.value })
              }
              className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />

            <input
              placeholder="Estado"
              value={form.estado}
              onChange={(e) =>
                setForm({ ...form, estado: e.target.value })
              }
              className="bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              placeholder="Slogan"
              value={form.slogan}
              onChange={(e) =>
                setForm({ ...form, slogan: e.target.value })
              }
              className="w-full bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Sobre nós"
              value={form.sobrenos}
              onChange={(e) =>
                setForm({ ...form, sobrenos: e.target.value })
              }
              className="w-full h-40 bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Nossa missão"
              value={form.missao}
              onChange={(e) =>
                setForm({ ...form, missao: e.target.value })
              }
              className="w-full h-40 bg-[#0b1220] border border-white/10 rounded-2xl p-4 outline-none"
            />
          </div>

          <button
            onClick={criarSite}
            className="w-full bg-white text-black rounded-2xl p-4 font-bold"
          >
            Criar Site
          </button>
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-black">
                Sites criados
              </h2>

              <p className="text-zinc-400">
                Gerencie todos os sites criados
              </p>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-3 rounded-2xl font-bold">
              {sites.length} sites
            </div>
          </div>

          <div className="space-y-4">
            {sites.map((site) => (
              <div
                key={site.id}
                className="bg-[#081028] border border-white/10 rounded-3xl p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-3xl font-black">
                    {site.nome}
                  </h3>

                  <p className="text-zinc-400 mt-1">
                    {site.dominio}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`/${site.dominio}`}
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-2xl font-bold"
                  >
                    Abrir
                  </Link>

                  <Link
                    href={`/admin/editar/${site.id}`}
                    className="bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-2xl font-bold"
                  >
                    Editar
                  </Link>

                  <button
                    onClick={() => excluirSite(site.id)}
                    className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl font-bold"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}