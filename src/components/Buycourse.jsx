import React from 'react'
import Intro from "../assets/images/intro.png"

const Buycourse = () => {
    return (
        <div className="flex justify-around items-center">
            <div className=" flex justify-center">
                <img className='' src={Intro} alt="Introduction" />
            </div>
            <div className=" flex flex-col items-center">
                <div className="flex flex-col">
                    <span className="font-bold text-3xl">Build Your Skills with</span>
                    <span className="font-bold text-3xl">Learnify E-Portal</span>
                    <p>Your go-to platform for enhancing skills with a wide range</p>
                    <p>of online courses designed to help you grow and succeed.</p>
                </div>
            </div>
        </div>


    )
}

export default Buycourse