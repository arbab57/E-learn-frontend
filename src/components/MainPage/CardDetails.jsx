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


      <div className="gap-10 mx-auto container">
      <div className="text-3xl content-start font-bold mb-4 gap-3">
        Course Details
      </div>
      <div className="mb-4 container mx-auto outline-0 border outline-b">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
        {currentCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white mb-8 shadow-lg border rounded-lg p-6 font-roboto flex flex-col lg:flex-row gap-6"
          >
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
                    <stronge>{course.data.description}</stronge>
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
              {/* <div className="flex flex-col justify-between w-80 lg:ml-auto">
                <div className="text-black flex flex-col gap-2">
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
              </div> */}
            </div>
          </div>
        ))}
              <div className="flex justify-between items-center mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
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
