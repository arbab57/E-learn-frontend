import React from "react";

const Card = ({
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

  const maxDescriptionLength = 60;
  const truncateDescription = (description) => {
    if (description.length > maxDescriptionLength) {
      return description.slice(0, maxDescriptionLength) + "...";
    }
    return description;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 max-w-xs mx-auto">
      <div
        className="h-48 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-4">
        <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
          Photography
        </span>
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {truncateName(name)}
        </h3>
        <p className="text-sm text-gray-500 mb-2">by {provider}</p>
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <span className="flex items-center">&#128337; {duration}</span>
          <span className="flex items-center">&#9733; {rating} rating</span>
        </div>
        <span className="block text-sm text-gray-600 mb-4">
          {truncateDescription(description)}
        </span>
        <div className="flex justify-between items-center mb-4">
          {price === "Free" ? (
            <span className="text-green-500 text-lg font-bold">Free</span>
          ) : (
            <span className="text-gray-800 text-lg font-bold">{price}</span>
          )}
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
          View More
        </button>
      </div>
    </div>
  );
};

export default Card;
