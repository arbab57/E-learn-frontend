import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { FaPalette, FaChartPie, FaBackward, FaFingerprint } from "react-icons/fa";
import { FaCode, FaPaintbrush } from "react-icons/fa6";

const Categories = () => {
    return (
        <div className="my-14 flex justify-center mb-36">
            <div className=" w-[70%]">
                <div className="flex justify-between items-center mb-12">
                    <div className="">
                        <h2 className='font-semibold text-xl'>Top Categories</h2>
                        <p>Explore our Popular Categries</p>
                    </div>
                    <button className='border-[1.5px] border-black p-3 rounded-3xl hover:bg-[#0DAFE6] hover:text-white hover:border-none'>All Categories</button>
                </div>
                <div className="flex flex-wrap justify-center gap-10 cursor-pointer">
                    <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
                        <CgWebsite className='text-4xl text-[#0DAFE6]' />
                        <div className="">
                            <h3 className='font-semibold '>Web Development</h3>
                            <p className='text-center'>15 Courses</p>
                        </div>
                    </div>
                    <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
                        <FaPalette className='text-4xl text-[#0DAFE6]' />
                        <div className="">
                            <h3 className='font-semibold'>Ui/Ux Design</h3>
                            <p className='text-center'>19 Courses</p>
                        </div>
                    </div>
                    <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
                        <FaChartPie className='text-4xl text-[#0DAFE6]' />
                        <div className="">
                            <h3 className='font-semibold'>Data Science</h3>
                            <p className='text-center'>22 Courses</p>
                        </div>
                    </div>
                    <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
                        <FaCode className='text-4xl text-[#0DAFE6]' />
                        <div className="">
                            <h3 className='font-semibold'>DevOps</h3>
                            <p className='text-center'>8 Courses</p>
                        </div>
                    </div>
                    <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
                        <FaPaintbrush className='text-4xl text-[#0DAFE6]' />
                        <div className="">
                            <h3 className='font-semibold'>Graphics Design</h3>
                            <p className='text-center'>17 Courses</p>
                        </div>
                    </div>
                    <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
                        <FaBackward className='text-4xl text-[#0DAFE6]' />
                        <div className="">
                            <h3 className='font-semibold'>Backend Develo...</h3>
                            <p className='text-center'>25 Courses</p>
                        </div>
                    </div>
                    <div className=" w-[20%] h-48 border-[1px] border-slate-400 flex rounded-lg flex-col gap-4 justify-center items-center hover:scale-105 hover:shadow-md transition hover:shadow-[#0DAFE6]">
                        <FaFingerprint className='text-4xl text-[#0DAFE6]' />
                        <div className="">
                            <h3 className='font-semibold'>Cyber Security</h3>
                            <p className='text-center'>11 Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories