const services = [
  {
    icon: "🔥",
    heading: "Service 1",
    text: "At our company, we strive to deliver exceptional services tailored to your unique needs. Our expert team is dedicated to providing innovative solutions and fostering long-term relationships. With a customer-centric approach, we ensure that every project is completed with precision and efficiency. We believe in constant growth, embracing new technologies, and achieving excellence in all that we do.",
  },
  {
    icon: "⚡",
    heading: "Service 2",
    text: "At our company, we strive to deliver exceptional services tailored to your unique needs. Our expert team is dedicated to providing innovative solutions and fostering long-term relationships. With a customer-centric approach, we ensure that every project is completed with precision and efficiency. We believe in constant growth, embracing new technologies, and achieving excellence in all that we do.",
  },
  {
    icon: "🌐",
    heading: "Service 3",
    text: "At our company, we strive to deliver exceptional services tailored to your unique needs. Our expert team is dedicated to providing innovative solutions and fostering long-term relationships. With a customer-centric approach, we ensure that every project is completed with precision and efficiency. We believe in constant growth, embracing new technologies, and achieving excellence in all that we do.",
  },
  {
    icon: "💡",
    heading: "Service 4",
    text: "At our company, we strive to deliver exceptional services tailored to your unique needs. Our expert team is dedicated to providing innovative solutions and fostering long-term relationships. With a customer-centric approach, we ensure that every project is completed with precision and efficiency. We believe in constant growth, embracing new technologies, and achieving excellence in all that we do.",
  },
  {
    icon: "🚀",
    heading: "Service 5",
    text: "At our company, we strive to deliver exceptional services tailored to your unique needs. Our expert team is dedicated to providing innovative solutions and fostering long-term relationships. With a customer-centric approach, we ensure that every project is completed with precision and efficiency. We believe in constant growth, embracing new technologies, and achieving excellence in all that we do.",
  },
  {
    icon: "📈",
    heading: "Service 6",
    text: "At our company, we strive to deliver exceptional services tailored to your unique needs. Our expert team is dedicated to providing innovative solutions and fostering long-term relationships. With a customer-centric approach, we ensure that every project is completed with precision and efficiency. We believe in constant growth, embracing new technologies, and achieving excellence in all that we do.",
  },
  {
    icon: "🔒",
    heading: "Service 7",
    text: "At our company, we strive to deliver exceptional services tailored to your unique needs. Our expert team is dedicated to providing innovative solutions and fostering long-term relationships. With a customer-centric approach, we ensure that every project is completed with precision and efficiency. We believe in constant growth, embracing new technologies, and achieving excellence in all that we do.",
  },
  {
    icon: "📊",
    heading: "Service 8",
    text: "At our company, we strive to deliver exceptional services tailored to your unique needs. Our expert team is dedicated to providing innovative solutions and fostering long-term relationships. With a customer-centric approach, we ensure that every project is completed with precision and efficiency. We believe in constant growth, embracing new technologies, and achieving excellence in all that we do.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide top-notch solutions for your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg p-8
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                opacity-0 animate-fade-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600
                opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10"
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="text-5xl mb-6 transform transition-transform duration-300
                  group-hover:scale-110 group-hover:rotate-12"
                >
                  {service.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white
                  transition-colors duration-300"
                >
                  {service.heading}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
