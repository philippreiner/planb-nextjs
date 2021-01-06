# PlanB Blog
This repo containts the PlanB blog built with [Next.js](https://nextjs.org/) and static Markdown files. It is currently work in Progress.

Everything is git-based. Blogposts are written in Markdown and can be submitted via a Pull-Request. A build pipeline generates the NextJS site and deploys it once the content is merged into `main`

The posts are stored in `_content/posts`, images can be uploaded to `public/images`(which later becomes `/images`) and each author can create a profile in `_content/people`.

This also applies for other content. Feel free to improve this blog in general and submit an PR.

## First time authors

TBD Read here how to write your first psot


## Workflow and Content Planning

TBD how you submit new posts and how we plan upcomming posts / collect ideas (github issues)

## Content Tricks and Tipps

TBD how to write in details

## General Architecture

TBDhow this is built.

### Running Locally
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/` directory is mapped to `/`. Files in these directories are treated as pages for the blog. Start editing code here. More to learn:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Credits

Aaron Czichon
Oliver Mucha
Philipp Reiner