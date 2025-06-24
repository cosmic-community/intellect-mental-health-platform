import type { CaseStudy } from '@/types'

interface TestimonialsSectionProps {
  testimonials: CaseStudy[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials.length) return null

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from HR leaders who have transformed their organizations' mental health support with Intellect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => {
            const clientName = testimonial.metadata?.client_name
            const clientTitle = testimonial.metadata?.client_title
            const quote = testimonial.metadata?.testimonial_quote
            const clientPhoto = testimonial.metadata?.client_photo?.imgix_url
            const companyLogo = testimonial.metadata?.company_logo?.imgix_url
            const results = testimonial.metadata?.results_achieved

            return (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
                {/* Quote */}
                {quote && (
                  <blockquote 
                    className="text-lg text-gray-700 mb-6 prose-custom italic"
                    dangerouslySetInnerHTML={{ __html: quote }}
                  />
                )}
                
                {/* Client Info */}
                <div className="flex items-center mb-6">
                  {clientPhoto && (
                    <img
                      src={`${clientPhoto}?w=120&h=120&fit=crop&auto=format,compress`}
                      alt={clientName || 'Client photo'}
                      width="60"
                      height="60"
                      className="rounded-full mr-4"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">{clientName}</div>
                    <div className="text-gray-600">{clientTitle}</div>
                  </div>
                </div>
                
                {/* Company Logo */}
                {companyLogo && (
                  <div className="mb-6">
                    <img
                      src={`${companyLogo}?w=200&h=80&fit=crop&auto=format,compress`}
                      alt="Company logo"
                      width="100"
                      height="40"
                      className="h-10 w-auto opacity-60"
                    />
                  </div>
                )}
                
                {/* Results */}
                {results && (
                  <div 
                    className="text-sm text-gray-600 prose-custom"
                    dangerouslySetInnerHTML={{ __html: results }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}