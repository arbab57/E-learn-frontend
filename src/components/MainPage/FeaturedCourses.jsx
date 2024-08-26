import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";
import { useNavigate } from "react-router-dom";

const FeaturedCourses = () => {

  const [res, setRes] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { response, status } = await WebHandler(URLS.FEATURED, "GET");

        if (status === 200 && Array.isArray(response)) {
          setRes(response);
        } else {
          setError(true);
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center mb-40">
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

        {error ? (
          <p className="text-red-500">Failed to load featured courses.</p>
        ) : res.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {res.map((course, index) => (
              <FeatureCard key={index} course={course} />
            ))}
          </div>
        ) : (
          <p>No featured courses available.</p> // Show message if no courses
        )}
      </div>
    </div>
  );
};

export default FeaturedCourses;
