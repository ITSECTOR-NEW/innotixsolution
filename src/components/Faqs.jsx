import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "How does React work?",
    answer: "React creates a virtual DOM and updates the real DOM efficiently.",
  },
  {
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you use React state and lifecycle features in functional components.",
  },
  {
    question: "How do you create components in React?",
    answer: "You can create components using either classes or functions.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 ">
      {/* Header */}
      <div className="text-center mb-16 opacity-0 animate-fade-slide-up ">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQs</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We provide top-notch solutions for your business needs.
        </p>
      </div>
      <div className="space-y-3 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-lg bg-white shadow-md 
                        cursor-pointer transition-colors duration-300 hover:bg-gray-300`}
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center p-4">
              <h3
                className={`font-medium text-lg transition-colors duration-100 
                           ${
                             activeIndex === index
                               ? "text-blue-600"
                               : "text-gray-800"
                           }`}
              >
                {faq.question}
              </h3>
              <span
                className={`transform transition-transform duration-300 
                            ${activeIndex === index ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
