import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const CardDetails = ({
  courses,
  currentPage,
  coursesPerPage,
  setCurrentPage,
}) => {
  // State to manage search query
  const [searchQuery, setSearchQuery] = useState("");

  // Ensure courses is an array and is not undefined
  const safeCourses = Array.isArray(courses) ? courses : [];

  // Filter courses based on search query
  const filteredCourses = safeCourses.filter((course) =>
    course.data.details.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  function convertTimestampToTime(timeInMS) {
    const timeInSeconds = timeInMS / 1000;
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    return `${hours} hours and ${minutes} minutes`;
  }

  return (
<div className="p-6">
  {/* Search Section */}
  <div className="container mx-auto justify-between items-center mb-0">
    <div className="flex items-center justify-end gap-3 ">
    <div className="flex ">
      {/* <h1 className="text-4xl text-[#0DAFE6] font-bold ">Course Details</h1> */}
    </div>
    <div className="mb-2 relative">
  <input
    type="text"
    placeholder="Search courses..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full pl-10 pr-2 py-2 border-b-2 border-[#0DAFE6] bg-transparent focus:outline-none focus:ring-0"
    />
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg
      className="w-5 h-5 text-[#0DAFE6]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35M10.5 18.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
      ></path>
    </svg>
  </div>
</div>

    </div>
    {currentCourses.map((course) => (
      <div
        key={course.id}
        className="relative bg-white mb-8 shadow-lg border rounded-lg p-6 font-roboto flex flex-col lg:flex-row gap-6"
      >
        {/* Enroll Now Button */}
        <button className="absolute top-4 right-4 bg-[#0DAFE6] text-white px-4 py-2 rounded-lg transition-all p-4">
          Enroll Now
        </button>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
          <div className="lg:w-80 lg:h-80 w-full h-auto flex-shrink-0">
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
            <h3 className="text-3xl font-bold mb-5 text-black">
              {course.data.details.title}
            </h3>
            <div className="text-black">
              <p>
                <span className="font-semibold text-xl">Description:</span>{" "}
                <p>{course.data.description}</p>
              </p>
              <p className="text-sm text-black">
                {course.data.details.category}
              </p>
            </div>

            <div className="text-sm lg:text:sm text-black flex gap-5">
              <p>
                <span className="font-semibold">Duration:</span>{" "}
                {convertTimestampToTime(course.data.duration)}
              </p>
              <p>
                <span className="font-semibold">Mentor:</span>{" "}
                {course.data?.mentor?.name}
              </p>
              <p>
                <span className="font-semibold">No of Reviews:</span>{" "}
                {course.data.details.numOfReviews}
              </p>
              <p>
                <span className="font-semibold">Rating:</span>{" "}
                {course.data.details.rating}
              </p>
              <p>
                <span className="font-semibold">Price:</span> $
                {course.data.details.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
    <div className="flex justify-between items-center mt-6">
      <button
        className="bg-[#0DAFE6] text-white px-4 py-2 rounded-lg hover: transition-all"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="bg-[#0DAFE6] text-white px-4 py-2 rounded-lg  hover:transition-all"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  </div>
</div>


  );
};

export default CardDetails;
