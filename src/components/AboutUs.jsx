// eslint-disable-next-line no-unused-vars
import React from "react";

const partners = [
  { id: 1, logo: "/api/placeholder/120/60", name: "Partner 1" },
  { id: 2, logo: "/api/placeholder/120/60", name: "Partner 2" },
  { id: 3, logo: "/api/placeholder/120/60", name: "Partner 3" },
  { id: 4, logo: "/api/placeholder/120/60", name: "Partner 4" },
  { id: 5, logo: "/api/placeholder/120/60", name: "Partner 5" },
  { id: 6, logo: "/api/placeholder/120/60", name: "Partner 6" },
  // Duplicate for infinite scroll effect
  { id: 7, logo: "/api/placeholder/120/60", name: "Partner 1" },
  { id: 8, logo: "/api/placeholder/120/60", name: "Partner 2" },
  { id: 9, logo: "/api/placeholder/120/60", name: "Partner 3" },
  { id: 10, logo: "/api/placeholder/120/60", name: "Partner 4" },
  { id: 11, logo: "/api/placeholder/120/60", name: "Partner 5" },
  { id: 12, logo: "/api/placeholder/120/60", name: "Partner 6" },
];

const AboutSection = () => {
  return (
    <section id="about" className="w-full overflow-hidden bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 opacity-0 animate-fade-slide-right">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a team of dedicated professionals committed to delivering
              innovative solutions that drive success for our clients. Our
              expertise spans various industries, and we pride ourselves on our
              ability to adapt and evolve with the changing landscape.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower businesses through technology and
              strategic insights, ensuring they stay ahead of the competition.
              We believe in building long-lasting relationships with our clients
              based on trust and transparency.
            </p>
            <button
              className="group relative inline-flex items-center justify-center px-8 py-3 
              text-lg font-medium text-white transition-all duration-300 
              bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg 
              hover:from-blue-700 hover:to-blue-600 transform hover:scale-105"
            >
              Learn More
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-slide-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              <img
                src="/about.png"
                alt="About Us"
                className="w-full h-auto transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-20 opacity-0 animate-fade-slide-up animation-delay-500">
          <h3 className="text-2xl font-semibold text-center mb-10">
            Our Trusted Partners
          </h3>

          {/* Partners Slider */}
          <div className="relative w-full overflow-hidden">
            <div className="partner-slider-track flex items-center gap-12 py-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 px-6 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add required animations
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

  @keyframes fadeSlideRight {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
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

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 6));
    }
  }

  .partner-slider-track {
    animation: scroll 40s linear infinite;
  }

  .partner-slider-track:hover {
    animation-play-state: paused;
  }

  .animate-fade-slide-up {
    animation: fadeSlideUp 0.8s ease-out forwards;
  }

  .animate-fade-slide-right {
    animation: fadeSlideRight 0.8s ease-out forwards;
  }

  .animate-fade-slide-left {
    animation: fadeSlideLeft 0.8s ease-out forwards;
  }

  .animation-delay-500 {
    animation-delay: 0.5s;
  }
`;
document.head.appendChild(style);

export default AboutSection;
