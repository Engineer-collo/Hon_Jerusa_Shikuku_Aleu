import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { FaBook, FaClinicMedical, FaRoad, FaChartLine, FaTractor } from 'react-icons/fa';

const Manifesto = () => {
  const manifestoPoints = {
    education: {
      icon: <FaBook className="text-blue-600 text-2xl mr-3" />,
      points: [
        "Ensure 100% transition from primary to secondary education",
        "Establish a ward education fund for bright but needy students",
        "Construct and equip modern classrooms in all schools",
        "Provide ICT infrastructure for digital learning",
        "Support teacher training and welfare programs"
      ]
    },
    healthcare: {
      icon: <FaClinicMedical className="text-blue-600 text-2xl mr-3" />,
      points: [
        "Upgrade all dispensaries to health centers",
        "Establish a maternal and child health program",
        "Provide ambulance services for emergencies",
        "Improve access to clean water to prevent waterborne diseases",
        "Conduct regular medical camps in remote areas"
      ]
    },
    infrastructure: {
      icon: <FaRoad className="text-blue-600 text-2xl mr-3" />,
      points: [
        "Complete the Milima-Kiburu road project",
        "Construct bridges across major rivers in the ward",
        "Expand electricity connectivity to all villages",
        "Improve market infrastructure for traders",
        "Develop water projects for irrigation and domestic use"
      ]
    },
    economy: {
      icon: <FaChartLine className="text-blue-600 text-2xl mr-3" />,
      points: [
        "Establish youth empowerment centers with skills training",
        "Support women groups with grants and capacity building",
        "Promote local industries and value addition",
        "Create market linkages for farmers",
        "Attract investors to create job opportunities"
      ]
    },
    agriculture: {
      icon: <FaTractor className="text-blue-600 text-2xl mr-3" />,
      points: [
        "Provide subsidized farm inputs to farmers",
        "Promote climate-smart agriculture",
        "Establish dairy cooperatives with cooling plants",
        "Support poultry and fish farming initiatives",
        "Develop irrigation schemes for year-round farming"
      ]
    }
  };

  const navigate = useNavigate();
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
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Leadership Manifesto
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hon. Jerusa Shikuku Aleu's comprehensive plan for the transformation of Milima Ward
          </p>
        </div>

        {/* Manifesto Sections */}
        <div className="space-y-8">
          {Object.entries(manifestoPoints).map(([key, section]) => (
            <div 
              key={key} 
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-gray-800 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()} {/* Convert camelCase to words */}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {section.points.map((point, index) => (
                    <li key={`${key}-${index}`} className="flex items-start">
                      <span className="flex-shrink-0 mt-1 mr-3">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Commitment to Milima Ward</h3>
            <blockquote className="text-gray-700 italic mb-6">
              "This manifesto represents my solemn pledge to the people of Milima Ward. 
              I commit to working tirelessly to implement these programs with transparency, 
              accountability, and community participation. Together, we will build a ward 
              that works for everyone."
            </blockquote>
            <div className="flex items-center">
              <div className="border-t-2 border-blue-300 w-16 mr-4"></div>
              <p className="font-medium text-blue-800">Hon. Jerusa Shikuku Aleu</p>
            </div>
            <p className="text-sm text-gray-500 mt-1">Member of County Assembly, Milima Ward</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Have questions about our manifesto or want to get involved?
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            onClick={() => navigate('/contact')}
          >
            Contact Our Office
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Manifesto;