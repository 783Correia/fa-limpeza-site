import type { Metadata } from "next"
import Link from "next/link"
import { waLink } from "@/lib/config"

export const metadata: Metadata = {
  title: "Sobre a FA Limpeza Profissional | Restauração Técnica de Superfícies",
  description:
    "Conheça a FA Limpeza Profissional — especialistas em restauração e impermeabilização técnica de superfícies em Balneário Camboriú SC e Apucarana PR. Técnicos especializados, equipamentos profissionais.",
}

const diferenciais = [
  {
    titulo: "Técnica especializada",
    texto: "Não somos empresa de limpeza residencial. Cada serviço é executado com equipamentos profissionais e produtos técnicos específicos para cada tipo de superfície.",
  },
  {
    titulo: "Resultado documentado",
    texto: "Fotografamos antes e depois de cada trabalho. Você vê exatamente o que foi feito — sem achismos, sem promessas vazias.",
  },
  {
    titulo: "Duas cidades, mesmo padrão",
    texto: "Atuamos em Balneário Camboriú SC e Apucarana PR com a mesma equipe, mesmos equipamentos e mesmo nível de exigência técnica.",
  },
  {
    titulo: "Atendimento ágil",
    texto: "Orçamento em até 2 horas pelo WhatsApp. Para contratos corporativos, visita técnica sem custo.",
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
            <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--mute)", textDecoration: "none" }}>
              Início
            </Link>
            <span style={{ color: "var(--mute)", fontSize: 11 }}>›</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--blue-l)" }}>
              Sobre
            </span>
          </nav>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Quem somos</p>
          <h1 className="h1" style={{ color: "var(--ice)", marginBottom: 20, maxWidth: 700 }}>
            FA Limpeza Profissional
          </h1>
          <p style={{ fontSize: 17, color: "var(--soft)", maxWidth: 580, lineHeight: 1.7 }}>
            Pisos, telhados e áreas externas para hotéis, condomínios e construtoras em Balneário Camboriú SC e Apucarana PR. Não fazemos limpeza doméstica — essa é a nossa especialidade.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2col" style={{ display: "grid", gap: 64, alignItems: "start" }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Nossa história</p>
            <h2 className="h2" style={{ color: "var(--ice)", marginBottom: 24, fontSize: 36 }}>
              Restauração técnica, não limpeza
            </h2>
            <p style={{ fontSize: 15, color: "var(--soft)", lineHeight: 1.8, marginBottom: 16 }}>
              A FA nasceu da percepção de um problema simples: a maioria das empresas de limpeza trata superfícies como se fossem todas iguais. Mármore não é porcelanato. Fibrocimento não é telha cerâmica. Deck de madeira não é calçada de concreto.
            </p>
            <p style={{ fontSize: 15, color: "var(--soft)", lineHeight: 1.8, marginBottom: 16 }}>
              Cada superfície tem uma resposta técnica diferente. Por isso trabalhamos com equipamentos e produtos específicos para cada material — e o resultado aparece.
            </p>
            <p style={{ fontSize: 15, color: "var(--soft)", lineHeight: 1.8 }}>
              Atuamos em Balneário Camboriú SC, um dos mercados imobiliários de maior padrão do Brasil, e em Apucarana PR, onde somos pioneiros em restauração técnica especializada.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {diferenciais.map((d) => (
              <div key={d.titulo} style={{ background: "var(--panel)", border: "1px solid var(--border)", padding: "24px 28px", display: "flex", gap: 16 }}>
                <div style={{ width: 3, background: "var(--blue)", flexShrink: 0, borderRadius: 2, marginTop: 4 }} />
                <div>
                  <h3 className="h3" style={{ color: "var(--ice)", fontSize: 17, marginBottom: 8 }}>{d.titulo}</h3>
                  <p style={{ fontSize: 14, color: "var(--soft)", lineHeight: 1.65 }}>{d.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--panel)", borderTop: "1px solid var(--border)", padding: "48px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "var(--ice)", marginBottom: 4, fontFamily: "var(--font-display)", textTransform: "uppercase" }}>
              Quer conhecer melhor o nosso trabalho?
            </p>
            <p style={{ fontSize: 14, color: "var(--soft)" }}>Manda uma mensagem — respondemos em até 2 horas</p>
          </div>
          <a href={waLink} target="_blank" rel="noopener" className="btn-primary">
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
