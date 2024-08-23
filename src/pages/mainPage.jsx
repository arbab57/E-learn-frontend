import React from "react";
import Intro from "../components/Intro";
import Categories from "../components/Categories";
import FeaturedCourses from "../components/featuredCourses";
import Info from "../components/Info";
import Buycourse from "../components/Buycourse";
// import CoursesList from "../components/CourseList";
// import ReviewSection from "../components/ReviewSection";
// import Footer from "../components/footer";

const mainPage = () => {
  return (
    <div className="">
      <Intro />
      <Categories />
      <FeaturedCourses />
      <Info />
      <Buycourse />
      {/* <CoursesList/> */}
    </div>
  );
};

export default mainPage;
