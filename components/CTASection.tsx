import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/images/cta-background.jpg')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto container-padding text-center relative z-10">
        {/* Main CTA */}
        <div className="mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 rounded-full text-sm font-medium text-white mb-6 backdrop-blur-sm border border-white/30">
            🚀 Transform Your Workplace Today
          </div>
          
          <h2 className="text-white font-bold mb-8 max-w-4xl mx-auto">
            Ready to Revolutionize Your Organization's Mental Health?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join over 4 million members worldwide who trust Intellect for evidence-based mental health support. 
            Start your journey to better workplace wellness today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="#book-demo" className="btn bg-white text-blue-900 hover:bg-blue-50 text-lg px-10 py-4 font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Book a Free Demo
            </Link>
            <Link href="#contact" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-10 py-4 font-semibold rounded-xl backdrop-blur-sm">
              Contact Sales
            </Link>
          </div>
          
          <p className="text-sm text-blue-200">
            No commitment required • Setup in under 24 hours • HIPAA compliant
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <div className="text-4xl font-bold text-white mb-2">120+</div>
            <div className="text-blue-100 text-lg">Languages Supported</div>
            <div className="text-sm text-blue-200 mt-2">Global accessibility for diverse teams</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <div className="text-4xl font-bold text-white mb-2">100+</div>
            <div className="text-blue-100 text-lg">Countries Served</div>
            <div className="text-sm text-blue-200 mt-2">Worldwide coverage and support</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-100 text-lg">Support Available</div>
            <div className="text-sm text-blue-200 mt-2">Round-the-clock mental health care</div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">HIPAA Compliant</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Evidence-Based</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Quick Setup</span>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-medium">Expert Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}