import React, { useState } from 'react'
import { FaUser, FaShoppingCart, FaBookmark } from "react-icons/fa";
import PaymentCard from './PaymentCard';



const CourseCard = ({course}) => {
    
    const [showBuy, setShowBuy] = useState(false)

    const convertTimestampToTime = (timeInMS) => {
        const timeInSeconds = timeInMS / 1000;
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        return `${hours} hours and ${minutes} minutes`;
      };


    return (
        <div
            key={course.id}
            className="bg-white shadow-lg border border-gray-300 rounded-lg p-6 font-roboto flex flex-col lg:flex-row gap-6 mb-6 mx-auto w-11/12 md:w-5/6 lg:w-9/12 items-center justify-around"
        >
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 flex-grow">
                <div className="lg:w-64 lg:h-64 w-full h-64 flex-shrink-0">
                    {course.data.details.img ? (
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src={course.data.details.img}
                            alt="course"
                        />
                    ) : (
                        <div className="bg-gray-200 shadow-inner w-full h-full rounded-lg flex items-center justify-center">
                            <FaUser className="text-6xl text-blue-300" />
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <div className="text-gray-700">
                        <h3 className="text-xl font-bold">{course.data.details.title}</h3>
                        <h2 className="text-sm text-gray-500">
                            {course.data.details.category}
                        </h2>
                    </div>

                    <div className="text-sm text-gray-600 flex flex-col gap-2">
                        <p>
                            <span className="font-bold text-[1rem]">Description:</span>{" "}
                            {course.data.description}
                        </p>
                        <p>
                            <span className="font-semibold">Duration:</span>{" "}
                            {convertTimestampToTime(course.data.duration)}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between w-full lg:w-auto lg:ml-auto">
                <div className="text-gray-600 flex flex-col gap-1">
                    <p className="whitespace-nowrap">
                        <span className="font-semibold">No of Reviews:</span>{" "}
                        {course.data.details.numOfReviews}
                    </p>
                    <p className="whitespace-nowrap">
                        <span className="font-semibold">Rating:</span>{" "}
                        {course.data.details.rating}
                    </p>
                    <p className="whitespace-nowrap">
                        <span className="text-blue-500">$</span>
                        {course.data.details.price}
                    </p>
                </div>
                {showBuy && <PaymentCard courseId={course.id} course={course.data.details} setShowBuy={setShowBuy}/>}
                <div className="flex items-center justify-end gap-2 mt-4">
                    <button onClick={() => setShowBuy(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center">
                        <FaShoppingCart className="mr-2" />
                        Buy
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center">
                        <FaBookmark className="mr-2" />
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard