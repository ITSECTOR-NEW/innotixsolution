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
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We provide top-notch solutions for your business needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-400 "
            >
              <div className="text-4xl  text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                {service.heading}
              </h3>
              <p className="text-gray-800">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
