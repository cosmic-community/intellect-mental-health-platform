import { getHomepageSections, getStatistics, getCaseStudies, getSolutions, getFeatures, getIntegrations, getPricingPlans } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import SolutionsSection from '@/components/SolutionsSection'
import FeaturesSection from '@/components/FeaturesSection'
import IntegrationsSection from '@/components/IntegrationsSection'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  // Fetch all data in parallel
  const [homepageSections, statistics, caseStudies, solutions, features, integrations, pricingPlans] = await Promise.all([
    getHomepageSections(),
    getStatistics(),
    getCaseStudies(),
    getSolutions(),
    getFeatures(),
    getIntegrations(),
    getPricingPlans()
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
      
      {/* Features Section */}
      <FeaturesSection features={features} />
      
      {/* Testimonials Section */}
      {caseStudies.length > 0 && <TestimonialsSection testimonials={caseStudies} />}
      
      {/* Integrations Section */}
      <IntegrationsSection integrations={integrations} />
      
      {/* Pricing Section */}
      <PricingSection plans={pricingPlans} />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

export const revalidate = 3600 // Revalidate every hour