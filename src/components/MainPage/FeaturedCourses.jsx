import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";
const FeaturedCourses = () => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await WebHandler(URLS.FEATURED, "GET");
                setResponse(result);
            } catch (error) {
                console.error("Error sending data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className=" flex justify-center mb-40">
            <div className="w-[70%]">
                <div className="flex justify-between items-center mb-12">
                    <div className="">
                        <h2 className="font-semibold text-xl">Featured Courses</h2>
                        <p>Explore our Popular Courses</p>
                    </div>
                    <button className="border-[1.5px] border-black p-3 rounded-3xl hover:bg-[#0DAFE6] hover:text-white hover:border-none">
                        All Courses
                    </button>
                </div>
                <div className="flex flex-wrap gap-8">
                    {/* { } */}
                    <FeatureCard data={response.response} />
                </div>
            </div>
        </div>
    );
};

export default FeaturedCourses;
