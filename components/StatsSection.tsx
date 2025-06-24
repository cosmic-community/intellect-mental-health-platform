import type { Statistic } from '@/types'

interface StatsSectionProps {
  statistics: Statistic[]
}

export default function StatsSection({ statistics }: StatsSectionProps) {
  // Default statistics if none provided
  const defaultStatistics = [
    {
      id: '1',
      metadata: {
        icon: '🧠',
        statistic_value: '4M+',
        statistic_description: 'Active users trust Intellect for their mental health journey'
      }
    },
    {
      id: '2',
      metadata: {
        icon: '🌍',
        statistic_value: '100+',
        statistic_description: 'Countries served with localized mental health support'
      }
    },
    {
      id: '3',
      metadata: {
        icon: '💬',
        statistic_value: '120+',
        statistic_description: 'Languages supported for global accessibility'
      }
    },
    {
      id: '4',
      metadata: {
        icon: '⭐',
        statistic_value: '95%',
        statistic_description: 'Client satisfaction rate across all programs'
      }
    }
  ]

  const displayStatistics = statistics.length > 0 ? statistics : defaultStatistics

  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto container-padding relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-4 backdrop-blur-sm">
            📊 Global Impact
          </div>
          <h2 className="text-white font-bold mb-6">Proven Results Worldwide</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Real impact, real results. See how Intellect is transforming mental health support globally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayStatistics.map((stat, index) => {
            const icon = stat.metadata?.icon
            const value = stat.metadata?.statistic_value
            const description = stat.metadata?.statistic_description

            return (
              <div key={stat.id} className="text-center group relative">
                {/* Background Card */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
                
                <div className="relative z-10 p-6">
                  {/* Icon */}
                  {icon && (
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                  )}
                  
                  {/* Value */}
                  <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    {value}
                  </div>
                  
                  {/* Description */}
                  <p className="text-blue-100 text-lg leading-relaxed max-w-xs mx-auto">
                    {description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mt-6 w-full bg-white/20 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full transition-all duration-1000 delay-${index * 200} ${
                        index === 0 ? 'bg-gradient-to-r from-blue-400 to-blue-300 w-full' :
                        index === 1 ? 'bg-gradient-to-r from-green-400 to-green-300 w-5/6' :
                        index === 2 ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 w-4/5' :
                        'bg-gradient-to-r from-purple-400 to-purple-300 w-full'
                      }`}
                    />
                  </div>
                </div>
                
                {/* Decorative Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1}
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Them?</h3>
            <p className="text-blue-100 mb-6">
              Start your organization's mental health transformation today.
            </p>
            <button className="btn bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold rounded-xl">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}