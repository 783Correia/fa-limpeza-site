import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { supabase } from '@/lib/supabase'
import BlogPostContent from './content'

export const dynamic = 'force-dynamic'

const BASE_URL = 'https://falimpeza.com.br'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) return { title: 'Post não encontrado' }

  const ogImage = post.image_url?.startsWith('http')
    ? post.image_url
    : post.image_url
    ? `${BASE_URL}${post.image_url}`
    : `${BASE_URL}/images/og-default.jpg`

  return {
    title: `${post.meta_title || post.title} | FA Limpeza Profissional`,
    description: post.meta_description || post.excerpt,
    keywords: `${post.title}, ${post.category}, impermeabilização, limpeza profissional, FA Limpeza`,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: 'FA Limpeza Profissional',
      locale: 'pt_BR',
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!post) notFound()

  const { data: related } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .neq('id', post.id)
    .limit(3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image_url?.startsWith('http')
      ? post.image_url
      : post.image_url
      ? `${BASE_URL}${post.image_url}`
      : undefined,
    datePublished: post.date,
    dateModified: post.updated_at,
    author: {
      '@type': 'Organization',
      name: 'FA Limpeza Profissional',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FA Limpeza Profissional',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${BASE_URL}/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostContent post={post} related={related ?? []} />
    </>
  )
}
