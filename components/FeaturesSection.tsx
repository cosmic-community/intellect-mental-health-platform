import Card from '@/components/Card'
import type { Feature } from '@/types'

interface FeaturesSectionProps {
  features: Feature[]
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  // Default features if none provided
  const defaultFeatures = [
    {
      id: '1',
      title: 'Evidence-Based Therapy',
      metadata: {
        feature_name: 'Professional Therapy Sessions',
        description: 'Connect with licensed therapists through secure video sessions, available 24/7 in over 120 languages.',
        icon: { imgix_url: '/images/features-1.jpg' },
        benefit: 'Immediate access to professional mental health support'
      }
    },
    {
      id: '2',
      title: 'Self-Care Tools',
      metadata: {
        feature_name: 'Personalized Self-Care',
        description: 'AI-powered recommendations for mindfulness exercises, mood tracking, and wellness activities tailored to your needs.',
        icon: { imgix_url: '/images/features-2.jpg' },
        benefit: 'Build lasting mental wellness habits'
      }
    },
    {
      id: '3',
      title: 'Enterprise Dashboard',
      metadata: {
        feature_name: 'Analytics & Insights',
        description: 'Comprehensive reporting and analytics to track team wellbeing trends while maintaining complete privacy.',
        icon: { imgix_url: '/images/features-3.jpg' },
        benefit: 'Data-driven decisions for workplace wellness'
      }
    },
    {
      id: '4',
      title: 'Crisis Support',
      metadata: {
        feature_name: '24/7 Crisis Intervention',
        description: 'Immediate support for mental health emergencies with qualified crisis counselors available around the clock.',
        icon: { imgix_url: '/images/features-1.jpg' },
        benefit: 'Peace of mind with emergency support'
      }
    },
    {
      id: '5',
      title: 'Cultural Adaptation',
      metadata: {
        feature_name: 'Localized Mental Health',
        description: 'Mental health support adapted to local cultures, customs, and languages for truly inclusive care.',
        icon: { imgix_url: '/images/features-2.jpg' },
        benefit: 'Culturally sensitive mental health support'
      }
    },
    {
      id: '6',
      title: 'Integration Ready',
      metadata: {
        feature_name: 'Seamless Integration',
        description: 'Easy integration with existing HR systems, SSO, and workplace tools for streamlined deployment.',
        icon: { imgix_url: '/images/features-3.jpg' },
        benefit: 'Quick setup with existing infrastructure'
      }
    }
  ]

  const displayFeatures = features.length > 0 ? features : defaultFeatures

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-4">
            ⚡ Platform Features
          </div>
          <h2 className="text-gray-900 mb-6">Everything You Need for Mental Wellness</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health tools designed for the modern workplace, backed by science and built for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((feature, index) => {
            const name = feature.metadata?.feature_name || feature.title
            const description = feature.metadata?.description
            const icon = feature.metadata?.icon?.imgix_url
            const benefit = feature.metadata?.benefit

            return (
              <Card key={feature.id} variant="elevated" className="group hover:-translate-y-2 cursor-pointer">
                {/* Icon */}
                {icon && (
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                      <img
                        src={`${icon}?w=128&h=128&fit=crop&auto=format,compress`}
                        alt={name}
                        width="64"
                        height="64"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {name}
                </h3>

                {description && (
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                  </p>
                )}

                {/* Benefit */}
                {benefit && (
                  <div className="bg-blue-50 rounded-xl p-4 mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-blue-800 text-sm font-medium">{benefit}</p>
                    </div>
                  </div>
                )}

                {/* Learn More */}
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group/btn">
                    Learn More
                    <svg className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <div className="text-xs text-gray-400 font-medium">
                    {index < 3 ? '🔥 Popular' : '✨ Premium'}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">See All Features in Action</h3>
            <p className="text-gray-600 mb-6">
              Experience the full power of our mental health platform with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary px-8 py-3">
                Request Demo
              </button>
              <button className="btn btn-outline px-8 py-3">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}