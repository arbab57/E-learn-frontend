// import React, { useEffect, useState } from "react";
// import FeatureCard from "./FeatureCard";
// import { WebHandler } from "../../data/remote/WebHandler";
// import { URLS } from "../../data/remote/URL";
// const FeaturedCourses = () => {
//     const [res, setRes] = useState([]);
    
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const { response, status } = await WebHandler(URLS.FEATURED, "GET");
//                 setRes(response);
//             } catch (error) {
//                 console.error("Error sending data:", error);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className=" flex justify-center mb-40">
//             <div className="w-[70%]">
//                 <div className="flex justify-between items-center mb-12">
//                     <div className="">
//                         <h2 className="font-semibold text-xl">Featured Courses</h2>
//                         <p>Explore our Popular Courses</p>
//                     </div>
//                     <button className="border-[1.5px] border-black p-3 rounded-3xl hover:bg-[#0DAFE6] hover:text-white hover:border-none">
//                         All Courses
//                     </button>
//                 </div>
//                 <div className="flex flex-wrap gap-8">

//                     {res.map((course, index) => {
//                         return <FeatureCard key={index} course={course} />
//                     }
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeaturedCourses;



import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";

const FeaturedCourses = () => {
  const [res, setRes] = useState([]);
  const [error, setError] = useState(false); // State to track errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { response, status } = await WebHandler(URLS.FEATURED, "GET");

        if (status === 200 && Array.isArray(response)) {
          // Check if response is an array and status is 200
          setRes(response);
        } else {
          setError(true);
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true); // Set error state if fetching fails
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

        {error ? ( // Display error message if error state is true
          <p className="text-red-500">Failed to load featured courses.</p>
        ) : res.length > 0 ? ( // Check if res array has courses
          <div className="flex flex-wrap gap-8">
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

