import type { Statistic } from '@/types'

interface StatsSectionProps {
  statistics: Statistic[]
}

export default function StatsSection({ statistics }: StatsSectionProps) {
  if (!statistics.length) return null

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Proven Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from organizations worldwide who trust Intellect for their mental health programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => {
            const icon = stat.metadata?.icon
            const value = stat.metadata?.statistic_value
            const description = stat.metadata?.statistic_description

            return (
              <div key={stat.id} className="text-center group">
                {icon && (
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                    {icon}
                  </div>
                )}
                
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {value}
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}