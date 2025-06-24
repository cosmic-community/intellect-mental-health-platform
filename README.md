<!-- README_START -->
# Intellect Mental Health Platform

A comprehensive mental health platform showcasing Intellect's global mental healthcare solutions. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring dynamic content management through [Cosmic](https://www.cosmicjs.com).

![Intellect Platform](https://intellect.co/og-image.jpg)

## ✨ Features

- **Hero Section** - Dynamic homepage with compelling messaging and call-to-action
- **Statistics Dashboard** - Key metrics showing platform impact and adoption rates
- **Case Studies & Testimonials** - Client success stories with photos and results
- **Solutions Showcase** - Complete mental health services portfolio
- **Article/Blog System** - Research and insights content management
- **FAQ System** - Organized help content by category
- **Dynamic Pages** - Flexible page creation system
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags and structured data
- **Type-Safe Development** - Full TypeScript implementation
- **Performance Optimized** - Image optimization with imgix integration

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=my-ai-project-production)

## Original Prompt

This application was built based on the following request:

> Create a fully working clone of https://intellect.co/

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content Management**: [Cosmic](https://www.cosmicjs.com)
- **Image Optimization**: imgix integration
- **Font**: Inter font family
- **Icons**: Emoji-based icon system
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd intellect-platform
bun install
```

2. **Environment Setup:**
```bash
cp .env.example .env.local
```

3. **Configure your environment variables:**
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. **Run the development server:**
```bash
bun dev
```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📚 Cosmic SDK Examples

### Fetching Homepage Sections
```typescript
import { cosmic } from '@/lib/cosmic'

const sections = await cosmic.objects
  .find({ type: 'homepage-sections' })
  .sort('metadata.display_order')
  .depth(1)
```

### Getting Statistics
```typescript
const stats = await cosmic.objects
  .find({ type: 'statistics' })
  .sort('metadata.display_order')
```

### Loading Case Studies
```typescript
const caseStudies = await cosmic.objects
  .find({ type: 'case-studies' })
  .depth(1)
```

## 🎯 Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Statistics** - Key metrics and KPIs
- **Articles** - Blog posts and research content
- **Case Studies** - Client testimonials and success stories
- **Homepage Sections** - Dynamic homepage content blocks
- **Solutions** - Service offerings and product information
- **Pages** - Static page content (About, etc.)
- **FAQ Items** - Help and support content
- **Team Members** - Staff profiles and information
- **Clients** - Company logos and information

Each object type includes proper metadata fields for comprehensive content management. See the [Cosmic docs](https://www.cosmicjs.com/docs) for more information.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables

### Manual Deployment
```bash
bun run build
bun start
```

Remember to set your environment variables in your hosting platform's dashboard for production deployment.
<!-- README_END -->