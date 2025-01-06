import { useState } from "react";
// bg-gradient-to-r from-violet-800 via-indigo-600 to-sky-500
// hover:bg-blue-400
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-violet-800 via-indigo-600 to-sky-500 p-4 shadow-md fixed top-0 left-0 w-full z-50 ">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-white font-bold text-3.5xl">INNOVIX SOLUTIONS</div>

        {/* Hamburger icon */}
        <button
          className="text-white block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          className={`flex space-x-6 text-white md:flex ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="#home" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
