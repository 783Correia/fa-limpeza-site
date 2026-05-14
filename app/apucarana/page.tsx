import type { Metadata } from "next"
import Link from "next/link"
import { site, waLink } from "@/lib/config"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Restauração e Impermeabilização em Apucarana PR | FA Limpeza",
  description:
    "Especialistas em restauração técnica de pisos, telhados e superfícies em Apucarana PR. Único serviço técnico especializado na região. Condomínios, empresas e construtoras. Orçamento grátis.",
}

const apuServices = services.filter((s) => s.cities.includes("apucarana"))

const slugMap: Record<string, string> = {
  "impermeabilizacao-pisos": "/impermeabilizacao-pisos-apucarana",
  "limpeza-pos-obra": "/limpeza-pos-obra-apucarana",
  "lapidacao-piso-usinado": "/lapidacao-piso-usinado-apucarana",
  "impermeabilizacao-telhados": "/impermeabilizacao-telhados-apucarana",
  "pintura-epoxi": "/pintura-epoxi-apucarana",
  "porcelanato-areas-externas": "/porcelanato-areas-externas-apucarana",
}

export default function Page() {
  return (
    <>
      <section
        style={{
          position: "relative",
          paddingTop: 140,
          paddingBottom: 80,
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(212,160,23,.25) 0%, transparent 50%), linear-gradient(170deg, #060D1A 0%, #0A0A0A 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <nav style={{ marginBottom: 24, display: "flex", gap: 8, alignItems: "center" }}>
            <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--mute)", textDecoration: "none" }}>
              Início
            </Link>
            <span style={{ color: "var(--mute)", fontSize: 11 }}>›</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gold)" }}>
              Apucarana
            </span>
          </nav>
          <p className="eyebrow" style={{ marginBottom: 16, color: "var(--gold)" }}>Apucarana · PR</p>
          <h1 className="h1" style={{ color: "var(--ice)", marginBottom: 20, maxWidth: 700 }}>
            Restauração Técnica de Superfícies em Apucarana
          </h1>
          <p style={{ fontSize: 17, color: "var(--soft)", maxWidth: 560, lineHeight: 1.65, marginBottom: 36 }}>
            Único serviço especializado em restauração e impermeabilização técnica em Apucarana e região. Condomínios, construtoras e empresas comerciais.
          </p>
          <a href={waLink} target="_blank" rel="noopener" className="btn-primary">
            Solicitar Orçamento Grátis
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 12 }}>Serviços em Apucarana</p>
          <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 48 }}>
            O Que Fazemos em Apucarana
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {apuServices.map((s) => (
              <Link
                key={s.slug}
                href={slugMap[s.slug]}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div style={{ background: "var(--panel)", border: "1px solid var(--border)", overflow: "hidden", height: "100%", transition: "border-color .18s" }}>
                  <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                    <img src={s.image} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,.28)" }} />
                  </div>
                  <div style={{ padding: "20px 24px 24px" }}>
                    <h3 className="h3" style={{ color: "var(--ice)", marginBottom: 8, fontSize: 17 }}>{s.name}</h3>
                    <p style={{ fontSize: 13, color: "var(--soft)", lineHeight: 1.6 }}>{s.description}</p>
                    <p style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold)" }}>
                      Ver página →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--border)", padding: "48px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "var(--ice)", marginBottom: 4, fontFamily: "var(--font-display)", textTransform: "uppercase" }}>
              Atendemos Apucarana e região — PR
            </p>
            <p style={{ fontSize: 14, color: "var(--soft)" }}>Orçamento em até 2 horas — {site.phone}</p>
          </div>
          <a href={waLink} target="_blank" rel="noopener" className="btn-primary">
            Pedir orçamento no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
