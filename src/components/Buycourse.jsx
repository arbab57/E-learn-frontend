import React from 'react'
import Intro from "../assets/images/intro.png"
import { TiTick } from "react-icons/ti";

const Buycourse = () => {
    return (
        <div className="flex justify-around items-center">
            <div className=" flex justify-center">
                <img className='' src={Intro} alt="Introduction" />
            </div>
            <div className="">
                <div className="flex flex-col">
                    <span className="font-bold text-3xl">Build Your Skills with</span>
                    <span className="font-bold text-3xl">Learnify E-Portal</span>
                    <p>Your go-to platform for enhancing skills</p><p>with a wide range of online courses  designed</p>
                    <p> to help you grow and succeed.</p>
                    <h1 className='flex items-center mt-6'><TiTick className='text-green-500'/> <p>Certification</p></h1>
                    <h1 className='flex items-center'><TiTick className='text-green-500'/> Certification</h1>
                    <h1 className='flex items-center'><TiTick className='text-green-500'/> Certification</h1>
                </div>
                    <button className='text-left mt-6 bg-[#0DAFE6] text-white p-3 rounded-3xl active:bg-white active:text-[#0DAFE6]'>Buy Course Now</button>
            </div>
        </div>


    )
}

export default Buycourse