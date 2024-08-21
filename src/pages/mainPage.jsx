import React from 'react'
import Intro from '../components/Intro'
import Categories from '../components/Categories'
import FeaturedCourses from '../components/featuredCourses'
import Login from '../components/Login'


const mainPage = () => {
  return (
    <div className="">
        <Intro/>
        <Categories/>
        <FeaturedCourses/>
<Login/>

    </div>
  )
}

export default mainPage;