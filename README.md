# AI Blog

A modern Next.js blogging platform with NextAuth (GitHub) authentication and MDX support for blog posts.

## Features

- **NextAuth Authentication** - GitHub OAuth login
- **MDX Support** - Write blog posts in MDX format with React components
- **Static Generation** - Fast, SEO-friendly blog pages
- **Responsive Design** - Clean, modern UI with Tailwind CSS
- **Easy Content Management** - Add new posts by creating MDX files

## Getting Started

### Prerequisites

- Node.js 18+
- GitHub OAuth App credentials

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
AUTH_SECRET=your-secret-key
AUTH_GITHUB_ID=your-github-client-id
AUTH_GITHUB_SECRET=your-github-client-secret
```

Generate a secret:
```bash
openssl rand -base64 32
```

### GitHub OAuth Setup

1. Go to [GitHub Settings → Developer Settings → OAuth Apps](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL to:
   - Local: `http://localhost:3000/api/auth/callback/github`
   - Production: `https://your-domain.vercel.app/api/auth/callback/github`
4. Copy Client ID and Client Secret to your `.env.local`

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2026-03-18"
excerpt: "Brief summary for previews"
author: "Your Name"
---

Your content here...
```

## Deployment

The site is configured for Vercel deployment:

```bash
vercel --prod
```

## Project Structure

```
ai-blog/
├── content/
│   └── blog/           # MDX blog posts
│       └── ai-agents-2026.mdx
├── src/
│   ├── app/
│   │   ├── api/auth/   # NextAuth routes
│   │   ├── blog/      # Blog pages
│   │   └── page.tsx   # Root redirect
│   ├── auth.ts        # NextAuth config
│   └── lib/           # Utilities
├── skills/
│   ├── generate-content/  # Skill guide
│   └── post-blog/         # Skill guide
└── public/             # Static assets
```

## Skills

This project includes skill guides for content creation:

- **[Generate Content](skills/generate-content/README.md)** - Create blog posts from topics or videos
- **[Post Blog](skills/post-blog/README.md)** - Add new MDX posts and commit to the repo

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Auth**: NextAuth.js v5 (beta)
- **Styling**: Tailwind CSS
- **Content**: MDX with gray-matter
- **Deployment**: Vercel

## License

MIT
