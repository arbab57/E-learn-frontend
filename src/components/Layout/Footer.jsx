import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full h-1/4 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="mb-4 lg:mb-0 mx-10">
          <h2 className="text-xl font-bold text-[#0DAFE6]">Learnify</h2>
          <p className="text-gray-600 mt-2 max-w-xs text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex justify-between w-full lg:w-auto space-x-10">
          <div>
            <h3 className="text-md font-semibold mb-3">GET HELP</h3>
            <ul className="text-gray-600 text-sm">
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Latest Articles
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-3">PROGRAMS</h3>
            <ul className="text-gray-600 text-sm">
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Art & Design
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Business
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  IT & Software
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Languages
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Programming
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-3">CONTACT US</h3>
            <p className="text-gray-600 text-sm">
              Address: Ground Floor, Alpha-Software Technology Park,
              <br /> Canal Rd, near Canal View Hotel,
              <br /> Rahim Yar Khan, Punjab 64200, Pakistan
              <br />
              Tel: + (92) 3030279447
              <br />
              Mail: https://www.helloworldtech.com/
            </p>
            <div className="mt-3 flex space-x-3 text-gray-600">
              <a href="#" className="hover:text-[#0DAFE6]">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-[#0DAFE6]">
                <i className="fab fa-pinterest"></i>
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
      </div>
      <div className="mt-6 text-center text-gray-600 text-xs mb-0">
        <p>
          Copyright © 2024 Learnify e-learnportal.uno | Powered by HELLO WORLD
          TECHNOLOGIES
        </p>
      </div>
    </footer>
  );
};

export default Footer;
