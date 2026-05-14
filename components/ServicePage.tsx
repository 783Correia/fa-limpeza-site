import type { PageService } from "@/lib/services"
import { waLink, site } from "@/lib/config"
import Link from "next/link"

interface Props {
  page: PageService
}

export default function ServicePage({ page }: Props) {
  const { service, city, h1, metaDescription, keywords } = page

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: city.state,
        addressCountry: "BR",
      },
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: city.state },
    },
    serviceType: service.name,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ── */}
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 80,
          background:
            "radial-gradient(ellipse at 20% 30%, #1565C0 0%, transparent 50%), linear-gradient(170deg, #060D1A 0%, #0A0A0A 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ marginBottom: 24, display: "flex", gap: 8, alignItems: "center" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--mute)",
                textDecoration: "none",
              }}
            >
              Início
            </Link>
            <span style={{ color: "var(--mute)", fontSize: 11 }}>›</span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--blue-l)",
              }}
            >
              {city.name} · {city.state}
            </span>
          </nav>

          <p className="eyebrow" style={{ marginBottom: 16 }}>
            {city.name} · {city.state}
          </p>
          <h1 className="h1" style={{ color: "var(--ice)", maxWidth: 760, marginBottom: 24 }}>
            {h1}
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "var(--soft)",
              maxWidth: 560,
              lineHeight: 1.65,
              marginBottom: 36,
            }}
          >
            {service.description}
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={waLink} target="_blank" rel="noopener" className="btn-primary">
              Solicitar Orçamento Grátis
            </a>
            <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="btn-outline">
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO ── */}
      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Main content */}
          <div>
            <h2
              className="h2"
              style={{ color: "var(--ice)", marginBottom: 24, fontSize: 36 }}
            >
              Por Que Escolher a FA em {city.name}?
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  title: "Técnica especializada",
                  body: `Não somos serviço de limpeza doméstica. Somos especialistas em restauração técnica de superfícies — com método, equipamentos profissionais e resultado definitivo em ${city.name}.`,
                },
                {
                  title: "Resultado visível e garantido",
                  body: "Antes e depois real. Documentamos cada trabalho com fotos para que você veja exatamente o que foi feito e o resultado entregue.",
                },
                {
                  title: "Atendimento rápido",
                  body: `Equipe disponível em ${city.name} e região. Resposta em até 2 horas via WhatsApp para orçamento sem compromisso.`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "24px",
                    background: "var(--panel)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      background: "var(--blue)",
                      flexShrink: 0,
                      borderRadius: 2,
                    }}
                  />
                  <div>
                    <h3
                      className="h3"
                      style={{ color: "var(--ice)", marginBottom: 8, fontSize: 18 }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.65 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Keywords section for SEO */}
            <div style={{ marginTop: 48 }}>
              <h2 className="h3" style={{ color: "var(--ice)", marginBottom: 16, fontSize: 20 }}>
                {service.shortName} em {city.name} — Serviço Técnico Especializado
              </h2>
              <p style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.8, marginBottom: 16 }}>
                A FA Limpeza Profissional atende {city.name}, {city.state} com serviço técnico de{" "}
                {service.name.toLowerCase()}. Nossa equipe utiliza equipamentos profissionais e
                produtos especializados para garantir resultado definitivo — não apenas limpeza
                superficial.
              </p>
              <p style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.8 }}>
                Atendemos hotéis, condomínios, construtoras e imóveis de alto padrão em{" "}
                {city.name} e região. Solicite seu orçamento sem compromisso.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: 80 }}>
            <div className="card-blue" style={{ padding: "32px" }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Orçamento Rápido</div>
              <h3 className="h3" style={{ color: "var(--ice)", marginBottom: 16, fontSize: 22 }}>
                Resposta em até 2 horas
              </h3>
              <p style={{ fontSize: 13, color: "var(--soft)", lineHeight: 1.6, marginBottom: 24 }}>
                Envie uma mensagem descrevendo o serviço e o local. Nossa equipe retorna com
                orçamento sem compromisso.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", marginBottom: 12 }}
              >
                Solicitar via WhatsApp
              </a>
              <a
                href={`tel:${site.phone.replace(/\D/g, "")}`}
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  letterSpacing: ".1em",
                  color: "var(--soft)",
                  textDecoration: "none",
                  marginTop: 8,
                }}
              >
                {site.phone}
              </a>

              <div
                className="dashed-rule"
                style={{ margin: "24px 0" }}
              />

              <div className="label-mono" style={{ marginBottom: 10 }}>Localização</div>
              <p style={{ fontSize: 13, color: "var(--soft)", lineHeight: 1.8 }}>
                {city.name}, {city.state}<br />
                e região
              </p>

              <div className="label-mono" style={{ marginTop: 16, marginBottom: 10 }}>
                Palavras-chave atendidas
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {keywords.map((kw) => (
                  <span
                    key={kw}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--mute)",
                      border: "1px solid var(--border)",
                      padding: "3px 8px",
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "var(--panel)",
          borderTop: "1px solid var(--border)",
          padding: "64px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 16 }}>
            Pronto para transformar sua superfície?
          </h2>
          <p style={{ fontSize: 16, color: "var(--soft)", marginBottom: 32 }}>
            Solicite um orçamento agora — atendemos {city.name} e região.
          </p>
          <a href={waLink} target="_blank" rel="noopener" className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
            Solicitar Orçamento Grátis
          </a>
        </div>
      </section>
    </>
  )
}
