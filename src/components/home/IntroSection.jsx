import { motion as Motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const IntroSection = () => {
  const controls = useAnimation();

  return (
    <section className="bg-white text-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column: Big Heading */}
        <div className="md:w-2/3">
          <Motion.h2
            initial="hidden"
            animate={controls}
            onViewportEnter={() => controls.start("visible")}
            onViewportLeave={() => controls.start("hidden")}
            viewport={{ amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.02,
                },
              },
            }}
            className="text-xl md:text-2xl lg:text-3xl leading-[1.2] tracking-tight font-normal"
          >
            {"Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge."
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden py-1 mr-[0.2em]"
                >
                  <Motion.span
                    variants={{
                      hidden: { y: "110%" },
                      visible: {
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.33, 1, 0.68, 1],
                        },
                      },
                    }}
                    className="inline-block"
                  >
                    {word}
                  </Motion.span>
                </span>
              ))}
          </Motion.h2>
        </div>

        {/* Right Column: Small text and circular button */}
        <div className="md:w-1/3 flex flex-row md:flex-col items-end md:items-start justify-between gap-6">
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-lg text-gray-700 font-light leading-relaxed w-3/5 md:w-full"
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </Motion.p>

          <div className="flex-shrink-0">
            <Link to="/about">
              <Motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
                className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-[#1c1d21] flex items-center justify-center cursor-pointer group transition-all duration-300"
              >
                <span className="text-white text-sm md:text-lg font-medium group-hover:scale-110 transition-transform duration-300 text-center px-4">
                  About me
                </span>
              </Motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
