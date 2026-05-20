import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#1565C0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          color: 'white',
          fontSize: 13,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          fontFamily: 'sans-serif',
        }}
      >
        FA
      </div>
    ),
    { ...size }
  )
}
