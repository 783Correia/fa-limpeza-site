import type { Metadata } from "next"
import { site, waLink } from "@/lib/config"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Restauração e Impermeabilização Técnica | Balneário Camboriú e Apucarana",
  description:
    "Especialistas em restauração técnica de pisos, telhados e superfícies para hotéis, condomínios e construtoras em Balneário Camboriú SC e Apucarana PR.",
}

const tickerItems = [
  "Impermeabilização de Pisos",
  "Lapidação de Mármore",
  "Limpeza Pós-Obra",
  "Impermeabilização de Telhados",
  "Tratamento de Decks",
  "Pintura Epoxi",
  "Limpeza de Piscinas",
  "Restauração de Porcelanato",
]

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
      {/* ── HERO split ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 80,
          paddingBottom: 0,
          background: "#0A0A0A",
          overflow: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            alignItems: "center",
            width: "100%",
            maxWidth: 1200,
          }}
        >
          {/* Left — copy */}
          <div style={{ paddingRight: 48, paddingBottom: 80 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              Balneário Camboriú · SC &nbsp;—&nbsp; Apucarana · PR
            </p>
            <h1
              className="h-display"
              style={{
                color: "var(--ice)",
                marginBottom: 28,
                fontSize: "clamp(48px, 6.5vw, 96px)",
              }}
            >
              PISOS QUE<br />
              <span style={{ color: "var(--blue-l)" }}>VOLTAM.</span><br />
              TELHADOS<br />
              QUE DURAM.
            </h1>
            <p
              style={{
                fontSize: 17,
                color: "var(--soft)",
                lineHeight: 1.7,
                maxWidth: 440,
                marginBottom: 40,
              }}
            >
              Restauração técnica de superfícies para hotéis, condomínios e construtoras.
              Não é limpeza — é recuperação definitiva.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <a href={waLink} target="_blank" rel="noopener" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir orçamento
              </a>
              <a href="#servicos" className="btn-outline">Ver serviços</a>
            </div>

            {/* Trust strip */}
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[
                { n: "8+", label: "Serviços técnicos" },
                { n: "2", label: "Estados atendidos" },
                { n: "2h", label: "Resposta via WA" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: 28,
                      lineHeight: 1,
                      color: "var(--ice)",
                    }}
                  >
                    {s.n}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--mute)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div
            style={{
              position: "relative",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/gallery-5.jpg"
              alt="Restauração técnica de pisos"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, #0A0A0A 0%, rgba(10,10,10,0) 30%), linear-gradient(to top, #0A0A0A 0%, transparent 30%)",
              }}
            />
            {/* Phone badge */}
            <div
              style={{
                position: "absolute",
                bottom: 40,
                right: 32,
                background: "rgba(10,10,10,.85)",
                border: "1px solid var(--border2)",
                backdropFilter: "blur(12px)",
                padding: "16px 20px",
              }}
            >
              <p className="label-mono" style={{ marginBottom: 4 }}>Ligue agora</p>
              <a
                href={`tel:${site.phone.replace(/\D/g, "")}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: 20,
                  color: "var(--ice)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: ".02em",
                }}
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div
        style={{
          background: "var(--blue)",
          padding: "14px 0",
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,.1)",
        }}
      >
        <div className="marquee-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                color: "#fff",
                paddingRight: 48,
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 48,
              }}
            >
              {item}
              <span style={{ color: "rgba(255,255,255,.4)", fontSize: 10 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVIÇOS ── */}
      <section
        className="section"
        id="servicos"
        style={{ background: "var(--panel)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, gap: 16, flexWrap: "wrap" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>O que fazemos</p>
              <h2 className="h2" style={{ color: "var(--ice)" }}>Serviços</h2>
            </div>
            <a href={waLink} target="_blank" rel="noopener" className="btn-outline" style={{ fontSize: 13, padding: "10px 20px" }}>
              Pedir orçamento →
            </a>
          </div>
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
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,.28)" }} />
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3 className="h3" style={{ color: "var(--ice)", marginBottom: 8, fontSize: 17 }}>
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

      {/* ── QUEM ATENDEMOS — big statement ── */}
      <section className="section" id="segmentos" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Quem atendemos</p>
              <h2
                className="h2"
                style={{ color: "var(--ice)", lineHeight: 1.05, fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Hotéis, condomínios e construtoras que precisam de{" "}
                <span style={{ color: "var(--blue-l)" }}>resultado técnico,</span>{" "}
                não de limpeza doméstica.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                {
                  title: "Hotéis e Resorts",
                  desc: "Lobby, piscinas, áreas externas. Contratos de manutenção recorrente com agenda flexível.",
                  img: "/images/hoteis.jpg",
                },
                {
                  title: "Condomínios",
                  desc: "Áreas comuns, garagens, telhados. Parceria com síndicos e administradoras.",
                  img: "/images/condominios.jpg",
                },
                {
                  title: "Construtoras",
                  desc: "Limpeza pós-obra para entrega ao cliente final. Prazo garantido.",
                  img: "/images/pos-obra.jpg",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  style={{
                    display: "flex",
                    gap: 16,
                    background: "var(--panel)",
                    border: "1px solid var(--border)",
                    padding: "16px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: 72, height: 72, flexShrink: 0, overflow: "hidden" }}>
                    <img
                      src={s.img}
                      alt={s.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <div>
                    <h3 className="h3" style={{ color: "var(--ice)", fontSize: 16, marginBottom: 4 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 13, color: "var(--soft)", lineHeight: 1.55 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section
        className="section"
        id="portfolio"
        style={{ background: "var(--panel)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, gap: 16, flexWrap: "wrap" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Portfólio</p>
              <h2 className="h2" style={{ color: "var(--ice)" }}>Nosso Trabalho</h2>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mute)" }}>
              @{site.instagram}
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "260px 260px",
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
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--deep)",
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
