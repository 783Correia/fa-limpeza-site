"use client"
import Link from "next/link"
import { useState } from "react"
import { waLink } from "@/lib/config"

const nav = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="header-inner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        display: "flex",
        alignItems: "center",
        background: "rgba(255,255,255,.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 1px 0 var(--border)",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
        <span className="fa-mark" style={{ width: 32, height: 32, fontSize: 14, letterSpacing: "-.04em" }}>
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
        className="nav-desktop"
        style={{
          marginLeft: "auto",
          alignItems: "center",
          gap: 32,
        }}
      >
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--soft)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ice)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--soft)")}
          >
            {n.label}
          </Link>
        ))}
        <a
          href={waLink}
          target="_blank"
          rel="noopener"
          className="btn-primary"
          style={{ padding: "10px 20px", fontSize: 13 }}
        >
          Orçamento
        </a>
      </nav>

      {/* Hamburger button — mobile only */}
      <button
        className="nav-hamburger"
        style={{
          marginLeft: "auto",
          background: "none",
          border: "none",
          cursor: "pointer",
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

      {/* Mobile menu drawer */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: "rgba(255,255,255,.98)",
            borderBottom: "1px solid var(--border)",
            boxShadow: "0 8px 24px rgba(13,27,42,.08)",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 99,
          }}
        >
          {nav.map((n) => (
            <Link
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
            </Link>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            className="btn-primary"
            style={{ textAlign: "center", justifyContent: "center" }}
            onClick={() => setOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  )
}
