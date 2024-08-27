import React from "react";

const Info = () => {
  return (
    <div className="flex justify-center mb-28 ">
      <div className="w-[70%] flex flex-wrap gap-7 ">
        {[
          { count: "10K +", label: "Active Students" },
          { count: "301", label: "Total Courses" },
          { count: "88", label: "Mentors" },
          { count: "100%", label: "Satisfaction Ratio" },
        ].map((stat, index) => (
          <div
            key={index}
            className="w-64 h-40 rounded-2xl bg-gradient-to-r from-[#e0f7fa] to-[#e0f2fe] flex flex-col justify-center items-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <h1 className="text-[#0DAFE6] text-3xl font-bold">{stat.count}</h1>
            <p className="font-medium text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
