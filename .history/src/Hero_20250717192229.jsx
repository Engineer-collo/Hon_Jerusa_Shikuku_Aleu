import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section>
      {/* Hero Section with Background Image */}
      <div 
        className="bg-cover bg-center text-white py-20 px-4"
        style={{ backgroundImage: "url('/images/city-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 max-w-6xl mx-auto flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg">
          
          {/* Image of Hon. Jerusa */}
          <div className="w-48 h-48 mb-6 md:mb-0 md:mr-10 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="/mca_photo.jpg" 
              alt="Hon. Jerusa Shikuku Aleu" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hon. Jerusa Shikuku Aleu</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Member of County Assembly - Milima Ward</h2>
            <p className="text-lg mb-8 max-w-xl">
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
      </div>
    </section>
  );
};

export default Hero;
