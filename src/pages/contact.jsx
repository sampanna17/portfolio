

import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

const socialIconVariants = {
    hover: {
        y: -3,
        color: "#fff",
        transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
};

const fields = [
    {
        id: 1,
        label: "What's your name?",
        name: "name",
        type: "text",
        placeholder: "your name",
    },
    {
        id: 2,
        label: "What's your email?",
        name: "email",
        type: "email",
        placeholder: "youremail@com.com",
    },
    {
        id: 3,
        label: "What's your organization?",
        name: "organization",
        type: "text",
        placeholder: "you organization",
    },
    {
        id: 4,
        label: "What services do you need?",
        name: "services",
        type: "text",
        placeholder: "Web Design, Web Development...",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization: "",
        services: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Motion.div
            initial="hidden"
            animate="visible"
            className="min-h-screen bg-gray-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Mobile: Contact Details First */}
                <Motion.div
                    className="lg:hidden mb-10 sm:mb-14 mt-6 space-y-6 sm:space-y-8"
                    variants={containerVariants}
                >
                    <ContactDetailsSection />
                </Motion.div>

                {/* Main Content - Side by Side on Desktop */}
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 mt-2">
                    {/* Left side - Form */}
                    <div className="flex-1 order-2 lg:order-1">
                        <Motion.div
                            className="mb-10 sm:mb-12 lg:mb-14"
                            variants={itemVariants}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 sm:mb-6 lg:mb-8">
                                Let's start a
                                <br />
                                project together
                            </h1>
                        </Motion.div>

                        <Motion.form
                            className="space-y-6 sm:space-y-8 lg:space-y-12"
                            onSubmit={(e) => e.preventDefault()}
                            variants={containerVariants}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                        >
                            {fields.map(({ id, label, name, type, placeholder }) => (
                                <Motion.div
                                    key={id}
                                    className={`border-b border-gray-700 pb-3 sm:pb-4 lg:pb-6 ${id === 1 ? "border-t border-gray-700 pt-3 sm:pt-4 lg:pt-6" : ""}`}
                                    variants={itemVariants}
                                >
                                    <div className="flex items-start gap-3 sm:gap-4 mb-1 sm:mb-2 lg:mb-4">
                                        <span className="text-gray-500 text-xs sm:text-sm mt-1">{`0${id}`}</span>
                                        <div className="flex-1">
                                            <label className="block text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 lg:mb-4">{label}</label>
                                            <Motion.input
                                                type={type}
                                                name={name}
                                                value={formData[name]}
                                                onChange={handleChange}
                                                placeholder={formData[name] ? "" : placeholder}
                                                className="w-full bg-transparent text-white text-sm sm:text-base lg:text-lg border-none outline-none placeholder-gray-600 py-1 sm:py-2"
                                                autoComplete="off"
                                                whileFocus={{
                                                    borderBottomColor: "#3b82f6",
                                                    transition: { duration: 0.3 }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Motion.div>
                            ))}

                            {/* Message */}
                            <Motion.div
                                className="border-b border-gray-700 pb-2 sm:pb-2 lg:pb-4"
                                variants={itemVariants}
                            >
                                <div className="flex items-start gap-3 sm:gap-4 mb-1 sm:mb-2 lg:mb-2">
                                    <span className="text-gray-500 text-xs sm:text-sm mt-1">05</span>
                                    <div className="flex-1">
                                        <label className="block text-sm sm:text-base lg:text-lg mb-1 sm:mb-1 lg:mb-2">Your message</label>
                                        <Motion.textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={formData.message ? "" : "Hello Sampanna, can you help me with..."}
                                            className="w-full bg-transparent text-white text-sm sm:text-base lg:text-lg border-none outline-none placeholder-gray-600 resize-none py-1 sm:py-2"
                                            whileFocus={{
                                                borderBottomColor: "#3b82f6",
                                                transition: { duration: 0.3 }
                                            }}
                                        />
                                    </div>
                                </div>
                            </Motion.div>

                            {/* Submit Button */}
                            <Motion.div
                                className="flex justify-center pt-4 sm:pt-6 lg:pt-8"
                                variants={itemVariants}
                            >
                                <Motion.button
                                    type="submit"
                                    className="bg-blue-800 hover:bg-blue-900 text-white px-6 sm:px-8 lg:px-12 py-1.5 sm:py-2 lg:py-3 rounded-full text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200"
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send it!
                                </Motion.button>
                            </Motion.div>
                        </Motion.form>
                    </div>

                    {/* Right side - Contact Details (Hidden on mobile) */}
                    <Motion.div
                        className="lg:w-80 space-y-6 sm:space-y-8 order-1 lg:order-2 hidden lg:block"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <ContactDetailsSection />
                    </Motion.div>
                </div>
            </div>
        </Motion.div>
    );
}

const ContactDetailsSection = () => (
    <Motion.div variants={containerVariants}>
        <Motion.div variants={itemVariants}>
            <h3 className="text-gray-400 text-xs sm:text-xs uppercase tracking-wider mb-4 sm:mb-6">
                Contact Details
            </h3>
            <div className="space-y-2 sm:space-y-4 text-sm sm:text-lg">
                <p>sampannapiya1@gmail.com</p>
                <p>+977-9864058536</p>
            </div>
        </Motion.div>

        <Motion.div variants={itemVariants} className="mt-6 sm:mt-8">
            <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
                Business Details
            </h3>
            <div className="space-y-2 sm:space-y-4 text-sm sm:text-lg">
                <p>Sampanna Piya</p>
                <p>Location: Kathmandu, Nepal</p>
            </div>
        </Motion.div>

        <Motion.div variants={itemVariants} className="mt-6 sm:mt-8">
            <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
                Socials
            </h3>
            <Motion.div
                className="flex space-x-6 text-2xl sm:text-3xl text-gray-400"
                variants={containerVariants}
            >
                <Motion.a
                    href="https://github.com/sampanna17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                    aria-label="GitHub"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaGithub />
                </Motion.a>

                <Motion.a
                    href="https://www.linkedin.com/in/sampanna-piya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                    aria-label="LinkedIn"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaLinkedin />
                </Motion.a>

                <Motion.a
                    href="https://www.instagram.com/sampanna_piya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                    aria-label="Instagram"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaInstagram />
                </Motion.a>

                <Motion.a
                    href="https://www.facebook.com/sampanna.piya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                    aria-label="Facebook"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <FaFacebook />
                </Motion.a>
            </Motion.div>
        </Motion.div>
    </Motion.div>
);


