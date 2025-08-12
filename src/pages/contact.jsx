import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

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
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Mobile: Contact Details First */}
                <div className="lg:hidden mb-10 sm:mb-14 mt-4 space-y-6 sm:space-y-8">
                    <ContactDetailsSection />
                </div>

                {/* Main Content - Side by Side on Desktop */}
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 mt-2">
                    {/* Left side - Form */}
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="mb-10 sm:mb-12 lg:mb-14">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 sm:mb-6 lg:mb-8">
                                Let's start a
                                <br />
                                project together
                            </h1>
                        </div>

                        <form className="space-y-6 sm:space-y-8 lg:space-y-12" onSubmit={(e) => e.preventDefault()}>
                            {fields.map(({ id, label, name, type, placeholder }) => (
                                <div
                                    key={id}
                                    className={`border-b border-gray-700 pb-3 sm:pb-4 lg:pb-6 ${id === 1 ? "border-t border-gray-700 pt-3 sm:pt-4 lg:pt-6" : ""
                                        }`}
                                >
                                    <div className="flex items-start gap-3 sm:gap-4 mb-1 sm:mb-2 lg:mb-4">
                                        <span className="text-gray-500 text-xs sm:text-sm mt-1">{`0${id}`}</span>
                                        <div className="flex-1">
                                            <label className="block text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 lg:mb-4">{label}</label>
                                            <input
                                                type={type}
                                                name={name}
                                                value={formData[name]}
                                                onChange={handleChange}
                                                placeholder={formData[name] ? "" : placeholder}
                                                className="w-full bg-transparent text-white text-sm sm:text-base lg:text-lg border-none outline-none placeholder-gray-600 py-1 sm:py-2"
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Message */}
                            <div className="border-b border-gray-700 pb-3 sm:pb-4 lg:pb-6">
                                <div className="flex items-start gap-3 sm:gap-4 mb-1 sm:mb-2 lg:mb-4">
                                    <span className="text-gray-500 text-xs sm:text-sm mt-1">05</span>
                                    <div className="flex-1">
                                        <label className="block text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 lg:mb-4">Your message</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={formData.message ? "" : "Hello Sampanna, can you help me with..."}
                                            className="w-full bg-transparent text-white text-sm sm:text-base lg:text-lg border-none outline-none placeholder-gray-600 resize-none py-1 sm:py-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-4 sm:pt-6 lg:pt-8">
                                <button
                                    type="submit"
                                    className="bg-blue-800 hover:bg-blue-900 text-white px-6 sm:px-8 lg:px-12 py-1.5 sm:py-2 lg:py-3 rounded-full text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200"
                                >
                                    Send it!
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right side - Contact Details (Hidden on mobile) */}
                    <div className="lg:w-80 space-y-6 sm:space-y-8 order-1 lg:order-2 hidden lg:block">
                        <ContactDetailsSection />
                    </div>
                </div>
            </div>
        </div>
    );
}


const ContactDetailsSection = () => (
    <>
        <div>
            <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">Contact Details</h3>
            <div className="space-y-2 sm:space-y-4 text-base sm:text-lg">
                <p>sampannapiya1@gmail.com</p>
                <p>+977-9864058536</p>
            </div>
        </div>

        <div>
            <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">Business Details</h3>
            <div className="space-y-2 sm:space-y-4 text-base sm:text-lg">
                <p>Sampanna Piya</p>
                <p>Location: Kathmandu, Nepal</p>
            </div>
        </div>

        <div>
            <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">Socials</h3>
            <div className="flex space-x-6 text-2xl sm:text-3xl text-gray-400">
                <a
                    href="https://github.com/sampanna17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/sampanna-piya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://www.instagram.com/sampanna_piya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.facebook.com/sampanna.piya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Facebook"
                >
                    <FaFacebook />
                </a>
            </div>
        </div>
    </>
);


