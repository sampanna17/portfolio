import { motion as Motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// Floating particle component
const Particle = ({ delay, duration, x, y, size }) => (
  <Motion.div
    className="absolute rounded-full bg-white/[0.04]"
    style={{ width: size, height: size }}
    initial={{ x, y, opacity: 0, scale: 0 }}
    animate={{
      y: [y, y - 120, y],
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Generate random particles
const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1400),
    y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 900),
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 4,
  }));

const Learning = () => {
  const [particles] = useState(() => generateParticles(30));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = ["I'M", "STILL", "LEARNING..."];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      filter: "blur(12px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const subtextVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden select-none">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      {/* Floating particles */}
      <AnimatePresence>
        {mounted &&
          particles.map((p) => (
            <Particle
              key={p.id}
              x={p.x}
              y={p.y}
              size={p.size}
              delay={p.delay}
              duration={p.duration}
            />
          ))}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Top decorative line */}
        <Motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8 sm:mb-12 origin-center"
        />

        {/* Main heading with staggered word animation */}
        <Motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-1 sm:gap-2"
        >
          {words.map((word, index) => (
            <Motion.span
              key={word}
              variants={wordVariants}
              className={`block font-extralight tracking-[0.2em] sm:tracking-[0.3em] leading-tight ${
                index === 2
                  ? "text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white/60"
                  : "text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white/90"
              }`}
              style={{
                fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
              }}
            >
              {word}
            </Motion.span>
          ))}
        </Motion.h1>

        {/* Bottom decorative line */}
        <Motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-8 sm:mt-12 origin-center"
        />

        {/* Subtext */}
        <Motion.p
          variants={subtextVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 sm:mt-8 text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase text-white/25 font-light"
          style={{
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
          }}
        >
          Portfolio under construction
        </Motion.p>

        {/* Pulsing dot indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-10 sm:mt-14 flex items-center gap-2"
        >
          <Motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"
          />
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-light"
            style={{
              fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            }}
          >
            Coming soon
          </span>
        </Motion.div>
      </div>

      {/* Corner accents */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute top-6 left-6 sm:top-10 sm:left-10 w-8 sm:w-12 h-8 sm:h-12 border-l border-t border-white/[0.06]"
      />
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-8 sm:w-12 h-8 sm:h-12 border-r border-b border-white/[0.06]"
      />
    </section>
  );
};

export default Learning;
