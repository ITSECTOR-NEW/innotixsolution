import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919109470875";
    const message = "Hello, I would like to know more about your services.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            {[
              {
                icon: <FaMapMarkerAlt className="w-6 h-6" />,
                title: "Address",
                content: "123 Main Street, New York, NY 10001",
              },
              {
                icon: <FaPhoneAlt className="w-6 h-6" />,
                title: "Call Us",
                content: "+91-9111800310",
              },
              {
                icon: <FaEnvelope className="w-6 h-6" />,
                title: "Mail Us",
                content: "info@example.com",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-lg 
                  flex items-center justify-center"
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 text-white py-4 px-6 rounded-lg 
                flex items-center justify-center space-x-2 hover:bg-green-600 
                transition-colors duration-200 animate-bounce"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>Message us on WhatsApp</span>
            </motion.button>
          </div>

          {/* Map */}
          {/* Right Section - Google Map */}
          <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.889594264935!2d78.20969167425561!3d26.23277667705899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c145f9f7cd0b%3A0xe83936febcb279e9!2sGole%20Ka%20Mandir%20Rd%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1736522126429!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, pointerEvents: "auto" }}
              allowFullScreen="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
