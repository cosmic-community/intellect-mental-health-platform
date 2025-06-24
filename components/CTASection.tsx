import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-primary">
      <div className="max-w-7xl mx-auto container-padding text-center">
        <h2 className="text-white font-bold mb-6">
          Ready to Transform Your Organization's Mental Health?
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join over 4 million members worldwide who trust Intellect for evidence-based mental health support. 
          Start your journey to better workplace wellness today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#book-demo" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
            Book a Demo
          </Link>
          <Link href="#contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
            Contact Sales
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">120+</div>
            <div className="text-blue-100">Languages Supported</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-blue-100">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}