import React from 'react'

const FeaturedCourses = () => {
    return (
        <div className=" flex justify-center">
            <div className="w-[70%]">
                <div className="flex justify-between items-center mb-12">
                    <div className="">
                        <h2 className='font-semibold text-xl'>Featured Courses</h2>
                        <p>Explore our Popular Courses</p>
                    </div>
                    <button className='border-[1.5px] border-black p-3 rounded-3xl hover:bg-[#0DAFE6] hover:text-white hover:border-none'>All Categories</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses