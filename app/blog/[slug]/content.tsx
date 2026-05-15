'use client'

import Link from 'next/link'
import { BlogPost } from '@/types/blog'
import { waLink } from '@/lib/config'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPostContent({
  post,
  related,
}: {
  post: BlogPost
  related: BlogPost[]
}) {
  return (
    <main>
      {/* Hero — dark section */}
      <section
        style={{
          background: 'linear-gradient(170deg, #060D1A 0%, #0A0A0A 100%)',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: 120,
          paddingBottom: 64,
        }}
      >
        {/* Blue radial glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 30% 60%, rgba(21,101,192,.25) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {/* Breadcrumb */}
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: 'rgba(255,255,255,.5)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                marginBottom: 28,
                transition: 'color .2s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.85)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,.5)')
              }
            >
              ← Voltar ao Blog
            </Link>

            {/* Category badge */}
            <div style={{ marginBottom: 20 }}>
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(21,101,192,.25)',
                  color: '#90CAF9',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: 4,
                  border: '1px solid rgba(21,101,192,.4)',
                }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="h1"
              style={{
                color: '#FFFFFF',
                marginBottom: 28,
                fontSize: 'clamp(28px, 4vw, 56px)',
              }}
            >
              {post.title}
            </h1>

            {/* Date + read time */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'rgba(255,255,255,.5)',
                letterSpacing: '.1em',
              }}
            >
              <span>
                {formatDate(post.date)}
              </span>
              <span style={{ color: 'rgba(255,255,255,.2)' }}>·</span>
              <span>{post.read_time} de leitura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image — overlaps dark section */}
      {post.image_url && (
        <div
          className="container"
          style={{ marginTop: -32, position: 'relative', zIndex: 10 }}
        >
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div
              style={{
                aspectRatio: '21/9',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'var(--raised)',
                boxShadow: '0 24px 64px rgba(0,0,0,.3)',
              }}
            >
              <img
                src={post.image_url}
                alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Content body */}
      <section
        style={{
          background: '#FFFFFF',
          paddingTop: post.image_url ? 56 : 64,
          paddingBottom: 80,
        }}
      >
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {/* Excerpt */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 20,
                color: 'var(--soft)',
                lineHeight: 1.7,
                marginBottom: 48,
              }}
            >
              {post.excerpt}
            </p>

            {/* Content sections */}
            {post.content.map((section, i) => (
              <div key={i} style={{ marginBottom: 48 }}>
                {section.heading && (
                  <h2
                    className="h2"
                    style={{
                      color: 'var(--ice)',
                      marginBottom: 20,
                      fontSize: 'clamp(22px, 3vw, 40px)',
                    }}
                  >
                    {section.heading}
                  </h2>
                )}
                {section.body.split('\n\n').map((paragraph, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 17,
                      color: 'var(--soft)',
                      lineHeight: 1.75,
                      marginBottom: 18,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {/* CTA Box */}
            <div
              style={{
                background: 'var(--blue)',
                borderRadius: 16,
                padding: '48px 40px',
                textAlign: 'center',
                marginTop: 64,
                marginBottom: 48,
              }}
            >
              <h3
                className="h3"
                style={{
                  color: '#FFFFFF',
                  marginBottom: 12,
                }}
              >
                Precisa deste serviço?
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  color: 'rgba(255,255,255,.7)',
                  maxWidth: 440,
                  margin: '0 auto 32px',
                  lineHeight: 1.6,
                }}
              >
                Fale com um especialista da FA Limpeza e receba um orçamento sem compromisso
                para o serviço ideal para o seu imóvel.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#FFFFFF',
                  color: 'var(--blue)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  padding: '14px 32px',
                  borderRadius: 4,
                  textDecoration: 'none',
                  transition: 'opacity .18s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '.9')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Back link */}
            <div>
              <Link
                href="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'var(--soft)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  transition: 'color .2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--blue)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--soft)')
                }
              >
                ← Voltar ao Blog
              </Link>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div
              style={{
                maxWidth: 760,
                margin: '64px auto 0',
                paddingTop: 48,
                borderTop: '1px solid var(--border)',
              }}
            >
              <h3
                className="h3"
                style={{ color: 'var(--ice)', marginBottom: 32 }}
              >
                Artigos Relacionados
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: 24,
                }}
              >
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/blog/${r.slug}`}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <div
                      style={{
                        aspectRatio: '16/10',
                        borderRadius: 8,
                        overflow: 'hidden',
                        background: 'var(--raised)',
                        marginBottom: 12,
                      }}
                    >
                      {r.image_url ? (
                        <img
                          src={r.image_url}
                          alt={r.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            background:
                              'linear-gradient(135deg, var(--deep) 0%, var(--raised) 100%)',
                          }}
                        />
                      )}
                    </div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 15,
                        textTransform: 'uppercase',
                        color: 'var(--ice)',
                        lineHeight: 1.2,
                        marginBottom: 8,
                      }}
                    >
                      {r.title}
                    </h4>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        letterSpacing: '.1em',
                        textTransform: 'uppercase',
                        color: 'var(--blue)',
                      }}
                    >
                      Ler mais →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
