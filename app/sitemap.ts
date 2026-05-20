import type { MetadataRoute } from 'next'
import { sql } from '@/lib/db'

export const dynamic = 'force-dynamic'

const BASE = 'https://falimpezaprofissional.com.br'

const serviceRoutes = [
  'impermeabilizacao-pisos-balneario-camboriu',
  'impermeabilizacao-pisos-apucarana',
  'limpeza-pos-obra-balneario-camboriu',
  'limpeza-pos-obra-apucarana',
  'lapidacao-piso-usinado-balneario-camboriu',
  'lapidacao-piso-usinado-apucarana',
  'impermeabilizacao-telhados-balneario-camboriu',
  'impermeabilizacao-telhados-apucarana',
  'tratamento-decks-balneario-camboriu',
  'pintura-epoxi-balneario-camboriu',
  'pintura-epoxi-apucarana',
  'limpeza-piscinas-balneario-camboriu',
  'porcelanato-areas-externas-balneario-camboriu',
  'porcelanato-areas-externas-apucarana',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await sql`SELECT slug, updated_at FROM blog_posts WHERE published = true`
    blogEntries = posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.updated_at as string),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    // banco indisponível — retorna só as rotas estáticas
  }

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/sobre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contato`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/balneario-camboriu`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/apucarana`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...serviceRoutes.map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogEntries,
  ]
}
