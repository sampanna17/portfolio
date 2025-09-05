import { motion as Motion } from "framer-motion";
import Sampanna from "../assets/Sampanna.png";

export const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, transform: "scale(0.95)" },
    visible: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  return (
    <Motion.div 
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col bg-[#ebebeb] text-black lg:min-h-1/2"
    >
      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4 md:px-12 py-8 md:py-0">
        
        {/* Image Container */}
        <Motion.div 
          variants={imageVariants}
          className="flex-shrink-0 w-full md:w-1/2 h-[50vh] md:h-[90vh] overflow-hidden"
        >
          <Motion.img 
            src={Sampanna}
            alt="Sampanna Piya"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain will-change-transform"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </Motion.div>

        {/* Text Content */}
        <Motion.div
          variants={containerVariants}
          className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0 mt-4 md:mt-0"
        >
          <Motion.div
            variants={itemVariants}
            className="mb-3 md:mb-4 text-sm md:text-base text-gray-600"
          >
            From Nepal
          </Motion.div>

          <Motion.h1 
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4"
          >
            Associate Software Engineer
          </Motion.h1>

          <Motion.h2 
            variants={itemVariants}
            className="text-xl md:text-3xl lg:text-4xl font-light"
          >
            Sampanna Piya
          </Motion.h2>
        </Motion.div>
      </main>
    </Motion.div>
  );
};
