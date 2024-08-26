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
    // <div className="my-14 flex justify-center mb-36">
    //     <div className=" w-[70%]">
    //         <div className="flex justify-between items-center mb-12">
    //             <div className="">
    //                 <h2 className='font-semibold text-xl'>Top Categories</h2>
    //                 <p>Explore our Popular Categries</p>
    //             </div>
    //             <button className='border-[1.5px] border-black p-3 rounded-3xl hover:bg-[#0DAFE6] hover:text-white hover:border-none'>All Categories</button>
    //         </div>
    //         <div className="flex flex-wrap justify-center gap-10 cursor-pointer">
    //             <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
    //                 <CgWebsite className='text-4xl text-[#0DAFE6]' />
    //                 <div className="">
    //                     <h3 className='font-semibold '>Web Development</h3>
    //                     <p className='text-center'>15 Courses</p>
    //                 </div>
    //             </div>
    //             <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
    //                 <FaPalette className='text-4xl text-[#0DAFE6]' />
    //                 <div className="">
    //                     <h3 className='font-semibold'>Ui/Ux Design</h3>
    //                     <p className='text-center'>19 Courses</p>
    //                 </div>
    //             </div>
    //             <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
    //                 <FaChartPie className='text-4xl text-[#0DAFE6]' />
    //                 <div className="">
    //                     <h3 className='font-semibold'>Data Science</h3>
    //                     <p className='text-center'>22 Courses</p>
    //                 </div>
    //             </div>
    //             <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
    //                 <FaCode className='text-4xl text-[#0DAFE6]' />
    //                 <div className="">
    //                     <h3 className='font-semibold'>DevOps</h3>
    //                     <p className='text-center'>8 Courses</p>
    //                 </div>
    //             </div>
    //             <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
    //                 <FaPaintbrush className='text-4xl text-[#0DAFE6]' />
    //                 <div className="">
    //                     <h3 className='font-semibold'>Graphics Design</h3>
    //                     <p className='text-center'>17 Courses</p>
    //                 </div>
    //             </div>
    //             <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
    //                 <FaBackward className='text-4xl text-[#0DAFE6]' />
    //                 <div className="">
    //                     <h3 className='font-semibold'>Backend Develo...</h3>
    //                     <p className='text-center'>25 Courses</p>
    //                 </div>
    //             </div>
    //             <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
    //                 <FaFingerprint className='text-4xl text-[#0DAFE6]' />
    //                 <div className="">
    //                     <h3 className='font-semibold'>Cyber Security</h3>
    //                     <p className='text-center'>11 Courses</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="my-14 flex justify-center mb-36">
      <div className="w-[70%]">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="font-semibold text-2xl text-gray-800">
              Top Categories
            </h2>
            <p className="text-gray-600 mt-1">Explore our Popular Categories</p>
          </div>
          <button className="border-2 border-gray-800 py-2 px-5 rounded-full transition duration-300 hover:bg-[#0DAFE6] hover:text-white hover:border-transparent">
            All Categories
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-8 cursor-pointer">
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
              className="w-[20%] h-48 border border-gray-200 flex rounded-lg flex-col gap-4 justify-center items-center bg-white hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out transform hover:shadow-[#0DAFE6] hover:bg-gradient-to-b hover:from-blue-50 hover:to-blue-100"
            >
              <div className="text-4xl text-[#0DAFE6]">{category.icon}</div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800">
                  {category.title}
                </h3>
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
