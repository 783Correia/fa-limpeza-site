import type { Metadata } from 'next'
import Link from 'next/link'
import { sql } from '@/lib/db'
import { BlogPost } from '@/types/blog'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog — FA Limpeza Profissional',
  description:
    'Artigos e dicas sobre impermeabilização, restauração de pisos, limpeza pós-obra, telhados e muito mais.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export default async function BlogPage() {
  let typedPosts: BlogPost[] = []
  try {
    const rows = await sql`SELECT * FROM blog_posts WHERE published = true ORDER BY date DESC`
    typedPosts = rows as BlogPost[]
  } catch {
    // DB indisponível — exibe lista vazia
  }

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(170deg, #EDF5FF 0%, #F5F7FA 100%)',
          paddingTop: 120,
          paddingBottom: 80,
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Blog</p>
          <h1 className="h1" style={{ color: 'var(--ice)', marginBottom: 20 }}>
            Artigos e Dicas
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 18,
              color: 'var(--soft)',
              maxWidth: 560,
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Tudo sobre impermeabilização, restauração de pisos, telhados e limpeza profissional
            para imóveis e condomínios de alto padrão.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          {typedPosts.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '80px 0',
                color: 'var(--mute)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Nenhum artigo publicado ainda. Volte em breve!
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 32,
              }}
            >
              {typedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article
        className="card blog-card"
        style={{
          borderRadius: 12,
          overflow: 'hidden',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        {/* Image */}
        <div
          style={{
            aspectRatio: '16/10',
            overflow: 'hidden',
            background: 'var(--raised)',
          }}
        >
          {post.image_url ? (
            <img
              src={post.image_url}
              alt={post.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform .4s',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, var(--deep) 0%, var(--raised) 100%)',
              }}
            />
          )}
        </div>

        {/* Body */}
        <div style={{ padding: '20px 24px 24px' }}>
          {/* Category badge */}
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(21,101,192,.1)',
              color: 'var(--blue)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: 4,
              marginBottom: 12,
            }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h2
            className="h3"
            style={{
              color: 'var(--ice)',
              marginBottom: 10,
              fontSize: 'clamp(16px, 2vw, 22px)',
              lineHeight: 1.15,
            }}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: 'var(--soft)',
              lineHeight: 1.6,
              marginBottom: 16,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.excerpt}
          </p>

          {/* Meta */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--mute)',
            }}
          >
            <span>{formatDate(post.date)}</span>
            <span style={{ color: 'var(--border2)' }}>·</span>
            <span>{post.read_time} de leitura</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
