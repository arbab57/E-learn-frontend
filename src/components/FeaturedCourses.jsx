import React, { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard';

const FeaturedCourses = () => {
    const [response, setResponse] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://elearningportal-56538109f664.herokuapp.com/courses/featured ', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
               
            
                if(res.ok) {
                    const result = await res.json();
                    setResponse(result);
                }

                } catch (error) {
                    console.error('Error sending data:', error);
                }
            }
        fetchData()
        }, [])

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
                    {/* { } */}
                    <FeatureCard data={response}/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses