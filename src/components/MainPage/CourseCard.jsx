import React from "react";

const CourseCard = ({
  name,
  provider,
  duration,
  rating,
  price,
  image,
  description,
}) => {

  const maxLength = 20;
  const truncateName = (name) => {
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    }
    return name;
  };

  const maxdescriptionLength = 60;
  const truncateDescription = (description) => {
    if (description.length > maxdescriptionLength) {
      return description.slice(0, maxdescriptionLength) + "...";
    }
    return name;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-4 m-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800 text-nowrap">
          {truncateName(name)}
        </h3>
        <p className="text-sm text-gray-500">by {provider}</p>
        <div className="flex justify-between items-center text-sm text-gray-600 my-3">
          <span>{duration}</span>
          <span>{rating} rating</span>
        </div>
        <span>{truncateDescription(description)}</span>
        <div className="text-lg font-bold text-gray-800 mb-4">
          {price === "Free" ? "Free" : `${price}`}
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
          View More
        </button>
      </div>
    </div>
    
  );
};

export default CourseCard;
