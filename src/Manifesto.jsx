import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { 
  FaBook, 
  FaClinicMedical, 
  FaRoad, 
  FaChartLine, 
  FaTractor,
  FaHandshake,
  FaUserTie,
  FaQuoteLeft
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Manifesto = () => {
  const manifestoPoints = {
    education: {
      icon: <FaBook className="text-blue-600 text-2xl" />,
      color: "blue",
      points: [
        "Ensure 100% transition from primary to secondary education",
        "Establish a ward education fund for bright but needy students",
        "Construct and equip modern classrooms in all schools",
        "Provide ICT infrastructure for digital learning",
        "Support teacher training and welfare programs",
        "Introduce mentorship programs linking students with professionals",
        "Establish school feeding programs in all primary schools"
      ]
    },
    healthcare: {
      icon: <FaClinicMedical className="text-green-600 text-2xl" />,
      color: "green",
      points: [
        "Upgrade all dispensaries to health centers with 24/7 services",
        "Establish a comprehensive maternal and child health program",
        "Provide ambulance services for emergencies with dedicated hotline",
        "Improve access to clean water to prevent waterborne diseases",
        "Conduct quarterly medical camps in remote areas",
        "Establish a ward health insurance scheme for vulnerable families",
        "Recruit and train community health volunteers"
      ]
    },
    infrastructure: {
      icon: <FaRoad className="text-orange-600 text-2xl" />,
      color: "orange",
      points: [
        "Complete the Milima-Kiburu road project to tarmac standard",
        "Construct durable bridges across major rivers in the ward",
        "Expand electricity connectivity to all villages within 2 years",
        "Modernize market infrastructure with proper sanitation",
        "Develop sustainable water projects for irrigation and domestic use",
        "Establish public lighting in all trading centers",
        "Construct modern bus parks in major trading centers"
      ]
    },
    economicEmpowerment: {
      icon: <FaChartLine className="text-purple-600 text-2xl" />,
      color: "purple",
      points: [
        "Establish 3 youth empowerment centers with vocational training",
        "Support 50 women groups annually with grants and capacity building",
        "Promote local industries through value addition initiatives",
        "Create market linkages for farmers through cooperatives",
        "Attract investors to create at least 500 job opportunities",
        "Establish a ward innovation hub for tech startups",
        "Develop tourism potential through cultural festivals"
      ]
    },
    agriculture: {
      icon: <FaTractor className="text-teal-600 text-2xl" />,
      color: "teal",
      points: [
        "Provide subsidized farm inputs through registered cooperatives",
        "Promote climate-smart agriculture with demonstration farms",
        "Establish 5 dairy cooperatives with modern cooling plants",
        "Support poultry and fish farming with training and inputs",
        "Develop 3 major irrigation schemes for year-round farming",
        "Introduce crop insurance programs for farmers",
        "Establish agricultural extension services in all sub-locations"
      ]
    },
    governance: {
      icon: <FaHandshake className="text-indigo-600 text-2xl" />,
      color: "indigo",
      points: [
        "Hold quarterly public participation forums in all villages",
        "Establish a transparent project monitoring system",
        "Implement a ward development tracking portal",
        "Ensure equitable distribution of resources across all areas",
        "Promote inter-community dialogues for peaceful coexistence",
        "Establish a public complaints and feedback mechanism",
        "Publish quarterly performance reports"
      ]
    }
  };

  const colorMap = {
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    green: "bg-green-50 border-green-200 text-green-800",
    orange: "bg-orange-50 border-orange-200 text-orange-800",
    purple: "bg-purple-50 border-purple-200 text-purple-800",
    teal: "bg-teal-50 border-teal-200 text-teal-800",
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-800"
  };

  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Leadership Manifesto | Milima Ward</title>
        <meta name="description" content="Hon. Jerusa Shikuku Aleu's comprehensive plan for the transformation of Milima Ward." />
        <meta name="keywords" content="Milima Ward, Manifesto, Leadership, Development, Bungoma County, Jerusa Shikuku Aleu" />
        <meta name="author" content="Hon. Jerusa Shikuku Aleu" />
        <meta property="og:title" content="Leadership Manifesto | Milima Ward" />
        <meta property="og:description" content="Comprehensive manifesto for Milima Ward by Hon. Jerusa Shikuku Aleu." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/manifesto-social.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <FaUserTie className="text-blue-600 text-3xl mr-3" />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Leadership Manifesto
              </h1>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hon. Jerusa Shikuku Aleu's comprehensive five-year development plan for Milima Ward
            </p>
          </motion.div>

          {/* Manifesto Sections */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(manifestoPoints).map(([key, section]) => (
              <motion.div 
                key={key} 
                variants={itemVariants}
                className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colorMap[section.color]}`}
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg mr-4 bg-${section.color}-100`}>
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.points.map((point, index) => (
                      <li key={`${key}-${index}`} className="flex items-start">
                        <span className="flex-shrink-0 mt-1 mr-3">
                          <svg className={`h-5 w-5 text-${section.color}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Commitment Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 shadow-lg"
          >
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex items-start">
                <FaQuoteLeft className="text-blue-300 text-3xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Commitment to Milima Ward</h3>
                  <blockquote className="text-blue-100 mb-6 leading-relaxed">
                    "This manifesto represents my solemn pledge to the people of Milima Ward. 
                    I commit to working tirelessly to implement these programs with transparency, 
                    accountability, and community participation. Together, we will build a ward 
                    that provides quality education, accessible healthcare, thriving businesses, 
                    and opportunities for all residents regardless of gender, age, or background."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="border-t-2 border-blue-400 w-16 mr-4"></div>
                    <div>
                      <p className="font-medium">Hon. Jerusa Shikuku Aleu</p>
                      <p className="text-sm text-blue-200">Member of County Assembly, Milima Ward</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Progress Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Implementation Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    year: "2024",
                    title: "Foundation Phase",
                    description: "Establishment of key programs, baseline surveys, and initial infrastructure projects"
                  },
                  {
                    year: "2025",
                    title: "Expansion Phase",
                    description: "Scaling successful programs, completing ongoing projects, and initiating new ones"
                  },
                  {
                    year: "2026",
                    title: "Consolidation Phase",
                    description: "Strengthening systems, evaluating impact, and making necessary adjustments"
                  },
                  {
                    year: "2027",
                    title: "Sustainability Phase",
                    description: "Ensuring programs are self-sustaining through community ownership and partnerships"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row items-center">
                    <div className={`hidden md:flex absolute left-1/2 h-5 w-5 rounded-full ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-400'} transform -translate-x-1/2 -translate-y-1/2`}></div>
                    <div className={`w-full md:w-5/12 p-6 rounded-lg ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <div className="flex items-center mb-3">
                          <div className={`h-3 w-3 rounded-full ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-400'} mr-3`}></div>
                          <span className="font-bold text-gray-500">{item.year}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Us in Building a Better Milima</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Your input and participation are crucial to achieving these development goals. 
              Contact us to share your ideas, volunteer, or get more information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
                onClick={() => navigate('/contact')}
              >
                Contact Our Office
              </button>
              <button
                className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-lg border border-blue-200 transition-all duration-300 hover:shadow-lg"
                onClick={() => navigate('/projects')}
              >
                View Ongoing Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Manifesto;