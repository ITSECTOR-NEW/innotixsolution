import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-violet-800 via-indigo-600 to-sky-500 p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
          Innotix Solution
        </div>

        {/* Hamburger Icon */}
        <button
          className="text-white block md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>

        {/* Sliding Navbar Links */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-sm transform ${
            menuOpen ? "translate-x-0 bg-purple-700" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:transform-none md:flex md:bg-transparent md:w-auto`}
        >
          {/* Close Icon inside Navbar */}
          {menuOpen && (
            <button
              className="absolute top-4 right-4 text-white focus:outline-none"
              onClick={() => setMenuOpen(false)}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          <ul className="flex flex-col h-full justify-center space-y-6 md:space-y-0 md:flex-row md:space-x-6">
            <li>
              <a
                href="#home"
                className="block text-center text-white hover:text-black py-2 px-4 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-center text-white hover:text-black py-2 px-4 transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-center text-white hover:text-black py-2 px-4 transition"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-center text-white hover:text-black py-2 px-4 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
