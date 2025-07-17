import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaGraduationCap, FaChalkboardTeacher, FaTrophy, FaBullseye } from "react-icons/fa";

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
    <motion.section 
      className="min-h-screen w-full overflow-x-hidden py-16 px-4 md:px-8 flex flex-col justify-center"
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
        <div className="w-24 h-1 bg-gray-300 mb-6"></div>
        <p className="text-lg text-gray-600 w-full">
          Dedicated Public Servant | Education Champion | Community Leader
        </p>
      </motion.div>

      {/* Profile Section */}
      <motion.article 
        className="mb-16"
        variants={itemVariants}
      >
        <div className="flex items-center mb-6">
          <FaUserTie className="text-gray-700 text-2xl mr-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Hon. Jerusa Aleu Shikuku serves as the elected Member of County Assembly for Milima Ward in Tongaren Constituency, Bungoma County. Born and raised in Milima, he has maintained deep roots in the community he now represents, understanding firsthand the challenges and aspirations of his constituents.
          </p>
          <p>
            Elected under the FORD–Kenya party, Hon. Jerusa has distinguished himself through his unwavering commitment to servant leadership. His approach to governance emphasizes accessibility, transparency, and tangible results. Rather than pursuing politics for personal gain, he entered public service to address systemic issues affecting education, infrastructure, and youth development in Milima Ward.
          </p>
          <p>
            What sets Hon. Jerusa apart is his hands-on leadership style. He regularly engages with community members through public forums (barazas) and makes himself available to listen to concerns. This grassroots connection informs his legislative priorities and ensures his work remains aligned with the needs of Milima residents.
          </p>
        </div>
      </motion.article>

      {/* Education Section */}
      <motion.article 
        className="mb-16"
        variants={itemVariants}
      >
        <div className="flex items-center mb-6">
          <FaGraduationCap className="text-gray-700 text-2xl mr-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Education Background</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Hon. Jerusa's academic journey began at Milima Primary School, where he first demonstrated the discipline and curiosity that would characterize his later pursuits. His secondary education at Kibabii High School further solidified his belief in education as the great equalizer.
          </p>
          <p>
            At Kenyatta University, where he earned his Bachelor's Degree in Education, Hon. Jerusa developed not just subject-matter expertise but a philosophical understanding of education's role in community development. His time at university shaped his conviction that quality education should be accessible to all, regardless of socioeconomic background.
          </p>
          <p>
            This educational foundation directly informs his current work as an MCA, where he champions policies to improve school infrastructure, support teachers, and increase enrollment—particularly for girls who face cultural barriers to education in some parts of Milima Ward.
          </p>
        </div>
      </motion.article>

      {/* Career Section */}
      <motion.article 
        className="mb-16"
        variants={itemVariants}
      >
        <div className="flex items-center mb-6">
          <FaChalkboardTeacher className="text-gray-700 text-2xl mr-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Professional Journey</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Before entering politics, Hon. Jerusa dedicated years to teaching and school administration. In the classroom, he witnessed how inadequate resources, poor infrastructure, and systemic challenges limited students' potential. These experiences planted the seeds for his eventual transition to public service.
          </p>
          <p>
            As a teacher, he became known for going beyond curriculum requirements—organizing mentorship programs, advocating for needy students, and working with parents to keep children in school. This hands-on experience with education's frontline challenges gives him unique insight as he now shapes education policy at the county level.
          </p>
          <p>
            His decision to run for office came after years of seeing how policy decisions made far from Milima affected his students' daily lives. He realized that to create lasting change, he needed to help shape those policies directly.
          </p>
        </div>
      </motion.article>

      {/* Achievements Section */}
      <motion.article 
        className="mb-16"
        variants={itemVariants}
      >
        <div className="flex items-center mb-6">
          <FaTrophy className="text-gray-700 text-2xl mr-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Key Achievements</h2>
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>Education Transformation:</strong> Hon. Jerusa has spearheaded the construction and renovation of multiple classrooms and ECDE centers across Milima Ward. Understanding that learning environment affects outcomes, he prioritized projects that create conducive spaces for teaching and learning.
          </p>
          <p>
            <strong>Infrastructure Development:</strong> Recognizing that poor roads isolate communities and hinder economic activity, he has championed road maintenance projects connecting villages to markets and services. His approach combines short-term repairs with long-term planning for sustainable infrastructure.
          </p>
          <p>
            <strong>Water Access:</strong> Through strategic partnerships and county resources, he has facilitated the drilling of boreholes in water-scarce areas, reducing the burden on women and children who previously spent hours fetching water.
          </p>
          <p>
            <strong>Youth & Women Empowerment:</strong> He initiated programs providing vocational training and startup grants, particularly targeting groups traditionally excluded from economic opportunities. These programs emphasize practical skills that lead to immediate income generation.
          </p>
        </div>
      </motion.article>

      {/* Vision Section */}
      <motion.article 
        className="mb-16"
        variants={itemVariants}
      >
        <div className="flex items-center mb-6">
          <FaBullseye className="text-gray-700 text-2xl mr-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Vision for Milima Ward</h2>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="italic">
            "I envision a Milima Ward where every child accesses quality education without walking hours to school, where farmers get their produce to market on good roads, where no woman risks her safety fetching water, and where youth see real opportunities to build their futures here at home."
          </p>
          <p>
            Hon. Jerusa's vision is rooted in sustainable, community-driven development. He prioritizes projects with long-term impact over short-term visibility, focusing on creating systems rather than temporary solutions.
          </p>
          <p>
            Central to this vision is participatory governance—ensuring residents have meaningful input in decisions affecting their lives. He regularly convenes community forums to gather input and report on progress, maintaining accountability between elections.
          </p>
          <p>
            Looking ahead, he aims to position Milima as a model for rural development, demonstrating how focused leadership, community engagement, and strategic partnerships can transform living standards even in resource-constrained settings.
          </p>
        </div>
      </motion.article>

      {/* Footer */}
      <motion.footer 
        className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"
        variants={fadeIn}
      >
        <p>Hon. Jerusa Aleu Shikuku - Member of County Assembly, Milima Ward</p>
        <p className="mt-1">FORD–Kenya Party | Tongaren Constituency, Bungoma County</p>
      </motion.footer>
    </motion.section>
  );
};

export default About;