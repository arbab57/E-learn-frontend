import React from 'react'
import Intro from '../components/Intro'
import Categories from '../components/Categories'
import FeaturedCourses from '../components/featuredCourses'
import Info from '../components/Info'
import Buycourse from '../components/Buycourse'
import CoursesList from '../components/CourseList'
import Error from '../components/Error'


const mainPage = () => {
  return (
    <div className="">
      <Intro />
      <Categories />
      <FeaturedCourses />
      <Info />
      <Buycourse />
      <CoursesList/>
      <Error/>
    </div>
  )
}

export default mainPage;