import React from 'react'
import Intro from '../components/Intro'
import Categories from '../components/Categories'
import FeaturedCourses from '../components/featuredCourses'



const mainPage = () => {
  return (
    <div className="">
        <Intro/>
        <Categories/>
        <FeaturedCourses/>
    </div>
  )
}

export default mainPage