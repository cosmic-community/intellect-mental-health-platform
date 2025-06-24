import Card from '@/components/Card'
import type { Integration } from '@/types'

interface IntegrationsSectionProps {
  integrations: Integration[]
}

export default function IntegrationsSection({ integrations }: IntegrationsSectionProps) {
  // Default integrations if none provided
  const defaultIntegrations = [
    {
      id: '1',
      title: 'Slack',
      metadata: {
        integration_name: 'Slack Workspace',
        description: 'Get mental health reminders and access resources directly in Slack channels.',
        logo: { imgix_url: '/images/logo.png' },
        category: { value: 'Communication' }
      }
    },
    {
      id: '2',
      title: 'Microsoft Teams',
      metadata: {
        integration_name: 'Microsoft Teams',
        description: 'Seamless integration with Teams for wellness check-ins and session booking.',
        logo: { imgix_url: '/images/logo.png' },
        category: { value: 'Communication' }
      }
    },
    {
      id: '3',
      title: 'Okta',
      metadata: {
        integration_name: 'Okta SSO',
        description: 'Single sign-on integration with enterprise identity management.',
        logo: { imgix_url: '/images/logo.png' },
        category: { value: 'Security' }
      }
    },
    {
      id: '4',
      title: 'BambooHR',
      metadata: {
        integration_name: 'BambooHR',
        description: 'Connect with HR systems for seamless employee wellness tracking.',
        logo: { imgix_url: '/images/logo.png' },
        category: { value: 'HR Systems' }
      }
    },
    {
      id: '5',
      title: 'Workday',
      metadata: {
        integration_name: 'Workday HCM',
        description: 'Integration with Workday for comprehensive employee wellness programs.',
        logo: { imgix_url: '/images/logo.png' },
        category: { value: 'HR Systems' }
      }
    },
    {
      id: '6',
      title: 'Salesforce',
      metadata: {
        integration_name: 'Salesforce',
        description: 'Connect mental health metrics with employee performance insights.',
        logo: { imgix_url: '/images/logo.png' },
        category: { value: 'CRM' }
      }
    }
  ]

  const displayIntegrations = integrations.length > 0 ? integrations : defaultIntegrations

  // Group integrations by category
  const categories = displayIntegrations.reduce((acc: Record<string, Integration[]>, integration) => {
    const category = integration.metadata?.category?.value || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(integration)
    return acc
  }, {})

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-800 mb-4">
            🔗 Integrations
          </div>
          <h2 className="text-gray-900 mb-6">Connects with Your Existing Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seamlessly integrate with the tools your team already uses. No disruption, just enhanced mental wellness.
          </p>
        </div>

        {/* Integration Categories */}
        <div className="space-y-12">
          {Object.entries(categories).map(([categoryName, categoryIntegrations]) => (
            <div key={categoryName}>
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <span className="text-2xl mr-3">
                  {categoryName === 'Communication' ? '💬' : 
                   categoryName === 'Security' ? '🔒' :
                   categoryName === 'HR Systems' ? '👥' :
                   categoryName === 'CRM' ? '📊' : '🔧'}
                </span>
                {categoryName}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryIntegrations.map((integration) => {
                  const name = integration.metadata?.integration_name || integration.title
                  const description = integration.metadata?.description
                  const logo = integration.metadata?.logo?.imgix_url

                  return (
                    <Card key={integration.id} variant="outlined" className="group hover:border-blue-300 hover:shadow-lg cursor-pointer">
                      <div className="flex items-start space-x-4">
                        {/* Logo */}
                        {logo && (
                          <div className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                            <img
                              src={`${logo}?w=96&h=96&fit=crop&auto=format,compress`}
                              alt={name}
                              width="48"
                              height="48"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {name}
                          </h4>
                          {description && (
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {description}
                            </p>
                          )}
                        </div>

                        {/* Connect Button */}
                        <div className="flex-shrink-0">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Connect
                          </button>
                        </div>
                      </div>

                      {/* Status Indicator */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-gray-500">Available</span>
                        </div>
                        <div className="text-xs text-gray-400">
                          5 min setup
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* API Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Integrations</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't see your tool? Use our robust API to build custom integrations that fit your unique workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary">
                View API Documentation
              </button>
              <button className="btn btn-outline">
                Request Integration
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Native Integrations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">&lt;5min</div>
            <div className="text-gray-600">Average Setup Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-gray-600">Integration Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}