const HeroSection = () => {
  return (
    <section className="relative flex items-center w-full h-screen bg-black">
      {/* Left Content Section */}
      <div className="relative w-1/2 h-full flex flex-col justify-center items-center text-white text-center p-6 z-10">
        <h1 className="text-5xl font-extrabold mb-4">
          Software Development Company
        </h1>
        <p className="text-xl mb-10">Let’s build something amazing together!</p>

        {/* Contact Buttons */}
        <div className="flex space-x-6">
          <a
            href="mailto:someone@example.com"
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-lg transition-all"
          >
            Email
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg transition-all"
          >
            WhatsApp
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-lg transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-1/2 h-full">
        <img
          src="/hero.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
