import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { auth } from '@/auth'

export default async function BlogPage() {
  const session = await auth()
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">AI Blog</h1>
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <span className="text-sm text-gray-600">
                  {session.user?.name}
                </span>
                <Link
                  href="/api/auth/signout"
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Sign out
                </Link>
              </>
            ) : (
              <Link
                href="/api/auth/signin"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
          <p className="mt-2 text-gray-600">Thoughts on AI, machine learning, and technology</p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>
              <div className="mt-2 text-sm text-gray-500">
                {post.date} · {post.author}
              </div>
              <p className="mt-3 text-gray-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-gray-600">No posts yet. Check back soon!</p>
        )}
      </main>
    </div>
  )
}
