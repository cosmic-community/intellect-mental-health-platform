import type { Solution } from '@/types'

interface SolutionsSectionProps {
  solutions: Solution[]
}

export default function SolutionsSection({ solutions }: SolutionsSectionProps) {
  // Default solutions if none provided
  const defaultSolutions = [
    {
      id: '1',
      title: 'For Businesses',
      metadata: {
        solution_name: 'Enterprise Mental Health',
        short_description: 'Comprehensive mental health support for your entire workforce with scalable solutions.',
        full_description: 'Evidence-based therapy, self-care tools, and wellness programs designed for enterprise deployment.',
        icon: { imgix_url: '/images/features-1.jpg' },
        category: { value: 'Enterprise' }
      }
    },
    {
      id: '2',
      title: 'For Trust & Safety',
      metadata: {
        solution_name: 'Content Moderation Support',
        short_description: 'Specialized mental health support for content moderation teams and trust & safety professionals.',
        full_description: 'Targeted support for teams exposed to harmful content with specialized trauma-informed care.',
        icon: { imgix_url: '/images/features-2.jpg' },
        category: { value: 'Specialized' }
      }
    },
    {
      id: '3',
      title: 'Healthcare Services',
      metadata: {
        solution_name: 'Clinical Integration',
        short_description: 'Seamless integration with existing healthcare systems and clinical workflows.',
        full_description: 'Professional mental health services that integrate with your existing healthcare infrastructure.',
        icon: { imgix_url: '/images/features-3.jpg' },
        category: { value: 'Healthcare' }
      }
    }
  ]

  const displaySolutions = solutions.length > 0 ? solutions : defaultSolutions

  return (
    <section id="solutions" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-4">
            💡 Our Solutions
          </div>
          <h2 className="text-gray-900 mb-6">Tailored Mental Health Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive mental health support designed to meet your organization's unique needs and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displaySolutions.map((solution, index) => {
            const name = solution.metadata?.solution_name || solution.title
            const shortDescription = solution.metadata?.short_description
            const fullDescription = solution.metadata?.full_description
            const icon = solution.metadata?.icon?.imgix_url
            const category = solution.metadata?.category?.value

            return (
              <div key={solution.id} className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  {icon && (
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={icon.includes('imgix_url') ? `${icon}?w=128&h=128&fit=crop&auto=format,compress` : icon}
                          alt={name}
                          width="64"
                          height="64"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {index + 1}
                      </div>
                    </div>
                  )}
                  
                  {/* Category */}
                  {category && (
                    <div className="text-sm text-blue-600 font-semibold mb-3 uppercase tracking-wide">
                      {category}
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {name}
                  </h3>
                  
                  {/* Short Description */}
                  {shortDescription && (
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {shortDescription}
                    </p>
                  )}
                  
                  {/* Full Description */}
                  {fullDescription && (
                    <div 
                      className="text-sm text-gray-500 mb-6 prose-custom"
                      dangerouslySetInnerHTML={{ __html: fullDescription }}
                    />
                  )}
                  
                  {/* Learn More Link */}
                  <div className="flex items-center justify-between">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center group/btn">
                      Learn More
                      <svg className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="text-xs text-gray-400 font-medium">
                      {index === 0 ? '🏢 Enterprise' : index === 1 ? '🛡️ Specialized' : '🏥 Healthcare'}
                    </div>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-8 translate-y-8 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Need a custom solution for your organization?</p>
          <button className="btn btn-primary text-lg px-8 py-4">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  )
}