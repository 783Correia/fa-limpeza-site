import type { Metadata } from "next"
import { headers } from "next/headers"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppBtn from "@/components/WhatsAppBtn"
import { site } from "@/lib/config"

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Restauração Técnica de Superfícies`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "impermeabilização pisos Balneário Camboriú",
    "limpeza pós obra Balneário Camboriú",
    "restauração pisos Apucarana",
    "impermeabilização telhados SC PR",
    "lapidação piso usinado",
    "tratamento deck madeira",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
  },
  robots: { index: true, follow: true },
}

const schemaOrg = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://falimpezaprofissional.com.br/#bc",
    name: site.name,
    description: site.description,
    telephone: site.phone,
    image: "https://falimpezaprofissional.com.br/og.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Balneário Camboriú",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    geo: { "@type": "GeoCoordinates", latitude: -26.9927, longitude: -48.6352 },
    url: "https://falimpezaprofissional.com.br",
    sameAs: [
      `https://instagram.com/${site.instagram}`,
      `https://facebook.com/${site.facebook}`,
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://falimpezaprofissional.com.br/#apucarana",
    name: site.name,
    description: site.description,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Apucarana",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    geo: { "@type": "GeoCoordinates", latitude: -23.5505, longitude: -51.4608 },
    url: "https://falimpezaprofissional.com.br",
  },
]

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') ?? '/'
  const isAdmin = pathname.startsWith('/admin')

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;700;800;900&family=Mulish:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {!isAdmin && <Header />}
        <main>{children}</main>
        {!isAdmin && <Footer />}
        {!isAdmin && <WhatsAppBtn />}
      </body>
    </html>
  )
}
