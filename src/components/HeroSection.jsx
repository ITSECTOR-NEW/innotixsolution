// eslint-disable-next-line no-unused-vars
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-r from-violet-800 via-indigo-600 to-sky-500 overflow-hidden"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Main Content Container - Full Width */}
      <div className="relative w-full min-h-screen">
        {/* Content Wrapper - Centered with Max Width */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen w-full container mx-auto px-6 py-12 lg:px-12 gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 mt-20 lg:mt-0">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white opacity-0 animate-fade-slide-up">
                Better Solutions For Your Business
              </h1>
              <p className="text-lg lg:text-xl text-white/90 opacity-0 animate-fade-slide-up animation-delay-1500">
                We are a team of talented professionals dedicated to providing
                innovative solutions with a focus on quality and excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-slide-up animation-delay-1000">
              <button
                className="group relative px-8 py-4 bg-white text-violet-900 font-semibold rounded-lg 
                overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500 to-sky-500 translate-y-full 
                  group-hover:translate-y-0 transition-transform duration-300"
                ></div>
              </button>

              <button
                className="flex items-center gap-3 text-white group px-6 py-4 rounded-lg 
                transition-all duration-300 hover:bg-white/10"
              >
                <span
                  className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full 
                  group-hover:bg-white/30 transition-colors duration-300"
                >
                  <span className="ml-1">▶</span>
                </span>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-slide-left animation-delay-1600">
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-transparent 
                rounded-2xl"
              ></div>
              <img
                src="/herosection.jpg"
                alt="Hero Illustration"
                className="w-full rounded-2xl shadow-2xl transform transition duration-500 
                  hover:scale-[1.05] hover:shadow-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const style = document.createElement("style");
style.textContent = `
  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeSlideLeft {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-fade-slide-up {
    animation: fadeSlideUp 0.8s ease-out forwards;
  }

  .animate-fade-slide-left {
    animation: fadeSlideLeft 0.8s ease-out forwards;
  }

  .animation-delay-500 {
    animation-delay: 0.5s;
  }

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-1500 {
    animation-delay: 1.5s;
  }
`;
document.head.appendChild(style);

export default HeroSection;
