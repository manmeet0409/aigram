import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { auth } from "@/auth";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Header } from "../../../components/header";
import { ArrowLeft, Calendar, User } from "lucide-react";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const session = await auth();

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header session={session} />

      <main className="container mx-auto max-w-3xl px-4 py-12">
        {/* Back Link */}
        <Link
          href="/blog"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </Link>

        {/* Article */}
        <article className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          {/* Article Header */}
          <header className="mb-8 pb-8 border-b border-border">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote 
              source={post.content} 
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </article>

        {/* Footer Navigation */}
        <nav className="mt-8 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-muted-foreground shadow-sm transition-all hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All Posts
          </Link>
        </nav>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
