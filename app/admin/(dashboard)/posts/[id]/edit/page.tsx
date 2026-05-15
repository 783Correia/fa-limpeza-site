export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { sql } from '@/lib/db'
import { BlogPost } from '@/types/blog'
import PostForm from '../../../_components/PostForm'

interface Props {
  params: Promise<{ id: string }>
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params
  const rows = await sql`SELECT * FROM blog_posts WHERE id = ${id} LIMIT 1`
  const post = rows[0] as BlogPost | undefined
  if (!post) notFound()

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/posts" className="text-gray-500 hover:text-white transition-colors text-sm">
          ← Voltar
        </Link>
        <h1 className="text-white text-xl font-bold">Editar Post</h1>
      </div>
      <PostForm post={post} />
    </div>
  )
}
