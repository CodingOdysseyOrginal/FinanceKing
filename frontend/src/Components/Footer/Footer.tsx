import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-x-8 md:space-y-0">
          <div className="w-full md:w-auto flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">
              We are a company dedicated to providing the best financial data analysis tools.
            </p>
          </div>
          <div className="w-full md:w-auto flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm">Email: info@yourcompany.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-auto flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul className="flex flex-col space-y-4 items-center md:items-start">
              <li>
                <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
                  <FaTwitter />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 CodingOdysseyOrginal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
