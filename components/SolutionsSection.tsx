import type { Solution } from '@/types'

interface SolutionsSectionProps {
  solutions: Solution[]
}

export default function SolutionsSection({ solutions }: SolutionsSectionProps) {
  if (!solutions.length) return null

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health support tailored to your organization's unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const name = solution.metadata?.solution_name || solution.title
            const shortDescription = solution.metadata?.short_description
            const fullDescription = solution.metadata?.full_description
            const icon = solution.metadata?.icon?.imgix_url
            const category = solution.metadata?.category?.value

            return (
              <div key={solution.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-card-hover transition-shadow duration-300 group">
                {/* Icon */}
                {icon && (
                  <div className="mb-6">
                    <img
                      src={`${icon}?w=120&h=120&fit=crop&auto=format,compress`}
                      alt={name}
                      width="60"
                      height="60"
                      className="rounded-lg group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                )}
                
                {/* Category */}
                {category && (
                  <div className="text-sm text-primary-600 font-medium mb-2 uppercase tracking-wide">
                    {category}
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
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
                    className="text-sm text-gray-500 prose-custom"
                    dangerouslySetInnerHTML={{ __html: fullDescription }}
                  />
                )}
                
                {/* Learn More Link */}
                <div className="mt-6">
                  <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group">
                    Learn More
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}