import React from "react";
import Intro from "../components/Intro";
import Categories from "../components/Categories";
import FeaturedCourses from "../components/featuredCourses";
import Info from "../components/Info";
import Buycourse from "../components/Buycourse";
import ReviewSection from "../components/ReviewSection";

const mainPage = () => {
  return (
    <div className="">
      <Intro />
      <Categories />
      <FeaturedCourses />
      <Info />
      <Buycourse />
      <ReviewSection />
    </div>
  );
};

export default mainPage;
