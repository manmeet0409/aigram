# Skill: Post a New Blog Article

## Overview
This guide explains how to add a new blog post to the AI Blog platform by creating an MDX file and committing it to the repository.

## Prerequisites
- Write access to the ai-blog repository
- Git installed and configured
- MDX content ready in the proper format

## Process

### 1. Prepare Your MDX File
Create a new `.mdx` file in `content/blog/` with the naming convention:
- Format: `kebab-case-title.mdx`
- Example: `understanding-transformers.mdx`

### 2. Add Frontmatter
Every blog post needs frontmatter at the top:

```mdx
---
title: "Your Title Here"
date: "YYYY-MM-DD"
excerpt: "Brief summary for previews (150 chars max)"
author: "Your Name"
---

Your content starts here...
```

### 3. Write Content
- Use standard Markdown syntax
- Support for:
  - **Bold** and *italic* text
  - [Links](https://example.com)
  - Images `![alt](image-url)`
  - Code blocks with syntax highlighting
  - Tables
  - Lists (ordered and unordered)
- MDX allows React components inline if needed

### 4. Commit the Changes
```bash
git add content/blog/your-post.mdx
git commit -m "Add blog post: Your Title"
git push origin main
```

### 5. Deploy
The site auto-deploys on push to Vercel. Your post will be live within minutes.

## Directory Structure
```
ai-blog/
├── content/
│   └── blog/
│       ├── ai-agents-2026.mdx
│       └── your-new-post.mdx  ← Add new posts here
├── src/
│   └── app/
│       └── blog/
│           ├── page.tsx       ← Blog listing
│           └── [slug]/
│               └── page.tsx   ← Individual post view
└── skills/
    └── post-blog/
        └── README.md
```

## Tips
- Use descriptive slugs (URL-friendly names)
- Check existing posts for style consistency
- Preview locally with `npm run dev` before committing
- Add relevant tags in frontmatter if needed later

## Troubleshooting
- **Post not showing?** Check frontmatter format and file location
- **Build failed?** Verify MDX syntax is valid
- **Images broken?** Use absolute URLs or add images to public folder
