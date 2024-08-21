import React from "react";

const CourseCard = ({ name, provider, duration, rating, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs rounded-full">
          Photography
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">by {provider}</p>
        <div className="flex justify-between items-center text-sm text-gray-600 my-3">
          <span>{duration}</span>
          <span>{rating} rating</span>
        </div>
        <div className="text-lg font-bold text-gray-800 mb-4">
          {price === "Free" ? "Free" : `$${price}`}
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
          View More
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
