import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import your images
import agricultureImg from './assets/Agriculture.jpeg';
// You can add more images below as needed
// import techImg from '../assets/Tech.jpeg';
// import healthImg from '../assets/Health.jpeg';

const imageList = [
  {
    src: agricultureImg,
    alt: "Agriculture Sector"
  },
  // Add more images like:
  // { src: techImg, alt: "Tech Sector" },
  // { src: healthImg, alt: "Health Sector" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center bg-gray-100 py-12 px-6">
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {/* Image */}
        <img
          src={imageList[currentIndex].src}
          alt={imageList[currentIndex].alt}
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />

        {/* Prev Button */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow hover:bg-gray-200"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full shadow hover:bg-gray-200"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
