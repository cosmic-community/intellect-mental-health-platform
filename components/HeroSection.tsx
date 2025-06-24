import Link from 'next/link'
import type { HomepageSection } from '@/types'

interface HeroSectionProps {
  section: HomepageSection
}

export default function HeroSection({ section }: HeroSectionProps) {
  const backgroundImage = section.metadata?.background_image?.imgix_url
  const headline = section.metadata?.headline || 'Redefining Mental Health Access and Quality'
  const subheadline = section.metadata?.subheadline || 'Empowering global workforces with evidence-based mental healthcare'
  const content = section.metadata?.content || ''
  const ctaText = section.metadata?.cta_text || 'Get Started'
  const ctaLink = section.metadata?.cta_link || '#book-demo'

  return (
    <section className="relative bg-gray-900 section-padding min-h-[80vh] flex items-center">
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage}?w=1920&h=1080&fit=crop&auto=format,compress)`,
            }}
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        </>
      )}
      
      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="max-w-4xl">
          <h1 className="text-white font-bold mb-6 text-balance">
            {headline}
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
            {subheadline}
          </p>
          
          {content && (
            <div 
              className="text-lg text-gray-300 mb-10 max-w-3xl prose-custom prose-invert"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={ctaLink} className="btn btn-primary text-lg px-8 py-4">
              {ctaText}
            </Link>
            <Link href="#learn-more" className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}