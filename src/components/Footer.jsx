import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">Freelance</h3>
            <p className="mt-2">Gwalior, India</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Web Design & Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  App & Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Thesis Writing & Research Paper Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Lead Generation, Bulk WhatsApp Messages, SEO Services
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">
            © Copyright Freelance Solutions. All Rights Reserved
          </p>
          <p className="text-sm">Designed by Me </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
