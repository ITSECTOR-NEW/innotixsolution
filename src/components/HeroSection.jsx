const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-violet-800 via-indigo-600 to-sky-500 h-screen text-white">
      {/* Navbar */}
      {/* <nav className="absolute top-0 left-0 w-full flex justify-between items-center py-6 px-12">
        <div className="text-2xl font-bold">INNOVIX SOLUTIONS</div>
        <ul className="flex space-x-6">
          <li className="hover:text-blue-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-300 cursor-pointer">About</li>
          <li className="hover:text-blue-300 cursor-pointer">Services</li>

          <li className="hover:text-blue-300 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
          Get Started
        </button>
      </nav> */}

      {/* Main Content */}
      <div className="flex items-center justify-between h-full w-full px-12">
        {/* Left Content */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-6">
            Better Solutions For Your Business
          </h1>
          <p className="text-lg mb-10">
            We are a team of talented professionals dedicated to providing
            innovative solutions with a focus on quality and excellence.
          </p>
          <div className="flex space-x-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
              Get Started
            </button>
            <button className="flex items-center space-x-2 text-white hover:text-blue-300">
              <span className="text-2xl">▶</span>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2">
          <img
            src="/heroimg.jpg"
            alt="Hero Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
