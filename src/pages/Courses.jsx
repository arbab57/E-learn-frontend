import React, { useEffect, useState } from "react";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import { FaUser, FaShoppingCart, FaBookmark } from "react-icons/fa";
import Loader from "../components/General/Loader";
import { FaSearch } from "react-icons/fa";


const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { response, status } = await WebHandler(
          `${URLS.COURSES}?page=${page}&limit=10&query=${searchQuery}`,
          "GET"
        );

        if (status === 200 && response.results) {
          setCourses(response.results);
          setTotalPages(response.totalPages);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [page, searchQuery]); // Trigger fetchData on page or searchQuery change

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); // Reset to the first page on search
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const convertTimestampToTime = (timeInMS) => {
    const timeInSeconds = timeInMS / 1000;
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    return `${hours} hours and ${minutes} minutes`;
  };

  if (error) {
    return <div>Error loading courses. Please try again later.</div>;
  }

  return (
    <div>
      {loading && <Loader />}
      <div className="min-h-screen ">
        <div className="mb-6 px-10 flex justify-end items-center">
          <div className="flex border-2 items-center p-2 rounded-full border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 transition-all duration-200 ease-in-out">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={handleSearch}
              className="focus:outline-none"
            // className="w-1/3 md:w-1/4 lg:w-1/5 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 transition-all duration-200 ease-in-out"
            />
            <FaSearch className="text-[#0DAFE6] cursor-pointer" />
          </div>
        </div>
        {courses.map((course) => (
         <div
         key={course.id}
         className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 font-roboto flex flex-col lg:flex-row gap-6 mb-6 mx-auto w-11/12 md:w-5/6 lg:w-9/12 items-center justify-around"
       >
         <div className="flex flex-col lg:flex-row justify-center items-center gap-6 flex-grow">
           <div className="lg:w-64 lg:h-64 w-full h-64 flex-shrink-0">
             {course.data.details.img ? (
               <img
                 className="w-full h-full object-cover rounded-lg"
                 src={course.data.details.img}
                 alt="course"
               />
             ) : (
               <div className="bg-gray-200 shadow-inner w-full h-full rounded-lg flex items-center justify-center">
                 <FaUser className="text-6xl text-blue-300" />
               </div>
             )}
           </div>
       
           <div className="flex flex-col gap-4 w-full">
             <div className="text-gray-700">
               <h3 className="text-xl font-bold">{course.data.details.title}</h3>
               <h2 className="text-sm text-gray-500">
                 {course.data.details.category}
               </h2>
             </div>
       
             <div className="text-sm text-gray-600 flex flex-col gap-2">
               <p>
                 <span className="font-bold text-[1rem]">Description:</span>{" "}
                 {course.data.description}
               </p>
               <p>
                 <span className="font-semibold">Duration:</span>{" "}
                 {convertTimestampToTime(course.data.duration)}
               </p>
             </div>
           </div>
         </div>
       
         <div className="flex flex-col justify-between w-full lg:w-auto lg:ml-auto">
           <div className="text-gray-600 flex flex-col gap-1">
             <p className="whitespace-nowrap">
               <span className="font-semibold">No of Reviews:</span>{" "}
               {course.data.details.numOfReviews}
             </p>
             <p className="whitespace-nowrap">
               <span className="font-semibold">Rating:</span>{" "}
               {course.data.details.rating}
             </p>
             <p className="whitespace-nowrap">
               <span className="text-blue-500">$</span>
               {course.data.details.price}
             </p>
           </div>
       
           <div className="flex items-center justify-end gap-2 mt-4">
             <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center">
               <FaShoppingCart className="mr-2" />
               Buy
             </button>
             <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center">
               <FaBookmark className="mr-2" />
               Save
             </button>
           </div>
         </div>
       </div>
       
        
        ))}
        {/* Pagination Controls */}
        {loading ? null : <div className="flex mx-10 my-8 justify-between items-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className={`${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
              } text-white font-bold py-2 px-4 rounded`}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            className={`${page === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
              } text-white font-bold py-2 px-4 rounded`}
          >
            Next
          </button>
        </div>}

      </div>
    </div>
  );
};

export default Courses;
