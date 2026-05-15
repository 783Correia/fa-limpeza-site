import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const cookieStore = await cookies()
  cookieStore.delete('fa-admin')
  const origin = new URL(request.url).origin
  return NextResponse.redirect(new URL('/admin/login', origin))
}
