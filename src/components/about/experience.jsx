import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Eos from '../../assets/Eos.png';
import TT from '../../assets/TT.png';

// Company Icon component using actual logos
const CompanyIcon = ({ company, className }) => {
    if (company === 'Eos Web Solution') {
        return (
            <img
                src={Eos}
                alt="Eos Web Solution"
                className={`object-contain ${className}`}
            />
        );
    } else if (company === 'Trasshset Technology') {
        return (
            <img
                src={TT}
                alt="Trasshset Technology"
                className={`object-contain ${className}`}
            />
        );
    }

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
    };

    return (
        <div className={`flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-medium ${className}`}>
            {getInitials(company)}
        </div>
    );
};

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { type: 'spring', stiffness: 300, damping: 10 }
    },
    hover: { scale: 1.1 }
};

const WorkExperience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = [
        {
            id: 0,
            company: 'Eos Web Solution',
            position: 'Junior Full Stack Developer',
            period: 'July 2025 - Present',
            description: 'Currently working as a full-time junior full stack developer, building and maintaining web applications using modern technologies.',
            achievements: [
                'Developing full-stack web applications',
                'Working with both frontend and backend technologies',
                'Collaborating with cross-functional teams'
            ],
            logo: Eos
        },
        {
            id: 1,
            company: 'Trashset Technology',
            position: 'React Developer Intern',
            period: 'September 2024 - November 2024',
            description: 'Developed and maintained the official company website using React and Tailwind CSS.',
            achievements: [
                'Built company website: trashsettechnology.com',
                'Gained professional experience in frontend development',
                'Focused on performance optimization and responsive UI design',
                'Integrated RESTful APIs',
            ],
            logo: TT,
            certificate: true,
            recommendation: true
        }
    ];

    return (
        <Motion.section
            className="min-h-[60vh] flex items-center justify-center px-6 py-16 bg-white"
            initial="hidden"
            animate="show"
            variants={containerVariants}
        >
            <Motion.div
                className="max-w-6xl w-full"
                variants={containerVariants}
            >
                <Motion.div className="mb-10 lg:mb-16" variants={itemVariants}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-900">
                        Work Experience
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
                        {experiences.map((item) => (
                            <Motion.button
                                key={item.id}
                                className={`px-6 py-4 rounded-lg text-left transition-all ${activeTab === item.id ? 'bg-gray-100 shadow-sm' : 'bg-white hover:bg-gray-50'}`}
                                onClick={() => setActiveTab(item.id)}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center">
                                    <Motion.div
                                        className="w-12 h-12 mr-4 flex items-center justify-center"
                                        variants={logoVariants}
                                        whileHover="hover"
                                    >
                                        <img
                                            src={item.logo}
                                            alt={`${item.company} logo`}
                                            className="w-full h-full object-contain"
                                        />
                                    </Motion.div>
                                    <div>
                                        <h3 className="text-sm lg:text-lg font-medium text-gray-900">{item.company}</h3>
                                        <p className="text-sm lg:text-lg text-gray-600">{item.period}</p>
                                    </div>
                                </div>
                            </Motion.button>
                        ))}
                    </div>
                </Motion.div>

                {/* Desktop tabs */}
                <Motion.div className="hidden md:flex mb-12" variants={itemVariants}>
                    {experiences.map((item) => (
                        <Motion.button
                            key={item.id}
                            className={`px-8 py-4 border-b-2 transition-colors ${activeTab === item.id ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab(item.id)}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            {item.company}
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
                        className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-sm"
                    >
                        <div className="flex flex-col md:flex-row md:items-start">
                            <div className="md:w-1/3 mb-6 md:mb-0">
                                <Motion.div
                                    className="w-24 h-24 lg:w-32 lg:h-32 mb-4"
                                    initial="hidden"
                                    animate="show"
                                    variants={logoVariants}
                                    whileHover="hover"
                                >
                                    <img
                                        src={experiences[activeTab].logo}
                                        alt={`${experiences[activeTab].company} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </Motion.div>
                                <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-2">
                                    {experiences[activeTab].company}
                                </h3>
                                <p className="text-gray-500 text-sm lg:text-lg">{experiences[activeTab].period}</p>
                            </div>
                            <div className="md:w-2/3">
                                <h4 className="text-base lg:text-xl font-medium text-gray-800 mb-4">
                                    {experiences[activeTab].position}
                                </h4>
                                <p className="text-sm lg:text-lg text-gray-600 leading-relaxed mb-6">
                                    {experiences[activeTab].description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-500 mb-3">KEY ACHIEVEMENTS</h4>
                                    <ul className="space-y-2">
                                        {experiences[activeTab].achievements.map((achievement, idx) => (
                                            <Motion.li
                                                key={idx}
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                            >
                                                <span className="text-blue-500 mr-2 mt-1">•</span>
                                                <span className="text-gray-600">{achievement}</span>
                                            </Motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {experiences[activeTab].certificate && (
                                    <Motion.div
                                        className="flex flex-wrap gap-4 mt-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <a
                                            href="https://drive.google.com/file/d/1U6MTzbhBhBNAgbAVpGAbMyv3owg4e3Kx/view"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                                        >
                                            Certificate
                                        </a>
                                        <a
                                            href="https://drive.google.com/file/d/1euc_4qqJxGJLvVPVL1SymVrKDo8cS4fe/view"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                                        >
                                            Letter of Recommendation
                                        </a>
                                    </Motion.div>
                                )}


                                <Motion.div
                                    className="h-1 w-16 bg-gray-300 mt-6"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                />
                            </div>
                        </div>
                    </Motion.div>
                </AnimatePresence>

                {/* GitHub section */}
                <Motion.div
                    className="mt-12 p-6 bg-gray-900 text-white rounded-xl"
                    variants={itemVariants}
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
                                <FaGithub className="w-full h-full text-white p-4"  />
                            </div>
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold mb-2">GitHub Portfolio</h3>
                            <p className="text-gray-300 mb-4">
                                Check out my coding projects and contributions on GitHub.
                            </p>
                            <Motion.a
                                href="https://github.com/sampanna17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Visit GitHub Profile
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Motion.a>
                        </div>
                    </div>
                </Motion.div>
            </Motion.div>
        </Motion.section>
    );
};

export default WorkExperience;
