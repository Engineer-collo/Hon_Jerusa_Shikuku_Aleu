import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const imageList = [
  'Agriculture.jpeg',
  'bodaboda.jpeg',
  'ceremony.jpeg',
  'commuty.jpeg',
  'commuty2.jpeg',
  'Fertilizers.jpeg',
  'hospitals.jpeg',
  'maizeseed.jpeg',
  'mourning.jpeg',
  'roadproject.jpeg',
  'roads.png',
  'sports.jpeg',
  'visting.jpeg',
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Hon. Jerusa Aleu in Action
      </h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={`/${imageList[currentIndex]}`}
            alt={`Jerusa event ${currentIndex + 1}`}
            className="w-full h-96 object-cover transition duration-500 ease-in-out"
          />
        </div>

        {/* Prev Button */}
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-md"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-md"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Image {currentIndex + 1} of {imageList.length}
      </p>
    </div>
  );
};

export default ImageGallery;
