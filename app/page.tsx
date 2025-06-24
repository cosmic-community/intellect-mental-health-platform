import { getHomepageSections, getStatistics, getCaseStudies, getSolutions } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import SolutionsSection from '@/components/SolutionsSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  // Fetch all data in parallel
  const [homepageSections, statistics, caseStudies, solutions] = await Promise.all([
    getHomepageSections(),
    getStatistics(),
    getCaseStudies(),
    getSolutions()
  ])

  // Find hero section
  const heroSection = homepageSections.find(section => 
    section.metadata?.section_type?.key === 'hero'
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {heroSection && <HeroSection section={heroSection} />}
      
      {/* Statistics Section */}
      {statistics.length > 0 && <StatsSection statistics={statistics} />}
      
      {/* Solutions Section */}
      {solutions.length > 0 && <SolutionsSection solutions={solutions} />}
      
      {/* Testimonials Section */}
      {caseStudies.length > 0 && <TestimonialsSection testimonials={caseStudies} />}
      
      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

export const revalidate = 3600 // Revalidate every hour