import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const imageList = [
  '/Agriculture.jpeg',
  '/bodaboda.jpeg',
  '/ceremony.jpeg',
  '/commuty.jpeg',
  '/commuty2.jpeg',
  '/Fertilizers.jpeg',
  '/hospitals.jpeg',
  '/maizeseed.jpeg',
  'public/mca_photo.png',
  'public/mourning.jpeg',
  'public/roadproject.jpeg',
  'public/roads.jpeg',
  'public/sports.jpeg',
  'public/visting.jpeg',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imageList.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center bg-gray-900 py-12 px-6">
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {/* Image */}
        <img
          src={imageList[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
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
