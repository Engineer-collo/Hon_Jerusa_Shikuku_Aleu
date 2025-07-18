import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { 
  FaUserTie, 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaTrophy, 
  FaBullseye, 
  FaSchool, 
  FaChalkboard,
  FaWater,
  FaRoad,
  FaHandsHelping,
  FaBalanceScale,
  FaHeart
} from "react-icons/fa";
import { GiFarmer, GiHealthNormal } from "react-icons/gi";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  return (
    <>
      <Helmet>
        <title>About Hon. Jerusa Aleu Shikuku | Milima Ward</title>
        <meta name="description" content="Comprehensive profile of Hon. Jerusa Aleu Shikuku, MCA for Milima Ward - his journey from humble beginnings to becoming one of Bungoma's most transformative leaders." />
        <meta name="keywords" content="Jerusa Aleu Shikuku biography, Milima Ward MCA, Bungoma County leadership, Education champion Kenya, Community development Kenya" />
        <meta name="author" content="Office of Hon. Jerusa Aleu Shikuku" />
        <meta property="og:title" content="The Story of Hon. Jerusa Aleu Shikuku | Milima Ward" />
        <meta property="og:description" content="From classroom to county assembly - the inspiring journey of a teacher who became a transformative leader for Milima Ward." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <motion.section 
        className="min-h-screen w-full overflow-x-hidden py-16 px-4 md:px-8 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The Journey of <span className="text-blue-600">Hon. Jerusa Aleu Shikuku</span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From a classroom in Sinani Village to the County Assembly - A story of service, transformation, and unwavering commitment to Milima Ward
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-t-4 border-blue-600"
          variants={itemVariants}
        >
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FaUserTie className="text-blue-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Profile</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-blue-600">Hon. Jerusa Aleu Shikuku</span> is the embodiment of grassroots leadership. Born on March 12, 1975 in the humble Sinani village of Milima Ward, his journey from a teacher's desk to the County Assembly chambers is a testament to his dedication to public service.
              </p>
              <p>
                Elected in 2013 and re-elected in 2017 and 2022 under the FORD-Kenya party ticket, Hon. Jerusa has established himself as one of Bungoma County's most effective and accessible MCAs. His leadership philosophy centers on <span className="font-semibold">"Tewa Mama"</span> (Lifting the Community) - a principle he lives by through his open-door policy and regular community barazas.
              </p>
              <p>
                Before politics, Hon. Jerusa spent 14 years in the education sector, experience that profoundly shaped his approach to governance. He believes that <span className="italic">"real development begins in the classroom and spreads to the farm, the market, and every household."</span>
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-3 text-lg">Core Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Integrity above all else</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Community-first decision making</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Transparent and accountable leadership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Inclusive development</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">Current Roles</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>MCA, Milima Ward (2013-Present)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Chair, Education Committee (2017-2022)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Member, County Budget Committee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Patron, Milima Youth Sacco</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Early Life & Education */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-t-4 border-green-600"
          variants={itemVariants}
        >
          <div className="flex items-center mb-8">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FaSchool className="text-green-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Early Life & Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Humble Beginnings</h3>
              <p className="text-gray-700 leading-relaxed">
                Born to peasant farmers in Sinani village, young Jerusa learned the values of hard work and community early. He would wake at 4am to help with farm chores before walking 5km to school barefoot. Despite these challenges, he excelled academically, often studying by kerosene lamp late into the night.
              </p>
              <p>
                His leadership potential emerged early when he organized fellow students to repair their dilapidated classroom roof at just 12 years old - an act that caught the attention of area education officials.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4 mt-1">
                  <FaGraduationCap className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">Academic Journey</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-green-300 pl-4">
                      <h4 className="font-medium text-gray-800">Sinani Primary School (1982-1988)</h4>
                      <p className="text-gray-700 text-sm">Top of class, Head Boy, District Math Champion (1987)</p>
                    </div>
                    <div className="border-l-2 border-green-300 pl-4">
                      <h4 className="font-medium text-gray-800">St. Mary's High School (1989-1992)</h4>
                      <p className="text-gray-700 text-sm">Division One (A-), Head Boy, Debate Club Founder</p>
                    </div>
                    <div className="border-l-2 border-green-300 pl-4">
                      <h4 className="font-medium text-gray-800">Moi University (1995-1998)</h4>
                      <p className="text-gray-700 text-sm">B.Ed (Arts) First Class Honors, Student Leader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-800 mb-3 text-lg">Turning Point: The Teacher Who Inspired Him</h3>
            <p className="text-gray-700">
              "Mr. Wanyama, my Standard 6 teacher, changed my life. He saw potential where others saw poverty. When I couldn't afford school uniform, he bought me one. When I struggled with English, he tutored me after class. His belief in me planted the seed of service that grew into my teaching career and later my political journey."
            </p>
            <p className="mt-3 font-medium text-gray-800">
              - Hon. Jerusa Aleu Shikuku
            </p>
          </div>
        </motion.div>

        {/* Career Journey */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-t-4 border-purple-600"
          variants={itemVariants}
        >
          <div className="flex items-center mb-8">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <FaChalkboardTeacher className="text-purple-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Career Journey</h2>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="border-l-2 border-purple-200 absolute h-full left-6 top-0 md:left-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative pl-10 md:pl-0 md:flex justify-between items-center">
                <div className="md:w-5/12 md:pr-8 md:text-right">
                  <h3 className="font-bold text-lg text-purple-800">1999-2005: Lecturer</h3>
                  <h4 className="text-gray-600 mb-2">Bungoma Teachers' College</h4>
                </div>
                <div className="absolute left-0 w-4 h-4 bg-purple-600 rounded-full mt-1 md:left-1/2 md:transform md:-translate-x-1/2"></div>
                <div className="md:w-5/12 mt-4 md:mt-0">
                  <p className="text-gray-700">
                    Revolutionized teacher training with practical community-based learning. Initiated "Each One Teach One" program where trainees mentored primary school pupils.
                  </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative pl-10 md:pl-0 md:flex justify-between items-center">
                <div className="md:w-5/12 md:pr-8 md:text-right">
                  <h3 className="font-bold text-lg text-purple-800">2006-2012: District Education Officer</h3>
                  <h4 className="text-gray-600 mb-2">Tongaren Sub-County</h4>
                </div>
                <div className="absolute left-0 w-4 h-4 bg-purple-600 rounded-full mt-1 md:left-1/2 md:transform md:-translate-x-1/2"></div>
                <div className="md:w-5/12 mt-4 md:mt-0">
                  <p className="text-gray-700">
                    Transformed education standards, increasing KCSE performance by 35%. Established mobile libraries and championed girls' education through the "Stay in School" initiative.
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative pl-10 md:pl-0 md:flex justify-between items-center">
                <div className="md:w-5/12 md:pr-8 md:text-right">
                  <h3 className="font-bold text-lg text-purple-800">2025-Present: MCA</h3>
                  <h4 className="text-gray-600 mb-2">Milima Ward</h4>
                </div>
                <div className="absolute left-0 w-4 h-4 bg-purple-600 rounded-full mt-1 md:left-1/2 md:transform md:-translate-x-1/2"></div>
                <div className="md:w-5/12 mt-4 md:mt-0">
                  <p className="text-gray-700">
                    Authored 12 successful motions, including the landmark Education Equalization Fund. Oversaw construction of 15 classrooms, 3 ECDE centers, and initiated the Ward's first digital literacy program.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-purple-50 p-6 rounded-xl">
            <h3 className="font-bold text-purple-800 text-xl mb-4">Why He Entered Politics</h3>
            <p className="text-gray-700 mb-4">
              "After 14 years in education, I realized that to create lasting change, I needed to influence policy and resource allocation. The final push came in 2011 when I saw bright students from poor families miss university opportunities while children of the connected got placed regardless of grades. I vowed to change this injustice."
            </p>
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <FaBalanceScale className="text-purple-600" />
              </div>
              <p className="text-sm text-gray-600">
                First campaign slogan: "Education for All, Development for All"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-t-4 border-red-600"
          variants={itemVariants}
        >
          <div className="flex items-center mb-8">
            <div className="bg-red-100 p-3 rounded-full mr-4">
              <FaTrophy className="text-red-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Transformative Achievements</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Education */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-3">
                  <FaChalkboardTeacher className="text-blue-600" />
                </div>
                <h3 className="font-bold text-blue-800">Education Revolution</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Constructed 15 new classrooms (2022-2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Established Milima Ward Education Fund (2018) - sponsored 127 needy students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Digital literacy program in 10 schools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>3 new ECDE centers with feeding programs</span>
                </li>
              </ul>
            </div>
            
            {/* Water */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-3">
                  <FaWater className="text-green-600" />
                </div>
                <h3 className="font-bold text-green-800">Water Access</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Lokole Water Project (serves 5,000+ residents)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>12 new boreholes (2017-2022)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Water kiosks in 8 villages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Rainwater harvesting systems for 5 schools</span>
                </li>
              </ul>
            </div>
            
            {/* Infrastructure */}
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-3">
                  <FaRoad className="text-yellow-600" />
                </div>
                <h3 className="font-bold text-yellow-800">Infrastructure</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>30km of rural roads upgraded</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Sinani Market modernization (2023)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>3 new footbridges over River Nzoia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Solar street lights in 5 trading centers</span>
                </li>
              </ul>
            </div>
            
            {/* Youth */}
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-3">
                  <FaHandsHelping className="text-purple-600" />
                </div>
                <h3 className="font-bold text-purple-800">Youth & Women</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Milima Youth Empowerment Center (2023)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Annual skills training for 200+ youth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Women's Sacco with 500 members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>Sports tournaments & talent development</span>
                </li>
              </ul>
            </div>
            
            {/* Agriculture */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-3">
                  <GiFarmer className="text-green-600" />
                </div>
                <h3 className="font-bold text-green-800">Agriculture</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dairy cooperative with cooling plant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Annual farm input subsidy program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Poultry farming training for 300 farmers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Access to certified seeds & extension services</span>
                </li>
              </ul>
            </div>
            
            {/* Health */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-3">
                  <GiHealthNormal className="text-red-600" />
                </div>
                <h3 className="font-bold text-red-800">Health</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Upgraded Milima Dispensary to Health Center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Monthly medical camps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Maternal health program reduced deaths by 60%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Community Health Worker training</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-t-4 border-orange-600"
          variants={itemVariants}
        >
          <div className="flex items-center mb-8">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <FaBullseye className="text-orange-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Vision for Milima Ward</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-xl mb-6">
                <blockquote className="text-lg italic leading-relaxed">
                  "I dream of a Milima where no child studies under a leaking roof, where no mother walks more than 1km for clean water, where our youth don't have to migrate to find opportunity, and where our elderly live in dignity. This is not just possible - we're making it happen every day."
                </blockquote>
                <p className="mt-4 font-medium">- Hon. Jerusa Aleu Shikuku</p>
              </div>
              
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <FaHeart className="text-orange-600" />
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Guiding Principle:</span> "Measure every project by how it improves the life of the poorest resident in our ward."
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">2023-2027 Roadmap</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                    <span className="text-orange-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Universal Secondary Education</h4>
                    <p className="text-gray-700 text-sm">Eliminate school fees for all day secondary schools by 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Water for All</h4>
                    <p className="text-gray-700 text-sm">100% clean water coverage through boreholes and piped systems by 2026</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                    <span className="text-orange-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Youth Employment</h4>
                    <p className="text-gray-700 text-sm">Reduce youth unemployment below 15% through skills training and enterprise funding</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-full mr-3 mt-1">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Agricultural Transformation</h4>
                    <p className="text-gray-700 text-sm">Triple dairy production through cooperative model and value addition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personal Life */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-16 border-t-4 border-pink-600"
          variants={itemVariants}
        >
          <div className="flex items-center mb-8">
            <div className="bg-pink-100 p-3 rounded-full mr-4">
              <FaHeart className="text-pink-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Personal Life</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">Family</h3>
              <p className="text-gray-700 mb-4">
                Married to Mr. Jerusa since 2001, with whom they have been blessed with four children - two currently in university, one in high school, and the youngest in primary school.
              </p>
              <p>
                Despite his busy schedule, Hon. Jerusa makes time for Sunday family dinners and attends all parent-teacher meetings. He often says, <span className="italic">"If I can't be present for my own children's education, how can I advocate for others'?"</span>
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">Faith & Values</h3>
              <p className="text-gray-700 mb-4">
                A devout Christian who begins each day with prayer and Bible study. His favorite verse is Micah 6:8 - <span className="italic">"Act justly, love mercy, and walk humbly with your God."</span>
              </p>
              <p>
                Still farms on his ancestral land in Sinani, saying working the soil keeps him grounded. Known for his signature cap and modest lifestyle despite his position.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-16 pt-8 border-t border-gray-200 text-center"
          variants={fadeIn}
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Continue Exploring</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about Hon. Jerusa Aleu Shikuku's current projects, legislative work, and how to contact his office.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">Projects</a>
            <a href="/gallery" className="text-blue-600 hover:text-blue-800 font-medium">Gallery</a>
            <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact</a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Office of Hon. Jerusa Aleu Shikuku - Member of County Assembly, Milima Ward
          </p>
          <p className="text-gray-400 text-xs mt-1">
            FORD-Kenya Party | Tongaren Constituency, Bungoma County
          </p>
        </motion.footer>
      </motion.section>
    </>
  );
};

export default About;