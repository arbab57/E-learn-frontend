import React from 'react'
import introImg from "../assets/images/intro.png"

const Intro = () => {
  return (
        <div className="intro mt-7 h-96 flex justify-around items-center">
            <div className="text">
                <h2 className='font-medium text-4xl'>Build Skills With</h2>
                <h2 className='font-medium text-4xl'>Online Courses</h2>
                <p>We denounce with righteous indignation and dislike men who are</p>
                <p className='mb-3'>so beguiled and demoralized that cannot trouble</p>
                <button className='bg-[#0DAFE6] p-3 px-4 rounded-3xl'>Find Course</button>
            </div>
            <div className="img">
                <img src={introImg} alt="" srcset="" />
            </div>
        </div>
  )
}

export default Intro 