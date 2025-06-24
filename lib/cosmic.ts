import { createBucketClient } from '@cosmicjs/sdk'
import type { 
  Statistic, 
  Article, 
  CaseStudy, 
  HomepageSection, 
  Solution, 
  Page, 
  FAQItem,
  hasStatus
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Fetch all statistics sorted by display order
export async function getStatistics(): Promise<Statistic[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'statistics' })
      .props(['id', 'title', 'slug', 'metadata'])
      .sort('metadata.display_order')
      .depth(1)
    
    return response.objects as Statistic[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch statistics')
  }
}

// Fetch all articles with author information
export async function getArticles(): Promise<Article[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'articles' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Article[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch articles')
  }
}

// Fetch single article by slug
export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'articles', slug })
      .depth(1)
    
    return response.object as Article
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch article')
  }
}

// Fetch all case studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as CaseStudy[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch case studies')
  }
}

// Fetch homepage sections sorted by display order
export async function getHomepageSections(): Promise<HomepageSection[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'homepage-sections' })
      .props(['id', 'title', 'slug', 'metadata'])
      .sort('metadata.display_order')
      .depth(1)
    
    return response.objects as HomepageSection[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch homepage sections')
  }
}

// Fetch all solutions
export async function getSolutions(): Promise<Solution[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'solutions' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Solution[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch solutions')
  }
}

// Fetch single page by slug
export async function getPage(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug })
      .depth(1)
    
    return response.object as Page
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch page')
  }
}

// Fetch all FAQ items
export async function getFAQItems(): Promise<FAQItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'faq-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as FAQItem[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch FAQ items')
  }
}