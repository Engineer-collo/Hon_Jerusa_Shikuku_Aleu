import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaUserTie, FaGraduationCap, FaChalkboardTeacher, FaTrophy, FaBullseye, FaSchool, FaChalkboard } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Hon. Jerusa Aleu Shikuku | Milima Ward</title>
        <meta name="description" content="Learn about Hon. Jerusa Aleu Shikuku, MCA for Milima Ward, his background, achievements, and vision for the community." />
        <meta name="keywords" content="Milima Ward, Jerusa Aleu Shikuku, MCA, Bungoma County, Leadership, Vision, Achievements, Career, Education" />
        <meta name="author" content="Hon. Jerusa Aleu Shikuku" />
        <meta property="og:title" content="About Hon. Jerusa Aleu Shikuku | Milima Ward" />
        <meta property="og:description" content="Profile, education, career journey, achievements, and vision of Hon. Jerusa Aleu Shikuku, MCA Milima Ward." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <motion.section 
        className="min-h-screen w-full overflow-x-hidden py-16 px-4 md:px-8 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Hon. Jerusa Aleu Shikuku
          </h1>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated Public Servant | Education Champion | Community Leader
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 mb-12 border-l-4 border-blue-500"
          variants={itemVariants}
        >
          <div className="flex items-center mb-6">
            <FaUserTie className="text-blue-500 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Hon. Jerusa Aleu Shikuku serves as the elected Member of County Assembly for Milima Ward in Tongaren Constituency, Bungoma County. Born on March 12, 1975 in Sinani village, he has maintained deep roots in the community he now represents.
            </p>
            <p>
              Elected under the FORD-Kenya party, Hon. Jerusa has distinguished himself through servant leadership focused on accessibility, transparency, and sustainable development. His approach combines grassroots engagement with policy expertise.
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 mb-12 border-l-4 border-green-500"
          variants={itemVariants}
        >
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-green-500 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">Education Background</h2>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <FaSchool className="text-green-400 text-xl mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Primary Education</h3>
                <p className="text-gray-700">
                  Attended Sinani Primary School (1982-1988), where he excelled academically and served as Head Boy in his final year. His leadership qualities were evident early when he organized community clean-up initiatives.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaGraduationCap className="text-green-400 text-xl mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Secondary Education</h3>
                <p className="text-gray-700">
                  Completed O-Levels at St. Mary's High School, Bungoma (1989-1992), graduating with Division One honors. Served as Head Boy and founded the school's first debate club.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaChalkboard className="text-green-400 text-xl mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Higher Education</h3>
                <p className="text-gray-700">
                  Earned a Bachelor of Education (Arts) from Moi University (1995-1998), majoring in History and Kiswahili. His thesis on "Community Participation in Rural Education" received departmental honors.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Career Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 mb-12 border-l-4 border-purple-500"
          variants={itemVariants}
        >
          <div className="flex items-center mb-6">
            <FaChalkboardTeacher className="text-purple-500 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">Career Journey</h2>
          </div>
          <div className="space-y-6">
            <div className="pl-2 border-l-2 border-purple-200">
              <h3 className="font-semibold text-gray-800 mb-2">1999-2005: Lecturer, Bungoma Teachers' College</h3>
              <p className="text-gray-700">
                Trained over 200 aspiring teachers, specializing in pedagogical methods. Introduced community outreach programs connecting student-teachers with rural schools.
              </p>
            </div>
            
            <div className="pl-2 border-l-2 border-purple-200">
              <h3 className="font-semibold text-gray-800 mb-2">2006-2012: District Education Officer</h3>
              <p className="text-gray-700">
                Oversaw education standards in Tongaren Sub-County, improving KCSE performance by 35% through teacher training and infrastructure upgrades.
              </p>
            </div>
            
            <div className="pl-2 border-l-2 border-purple-200">
              <h3 className="font-semibold text-gray-800 mb-2">2013-Present: Member of County Assembly</h3>
              <p className="text-gray-700">
                Championed education reforms, infrastructure development, and youth empowerment programs. Served as Chair of the Education Committee (2017-2022).
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 mb-12 border-l-4 border-yellow-500"
          variants={itemVariants}
        >
          <div className="flex items-center mb-6">
            <FaTrophy className="text-yellow-500 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">Key Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Education</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Constructed 15 new classrooms and 3 ECDE centers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Established Milima Ward Education Fund (2018)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Digital literacy program for 10 schools</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Community Development</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Lokole Water Project serving 5,000+ residents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Milima Youth Empowerment Center (2021)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>30km of rural roads upgraded</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 border-l-4 border-red-500"
          variants={itemVariants}
        >
          <div className="flex items-center mb-6">
            <FaBullseye className="text-red-500 text-2xl mr-4" />
            <h2 className="text-2xl font-bold text-gray-800">Vision for Milima Ward</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <blockquote className="border-l-4 border-red-300 pl-4 italic text-gray-800">
              "I envision a Milima Ward where every child accesses quality education without walking hours to school, where farmers get their produce to market on good roads, where no woman risks her safety fetching water, and where youth see real opportunities to build their futures here at home."
            </blockquote>
            <p>
              This vision is being realized through participatory budgeting, community-led development committees, and partnerships with national government agencies. Priorities include:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Universal secondary education access by 2025</li>
              <li>100% clean water coverage by 2026</li>
              <li>Youth employment rate below 15% by 2027</li>
            </ul>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"
          variants={fadeIn}
        >
          <p>Hon. Jerusa Aleu Shikuku - Member of County Assembly, Milima Ward</p>
          <p className="mt-1">FORD-Kenya Party | Tongaren Constituency, Bungoma County</p>
        </motion.footer>
      </motion.section>
    </>
  );
};

export default About;