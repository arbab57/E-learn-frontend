import React from "react";
import { MdAccessTimeFilled, MdPlayLesson } from "react-icons/md";

const FeatureCard = ({ data }) => {
    console.log(data);

    const truncateTitle = (title, length = 20) => {
        if (title.length > length) {
            return title.slice(0, length) + '...';
        }
        return title;
    };

    // Check if data is an array before mapping
    if (!Array.isArray(data)) {
        return <p>No courses available.</p>;
    }

    return (
        <>
            {data.map((course, index) => (
                <div
                    key={index}
                    className="w-[30%] pb-3 h-80 flex flex-col justify-between rounded-lg border-[1px] border-black border-opacity-50 transition hover:scale-105 cursor-pointer hover:shadow-xl shadow-black"
                >
                    <div className="h-36">
                        <img
                            className="rounded-t-lg object-cover w-full h-full"
                            src={course.data.details.img}
                            alt={course.data.details.title}
                        />
                    </div>
                    <div className="m-3">
                        <h1 className="font-medium text-xl">{truncateTitle(course.data.details.title)}</h1>
                        <p>{course.data.details.category}</p>
                    </div>
                    <div className="flex justify-around items-center ml-3">
                        <div className="flex items-center">
                            <MdAccessTimeFilled className="text-[#0DAFE6] text-xl mr-1" />
                            <p>{(course.data.duration / (7 * 24 * 60 * 60 * 1000)).toFixed(2)} weeks</p>
                        </div>
                        <div className="ml-6 flex items-center gap-[4px]">
                            <MdPlayLesson className="text-[#0DAFE6]" />
                            <p>{course.data.lessons.length} Lessons</p>
                        </div>
                    </div>
                    <div className="flex justify-around mb-0 mt-7">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="22px"
                                viewBox="0 -960 960 960"
                                width="22px"
                                fill="#0DAFE6"
                            >
                                <path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                            </svg>
                            <p className="text-sm">
                                {course.data.details.rating} ({course.data.reviews.length} Reviews)
                            </p>
                        </div>
                        <div>
                            <span className="text-[#0DAFE6]">$</span>
                            {course.data.details.price}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FeatureCard;
