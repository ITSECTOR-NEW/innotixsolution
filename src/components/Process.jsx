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
    <div className="h-screen w-screen py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
      <p className="text-center mb-12 text-gray-600">
        We follow a proven development process to ensure that your project is
        completed on time, within budget, and to your exact specifications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {processSteps.map((step) => (
          <motion.div
            key={step.id}
            className="p-6 bg-white rounded-lg shadow-lg text-center"
            whileHover={{
              y: -10,
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {/* Number Circle */}
            <motion.div
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-4 mx-auto"
              whileHover={{
                scale: 1.2, // Scale the number on hover
                rotate: 360, // Rotate on hover
                backgroundColor: "#1D4ED8", // Change the background color
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {`0${step.id}`}
            </motion.div>

            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
