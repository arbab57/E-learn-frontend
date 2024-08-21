import React from 'react'
import Intro from '../components/Intro'
import Categories from '../components/Categories'
import FeaturedCourses from '../components/featuredCourses'
import Info from '../components/Info'



const mainPage = () => {
  return (
    <div className="">
      <Intro />
      <Categories />
      <FeaturedCourses />
      <Info />
    </div>
  )
}

export default mainPage