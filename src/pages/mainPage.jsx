import React from 'react'
import Intro from '../components/Intro'
import Categories from '../components/Categories'
import FeaturedCourses from '../components/featuredCourses'
import Info from '../components/Info'
import Buycourse from '../components/Buycourse'
import Login from '../components/Login'
import Register from '../components/Register'


const mainPage = () => {
  return (
    <div className="">
      <Intro />
      <Categories />
      <FeaturedCourses />
      <Info />
      <Buycourse />

    </div>
  )
}

export default mainPage;