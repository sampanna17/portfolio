import { useState, useEffect, useRef } from "react";
import { motion as Motion, useAnimation, useInView } from "framer-motion";

export default function Footer() {
    const [currentTime, setCurrentTime] = useState("");
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, {  once: false, margin: "0px 0px -100px 0px" });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString("en-US", {
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Asia/Kathmandu",
            });
            setCurrentTime(`${timeString}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
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
                ease: [0.16, 0.77, 0.47, 0.97]
            }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.8,
                ease: [0.65, 0, 0.35, 1]
            }
        }
    };

    const circleVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3
            }
        }
    };

    const buttonVariants = {
        hover: { scale: 1.05, backgroundColor: "#2563eb" },
        tap: { scale: 0.98 }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
            {/* Main Content */}
            <Motion.main 
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="container mx-auto px-4 lg:px-6 py-8 lg:py-12 min-h-screen flex flex-col justify-center"
            >
                <div className="max-w-6xl mx-auto w-full mb-48 lg:mb-0">
                    {/* Title Section */}
                    <Motion.div 
                        variants={itemVariants}
                        className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-18 lg:mb-16"
                    >
                        <div className="flex items-center gap-4 lg:gap-6 mb-4 lg:mb-0">
                            <div>
                                <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light leading-tight">
                                    Let's work
                                    <br />
                                    together
                                </h1>
                            </div>
                        </div>
                    </Motion.div>

                    {/* Horizontal line with connected circle */}
                    <Motion.div 
                        variants={itemVariants}
                        className="relative mb-28 lg:mb-12"
                    >
                        <Motion.div 
                            variants={lineVariants}
                            className="h-px bg-gray-600 w-full lg:w-[calc(100%)] origin-left"
                        />

                        {/* Get in touch circle */}
                        <Motion.div 
                            variants={circleVariants}
                            className="absolute right-10 -top-16 sm:right-20 lg:right-40 lg:-top-24"
                        >
                            <Motion.button 
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="w-32 h-32 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full bg-blue-600 text-white text-sm sm:text-lg lg:text-xl flex items-center justify-center"
                            >
                                Get in touch
                            </Motion.button>
                        </Motion.div>
                    </Motion.div>

                    {/* Contact information */}
                    <Motion.div 
                        variants={containerVariants}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-white mb-10 lg:mb-16"
                    >
                        <Motion.button 
                            variants={itemVariants}
                            whileHover={{ backgroundColor: "#1f2937" }}
                            whileTap={{ scale: 0.98 }}
                            className="h-12 lg:h-16 sm:h-14 px-4 sm:px-6 lg:px-8 rounded-full border border-gray-600 bg-transparent text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                            sampannapiya1@gmail.com
                        </Motion.button>
                        <Motion.button 
                            variants={itemVariants}
                            whileHover={{ backgroundColor: "#1f2937" }}
                            whileTap={{ scale: 0.98 }}
                            className="h-12 lg:h-16 sm:h-14 px-4 sm:px-6 lg:px-8 rounded-full border border-gray-600 bg-transparent text-sm sm:text-base"
                        >
                            +977-9864058536
                        </Motion.button>
                    </Motion.div>
                </div>
            </Motion.main>

            {/* Footer */}
            <Motion.footer 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute mb-0 bottom-8 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 px-4 lg:px-40 py-3 lg:py-4"
            >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-6 text-xs lg:text-sm text-gray-400">
                    {/* Right side - Socials first on mobile */}
                    <Motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        whileHover={{ transition: { staggerChildren: 0.1 } }}
                        className="lg:mt-0 order-1 lg:order-2"
                    >
                        <span className="text-gray-500 uppercase tracking-wider text-xs block mb-1 lg:mb-2">Socials</span>
                        <div className="flex text-sm flex-wrap gap-5 lg:gap-4 lg:text-base lg:gap3">
                            {["Instagram", "Twitter", "LinkedIn"].map((social, index) => (
                                <Motion.a 
                                    key={social}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                    href="#" 
                                    className="text-white transition-colors"
                                >
                                    {social}
                                </Motion.a>
                            ))}
                        </div>
                    </Motion.div>

                    {/* Left side - Version and Time */}
                    <div className="flex flex-col sm:flex-row sm:items-end gap-4 lg:gap-12 order-2 lg:order-1">
                        <hr className="block lg:hidden mb-2 border-gray-600 mt-4" />
                        <Motion.div 
                            initial={{ opacity: 0, y: 14 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.04 }}
                        >
                            <span className="text-gray-500 uppercase tracking-wider">Version</span>
                            <br />
                            <span className="text-white lg:text-base">2025 © Edition</span>
                        </Motion.div>
                        <Motion.div 
                            initial={{ opacity: 0, y: 14 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.15 }}
                            whileHover={{ scale: 1.04 }}
                        >
                            <span className="text-gray-500 uppercase tracking-wider">Localtime</span>
                            <br />
                            <span className="text-white lg:text-base">{currentTime}</span>
                        </Motion.div>
                    </div>
                </div>
            </Motion.footer>
        </div>
    );
}

