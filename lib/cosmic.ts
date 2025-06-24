import { createBucketClient } from '@cosmicjs/sdk'
import type { 
  Statistic, 
  Article, 
  CaseStudy, 
  HomepageSection, 
  Solution, 
  Page, 
  FAQItem,
  Feature,
  Integration,
  PricingPlan
} from '@/types'
import { hasStatus } from '@/types'

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

// Mock data functions for demo purposes
export async function getFeatures(): Promise<Feature[]> {
  // This would normally fetch from Cosmic, but for now return mock data
  return [
    {
      id: '1',
      title: 'AI-Powered Mental Health Support',
      description: 'Advanced AI technology provides personalized mental health recommendations and support.',
      icon: '🧠',
      image: '/images/features-1.jpg'
    },
    {
      id: '2',
      title: '24/7 Crisis Support',
      description: 'Round-the-clock crisis intervention and support when you need it most.',
      icon: '🆘',
      image: '/images/features-2.jpg'
    },
    {
      id: '3',
      title: 'Professional Therapist Network',
      description: 'Connect with licensed mental health professionals in your area.',
      icon: '👥',
      image: '/images/features-3.jpg'
    }
  ]
}

export async function getIntegrations(): Promise<Integration[]> {
  // This would normally fetch from Cosmic, but for now return mock data
  return [
    {
      id: '1',
      name: 'Slack',
      description: 'Integrate mental health check-ins directly into your Slack workspace.',
      logo: '/images/logo.png',
      category: 'Communication'
    },
    {
      id: '2',
      name: 'Microsoft Teams',
      description: 'Seamless integration with Microsoft Teams for workplace wellness.',
      logo: '/images/logo.png',
      category: 'Communication'
    },
    {
      id: '3',
      name: 'Zoom',
      description: 'Enable wellness sessions and mental health support in Zoom.',
      logo: '/images/logo.png',
      category: 'Video Conferencing'
    }
  ]
}

export async function getPricingPlans(): Promise<PricingPlan[]> {
  // This would normally fetch from Cosmic, but for now return mock data
  return [
    {
      id: '1',
      name: 'Starter',
      price: '$29',
      period: 'per month',
      description: 'Perfect for small teams getting started with mental health support.',
      features: [
        'Up to 50 employees',
        'Basic mental health assessments',
        'Email support',
        'Mobile app access'
      ],
      ctaText: 'Start Free Trial'
    },
    {
      id: '2',
      name: 'Professional',
      price: '$79',
      period: 'per month',
      description: 'Comprehensive mental health solution for growing organizations.',
      features: [
        'Up to 200 employees',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Manager dashboard'
      ],
      popular: true,
      ctaText: 'Get Started'
    },
    {
      id: '3',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solution for large organizations with complex needs.',
      features: [
        'Unlimited employees',
        'Dedicated account manager',
        'Custom branding',
        'Advanced security',
        'SLA guarantees'
      ],
      ctaText: 'Contact Sales'
    }
  ]
}