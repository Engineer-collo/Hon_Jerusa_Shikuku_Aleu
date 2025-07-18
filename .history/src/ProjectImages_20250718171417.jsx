import React from 'react';

const images = [
  {
    src: '/bodaboda.jpeg',
    description: 'Inspiring city view at dawn',
  },
  {
    src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    description: 'A peaceful forest path',
  },
  {
    src: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
    description: 'Sunset over the mountains',
  },
  {
    src: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
    description: 'Ocean waves hitting the rocks',
  },
  {
    src: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg',
    description: 'Calm lake with reflection',
  },
];

const ProjectImages = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Projects by Hon. Jerusa Shikuku Aleu </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.description}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-center text-amber-500 font-medium">
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImages;
