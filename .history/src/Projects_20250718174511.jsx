import React from 'react';

const images = [
  {
    src: '/bodaboda.jpeg',
    description: 'Hon. Jerusa Aleu Shikuku recently held a meaningful and inspiring meeting with a group of boda boda operators from Milima Ward...',
  },
  {
    src: '/roads.jpeg',
    description: "Grading, Gravelling and Murraming of Makunga - Kwena Road in progress. Nabing /'eng/'e village unit contractor will be on the site on Monday.",
  },
  {
    src: '/Agriculture.jpeg',
    description: 'Milima Ward MCA Hon Jerusa Aleu Sikuku distributed the second batch of improved kienyeji chicks to residents...',
  },
  {
    src: '/roadproject.jpeg',
    description: 'Hon. Jerusa Aleu Sikuku joined H.E. Governor Lusaka in Tongaren for inspection of the Brigadier-Naitiri road project...',
  },
  {
    src: '/Fertilizers.jpeg',
    description: 'Milima Ward PA oversaw the delivery of top dressing fertilizer at Mukuyuni Agriculture Offices and urged residents to wait for collection instructions.',
  },
  {
    src: '/maizeseed.jpeg',
    description: "Hon. Jerusa Aleu joined the Governor for the launch of free farm inputs. She urged an increase in fertilizer supply from 500 to 700 per ward...",
  },
  {
    src: '/sports.jpeg',
    description: 'Hon. Jerusa visited Mukuyuni Primary School, donated netball attires, and encouraged balance between sports and academics.',
  },
  {
    src: '/hospitals.jpeg',
    description: 'The Mukuyuni Dispensary received modern medical equipment, enhancing healthcare services for Milima Ward residents.',
  },
  {
    src: '/ceremony.jpeg',
    description: 'Hon. Jerusa Aleu celebrated International Day of Cooperatives at Lukhokhwe, advocating for financial empowerment and community development.',
  },
];

const ProjectImages = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Projects by Hon. Jerusa Aleu Shikuku</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={img.src}
              alt={`Project ${index + 1}`}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectImages;
