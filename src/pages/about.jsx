import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import EducationSection from '../components/about/education';

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const AboutPage = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev < 3 ? prev + 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Motion.main 
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <EducationSection />
      
      <Motion.section 
        className="min-h-[50vh] flex items-center justify-center px-6 py-16"
        variants={containerVariants}
      >
        <div className="max-w-6xl w-full mb-4 lg:mb-16">
          <Motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-light text-gray-900 mb-16 max-w-4xl"
            variants={itemVariants}
          >
            <span className="inline-flex items-center whitespace-nowrap">
              I can help you with
              <div className="flex ml-2 h-6 items-center">
                <AnimatePresence>
                  {[...Array(dots)].map((_, i) => (
                    <Motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="text-gray-900"
                    >
                      .
                    </Motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </span>
          </Motion.h1>

          {/* Services grid with animated cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Service 01 */}
            <Motion.div className="space-y-6" variants={itemVariants}>
              <div className="relative text-sm text-gray-400 font-mono pb-2">
                01
                <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-300"></div>
              </div>
              <h2 className="text-2xl lg:text-3xl font-medium text-gray-900">Design</h2>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)
              </p>
            </Motion.div>

            {/* Service 02 */}
            <Motion.div className="space-y-6" variants={itemVariants}>
              <div className="relative text-sm text-gray-400 font-mono pb-2">
                02
                <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-300"></div>
              </div>
              <h2 className="text-2xl lg:text-3xl font-medium text-gray-900">Development</h2>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Building with Webflow (or Kirby CMS).
              </p>
            </Motion.div>

            {/* Service 03 */}
            <Motion.div className="space-y-6" variants={itemVariants}>
              <div className="relative text-sm text-gray-400 font-mono pb-2">
                03
                <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gray-300"></div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Motion.div
                  className="w-6 h-6 bg-gray-700 text-white flex items-center justify-center rounded-full"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  ★
                </Motion.div>
                <h2 className="text-2xl lg:text-3xl font-medium text-gray-900">The full package</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.
              </p>
            </Motion.div>
          </div>
        </div>
      </Motion.section>
    </Motion.main>
  );
};

export default AboutPage;