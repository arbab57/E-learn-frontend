import React, { useEffect, useState } from "react";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import PaymentCard from "../pages/PaymentCard";
import CardDetails from "../components/MainPage/CardDetails";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("");
  const [selectedCourseImage, setSelectedCourseImage] = useState("");
  const [selectedCoursePrice, setSelectedCoursePrice] = useState("");


  const handleCourseSelect = (title, image, Price) => {
    setSelectedCourseTitle(title);
    setSelectedCourseImage(image);
    setSelectedCoursePrice(Price);

  };

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
      <CardDetails
        courses={courses}
        currentPage={currentPage}
        coursesPerPage={coursesPerPage}
        setCurrentPage={setCurrentPage}
        onCourseSelect={handleCourseSelect} 
      />
      <PaymentCard
        courseTitle={selectedCourseTitle}
        courseImage={selectedCourseImage}
        coursePrice={selectedCoursePrice}

      />
    </div>
  );
};

export default CourseDetails;
