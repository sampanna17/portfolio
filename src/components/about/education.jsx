import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const EducationSection = ({ containerVariants, itemVariants }) => {
  const [activeTab, setActiveTab] = useState(0);

  const educationData = [
    {
      id: 0,
      institution: "Balkumari English School",
      degree: "School Leaving Certificate (SLC)",
      period: "2008 - 2018",
      description: "Completed my basic education with focus on science and technology fundamentals.",
      icon: "🏫"
    },
    {
      id: 1,
      institution: "Valmiki Shiksha Sadan",
      degree: "+2 in Science",
      period: "2018 - 2020",
      description: "Higher secondary education with majors in Physics, Chemistry, and Mathematics.",
      icon: "🔬"
    },
    {
      id: 2,
      institution: "Islington College",
      degree: "Bachelor in Information Technology (BIT)",
      period: "2020 - 2024",
      description: "Specialized in software development, web technologies, and system architecture.",
      icon: "💻"
    }
  ];

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <Motion.section 
      className="min-h-[60vh] flex items-center justify-center px-6 py-16 bg-gray-50  "
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <Motion.div 
        className="max-w-6xl w-full"
        variants={containerVariants}
      >
        <Motion.div className="mb-10 lg:mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
            My Education Journey
          </h2>
          <Motion.div 
            className="h-1 w-20 bg-gray-300 mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </Motion.div>

        {/* Mobile tabs */}
        <Motion.div className="md:hidden mb-8" variants={itemVariants}>
          <div className="flex flex-col space-y-4">
            {educationData.map((item) => (
              <Motion.button
                key={item.id}
                className={`px-6 py-4 rounded-lg text-left transition-all ${activeTab === item.id ? 'bg-gray-100 shadow-sm' : 'bg-white hover:bg-gray-50'}`}
                onClick={() => setActiveTab(item.id)}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <Motion.span 
                    className="text-2xl mr-4"
                    whileHover={{ rotate: 10 }}
                  >
                    {item.icon}
                  </Motion.span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{item.institution}</h3>
                    <p className="text-gray-600">{item.period}</p>
                  </div>
                </div>
              </Motion.button>
            ))}
          </div>
        </Motion.div>

        {/* Desktop tabs */}
        <Motion.div className="hidden md:flex mb-12" variants={itemVariants}>
          {educationData.map((item) => (
            <Motion.button
              key={item.id}
              className={`px-8 py-4 border-b-2 transition-colors ${activeTab === item.id ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab(item.id)}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {item.institution}
            </Motion.button>
          ))}
        </Motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <Motion.div
            key={activeTab}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={tabVariants}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <Motion.div 
                  className="text-6xl mb-4"
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                >
                  {educationData[activeTab].icon}
                </Motion.div>
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  {educationData[activeTab].institution}
                </h3>
                <p className="text-gray-500">{educationData[activeTab].period}</p>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-medium text-gray-800 mb-4">
                  {educationData[activeTab].degree}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {educationData[activeTab].description}
                </p>
                <Motion.div 
                  className="h-1 w-16 bg-gray-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
              </div>
            </div>
          </Motion.div>
        </AnimatePresence>
      </Motion.div>
    </Motion.section>
  );
};

export default EducationSection;