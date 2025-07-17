import React from 'react';
import { FaSchool, FaClinicMedical, FaRoad, FaTractor, FaFutbol, FaHandsHelping } from 'react-icons/fa';

const Project = () => {
  const projects = {
    education: [
      {
        title: "Nabingenge Institute Classrooms",
        description: "Constructed 4 new classrooms and renovated 2 existing ones at Nabingenge Institute, increasing student capacity by 40%",
        location: "Nabingenge Village",
        year: "2022",
        status: "Completed"
      },
      {
        title: "Milima Primary School Library",
        description: "Established a modern library with 1,500 textbooks and reading materials for students",
        location: "Milima Township",
        year: "2021",
        status: "Completed"
      },
      {
        title: "ECD Centers Construction",
        description: "Built 3 new Early Childhood Development centers across the ward with proper sanitation facilities",
        location: "Kiburu, Cheptais, Nalondo",
        year: "2023",
        status: "Ongoing"
      }
    ],
    healthcare: [
      {
        title: "Milima Dispensary Upgrade",
        description: "Upgraded to a health center with maternity wing and laboratory services",
        location: "Milima Township",
        year: "2021",
        status: "Completed"
      },
      {
        title: "Mobile Clinic Program",
        description: "Monthly mobile clinic serving remote areas with doctor consultations and free medicines",
        location: "Various locations",
        year: "2022-Present",
        status: "Ongoing"
      }
    ],
    infrastructure: [
      {
        title: "Milima-Kiburu Road",
        description: "Graded and improved 8km road connecting 3 villages to the main highway",
        location: "Milima to Kiburu",
        year: "2022",
        status: "Completed"
      },
      {
        title: "Community Boreholes",
        description: "Drilled 5 boreholes providing clean water to over 2,000 households",
        location: "Cheptais, Nalondo, Kiburu",
        year: "2021-2023",
        status: "Completed"
      },
      {
        title: "Market Shades Construction",
        description: "Built 3 market shades with proper drainage and lighting for traders",
        location: "Milima, Kiburu, Cheptais",
        year: "2023",
        status: "Ongoing"
      }
    ],
    agriculture: [
      {
        title: "Dairy Cooperative Support",
        description: "Established cooperative with 2 milk cooling plants serving 150 farmers",
        location: "Milima Ward",
        year: "2022",
        status: "Completed"
      },
      {
        title: "Seed & Fertilizer Subsidy",
        description: "Provided subsidized farm inputs to 500 small-scale farmers annually",
        location: "Ward-wide",
        year: "2021-Present",
        status: "Ongoing"
      }
    ],
    sports: [
      {
        title: "Youth Talent Academy",
        description: "Established football and volleyball academy with coaching and equipment",
        location: "Milima Sports Ground",
        year: "2022",
        status: "Ongoing"
      },
      {
        title: "Community Sports Kits",
        description: "Distributed sports equipment to 10 youth groups across the ward",
        location: "Various locations",
        year: "2023",
        status: "Completed"
      }
    ],
    social: [
      {
        title: "Women Empowerment Fund",
        description: "Disbursed Ksh 2.5 million in grants to 50 women groups for small businesses",
        location: "Ward-wide",
        year: "2021-2023",
        status: "Ongoing"
      },
      {
        title: "Elderly Support Program",
        description: "Monthly food packages and medical support for 100 elderly citizens",
        location: "Ward-wide",
        year: "2022-Present",
        status: "Ongoing"
      }
    ]
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {project.status}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </div>
        <div className="text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {project.year}
        </div>
      </div>
    </div>
  );

  const SectionHeader = ({ icon, title }) => (
    <div className="flex items-center mb-6">
      <div className="mr-4 p-3 rounded-full bg-gray-100 text-gray-700">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Development Projects
          </h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hon. Jerusa Shikuku Aleu's tangible contributions to Milima Ward through completed and ongoing development projects
          </p>
        </div>

        {/* Education Projects */}
        <div className="mb-16">
          <SectionHeader icon={<FaSchool className="text-xl" />} title="Education Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.education.map((project, index) => (
              <ProjectCard key={`edu-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Healthcare Projects */}
        <div className="mb-16">
          <SectionHeader icon={<FaClinicMedical className="text-xl" />} title="Healthcare Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.healthcare.map((project, index) => (
              <ProjectCard key={`health-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Infrastructure Projects */}
        <div className="mb-16">
          <SectionHeader icon={<FaRoad className="text-xl" />} title="Infrastructure Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.infrastructure.map((project, index) => (
              <ProjectCard key={`infra-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Agriculture Projects */}
        <div className="mb-16">
          <SectionHeader icon={<FaTractor className="text-xl" />} title="Agriculture Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.agriculture.map((project, index) => (
              <ProjectCard key={`agri-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Sports Projects */}
        <div className="mb-16">
          <SectionHeader icon={<FaFutbol className="text-xl" />} title="Sports & Talent Development" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.sports.map((project, index) => (
              <ProjectCard key={`sports-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Social Projects */}
        <div className="mb-16">
          <SectionHeader icon={<FaHandsHelping className="text-xl" />} title="Social Support Programs" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.social.map((project, index) => (
              <ProjectCard key={`social-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Project Summary */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Project Impact Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Education Projects</div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">5,000+</div>
              <div className="text-sm text-gray-600">Beneficiaries</div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600">Villages Reached</div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">Ksh 25M+</div>
              <div className="text-sm text-gray-600">Invested</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;