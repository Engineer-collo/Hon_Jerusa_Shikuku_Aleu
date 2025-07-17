import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-blue-900 text-white"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left space-y-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Let's Transform Your Life<br />
          With <span className="text-amber-400">Personalized Coaching Sessions</span>.
        </h1>
        <p className="text-lg text-gray-200">
          Learn proven tactics, master the mindset, and get real results. Whether it’s achieving your goals,
          gaining confidence, or finding fulfillment — you’re in the right place.
        </p>
        <a
          href="#book"
          className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          Book a Clarity Call
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center py-10 md:py-16">
        <img
          src="/mca_photo.png" // Replace with actual image path of the coach
          alt="MCA"
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
