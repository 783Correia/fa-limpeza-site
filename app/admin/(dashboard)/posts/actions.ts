'use server'

import { revalidatePath } from 'next/cache'
import { supabaseAdmin } from '@/lib/supabase-admin'

type PostData = {
  title: string
  slug: string
  excerpt: string
  category: string
  image_url: string
  date: string
  read_time: string
  focus_keyword: string
  meta_title: string
  meta_description: string
  published: boolean
  content: { heading: string; body: string }[]
}

export async function createPost(data: PostData) {
  const { error } = await supabaseAdmin.from('blog_posts').insert(data)
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}

export async function updatePost(id: string, data: Partial<PostData>) {
  const { error } = await supabaseAdmin.from('blog_posts').update(data).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}

export async function deletePost(id: string) {
  const { error } = await supabaseAdmin.from('blog_posts').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}

export async function togglePublish(id: string, published: boolean) {
  const { error } = await supabaseAdmin
    .from('blog_posts')
    .update({ published })
    .eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}
