import React, { useEffect, useState } from "react";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import Loader from "../components/General/Loader";
import { FaSearch } from "react-icons/fa";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, [page, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
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
            />
            <FaSearch className="text-[#0DAFE6] cursor-pointer" />
          </div>
        </div>
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
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


