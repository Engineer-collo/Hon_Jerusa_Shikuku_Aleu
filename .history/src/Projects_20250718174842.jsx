import React, { useState } from 'react';

const projectImages = [
  {
    src: '/bodaboda.jpeg',
    description:
      'Hon. Jerusa Aleu Shikuku recently held a meaningful and inspiring meeting with a group of boda boda operators from Milima Ward, a vital segment of the local economy. During the gathering, she expressed deep appreciation for their hard work, resilience, and contribution to community mobility and livelihoods. The meeting was not only a chance to listen to their daily challenges — such as insecurity, poor road conditions, and high fuel costs — but also an opportunity to explore practical solutions together. Hon. Jerusa assured them of her commitment to championing improved infrastructure, better safety measures, and affordable training programs to empower riders both economically and socially. The boda boda operators welcomed her engagement with open arms, praising her for being a leader who listens, acts, and walks hand in hand with the people on the ground. It was a powerful moment that reinforced her reputation as a grassroots leader dedicated to inclusive development and youth empowerment.',
  },
  {
    src: '/roads.jpeg',
    description:
      "Grading, Gravelling and Murraming of Makunga -Kwena Road in progress. Nabing'eng'e village unit contractor will be on the site on Monday.",
  },
  {
    src: '/Agriculture.jpeg',
    description:
      'Milima Ward MCA Hon Jerusa Aleu Sikuku on Friday March 21, distributed the second batch of improved kienyeji chicks to residents. The program, which aims to improve resident living standards and fight hunger in the ward, saw 18 groups receive a total of 750 chicks. The MCA further reiterated that more support is on the way and assured residents she will do whatever she can to leave Milima a better place. Beneficiaries expressed their total support and pledged loyalty ahead of the 2027 General Election.',
  },
  {
    src: '/roadproject.jpeg',
    description:
      "Honored to have joined H.E. Governor Kenneth Makelo Lusaka in Tongaren inspecting the ongoing tarmacking of Brigadier Naitiri road. The project will enhance transportation, improve livelihoods, reduce post-harvest losses, and boost business growth. It will also enhance access to health and education. The Governor promised that the 19km Naitiri to Misikhu road will be fully tarmacked, having engaged the President on the matter. Present at the event were various MCAs and stakeholders in support of this transformative infrastructure effort.",
  },
  {
    src: '/Fertilizers.jpeg',
    description:
      'Milima Ward Personal Assistant to the MCA oversaw the receival of the final batch of top-dressing fertilizer at the Agriculture Offices in Mukuyuni. Residents were advised to await further instructions on input collection.',
  },
  {
    src: '/maizeseed.jpeg',
    description:
      "Hon Jerusa Aleu Sikuku joined H.E. Governor Lusaka and Bungoma leaders in Lungai for the flagging off of free farm inputs. She requested the fertilizer per ward be increased from 500 to 700 due to high demand. A total of 22,500 farmers will benefit, each receiving 50 kg of fertilizer and 10 kg of maize seeds. The Governor called for more funding for the program to increase its reach countywide.",
  },
  {
    src: '/sports.jpeg',
    description:
      `Milima Ward MCA Jerusa Aleu Sikuku today visited Mukuyuni Primary School to hand over netball attire to the Mukuyuni Netball Team and encouraged them to excel in both co-curricular and academics.

"As you take part in this exciting tournament, I commend your energy, talent, and teamwork. Remember, while sports build strength and unity, your academics shape your future. Strive to excel in both because true champions shine on and off the field," said the MCA.

She also pledged continued support to the school throughout the tournaments and beyond.`,
  },
  {
    src: '/hospitals.jpeg',
    description:
      'The Office of the MCA, through the Bungoma County Government and the Ministry of Health, equipped Mukuyuni Dispensary with modern medical equipment. These upgrades include diagnostic tools, treatment facilities, and better supplies. This will reduce wait times, improve health outcomes, and support healthcare workers to deliver quality care. The initiative reflects a commitment to accessible, efficient, and modern healthcare.',
  },
  {
    src: '/ceremony.jpeg',
    description:
      "Hon. Jerusa Aleu joined officials at Lukhokhwe Comprehensive School to celebrate International Day of Cooperatives. With the theme 'Driving Inclusive and Sustainable Solutions for a Better World', the MCA praised cooperatives for supporting social justice and economic empowerment. She announced KSh 2M for renovation of NADAFA and emphasized reclaiming grabbed public land for new co-op buildings. She also pledged to strengthen support systems for SACCOs, youth groups, and farmers' cooperatives across Bungoma County.",
  },
];

const ProjectImages = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-900 px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Milima Ward Development Highlights
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectImages.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.src}
              alt="Project"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700 dark:text-gray-200 text-sm whitespace-pre-line">
                {expandedIndex === index
                  ? item.description
                  : item.description.length > 250
                  ? item.description.slice(0, 250) + '...'
                  : item.description}
              </p>
              {item.description.length > 250 && (
                <button
                  onClick={() => toggleReadMore(index)}
                  className="mt-2 text-amber-500 text-sm font-semibold focus:outline-none"
                >
                  {expandedIndex === index ? 'Read less' : 'Read more'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImages;
