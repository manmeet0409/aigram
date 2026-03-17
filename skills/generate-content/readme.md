# Skill: Generate Blog Content from Topic or Video

## Overview
This guide outlines how to generate blog content from a given topic or video for the AI Blog platform.

## Prerequisites
- Access to the ai-blog repository
- Ability to run CLI commands (LLM, video analysis tools)
- Understanding of MDX format for blog posts

## Process

### 1. From a Topic
When given a topic (e.g., "the latest in LLM reasoning"):
1. Research the topic using web search
2. Identify key points, recent developments, and expert opinions
3. Structure the content with:
   - Compelling title
   - Introduction explaining why it matters
   - Main sections covering key aspects
   - Technical details where relevant
   - Future implications
   - Conclusion

### 2. From a Video
When given a video URL (e.g., a YouTube talk, conference keynote):
1. Extract video content using:
   - YouTube transcript API
   - Audio transcription service
   - Frame extraction for visual content
2. Analyze the transcript for:
   - Main thesis/argument
   - Key points and evidence
   - Notable quotes
   - Timestamps for important sections
3. Transform into engaging blog post:
   - Write engaging intro
   - Structure main points logically
   - Add context and background
   - Include relevant timestamps
   - End with actionable takeaways

### 3. Output Format
Generate content in frontmatter + MDX format:

```mdx
---
title: "Your Compelling Title"
date: "YYYY-MM-DD"
excerpt: "A brief 1-2 sentence summary"
author: "Author Name"
---

Your blog content here...
```

## Tools to Use
- Web search for research
- YouTube transcript extraction
- LLM for content generation and summarization

## Best Practices
- Keep titles under 100 characters
- Excerpts should be 150 characters or less
- Use heading hierarchy (##, ###)
- Include code blocks for technical content
- Add tables for comparisons
- Include links to primary sources
