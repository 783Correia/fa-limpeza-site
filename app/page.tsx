import type { Metadata } from "next"

import { site, waLink } from "@/lib/config"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Restauração e Impermeabilização Técnica de Superfícies | Balneário Camboriú e Apucarana",
  description:
    "Especialistas em restauração técnica de pisos, telhados e superfícies para hotéis, condomínios e imóveis de alto padrão em Balneário Camboriú SC e Apucarana PR.",
}

const gallery = [
  { src: "/images/gallery-1.jpg", alt: "Restauração de piso" },
  { src: "/images/gallery-2.jpg", alt: "Lapidação de mármore" },
  { src: "/images/gallery-5.jpg", alt: "Impermeabilização" },
  { src: "/images/pos-obra.jpg", alt: "Limpeza pós-obra" },
  { src: "/images/lapidacao.jpg", alt: "Piso após lapidação" },
  { src: "/images/gallery-3.jpg", alt: "Tratamento de superfície" },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
          overflow: "hidden",
        }}
      >
        <img
          src="/images/lapidacao.jpg"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(6,13,26,.92) 45%, rgba(6,13,26,.55) 100%)",
            zIndex: 1,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: 620 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              Balneário Camboriú · SC &nbsp;—&nbsp; Apucarana · PR
            </p>
            <h1 className="h-display" style={{ color: "var(--ice)", marginBottom: 24 }}>
              ANTES DE<br />
              TROCAR,<br />
              <span style={{ color: "var(--blue-l)" }}>RESTAURE.</span>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "var(--soft)",
                lineHeight: 1.65,
                maxWidth: 480,
                marginBottom: 40,
              }}
            >
              Restauração técnica de pisos, telhados e superfícies para hotéis, condomínios e construtoras. Resultado definitivo — não é limpeza.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href={waLink} target="_blank" rel="noopener" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir orçamento
              </a>
              <a href="#servicos" className="btn-outline">Ver serviços</a>
            </div>
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
          <p className="eyebrow" style={{ marginBottom: 12 }}>O que fazemos</p>
          <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 48 }}>
            Serviços
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 2,
            }}
          >
            {services.map((s) => (
              <div
                key={s.slug}
                style={{
                  background: "var(--raised)",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                  <img
                    src={s.image}
                    alt={s.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(10,10,10,.28)",
                    }}
                  />
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3
                    className="h3"
                    style={{ color: "var(--ice)", marginBottom: 8, fontSize: 17 }}
                  >
                    {s.name}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--soft)", lineHeight: 1.6 }}>
                    {s.description}
                  </p>
                  <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section className="section" id="portfolio">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Portfólio</p>
          <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 48 }}>
            Nosso Trabalho
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "240px 240px",
              gap: 2,
            }}
          >
            {gallery.map((item, i) => (
              <div
                key={i}
                style={{
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  gridColumn: i === 0 ? "span 2" : undefined,
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform .4s",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATENDEMOS ── */}
      <section
        className="section"
        id="segmentos"
        style={{ background: "var(--panel)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Quem atendemos</p>
          <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 48 }}>
            B2B e Alto Padrão
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 2,
            }}
          >
            {[
              {
                title: "Hotéis e Resorts",
                desc: "Lobby, piscinas, áreas externas. Contratos de manutenção recorrente com agenda flexível.",
                image: "/images/hoteis.jpg",
              },
              {
                title: "Condomínios",
                desc: "Áreas comuns, garagens, telhados. Parceria direta com síndicos e administradoras.",
                image: "/images/condominios.jpg",
              },
              {
                title: "Construtoras",
                desc: "Limpeza pós-obra para entrega ao cliente final. Prazo garantido, equipe dedicada.",
                image: "/images/pos-obra.jpg",
              },
            ].map((s) => (
              <div
                key={s.title}
                style={{ overflow: "hidden", border: "1px solid var(--border)" }}
              >
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  <img
                    src={s.image}
                    alt={s.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(6,13,26,.8) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "20px 24px",
                    }}
                  >
                    <h3 className="h3" style={{ color: "#fff", fontSize: 20 }}>
                      {s.title}
                    </h3>
                  </div>
                </div>
                <div style={{ padding: "16px 24px 24px", background: "var(--raised)" }}>
                  <p style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.65 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--panel)",
          padding: "48px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ fontSize: 22, fontWeight: 700, color: "var(--ice)", marginBottom: 4, fontFamily: "var(--font-display)", textTransform: "uppercase", letterSpacing: ".02em" }}>
              Quer um orçamento?
            </p>
            <p style={{ fontSize: 14, color: "var(--soft)" }}>
              Resposta em até 2 horas — Balneário Camboriú SC e Apucarana PR
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <a
              href={`tel:${site.phone.replace(/\D/g, "")}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 14,
                color: "var(--soft)",
                textDecoration: "none",
                letterSpacing: ".08em",
              }}
            >
              {site.phone}
            </a>
            <a href={waLink} target="_blank" rel="noopener" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir orçamento
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
