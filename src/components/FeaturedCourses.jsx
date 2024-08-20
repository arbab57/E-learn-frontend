import React from 'react'
import Web from "../assets/images/web.jpg"
import { MdAccessTimeFilled, MdPlayLesson } from "react-icons/md";

const FeaturedCourses = () => {
    return (
        <div className=" flex justify-center mb-40">
            <div className="w-[70%]">
                <div className="flex justify-between items-center mb-12">
                    <div className="">
                        <h2 className='font-semibold text-xl'>Featured Courses</h2>
                        <p>Explore our Popular Courses</p>
                    </div>
                    <button className='border-[1.5px] border-black p-3 rounded-3xl hover:bg-[#0DAFE6] hover:text-white hover:border-none'>All Courses</button>
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                    <div className="w-[30%] h-80 rounded-lg border-[1px] border-black border-opacity-50  hover:scale-105 cursor-pointer hover:shadow-xl shadow-black">
                        <div className="h-36">
                            <img className='rounded-t-lg object-cover w-full h-full' src={Web} alt="" />
                        </div>
                        <div className=" m-3">
                            <h1 className='font-medium text-xl'>Web Development</h1>
                            <p>Introduction to HTML & CSS</p>
                        </div>
                        <div className="flex items-center ml-3">
                            <div className="flex items-center">
                                <MdAccessTimeFilled className='text-[#0DAFE6] text-xl mr-1' /><p>3 weeks</p>
                            </div>
                            <div className="ml-6 flex items-center gap-[4px]">
                                <MdPlayLesson className='text-[#0DAFE6]' /><p>4 Lesson </p>
                            </div>
                        </div>
                        <div className="flex justify-between m-3 mt-7">
                            <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#0DAFE6"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
                                <p className='text-sm'>4.4(39 Reviews)</p></div>
                            <div className="">
                                <span className='text-[#0DAFE6]'>$</span>47
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-80 rounded-lg border-[1px] border-black border-opacity-50  hover:scale-105 cursor-pointer hover:shadow-xl shadow-black">
                        <div className="h-36">
                            <img className='rounded-t-lg object-cover w-full h-full' src={Web} alt="" />
                        </div>
                        <div className=" m-3">
                            <h1 className='font-medium text-xl'>Web Development</h1>
                            <p>Introduction to HTML & CSS</p>
                        </div>
                        <div className="flex items-center ml-3">
                            <div className="flex items-center">
                                <MdAccessTimeFilled className='text-[#0DAFE6] text-xl mr-1' /><p>3 weeks</p>
                            </div>
                            <div className="ml-6 flex items-center gap-[4px]">
                                <MdPlayLesson className='text-[#0DAFE6]' /><p>4 Lesson </p>
                            </div>
                        </div>
                        <div className="flex justify-between m-3 mt-7">
                            <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#0DAFE6"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
                                <p className='text-sm'>4.4(39 Reviews)</p></div>
                            <div className="">
                                <span className='text-[#0DAFE6]'>$</span>47
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-80 rounded-lg border-[1px] border-black border-opacity-50  hover:scale-105 cursor-pointer hover:shadow-xl shadow-black">
                        <div className="h-36">
                            <img className='rounded-t-lg object-cover w-full h-full' src={Web} alt="" />
                        </div>
                        <div className=" m-3">
                            <h1 className='font-medium text-xl'>Web Development</h1>
                            <p>Introduction to HTML & CSS</p>
                        </div>
                        <div className="flex items-center ml-3">
                            <div className="flex items-center">
                                <MdAccessTimeFilled className='text-[#0DAFE6] text-xl mr-1' /><p>3 weeks</p>
                            </div>
                            <div className="ml-6 flex items-center gap-[4px]">
                                <MdPlayLesson className='text-[#0DAFE6]' /><p>4 Lesson </p>
                            </div>
                        </div>
                        <div className="flex justify-between m-3 mt-7">
                            <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#0DAFE6"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
                                <p className='text-sm'>4.4(39 Reviews)</p></div>
                            <div className="">
                                <span className='text-[#0DAFE6]'>$</span>47
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-80 rounded-lg border-[1px] border-black border-opacity-50  hover:scale-105 cursor-pointer hover:shadow-xl shadow-black">
                        <div className="h-36">
                            <img className='rounded-t-lg object-cover w-full h-full' src={Web} alt="" />
                        </div>
                        <div className=" m-3">
                            <h1 className='font-medium text-xl'>Web Development</h1>
                            <p>Introduction to HTML & CSS</p>
                        </div>
                        <div className="flex items-center ml-3">
                            <div className="flex items-center">
                                <MdAccessTimeFilled className='text-[#0DAFE6] text-xl mr-1' /><p>3 weeks</p>
                            </div>
                            <div className="ml-6 flex items-center gap-[4px]">
                                <MdPlayLesson className='text-[#0DAFE6]' /><p>4 Lesson </p>
                            </div>
                        </div>
                        <div className="flex justify-between m-3 mt-7">
                            <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#0DAFE6"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
                                <p className='text-sm'>4.4(39 Reviews)</p></div>
                            <div className="">
                                <span className='text-[#0DAFE6]'>$</span>47
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-80 rounded-lg border-[1px] border-black border-opacity-50  hover:scale-105 cursor-pointer hover:shadow-xl shadow-black">
                        <div className="h-36">
                            <img className='rounded-t-lg object-cover w-full h-full' src={Web} alt="" />
                        </div>
                        <div className=" m-3">
                            <h1 className='font-medium text-xl'>Web Development</h1>
                            <p>Introduction to HTML & CSS</p>
                        </div>
                        <div className="flex items-center ml-3">
                            <div className="flex items-center">
                                <MdAccessTimeFilled className='text-[#0DAFE6] text-xl mr-1' /><p>3 weeks</p>
                            </div>
                            <div className="ml-6 flex items-center gap-[4px]">
                                <MdPlayLesson className='text-[#0DAFE6]' /><p>4 Lesson </p>
                            </div>
                        </div>
                        <div className="flex justify-between m-3 mt-7">
                            <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#0DAFE6"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
                                <p className='text-sm'>4.4(39 Reviews)</p></div>
                            <div className="">
                                <span className='text-[#0DAFE6]'>$</span>47
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-80 rounded-lg border-[1px] border-black border-opacity-50  hover:scale-105 cursor-pointer hover:shadow-xl shadow-black">
                        <div className="h-36">
                            <img className='rounded-t-lg object-cover w-full h-full' src={Web} alt="" />
                        </div>
                        <div className=" m-3">
                            <h1 className='font-medium text-xl'>Web Development</h1>
                            <p>Introduction to HTML & CSS</p>
                        </div>
                        <div className="flex items-center ml-3">
                            <div className="flex items-center">
                                <MdAccessTimeFilled className='text-[#0DAFE6] text-xl mr-1' /><p>3 weeks</p>
                            </div>
                            <div className="ml-6 flex items-center gap-[4px]">
                                <MdPlayLesson className='text-[#0DAFE6]' /><p>4 Lesson </p>
                            </div>
                        </div>
                        <div className="flex justify-between m-3 mt-7">
                            <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#0DAFE6"><path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
                                <p className='text-sm'>4.4(39 Reviews)</p></div>
                            <div className="">
                                <span className='text-[#0DAFE6]'>$</span>47
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses