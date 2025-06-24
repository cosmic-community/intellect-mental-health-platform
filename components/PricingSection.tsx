import Button from '@/components/Button'
import Card from '@/components/Card'
import type { PricingPlan } from '@/types'

interface PricingSectionProps {
  plans: PricingPlan[]
}

export default function PricingSection({ plans }: PricingSectionProps) {
  // Default pricing plans if none provided
  const defaultPlans = [
    {
      id: '1',
      title: 'Starter',
      metadata: {
        plan_name: 'Starter',
        price: 'Contact Us',
        billing_period: 'per employee/month',
        description: 'Perfect for small teams getting started with mental health support.',
        features: [
          'Self-care tools and resources',
          'Basic wellness tracking',
          'Email support',
          'Mobile app access',
          'Basic analytics'
        ],
        is_popular: false,
        cta_text: 'Get Started'
      }
    },
    {
      id: '2',
      title: 'Professional',
      metadata: {
        plan_name: 'Professional',
        price: 'Contact Us',
        billing_period: 'per employee/month',
        description: 'Comprehensive mental health support for growing organizations.',
        features: [
          'Everything in Starter',
          '1-on-1 therapy sessions',
          'Group therapy sessions',
          'Crisis support 24/7',
          'Advanced analytics',
          'Manager insights',
          'Priority support'
        ],
        is_popular: true,
        cta_text: 'Most Popular'
      }
    },
    {
      id: '3',
      title: 'Enterprise',
      metadata: {
        plan_name: 'Enterprise',
        price: 'Custom Pricing',
        billing_period: 'volume discounts available',
        description: 'Tailored solutions for large organizations with custom requirements.',
        features: [
          'Everything in Professional',
          'Custom integrations',
          'Dedicated account manager',
          'Custom reporting',
          'SSO integration',
          'API access',
          'Training & onboarding',
          'SLA guarantees'
        ],
        is_popular: false,
        cta_text: 'Contact Sales'
      }
    }
  ]

  const displayPlans = plans.length > 0 ? plans : defaultPlans

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-sm font-medium text-purple-800 mb-4">
            💎 Pricing Plans
          </div>
          <h2 className="text-gray-900 mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your organization's needs. All plans include our core mental health platform.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200">
            <div className="flex">
              <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
                Monthly
              </button>
              <button className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayPlans.map((plan) => {
            const name = plan.metadata?.plan_name || plan.title
            const price = plan.metadata?.price
            const billing = plan.metadata?.billing_period
            const description = plan.metadata?.description
            const features = plan.metadata?.features || []
            const isPopular = plan.metadata?.is_popular
            const ctaText = plan.metadata?.cta_text || 'Get Started'

            return (
              <Card 
                key={plan.id} 
                variant="elevated" 
                className={`relative ${isPopular ? 'ring-2 ring-blue-500 transform scale-105' : ''} hover:-translate-y-2`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{price}</span>
                    {billing && (
                      <span className="text-gray-600 ml-2">/ {billing}</span>
                    )}
                  </div>
                  {description && (
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={isPopular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {ctaText}
                </Button>

                {/* Additional Info */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">
                    {name === 'Enterprise' ? 'Custom onboarding included' : '14-day free trial'}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure which plan is right for you?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can help you find the perfect solution for your organization's unique needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Compare All Features
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl">🔒</div>
            <div className="font-semibold text-gray-900">HIPAA Compliant</div>
            <div className="text-sm text-gray-600">Enterprise security</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">⚡</div>
            <div className="font-semibold text-gray-900">Quick Setup</div>
            <div className="text-sm text-gray-600">Live in 24 hours</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">🌍</div>
            <div className="font-semibold text-gray-900">Global Support</div>
            <div className="text-sm text-gray-600">120+ languages</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">📞</div>
            <div className="font-semibold text-gray-900">24/7 Support</div>
            <div className="text-sm text-gray-600">Always available</div>
          </div>
        </div>
      </div>
    </section>
  )
}