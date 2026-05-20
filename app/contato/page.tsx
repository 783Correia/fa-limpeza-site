import type { Metadata } from "next"
import Link from "next/link"
import { site, waLink } from "@/lib/config"

export const metadata: Metadata = {
  title: "Contato | FA Limpeza Profissional — Balneário Camboriú e Apucarana",
  description:
    "Entre em contato com a FA Limpeza Profissional. Orçamento grátis para restauração e impermeabilização em Balneário Camboriú SC e Apucarana PR. Resposta em até 2 horas.",
  alternates: { canonical: "https://falimpezaprofissional.com.br/contato" },
}

const canais = [
  {
    label: "WhatsApp",
    valor: site.phone,
    desc: "Resposta em até 2 horas. Canal principal para orçamentos.",
    href: waLink,
    cta: "Abrir WhatsApp",
    accent: "#25D366",
  },
  {
    label: "Telefone",
    valor: site.phone,
    desc: "Atendimento de segunda a sexta, das 8h às 18h. Sábado das 8h às 13h.",
    href: `tel:${site.phone.replace(/\D/g, "")}`,
    cta: "Ligar agora",
    accent: "var(--blue-l)",
  },
  {
    label: "Instagram",
    valor: `@${site.instagram}`,
    desc: "Acompanhe nosso trabalho e fale por DM.",
    href: `https://instagram.com/${site.instagram}`,
    cta: "Ver perfil",
    accent: "#E1306C",
  },
]

const cidades = [
  {
    nome: "Balneário Camboriú",
    estado: "SC",
    desc: "Atendemos BC e toda a região litorânea de Santa Catarina.",
  },
  {
    nome: "Apucarana",
    estado: "PR",
    desc: "Atendemos Apucarana e municípios da região norte do Paraná.",
  },
]

export default function Page() {
  return (
    <>
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          background: "radial-gradient(ellipse at 20% 30%, #1565C0 0%, transparent 50%), linear-gradient(170deg, #060D1A 0%, #0A0A0A 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <nav style={{ marginBottom: 24, display: "flex", gap: 8, alignItems: "center" }}>
            <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", textDecoration: "none" }}>
              Início
            </Link>
            <span style={{ color: "rgba(255,255,255,.3)", fontSize: 11 }}>›</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(120,170,255,.9)" }}>
              Contato
            </span>
          </nav>
          <p className="eyebrow" style={{ marginBottom: 16, color: "rgba(255,255,255,.5)" }}>Fale com a gente</p>
          <h1 className="h1" style={{ color: "#fff", marginBottom: 20 }}>
            Solicite um Orçamento
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,.72)", maxWidth: 520, lineHeight: 1.65 }}>
            Orçamento sem compromisso. Descubra o que a restauração técnica pode fazer pela sua superfície.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2col" style={{ display: "grid", gap: 64, alignItems: "start" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Canais de atendimento</p>
              <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 32, fontSize: 32 }}>
                Como nos encontrar
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {canais.map((c) => (
                  <div key={c.label} style={{ background: "var(--panel)", border: "1px solid var(--border)", padding: "24px 28px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                      <div>
                        <p className="label-mono" style={{ marginBottom: 4 }}>{c.label}</p>
                        <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--ice)", textTransform: "uppercase", letterSpacing: ".02em" }}>
                          {c.valor}
                        </p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--soft)", lineHeight: 1.6, marginBottom: 16 }}>
                      {c.desc}
                    </p>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener" : undefined}
                      style={{
                        display: "inline-flex",
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                        color: c.accent,
                        textDecoration: "none",
                      }}
                    >
                      {c.cta} →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Onde atuamos</p>
              <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 32, fontSize: 32 }}>
                Áreas de atendimento
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 40 }}>
                {cidades.map((c) => (
                  <div key={c.nome} style={{ background: "var(--panel)", border: "1px solid var(--border)", padding: "24px 28px" }}>
                    <p className="label-mono" style={{ marginBottom: 8 }}>{c.estado}</p>
                    <h3 className="h3" style={{ color: "var(--ice)", fontSize: 22, marginBottom: 10 }}>{c.nome}</h3>
                    <p style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.65 }}>{c.desc}</p>
                  </div>
                ))}
              </div>

              <div className="card-blue" style={{ padding: "28px" }}>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Horário de atendimento</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { dia: "Segunda a Sexta", hora: "08h00 — 18h00" },
                    { dia: "Sábado", hora: "08h00 — 13h00" },
                    { dia: "Domingo", hora: "Fechado" },
                  ].map((h) => (
                    <div key={h.dia} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: 8 }}>
                      <span style={{ fontSize: 13, color: "var(--soft)" }}>{h.dia}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ice)", letterSpacing: ".08em" }}>{h.hora}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
