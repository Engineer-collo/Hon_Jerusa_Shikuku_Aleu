import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-blue-900 text-white"
    >
      {/* Text Section */}

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center py-10 md:py-16">
        <img
          src="/mca_photo.png" // Replace with actual image path of the coach
          alt="Coach"
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
