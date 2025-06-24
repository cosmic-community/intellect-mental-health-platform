import Link from 'next/link'
import type { HomepageSection } from '@/types'

interface HeroSectionProps {
  section: HomepageSection
}

export default function HeroSection({ section }: HeroSectionProps) {
  const backgroundImage = section.metadata?.background_image?.imgix_url || '/images/hero-image.jpg'
  const headline = section.metadata?.headline || 'Redefining Mental Health Access and Quality'
  const subheadline = section.metadata?.subheadline || 'Empowering global workforces with evidence-based mental healthcare that scales with your organization.'
  const content = section.metadata?.content || ''
  const ctaText = section.metadata?.cta_text || 'Book a Demo'
  const ctaLink = section.metadata?.cta_link || '#book-demo'

  return (
    <section className="relative bg-gray-900 section-padding min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage.includes('imgix_url') ? `${backgroundImage}?w=1920&h=1080&fit=crop&auto=format,compress` : backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 right-40 w-24 h-24 bg-purple-400/20 rounded-full blur-lg animate-pulse delay-1000 hidden lg:block" />
      
      <div className="relative max-w-7xl mx-auto container-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-white">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium text-blue-200 border border-blue-400/30">
              🧠 Trusted by 4M+ users globally
            </span>
          </div>
          
          <h1 className="text-white font-bold mb-6 text-balance leading-tight">
            {headline}
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
            {subheadline}
          </p>
          
          {content && (
            <div 
              className="text-lg text-blue-200 mb-10 max-w-2xl prose-custom prose-invert"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href={ctaLink} className="btn btn-primary text-lg px-8 py-4 bg-white text-blue-900 hover:bg-blue-50">
              {ctaText}
            </Link>
            <Link href="#learn-more" className="btn btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white/10">
              Watch Demo
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>120+ Languages</span>
            </div>
          </div>
        </div>
        
        {/* App Screenshots */}
        <div className="relative hidden lg:block">
          <div className="relative z-10">
            <img
              src="/images/app-screenshot-1.png"
              alt="Intellect Mental Health App Interface"
              width="300"
              height="600"
              className="mx-auto rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-4 -left-8 z-20">
            <img
              src="/images/app-screenshot-2.png"
              alt="Therapy Session Booking"
              width="250"
              height="500"
              className="rounded-2xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="absolute -top-4 -right-8 z-30">
            <img
              src="/images/app-screenshot-3.png"
              alt="Wellness Resources"
              width="200"
              height="400"
              className="rounded-2xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}