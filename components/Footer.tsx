import Link from "next/link"
import { site } from "@/lib/config"

const serviceLinks = [
  { label: "Impermeabilização de Pisos", href: "/impermeabilizacao-pisos-balneario-camboriu" },
  { label: "Limpeza Pós-Obra", href: "/limpeza-pos-obra-balneario-camboriu" },
  { label: "Lapidação de Piso Usinado", href: "/lapidacao-piso-usinado-balneario-camboriu" },
  { label: "Impermeabilização de Telhados", href: "/impermeabilizacao-telhados-balneario-camboriu" },
  { label: "Tratamento de Decks", href: "/tratamento-decks-balneario-camboriu" },
  { label: "Pintura Epoxi", href: "/pintura-epoxi-balneario-camboriu" },
  { label: "Limpeza de Piscinas", href: "/limpeza-piscinas-balneario-camboriu" },
  { label: "Porcelanato e Áreas Externas", href: "/porcelanato-areas-externas-balneario-camboriu" },
]

export default function Footer() {
  return (
    <footer
      id="contato"
      style={{
        background: "var(--panel)",
        borderTop: "1px solid var(--border2)",
        padding: "64px 0 32px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span
                className="fa-mark"
                style={{ width: 36, height: 36, fontSize: 16, letterSpacing: "-.04em" }}
              >
                FA
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 18,
                    textTransform: "uppercase",
                    color: "var(--ice)",
                    letterSpacing: "-.01em",
                    lineHeight: 1,
                  }}
                >
                  FA Limpeza
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "var(--mute)",
                    marginTop: 2,
                  }}
                >
                  Profissional
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: ".06em",
                color: "var(--gold-b)",
                marginBottom: 16,
              }}
            >
              {site.tagline}
            </p>
            <p style={{ fontSize: 14, color: "var(--mute)", lineHeight: 1.6 }}>
              Restauração e impermeabilização técnica de superfícies para hotéis, condomínios e imóveis de alto padrão.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="label-mono" style={{ marginBottom: 16, color: "var(--ice)" }}>Serviços</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontSize: 13,
                      color: "var(--soft)",
                      textDecoration: "none",
                      transition: "color .15s",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="label-mono" style={{ marginBottom: 16, color: "var(--ice)" }}>Contato</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener"
                style={{ fontSize: 14, color: "var(--ice)", textDecoration: "none", fontFamily: "var(--font-mono)" }}
              >
                {site.phone}
              </a>
              <a
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noopener"
                style={{ fontSize: 13, color: "var(--soft)", textDecoration: "none" }}
              >
                @{site.instagram}
              </a>
              <div style={{ marginTop: 8 }}>
                <div className="label-mono" style={{ marginBottom: 8, color: "var(--ice)" }}>Cidades</div>
                <p style={{ fontSize: 13, color: "var(--soft)", lineHeight: 1.8 }}>
                  Balneário Camboriú, SC<br />
                  Apucarana, PR
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="dashed-rule"
          style={{ marginBottom: 24 }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--mute)", letterSpacing: ".1em" }}>
            © {new Date().getFullYear()} {site.name} · Todos os direitos reservados
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--mute)", letterSpacing: ".1em" }}>
            Site por{" "}
            <a
              href="https://studiobrave.com.br"
              target="_blank"
              rel="noopener"
              style={{ color: "var(--blue-l)", textDecoration: "none" }}
            >
              Studio Brave
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
