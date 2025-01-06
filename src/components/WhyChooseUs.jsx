import { motion } from "framer-motion";

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
    <div className="py-16 justify-center items-center bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <p className="text-center mb-12 text-gray-600">
        Our hundreds of satisfied clients already know what you are about to
        find out.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className="w-80 p-6 bg-white rounded-lg shadow-lg text-center"
            whileHover={{
              y: -10,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
