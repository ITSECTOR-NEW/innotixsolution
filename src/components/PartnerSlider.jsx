// PartnersSlider.js
import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    logo: "/path/to/logo1.png",
    alt: "Partner 1",
    text: "Trusted by Partner 1 for innovative solutions.",
  },
  {
    id: 2,
    logo: "/path/to/logo2.png",
    alt: "Partner 2",
    text: "Partner 2 collaborates with us on key projects.",
  },
  {
    id: 3,
    logo: "/path/to/logo3.png",
    alt: "Partner 3",
    text: "Delivering exceptional services to Partner 3.",
  },
  {
    id: 4,
    logo: "/path/to/logo4.png",
    alt: "Partner 4",
    text: "Partner 4 relies on us for technical expertise.",
  },
  {
    id: 5,
    logo: "/path/to/logo5.png",
    alt: "Partner 5",
    text: "Long-term collaboration with Partner 5.",
  },
];

const PartnersSlider = () => {
  // eslint-disable-next-line no-unused-vars
  const [isPaused, setIsPaused] = React.useState(false);
  return (
    <div className="overflow-hidden py-10 bg-gray-100 w-full">
      <h2 className="text-center text-3xl font-bold mb-8">Our Partners</h2>

      <motion.div
        className="flex gap-10"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust speed by changing the duration
          ease: "linear",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {partners.concat(partners).map((partner, index) => (
          <div key={index} className="w-40 h-auto flex-shrink-0">
            <img
              src={partner.logo}
              alt={partner.alt}
              className="w-full h-auto mx-auto"
            />
            <p className="mt-4 text-gray-600 text-sm">{partner.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnersSlider;
