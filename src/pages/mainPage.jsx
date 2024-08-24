import React from "react";
import Intro from "../components/MainPage/Intro";
import Categories from "../components/MainPage/Categories";
import FeaturedCourses from "../components/MainPage/FeaturedCourses";
import Info from "../components/MainPage/Info";
import Buycourse from "../components/MainPage/Buycourse";
import SavedCourses from "./SavedCourses";
import BoughtCoures from "./BoughtCourses";

const mainPage = () => {
  return (
    <div className="">
      <Intro />
      <Categories />
      <FeaturedCourses />
      <Info />
      <SavedCourses/>
      <BoughtCoures/>
      <Buycourse />
  
     
    </div>
  );
};

export default mainPage;
