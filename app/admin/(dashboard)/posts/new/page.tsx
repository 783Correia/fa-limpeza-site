import Link from 'next/link'
import PostForm from '../../_components/PostForm'

export default function NewPostPage() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/posts"
          className="text-gray-500 hover:text-white transition-colors text-sm"
        >
          ← Voltar
        </Link>
        <h1 className="text-white text-xl font-bold">Novo Post</h1>
      </div>
      <PostForm />
    </div>
  )
}
