import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: "Work", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center p-6 md:p-8 lg:p-12 bg-[#ebebeb]">
      <Motion.div 
        className="text-xs md:text-sm text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        © Code by Sampanna
      </Motion.div>
      
      <nav className="flex space-x-4 md:space-x-6 text-sm md:text-base">
        {navItems.map((item) => (
          <Motion.a
            key={item.name}
            onClick={() => navigate(item.path)}
            className="hover:text-gray-600 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.name}
          </Motion.a>
        ))}
      </nav>
    </header>
  );
};

export default Header;