
const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 md:p-8 lg:p-12">
      <div className="text-xs md:text-sm text-gray-500">
        © Code by Sampanna
      </div>
      <nav className="flex space-x-4 md:space-x-6 text-sm md:text-base">
        <a href="#" className="hover:text-gray-600">Work</a>
        <a href="#" className="hover:text-gray-600">About</a>
        <a href="#" className="hover:text-gray-600">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
