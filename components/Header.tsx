"use client"
import Link from "next/link"
import { useState } from "react"
import { site, waLink } from "@/lib/config"

const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Cidades", href: "#cidades" },
  { label: "Contato", href: "#contato" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        display: "flex",
        alignItems: "center",
        padding: "0 48px",
        background: "rgba(10,10,10,.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <span
          className="fa-mark"
          style={{ width: 32, height: 32, fontSize: 14, letterSpacing: "-.04em" }}
        >
          FA
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 16,
            textTransform: "uppercase",
            color: "var(--ice)",
            letterSpacing: "-.01em",
          }}
        >
          FA Limpeza
        </span>
      </Link>

      {/* Nav desktop */}
      <nav
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
        className="hidden md:flex"
      >
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--soft)",
              textDecoration: "none",
              transition: "color .15s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--ice)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--soft)")}
          >
            {n.label}
          </a>
        ))}
        <a href={waLink} target="_blank" rel="noopener" className="btn-primary" style={{ padding: "10px 20px", fontSize: 13 }}>
          Orçamento
        </a>
      </nav>

      {/* Hamburger mobile */}
      <button
        className="md:hidden"
        style={{
          marginLeft: "auto",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          padding: 8,
        }}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "var(--ice)",
              transition: "all .2s",
              transformOrigin: "center",
              transform:
                open && i === 0
                  ? "translateY(7px) rotate(45deg)"
                  : open && i === 1
                  ? "scaleX(0)"
                  : open && i === 2
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: "var(--panel)",
            borderBottom: "1px solid var(--border)",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--soft)",
                textDecoration: "none",
              }}
            >
              {n.label}
            </a>
          ))}
          <a href={waLink} target="_blank" rel="noopener" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  )
}
