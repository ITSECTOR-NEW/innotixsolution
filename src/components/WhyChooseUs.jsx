// import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    icon: "💡",
    title: "Tailored Solutions",
    description:
      "We understand that every business is unique. Our team works closely with you to develop custom software that meets your specific needs and objectives.",
  },
  {
    id: 2,
    icon: "👥",
    title: "Experienced Team",
    description:
      "With over 20 years of experience in the software development industry, our skilled developers are experts in various technologies and industries.",
  },
  {
    id: 3,
    icon: "🤝",
    title: "From People You Trust",
    description:
      "We stay true to our word and deliver your project exactly to specification. If you feel trapped by your current developer, we can help.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our hundreds of satisfied clients already know what you are about to
            find out.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="w-full md:w-96 bg-white rounded-xl shadow-lg p-8
                transform transition-all duration-500 hover:shadow-2xl
                opacity-0 animate-fade-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card Content */}
              <div className="relative z-10">
                <div
                  className="text-6xl mb-6 transform transition-transform duration-300
                  hover:scale-110 hover:rotate-12"
                >
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full 
                -mr-16 -mt-16 transform transition-transform duration-500 
                group-hover:scale-150"
              ></div>
              <div
                className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full 
                -ml-16 -mb-16 transform transition-transform duration-500 
                group-hover:scale-150"
              ></div>
            </div>
          ))}
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

  .animate-fade-slide-up {
    animation: fadeSlideUp 0.8s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default WhyChooseUs;
