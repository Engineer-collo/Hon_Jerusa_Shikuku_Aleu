import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-blue-900 text-white bg-[url('/city_bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay to darken background for better text contrast */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80 z-0"></div>

      {/* Text Section */}
      <div className="relative z-10 w-full md:w-1/2 py-20 px-4 text-center md:text-left">
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

      {/* Image Section */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center py-10 md:py-16">
        <img
          src="/mca_photo.png"  // Must be in /public
          alt="Hon. Jerusa"
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
