import React from 'react'

import FeatureCard from './FeatureCard';

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
                 <FeatureCard/>
                 <FeatureCard/>
                 <FeatureCard/>
                 <FeatureCard/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses