import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const HomeFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white py-4 px-4 text-center"
      style={{ backgroundColor: "#614F7F" }}
    >
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="#"
          className="text-gray-300 hover:text-white text-xl"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white text-xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white text-xl"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white text-xl"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Footer Text Row */}
      <div className="flex justify-between text-white text-sm">
        <span>
          &copy; {currentYear} All rights reserved by Intuji.
        </span>
        <span>Powered by Intuji.</span>
      </div>
    </footer>
  );
};

export default HomeFooter;
