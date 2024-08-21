import React from "react";
import Header from "../components/Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import CoursesList from "../components/CourseList";

const mainlayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CoursesList/>
      <Footer />

    </>
  );
};

export default mainlayout;
