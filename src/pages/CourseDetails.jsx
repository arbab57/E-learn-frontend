import React, { useEffect, useState } from "react";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import CardDetails from "../components/MainPage/CardDetails";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { response, status } = await WebHandler(URLS.COURSES, "GET");
        setCourses(response.results);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error loading course details.</div>;
  }

  return (
    <div>
      {/* <h2 className="text-xl font-bold p-6">Course Details</h2> */}
      <CardDetails
        courses={courses}
        currentPage={currentPage}
        coursesPerPage={coursesPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CourseDetails;
