import React from "react";

const Info = () => {
  return (
    // <div className='flex justify-center mb-28'>
    //     <div className="w-[70%] flex gap-7">
    //     <div className="w-64 h-40 bg-[#e7e5e5] rounded-2xl">
    //         <div className="flex gap-3 flex-col justify-center items-center h-full">
    //             <h1 className='text-[#0DAFE6] text-2xl'>10K +</h1>
    //             <p className='font-medium'>Active Students</p>
    //         </div>
    //     </div>
    //     <div className="w-64 h-40 bg-[#e7e5e5] rounded-2xl">
    //         <div className="flex gap-3 flex-col justify-center items-center h-full">
    //             <h1 className='text-[#0DAFE6] text-2xl'>301</h1>
    //             <p className='font-medium'>Total Courses</p>
    //         </div>
    //     </div>
    //     <div className="w-64 h-40 bg-[#e7e5e5] rounded-2xl">
    //         <div className="flex gap-3 flex-col justify-center items-center h-full">
    //             <h1 className='text-[#0DAFE6] text-2xl'>88</h1>
    //             <p className='font-medium'>Mentors</p>
    //         </div>
    //     </div>
    //     <div className="w-64 h-40 bg-[#e7e5e5] rounded-2xl">
    //         <div className="flex gap-3 flex-col justify-center items-center h-full">
    //             <h1 className='text-[#0DAFE6] text-2xl'>100%</h1>
    //             <p className='font-medium'>Satification Ratio</p>
    //         </div>
    //     </div>
    //     </div>
    // </div>
    <div className="flex justify-center mb-28">
      <div className="w-[70%] flex flex-wrap gap-7">
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
