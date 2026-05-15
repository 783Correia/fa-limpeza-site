import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  const cookieStore = await cookies()
  cookieStore.delete('fa-admin')
  return NextResponse.redirect(new URL('/admin/login', 'https://falimpeza.com.br'))
}
