import Sampanna from "../assets/Sampanna.png";

export const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#ebebeb] text-black font-sans">
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12">
        {/* Image Container */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-[80vh] md:h-[90vh]  overflow-hidden ">
          <img
            src={Sampanna}
            alt="Sampanna Piya"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="mb-4 text-sm md:text-base text-gray-500">
            Located in Nepal
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Software Developer and Engineer
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
            Sampanna Piya
          </h2>
        </div>
      </main>

      {/* Footer */}
      <footer className="h-8"></footer>
    </div>
  );
};
