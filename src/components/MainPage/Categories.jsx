import React from "react";
import { CgWebsite } from "react-icons/cg";
import {
  FaPalette,
  FaChartPie,
  FaBackward,
  FaFingerprint,
} from "react-icons/fa";
import { FaCode, FaPaintbrush } from "react-icons/fa6";

const Categories = () => {
  return (
    <div className="my-14 flex justify-center mb-36">
    <div className="w-[90%] md:w-[80%] lg:w-[70%]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="font-semibold text-2xl text-gray-800">
            Top Categories
          </h2>
          <p className="text-gray-600 mt-1">Explore our Popular Categories</p>
        </div>
      </div>
  
      <div className="flex flex-wrap justify-center gap-6 cursor-pointer">
        {[
          { icon: <CgWebsite />, title: "Web Development", courses: 15 },
          { icon: <FaPalette />, title: "UI/UX Design", courses: 19 },
          { icon: <FaChartPie />, title: "Data Science", courses: 22 },
          { icon: <FaCode />, title: "DevOps", courses: 8 },
          { icon: <FaPaintbrush />, title: "Graphic Design", courses: 17 },
          { icon: <FaBackward />, title: "Backend Development", courses: 25 },
          { icon: <FaFingerprint />, title: "Cyber Security", courses: 11 },
        ].map((category, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-48 border border-gray-200 flex rounded-lg flex-col gap-4 justify-center items-center bg-white hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out transform hover:shadow-[#0DAFE6] hover:bg-gradient-to-b hover:from-blue-50 hover:to-blue-100"
          >
            <div className="text-4xl text-[#0DAFE6]">{category.icon}</div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800">{category.title}</h3>
              <p className="text-gray-500 text-sm">
                {category.courses} Courses
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Categories;
