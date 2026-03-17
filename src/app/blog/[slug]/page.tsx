import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { auth } from '@/auth'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const session = await auth()

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/blog" className="text-2xl font-bold text-gray-900 hover:text-blue-600">
            AI Blog
          </Link>
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <span className="text-sm text-gray-600">{session.user?.name}</span>
                <Link href="/api/auth/signout" className="text-sm text-red-600 hover:text-red-800">
                  Sign out
                </Link>
              </>
            ) : (
              <Link href="/api/auth/signin" className="text-sm text-gray-600 hover:text-gray-900">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
            <div className="mt-4 text-gray-500">
              {post.date} · {post.author}
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </article>

        <div className="mt-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to all posts
          </Link>
        </div>
      </main>
    </div>
  )
}
