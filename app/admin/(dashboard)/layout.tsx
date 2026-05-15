import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const session = cookieStore.get('fa-admin')

  if (!session || session.value !== process.env.ADMIN_SECRET) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-gray-950 border-r border-gray-800 flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-black">FA</span>
            </div>
            <span className="text-white text-sm font-bold">Blog Admin</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/admin/posts"
            className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm transition-colors"
          >
            Posts
          </Link>
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm transition-colors"
          >
            + Novo Post
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="w-full text-gray-600 hover:text-gray-400 text-xs text-left transition-colors px-3 py-2"
            >
              Sair
            </button>
          </form>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-gray-950 overflow-auto">{children}</main>
    </div>
  )
}
