import { notFound } from 'next/navigation'
import { getPage } from '@/lib/cosmic'
import type { Metadata } from 'next'

interface AboutPageProps {
  params: Promise<{ slug?: string }>
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const page = await getPage('about-us')
  
  if (!page) {
    return {
      title: 'About - Intellect',
    }
  }

  return {
    title: `${page.metadata?.page_title || page.title} - Intellect`,
    description: page.metadata?.meta_description || 'Learn about Intellect\'s mission to redefine mental health access.',
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const page = await getPage('about-us')

  if (!page) {
    notFound()
  }

  const heroImage = page.metadata?.hero_image?.imgix_url
  const content = page.metadata?.page_content || ''

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {heroImage && (
        <section className="relative bg-gray-900 section-padding">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage}?w=1920&h=800&fit=crop&auto=format,compress)`,
            }}
          >
            <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
          </div>
          <div className="relative max-w-7xl mx-auto container-padding text-center">
            <h1 className="text-white font-bold mb-6">
              {page.metadata?.page_title || page.title}
            </h1>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          {!heroImage && (
            <h1 className="text-center mb-12 text-gray-900">
              {page.metadata?.page_title || page.title}
            </h1>
          )}
          
          <div 
            className="prose-custom text-center"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
    </div>
  )
}

export const revalidate = 3600 // Revalidate every hour