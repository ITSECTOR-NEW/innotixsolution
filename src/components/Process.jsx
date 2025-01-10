// import { motion } from "framer-motion";

// const processSteps = [
//   {
//     id: 1,
//     title: "Discovery",
//     description:
//       "We begin by understanding your business, goals, and software requirements.",
//   },
//   {
//     id: 2,
//     title: "Planning",
//     description:
//       "Our team designs a detailed project plan, outlining the development process and timelines.",
//   },
//   {
//     id: 3,
//     title: "Development",
//     description:
//       "Using the latest technologies, we build your custom software solution with precision and attention to detail.",
//   },
//   {
//     id: 4,
//     title: "Testing",
//     description:
//       "Rigorous testing ensures that your software is bug-free and performs flawlessly.",
//   },
//   {
//     id: 5,
//     title: "Deployment",
//     description:
//       "We assist with the deployment and integration of your software, providing ongoing support to ensure success.",
//   },
// ];

// const OurProcess = () => {
//   return (
//     <div className="py-16 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
//       <p className="text-center mb-12 text-gray-600">
//         We follow a proven development process to ensure that your project is
//         completed on time, within budget, and to your exact specifications.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//         {processSteps.map((step) => (
//           <motion.div
//             key={step.id}
//             className="p-6 bg-white rounded-lg shadow-lg text-center"
//             whileHover={{
//               y: -10,
//               boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
//             }}
//             transition={{ type: "spring", stiffness: 200, damping: 10 }}
//           >
//             <div className="text-2xl font-bold mb-2">{`0${step.id}`}</div>
//             <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
//             <p className="text-gray-600">{step.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurProcess;

import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We begin by understanding your business, goals, and software requirements.",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Our team designs a detailed project plan, outlining the development process and timelines.",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Using the latest technologies, we build your custom software solution with precision and attention to detail.",
  },
  {
    id: 4,
    title: "Testing",
    description:
      "Rigorous testing ensures that your software is bug-free and performs flawlessly.",
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "We assist with the deployment and integration of your software, providing ongoing support to ensure success.",
  },
];

const OurProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven development process to ensure that your project
            is completed on time, within budget, and to your exact
            specifications.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center 
                    text-xl font-bold mb-4 shadow-lg z-10"
                >
                  {`0${step.id}`}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
