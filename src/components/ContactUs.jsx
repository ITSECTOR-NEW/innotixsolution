import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+1234567890"; // Replace with your WhatsApp number
    const message = "Hello, I would like to know more about your services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bg-[#e5e7eb] py-16 px-6 sm:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

      <div className="flex flex-col lg:flex-row lg:gap-16">
        {/* Contact Details */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold">Address</h4>
              <p className="text-gray-600">
                123 Main Street, New York, NY 10001
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-green-500 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold">Call Us</h4>
              <p className="text-gray-600">+91-9111800310</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-500 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold">Mail Us</h4>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="text-lg font-medium">Message us on WhatsApp</span>
          </button>
        </div>

        {/* Map Section */}
        <div className="flex-1">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1234567890123!2d78.1234567890123!3d26.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c1234567890%3A0xabcdef1234567890!2sGole%20Ka%20Mandir%20Chauraha%2C%20Gwalior%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1600138628746!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
