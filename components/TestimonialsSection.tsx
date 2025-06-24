import type { CaseStudy } from '@/types'

interface TestimonialsSectionProps {
  testimonials: CaseStudy[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  // Default testimonials if none provided
  const defaultTestimonials = [
    {
      id: '1',
      metadata: {
        client_name: 'Sarah Chen',
        client_title: 'Head of People Operations',
        testimonial_quote: 'Intellect transformed our approach to employee mental health. The platform is intuitive, the support is exceptional, and we\'ve seen a 40% improvement in employee wellbeing scores.',
        client_photo: { imgix_url: '/images/testimonial-1.jpg' },
        company_logo: { imgix_url: '/images/logo.png' },
        results_achieved: '40% improvement in wellbeing scores, 85% employee adoption rate'
      }
    },
    {
      id: '2',
      metadata: {
        client_name: 'Michael Rodriguez',
        client_title: 'VP of Human Resources',
        testimonial_quote: 'The comprehensive mental health support from Intellect has been a game-changer for our global team. Their multilingual support and cultural sensitivity make all the difference.',
        client_photo: { imgix_url: '/images/testimonial-2.jpg' },
        company_logo: { imgix_url: '/images/logo.png' },
        results_achieved: 'Reduced sick days by 30%, improved team productivity by 25%'
      }
    },
    {
      id: '3',
      metadata: {
        client_name: 'Emma Thompson',
        client_title: 'Chief People Officer',
        testimonial_quote: 'Intellect\'s evidence-based approach and professional therapists have provided our employees with the quality mental health support they deserve. The ROI is clear.',
        client_photo: { imgix_url: '/images/testimonial-3.jpg' },
        company_logo: { imgix_url: '/images/logo.png' },
        results_achieved: '60% reduction in mental health-related absences'
      }
    }
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-800 mb-4">
            💬 Success Stories
          </div>
          <h2 className="text-gray-900 mb-6">Trusted by HR Leaders Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how organizations like yours have transformed their workplace mental health with Intellect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => {
            const clientName = testimonial.metadata?.client_name
            const clientTitle = testimonial.metadata?.client_title
            const quote = testimonial.metadata?.testimonial_quote
            const clientPhoto = testimonial.metadata?.client_photo?.imgix_url
            const companyLogo = testimonial.metadata?.company_logo?.imgix_url
            const results = testimonial.metadata?.results_achieved

            return (
              <div key={testimonial.id} className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Quote */}
                {quote && (
                  <blockquote className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                    "{quote}"
                  </blockquote>
                )}
                
                {/* Client Info */}
                <div className="flex items-center mb-6">
                  {clientPhoto && (
                    <div className="relative">
                      <img
                        src={clientPhoto.includes('imgix_url') ? `${clientPhoto}?w=128&h=128&fit=crop&auto=format,compress` : clientPhoto}
                        alt={clientName || 'Client photo'}
                        width="64"
                        height="64"
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-100 group-hover:border-blue-200 transition-colors"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{clientName}</div>
                    <div className="text-gray-600 text-sm">{clientTitle}</div>
                  </div>
                </div>
                
                {/* Results */}
                {results && (
                  <div className="bg-blue-50 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2 text-sm uppercase tracking-wide">Key Results</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">{results}</p>
                  </div>
                )}
                
                {/* Company Logo */}
                {companyLogo && (
                  <div className="border-t border-gray-100 pt-6">
                    <img
                      src={companyLogo.includes('imgix_url') ? `${companyLogo}?w=200&h=80&fit=max&auto=format,compress` : companyLogo}
                      alt="Company logo"
                      width="120"
                      height="48"
                      className="h-8 w-auto opacity-40 group-hover:opacity-60 transition-opacity grayscale group-hover:grayscale-0"
                    />
                  </div>
                )}
                
                {/* Decorative Element */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-green-400' : 'bg-purple-400'} opacity-20 group-hover:opacity-60 transition-opacity`} />
              </div>
            )
          })}
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}