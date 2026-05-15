'use server'

import { revalidatePath } from 'next/cache'
import { sql } from '@/lib/db'

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
  await sql`
    INSERT INTO blog_posts
      (slug, title, excerpt, content, date, read_time, image_url, category,
       meta_title, meta_description, focus_keyword, published)
    VALUES
      (${data.slug}, ${data.title}, ${data.excerpt}, ${JSON.stringify(data.content)},
       ${data.date}, ${data.read_time}, ${data.image_url}, ${data.category},
       ${data.meta_title}, ${data.meta_description}, ${data.focus_keyword}, ${data.published})
  `
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}

export async function updatePost(id: string, data: Partial<PostData>) {
  await sql`
    UPDATE blog_posts SET
      slug            = ${data.slug ?? ''},
      title           = ${data.title ?? ''},
      excerpt         = ${data.excerpt ?? ''},
      content         = ${JSON.stringify(data.content ?? [])},
      date            = ${data.date ?? ''},
      read_time       = ${data.read_time ?? ''},
      image_url       = ${data.image_url ?? ''},
      category        = ${data.category ?? ''},
      meta_title      = ${data.meta_title ?? ''},
      meta_description= ${data.meta_description ?? ''},
      focus_keyword   = ${data.focus_keyword ?? ''},
      published       = ${data.published ?? false},
      updated_at      = now()
    WHERE id = ${id}
  `
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}

export async function deletePost(id: string) {
  await sql`DELETE FROM blog_posts WHERE id = ${id}`
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}

export async function togglePublish(id: string, published: boolean) {
  await sql`UPDATE blog_posts SET published = ${published}, updated_at = now() WHERE id = ${id}`
  revalidatePath('/blog')
  revalidatePath('/admin/posts')
}
