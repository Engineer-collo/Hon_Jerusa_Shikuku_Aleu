import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Hero from "./Hero";
import { FaGraduationCap, FaClinicMedical, FaRoad, FaCalendarAlt, FaUsers, FaHandsHelping } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  // State for read more/less toggles for community highlights
  const [expanded, setExpanded] = useState([false, false, false]);

  // Community highlights data
  const communityHighlights = [
    {
      title: "International Day of Cooperatives",
      short: "Celebrating the role of cooperatives in economic empowerment and social justice across Milima Ward.",
      full: "On International Day of Cooperatives, we engaged with local societies to discuss new opportunities, share success stories, and empower members with training and resources. The event highlighted the impact of cooperatives on economic growth and social justice in Milima Ward.",
      icon: <FaUsers className="text-blue-600 mr-2" />,
      img: "/commuty1.jpeg",
      alt: "International Day of Cooperatives Ceremony",
      fallback: "/ceremony.jpeg",
      date: "June 2024",
      label: "Cooperatives Event"
    },
    {
      title: "Madaraka Day Celebrations",
      short: "Joined Governor Kenneth Lusaka and other leaders at Naitiri RC Primary School to commemorate Kenya's self-governance. Highlighted devolution achievements in roads, education, healthcare, and youth/women empowerment programs.",
      full: "Madaraka Day was marked by vibrant celebrations, speeches from county leaders, and showcases of local development projects. The event reinforced the importance of devolution and community-driven progress in Milima Ward.",
      icon: <FaCalendarAlt className="text-red-600 mr-2" />,
      img: "/commuty.jpeg",
      alt: "Madaraka Day Celebration",
      fallback: "/roads.jpeg",
      date: "June 2024",
      label: "National Holiday"
    },
    {
      title: "Farewell to Mzee Joseph Juma Khaoya",
      short: "Joined faithfuls of Pentecostal Assembly of God and Maliki residents in celebrating the life of a great family man. Remembered for his quiet strength, wisdom, and selfless love for his family and community.",
      full: "The funeral service for Mzee Joseph Juma Khaoya brought together family, friends, and community members to honor his legacy. Stories of his wisdom and kindness were shared, leaving a lasting impact on all who attended.",
      icon: <FaHandsHelping className="text-purple-600 mr-2" />,
      img: "/mourning.jpeg",
      alt: "Funeral Service",
      fallback: "/sports.jpeg",
      date: "May 2024",
      label: "Community Support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Milima Ward | Hon. Jerusa Shikuku Aleu</title>
        <meta name="description" content="Hon. Jerusa Shikuku Aleu - Development, Education, Healthcare, and Infrastructure projects in Milima Ward." />
        <meta name="keywords" content="Milima Ward, Jerusa Shikuku Aleu, Education, Healthcare, Infrastructure, Projects, Bungoma County, MCA" />
        <meta name="author" content="Hon. Jerusa Shikuku Aleu" />
        <meta property="og:title" content="Milima Ward | Hon. Jerusa Shikuku Aleu" />
        <meta property="og:description" content="Recent achievements and development projects by Hon. Jerusa Shikuku Aleu in Milima Ward." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/social-preview.jpg" />
        <meta property="og:url" content="https://milimaward.co.ke" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
        {/* Hero Section */}
        <Hero />

        {/* Quick Highlights */}
        <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
              Our Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaGraduationCap className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Education</h3>
                </div>
                <p className="text-gray-600">
                  Championing quality education through school infrastructure development, bursary programs, and teacher support initiatives to ensure every child in Milima Ward has access to quality learning.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaClinicMedical className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">Healthcare</h3>
                </div>
                <p className="text-gray-600">
                  Improving healthcare access with new facilities, maternal health programs, and mobile clinics to serve remote areas. Ensuring all residents have access to affordable, quality healthcare services.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <FaRoad className="text-orange-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-800">Infrastructure</h3>
                </div>
                <p className="text-gray-600">
                  Building and maintaining roads, bridges, and water projects to connect and serve communities. Focusing on sustainable development that improves quality of life for all residents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News/Updates */}
        <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Recent Achievements</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
                <div className="flex items-center mb-3">
                  <FaCalendarAlt className="text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-500">Completed last month</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">New classrooms commissioned at Milima Primary</h4>
                <p className="text-gray-600">
                  Constructed 4 new modern classrooms to reduce overcrowding and improve learning environment for 200+ students.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-600">
                <div className="flex items-center mb-3">
                  <FaCalendarAlt className="text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-500">Ongoing this term</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">Bursary disbursement for 500 students</h4>
                <p className="text-gray-600">
                  KES 5 million allocated to support bright but needy students across secondary schools and tertiary institutions in Milima Ward.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-600">
                <div className="flex items-center mb-3">
                  <FaCalendarAlt className="text-orange-600 mr-2" />
                  <span className="text-sm font-medium text-gray-500">Starting next week</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">Groundbreaking for new health center</h4>
                <p className="text-gray-600">
                  New 24-hour health facility to serve over 10,000 residents in the northern part of the ward, reducing travel time to nearest hospital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Highlights */}
        <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Community Engagement</h2>
              <p className="text-gray-600">
                Active participation in community events and initiatives that matter to the people of Milima Ward
              </p>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityHighlights.map((item, idx) => (
                <div key={item.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={e => {e.target.onerror=null; e.target.src=item.fallback;}}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <span className="text-white text-sm font-medium">{item.date}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      {item.icon}
                      <span className="text-sm font-medium text-gray-500">{item.label}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {expanded[idx] ? item.full : item.short}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setExpanded(expanded => expanded.map((v, i) => i === idx ? !v : v));
                      }}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      {expanded[idx] ? "Show less" : "Read more"}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Additional Highlights */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Road Works */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/roads.jpeg" 
                    alt="Makunga-Kwena Road Works" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={e => {e.target.onerror=null; e.target.src='/commuty1.jpeg';}}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Makunga-Kwena Road Upgrade</h3>
                  <p className="text-gray-600 mb-4">
                    Grading, gravelling, and murraming in progress to improve connectivity for 5 villages. Nabing'eng'e village unit contractor will be on site next week.
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Infrastructure</span>
                    <span>Ongoing</span>
                  </div>
                </div>
              </div>
              {/* Sports */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/sports.jpeg" 
                    alt="Mukuyuni Netball Team" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={e => {e.target.onerror=null; e.target.src='/mourning.jpeg';}}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Support for Mukuyuni Netball Team</h3>
                  <p className="text-gray-600 mb-4">
                    Donated new netball attires and encouraged students to excel in both sports and academics. Promised continued support beyond the tournament.
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Youth Empowerment</span>
                    <span>May 2024</span>
                  </div>
                </div>
              </div>
              {/* Ceremony */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/ceremony.jpeg" 
                    alt="Cooperatives Ceremony" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={e => {e.target.onerror=null; e.target.src='/commuty.jpeg';}}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Cooperatives Support Initiative</h3>
                  <p className="text-gray-600 mb-4">
                    Engaged with over 400 cooperative societies across Bungoma County, emphasizing their role in economic empowerment and social justice.
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Economic Development</span>
                    <span>June 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Our Office Section */}
        <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Our Office</h2>
            <p className="text-xl mb-8 text-blue-100">
              Reach out to us for inquiries, support, or to share your ideas for Milima Ward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Contact Form
              </button>
            <a 
              href="tel:+254712345678"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Call Now
            </a>
            </div>
            <div className="mt-8 text-blue-200">
              <p>Milima Ward Office, Bungoma County</p>
              <p>Open Monday-Friday: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;