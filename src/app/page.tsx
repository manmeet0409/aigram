import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { auth } from "@/auth";
import { Header } from "@/components/header";
import { ThemeToggle } from "@/components/themetoggle";
import { BookOpen, ArrowRight } from "lucide-react";

export default async function Home() {
  const session = await auth();
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <Header session={session} />
      
      <main className="container mx-auto max-w-5xl px-4 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <BookOpen className="mr-2 h-4 w-4" />
            Welcome to Aigram
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Insights on{" "}
            <span className="text-primary">Artificial Intelligence</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Exploring the frontiers of AI, machine learning, and technology.
            Deep dives, tutorials, and thoughtful analysis.
          </p>
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Read the Blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Recent Posts */}
        {posts.length > 0 && (
          <section aria-labelledby="recent-heading">
            <h2 id="recent-heading" className="mb-6 text-2xl font-bold">
              Recent Posts
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.slice(0, 4).map((post) => (
                <article
                  key={post.slug}
                  className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h3 className="mb-3 text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-4 flex-1 text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aigram. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
