import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-[#c0d5dd] py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="EduPress Logo"
              className="mr-2"
            />
            Learnify
          </h2>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">GET HELP</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-[#0DAFE6]">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#0DAFE6]">
                Latest Articles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0DAFE6]">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">PROGRAMS</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-[#0DAFE6]">
                Art & Design
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#0DAFE6]">
                Business
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#0DAFE6]">
                IT & Software
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-[#0DAFE6]">
                Languages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0DAFE6]">
                Programming
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            CONTACT US
          </h3>
          <p className="mb-2">
            Address: Alpha-Software Technology Park, Canal Rd, near Canal View
            Hotel, Rahim Yar Khan, Pakistan
          </p>
          <p className="mb-2">Tel: + 923030279447</p>
          <p className="mb-2 ">
            <a className=" hover:text-[#0DAFE6]" href="https://www.helloworldtech.com/">   
             https://www.helloworldtech.com/
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-sm text-gray-500">
        <p>
          Copyright © 2024 Learnify e-learnportal.uno | Powered by HELLO WORLD
          TECHNOLOGIES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
