import React, { useState } from "react";
import Card from "./Card";

const CoursesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = filteredCourses.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="p-4 mx-auto max-w-screen-xl">
      <h1 className="text-2xl font-bold mb-6">All Courses</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1 mb-8 lg:mb-0">
          <input
            className="p-2 outline-none w-full text-sm text-gray-700 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); 
            }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {currentCourses.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-gray-300 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 bg-gray-300 hover:bg-[] rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/4 lg:mt-0">
        <div className="filter-container space-y-4">
            <div className="filter-section  space-x-3">
              <h3 className="font-bold mb-2">Course Category</h3>
              <ul className="space-y-2">
                <li>
                  <input type="checkbox" id="web-development" />
                  <label htmlFor="web-development">Web Development</label>
                </li>
                <li>
                  <input type="checkbox" id="ui-ux-design" />
                  <label htmlFor="ui-ux-design">UI/UX Design</label>
                </li>
                <li>
                  <input type="checkbox" id="data-science" />
                  <label htmlFor="data-science">Data Science</label>
                </li>
                <li>
                  <input type="checkbox" id="devops" />
                  <label htmlFor="devops">DevOps</label>
                </li>
                <li>
                  <input type="checkbox" id="graphics-design" />
                  <label htmlFor="graphics-design">Graphics Design</label>
                </li>
                <li>
                  <input type="checkbox" id="backend-developer" />
                  <label htmlFor="backend-developer">Backend Developer</label>
                </li>
                <li>
                  <input type="checkbox" id="cyber-security" />
                  <label htmlFor="cyber-security">Cyber Security</label>
                </li>
              </ul>
            </div>
          </div>

           


 
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
