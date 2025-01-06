import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web development, mobile app development, and UI/UX design.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support through our email or live chat available on the website.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We provide a 30-day refund policy for all our services, no questions asked.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, we specialize in delivering custom solutions tailored to your specific needs.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm p-4 hover:bg-blue-400 "
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full text-lg font-medium text-black focus:outline-none "
              >
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-black">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
