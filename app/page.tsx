import type { Metadata } from "next"
import Link from "next/link"
import { site, waLink } from "@/lib/config"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Restauração e Impermeabilização Técnica de Superfícies | Balneário Camboriú e Apucarana",
  description:
    "Especialistas em restauração técnica de pisos, telhados e decks para hotéis, condomínios e imóveis de alto padrão em Balneário Camboriú SC e Apucarana PR. Solicite orçamento.",
}

const serviceIcons: Record<string, string> = {
  layers: "⬡",
  building: "⬢",
  sparkles: "✦",
  home: "⬛",
  tree: "◈",
  paint: "◉",
  water: "◎",
  grid: "⊞",
}

const segments = [
  {
    title: "Hotéis",
    desc: "Manutenção de áreas nobres, restauração de pisos de lobby, impermeabilização de coberturas e tratamento de piscinas. Contratos de manutenção recorrente.",
    icon: "🏨",
  },
  {
    title: "Condomínios",
    desc: "Restauração de áreas comuns, impermeabilização de telhados e coberturas, tratamento de garagens com pintura epoxi. Parceria com síndicos e administradoras.",
    icon: "🏢",
  },
  {
    title: "Construtoras",
    desc: "Limpeza técnica pós-obra para entrega ao cliente final. Capacidade de atender obras de grande porte com equipe especializada e prazo garantido.",
    icon: "🏗️",
  },
  {
    title: "Alto Padrão",
    desc: "Restauração de pisos de mármore, granito e porcelanato em apartamentos de luxo. Antes e depois visível. Resultado que dura anos.",
    icon: "⭐",
  },
]

const stats = [
  { n: "2", label: "Estados" },
  { n: "8+", label: "Serviços especializados" },
  { n: "0", label: "Concorrentes técnicos em Apucarana" },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="grain-overlay"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: 96,
          paddingTop: 120,
          background:
            "radial-gradient(ellipse at 20% 25%, #1565C0 0%, transparent 52%), radial-gradient(ellipse at 80% 80%, #0D47A1 0%, transparent 55%), linear-gradient(170deg, #060D1A 0%, #0A0A0A 100%)",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 840 }}>
            <p className="eyebrow" style={{ marginBottom: 24 }}>
              Balneário Camboriú · SC &nbsp;·&nbsp; Apucarana · PR
            </p>
            <h1 className="h-display" style={{ color: "var(--ice)", marginBottom: 28 }}>
              PISOS QUE<br />
              <span style={{ color: "var(--blue-l)" }}>VOLTAM.</span><br />
              SUPERFÍCIES<br />
              QUE DURAM.
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "var(--soft)",
                lineHeight: 1.65,
                maxWidth: 520,
                marginBottom: 40,
              }}
            >
              Especialistas em restauração e impermeabilização técnica para hotéis, condomínios e imóveis de alto padrão. Não é limpeza — é restauração definitiva.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={waLink} target="_blank" rel="noopener" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar Orçamento
              </a>
              <a href="#servicos" className="btn-outline">Ver Serviços</a>
            </div>
          </div>
        </div>

        {/* Decorative crosshair */}
        <svg
          style={{
            position: "absolute",
            right: 60,
            top: "50%",
            transform: "translateY(-50%)",
            opacity: .08,
            zIndex: 1,
            width: 240,
            height: 240,
          }}
          viewBox="0 0 240 240"
          fill="none"
        >
          <circle cx="120" cy="120" r="100" stroke="white" strokeWidth="1" />
          <circle cx="120" cy="120" r="60" stroke="white" strokeWidth="1" />
          <circle cx="120" cy="120" r="20" stroke="white" strokeWidth="1" />
          <line x1="120" y1="0" x2="120" y2="240" stroke="white" strokeWidth=".5" />
          <line x1="0" y1="120" x2="240" y2="120" stroke="white" strokeWidth=".5" />
        </svg>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "var(--panel)", borderBottom: "1px solid var(--border)" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            padding: "0 48px",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "40px 0",
                textAlign: "center",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(40px, 5vw, 72px)",
                  lineHeight: 1,
                  color: "var(--blue-l)",
                  marginBottom: 8,
                }}
              >
                {s.n}
              </div>
              <div className="label-mono">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEGMENTOS ── */}
      <section className="section" id="segmentos">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Segmentos</p>
          <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 16 }}>
            Atendemos
          </h2>
          <div className="dashed-rule" style={{ marginBottom: 48, maxWidth: 400 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 2,
            }}
          >
            {segments.map((s) => (
              <div
                key={s.title}
                className="card"
                style={{ padding: "32px 28px" }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <h3
                  className="h3"
                  style={{ color: "var(--ice)", marginBottom: 12, fontSize: 22 }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section
        className="section"
        id="servicos"
        style={{ background: "var(--panel)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Serviços</p>
          <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 16 }}>
            O Que Fazemos
          </h2>
          <div className="dashed-rule" style={{ marginBottom: 48, maxWidth: 400 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 2,
            }}
          >
            {services.map((s) => (
              <div
                key={s.slug}
                style={{
                  background: "var(--raised)",
                  border: "1px solid var(--border)",
                  padding: "28px",
                  transition: "border-color .18s",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 28,
                    color: "var(--blue-l)",
                    marginBottom: 12,
                    lineHeight: 1,
                  }}
                >
                  {serviceIcons[s.icon]}
                </div>
                <h3
                  className="h3"
                  style={{ color: "var(--ice)", marginBottom: 10, fontSize: 18 }}
                >
                  {s.name}
                </h3>
                <p style={{ fontSize: 13, color: "var(--soft)", lineHeight: 1.6 }}>
                  {s.description}
                </p>
                <div
                  style={{
                    marginTop: 16,
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  {s.cities.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                        color: "var(--mute)",
                        border: "1px solid var(--border)",
                        padding: "3px 8px",
                      }}
                    >
                      {c === "balneario-camboriu" ? "BC · SC" : "APU · PR"}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANTES / DEPOIS placeholder ── */}
      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Portfólio</p>
          <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 16 }}>
            Nosso Trabalho
          </h2>
          <div className="dashed-rule" style={{ marginBottom: 48, maxWidth: 400 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 2,
            }}
          >
            {[
              { label: "Impermeabilização de Piso", city: "Balneário Camboriú, SC" },
              { label: "Lapidação de Mármore", city: "Balneário Camboriú, SC" },
              { label: "Restauração de Deck", city: "Balneário Camboriú, SC" },
              { label: "Limpeza Pós-Obra", city: "Apucarana, PR" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "var(--deep)",
                  border: "1px solid var(--border)",
                  aspectRatio: "16/10",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--mute)",
                  }}
                >
                  ANTES / DEPOIS
                </div>
                <div
                  className="h3"
                  style={{ color: "var(--soft)", fontSize: 16, textAlign: "center" }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: ".12em",
                    color: "var(--mute)",
                    textTransform: "uppercase",
                  }}
                >
                  {item.city}
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 13,
              color: "var(--mute)",
              marginTop: 16,
              fontFamily: "var(--font-mono)",
              letterSpacing: ".1em",
              textTransform: "uppercase",
            }}
          >
            * Fotos reais serão adicionadas em breve — acompanhe @{site.instagram}
          </p>
        </div>
      </section>

      {/* ── CIDADES ── */}
      <section
        className="section"
        id="cidades"
        style={{ background: "var(--panel)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Onde Atuamos</p>
          <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 16 }}>
            Duas Cidades
          </h2>
          <div className="dashed-rule" style={{ marginBottom: 48, maxWidth: 400 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 2,
            }}
          >
            {/* BC */}
            <div
              style={{
                background: "var(--deep)",
                border: "1px solid rgba(25,118,210,.3)",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "var(--blue)",
                }}
              />
              <div className="label-mono" style={{ marginBottom: 12 }}>SC · Mercado Premium</div>
              <h3 className="h2" style={{ color: "var(--ice)", marginBottom: 16, fontSize: 36 }}>
                Balneário<br />Camboriú
              </h3>
              <p style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.7, marginBottom: 20 }}>
                Uma das maiores concentrações de imóveis de luxo do Brasil. Alta demanda por restauração técnica em hotéis, condomínios verticais e apartamentos de alto padrão.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {["Hotéis e resorts", "Condomínios de luxo", "Construtoras e incorporadoras", "Proprietários de Airbnb"].map((i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 13,
                      color: "var(--soft)",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        background: "var(--blue-b)",
                        transform: "rotate(45deg)",
                        flexShrink: 0,
                      }}
                    />
                    {i}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 28 }}>
                <Link href="/impermeabilizacao-pisos-balneario-camboriu" className="btn-outline" style={{ fontSize: 13, padding: "10px 20px" }}>
                  Ver serviços em BC →
                </Link>
              </div>
            </div>

            {/* Apucarana */}
            <div
              style={{
                background: "rgba(212,160,23,.05)",
                border: "1px solid rgba(212,160,23,.2)",
                padding: "40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "var(--gold)",
                }}
              />
              <div className="label-mono" style={{ marginBottom: 12, color: "var(--gold)" }}>PR · Oceano Azul</div>
              <h3 className="h2" style={{ color: "var(--ice)", marginBottom: 16, fontSize: 36 }}>
                Apucarana
              </h3>
              <p style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.7, marginBottom: 20 }}>
                Mercado em crescimento sem concorrência técnica especializada. A FA é pioneira em restauração e impermeabilização técnica de superfícies na região.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {["Único especialista técnico da região", "Condomínios e empresas comerciais", "Construtoras locais", "Imóveis residenciais"].map((i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 13,
                      color: "var(--soft)",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        background: "var(--gold-b)",
                        transform: "rotate(45deg)",
                        flexShrink: 0,
                      }}
                    />
                    {i}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 28 }}>
                <Link href="/impermeabilizacao-pisos-apucarana" className="btn-outline" style={{ fontSize: 13, padding: "10px 20px" }}>
                  Ver serviços em Apucarana →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        className="grain-overlay"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "96px 0",
          background:
            "radial-gradient(ellipse at 30% 50%, #1565C0 0%, transparent 55%), linear-gradient(180deg, #060D1A 0%, #0A0A0A 100%)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Pronto para começar?</p>
          <h2 className="h1" style={{ color: "var(--ice)", marginBottom: 20, maxWidth: 640, margin: "0 auto 20px" }}>
            SUPERFÍCIES QUE{" "}
            <span style={{ color: "var(--gold-b)" }}>DURAM.</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--soft)",
              maxWidth: 480,
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            Solicite um orçamento. Respondemos em até 2 horas.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={waLink} target="_blank" rel="noopener" className="btn-primary" style={{ fontSize: 17, padding: "18px 36px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Orçamento no WhatsApp
            </a>
          </div>
          <p
            style={{
              marginTop: 20,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--mute)",
            }}
          >
            {site.phone} · Balneário Camboriú SC &amp; Apucarana PR
          </p>
        </div>
      </section>
    </>
  )
}
