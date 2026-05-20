import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'FA Limpeza Profissional — Restauração Técnica de Superfícies'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0a1628',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div style={{
            width: 56, height: 56,
            background: '#1565C0',
            borderRadius: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontSize: 22, fontWeight: 900,
          }}>FA</div>
          <span style={{ color: '#ffffff', fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>
            FA Limpeza Profissional
          </span>
        </div>
        <div style={{ color: '#ffffff', fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
          Restauração Técnica{'\n'}de Superfícies
        </div>
        <div style={{ color: '#93c5fd', fontSize: 24 }}>
          Balneário Camboriú · SC — Apucarana · PR
        </div>
      </div>
    ),
    { ...size }
  )
}
