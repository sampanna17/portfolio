import { useState, useEffect, useRef } from "react";
import { motion as Motion, useAnimation, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    const [currentTime, setCurrentTime] = useState("");
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

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
        if (isInView) controls.start("visible");
    }, [isInView, controls]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 1, ease: "easeInOut" } }
    };

    const circleVariants = {
        hidden: { opacity: 0, scale: 0.6 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.4 } }
    };

    const buttonVariants = {
        hover: { scale: 1.07, backgroundColor: "#1D4ED8", transition: { duration: 0.3 } },
        tap: { scale: 0.97 }
    };

    const socials = [
        { icon: <FaGithub />, link: "https://github.com/sampanna17", hover: "hover:text-gray-400" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sampanna-piya/", hover: "hover:text-blue-400" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/sampanna_piya/", hover: "hover:text-pink-500" },
        { icon: <FaFacebook />, link: "https://www.facebook.com/sampanna.piya", hover: "hover:text-blue-500" },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
            <Motion.main
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="container mx-auto px-4 lg:px-6 py-8 lg:py-12 min-h-screen flex flex-col justify-center"
            >
                <div className="max-w-6xl mx-auto w-full mb-48 lg:mb-0">
                    <Motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-18 lg:mb-16">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light leading-tight">
                            Let's work
                            <br />
                            together
                        </h1>
                    </Motion.div>

                    <Motion.div variants={itemVariants} className="relative mb-28 lg:mb-12">
                        <Motion.div variants={lineVariants} className="h-px bg-gray-600 w-full lg:w-[calc(100%)] origin-left" />
                        <Motion.div variants={circleVariants} className="absolute right-10 -top-16 sm:right-20 lg:right-40 lg:-top-24">
                            <Motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="w-32 h-32 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full bg-blue-600 text-white text-sm sm:text-lg lg:text-xl flex items-center justify-center shadow-lg"
                            >
                                Get in touch
                            </Motion.button>
                        </Motion.div>
                    </Motion.div>

                    <Motion.div variants={containerVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-white mb-10 lg:mb-16">
                        <Motion.button variants={itemVariants} whileHover={{ backgroundColor: "#1f2937" }} whileTap={{ scale: 0.98 }} className="h-12 lg:h-16 sm:h-14 px-4 sm:px-6 lg:px-8 rounded-full border border-gray-600 bg-transparent text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                            sampannapiya1@gmail.com
                        </Motion.button>
                        <Motion.button variants={itemVariants} whileHover={{ backgroundColor: "#1f2937" }} whileTap={{ scale: 0.98 }} className="h-12 lg:h-16 sm:h-14 px-4 sm:px-6 lg:px-8 rounded-full border border-gray-600 bg-transparent text-sm sm:text-base">
                            +977-9864058536
                        </Motion.button>
                    </Motion.div>
                </div>
            </Motion.main>

            <Motion.footer initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute mb-0 bottom-8 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 px-4 lg:px-40 py-3 lg:py-4">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-6 text-xs lg:text-sm text-gray-400">
                    <Motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} className="lg:mt-0 order-1 lg:order-2">
                        <span className="text-gray-500 uppercase tracking-wider text-xs block mb-1 lg:mb-2">Socials</span>
                        <div className="flex text-xl gap-6 lg:gap-8">
                            {socials.map((social, index) => (
                                <Motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className={`text-white transition-colors ${social.hover}`}
                                >
                                    {social.icon}
                                </Motion.a>
                            ))}
                        </div>
                    </Motion.div>

                    <div className="flex flex-col sm:flex-row sm:items-end gap-4 lg:gap-12 order-2 lg:order-1">
                        <hr className="block lg:hidden mb-2 border-gray-600 mt-4" />
                        <Motion.div initial={{ opacity: 0, y: 14 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25, duration: 0.7 }} whileHover={{ scale: 1.03 }}>
                            <span className="text-gray-500 uppercase tracking-wider">Version</span>
                            <br />
                            <span className="text-white lg:text-base">2025 © Edition</span>
                        </Motion.div>
                        <Motion.div initial={{ opacity: 0, y: 14 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }} whileHover={{ scale: 1.03 }}>
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
