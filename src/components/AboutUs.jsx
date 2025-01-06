// src/components/AboutSection.js
import PartnersSlider from "./PartnerSlider";

const AboutSection = () => {
  return (
    <section className="relative w-full h-screen">
      <h2 className="text-center text-4xl p-2 font-bold mb-8">About Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
        {/* Left Column - Text */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <p className="text-lg mb-4">
            We are a team of dedicated professionals committed to delivering
            innovative solutions that drive success for our clients. Our
            expertise spans various industries, and we pride ourselves on our
            ability to adapt and evolve with the changing landscape.
          </p>
          <p className="text-lg mb-4">
            Our mission is to empower businesses through technology and
            strategic insights, ensuring they stay ahead of the competition. We
            believe in building long-lasting relationships with our clients
            based on trust and transparency.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/3">
          <img
            src="about.png" // Replace with your image URL
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <PartnersSlider /> {/* Call the PartnerSlider component */}
    </section>
  );
};

export default AboutSection;
