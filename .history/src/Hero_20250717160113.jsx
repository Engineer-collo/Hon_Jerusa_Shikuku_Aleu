import React from 'react'


const Hero = () => {
  return (
    <section>
              {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hon. Jerusa Shikuku Aleu</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Member of County Assembly - Milima Ward</h2>
          <p className="text-lg mb-8">
            A visionary leader dedicated to transforming Milima Ward through education, healthcare, infrastructure, and economic empowerment.
          </p>
          <Link 
            to="/about" 
            className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

    </section>
  )
}

export default Hero