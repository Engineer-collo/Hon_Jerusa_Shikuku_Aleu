import React from 'react';
import { Link } from 'react-router-dom';
import cityImage from '../assets/city-bg.jpg'; // Make sure you place your city image in the assets folder

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${cityImage})`,
        minHeight: '100vh'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hon. Jerusa Shikuku Aleu</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Member of County Assembly - Milima Ward</h2>
          <p className="text-lg mb-8">
            A visionary leader dedicated to transforming Milima Ward through education, healthcare, infrastructure, and economic empowerment.
          </p>
          <Link 
            to="/about" 
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
