// import React from "react";

// const Error = () => {
//   return (
//     <>
//       <div className="mt-6 p-7">
//         <div className="flex justify-center mt-4 ">
//           <h1 className="text-[4.03rem]"> 404 Error </h1>
//         </div>

//         <div className="flex justify-center ">
//           <h1 className="text-[1.03rem] hover:text-red-600">
//             {" "}
//             Page Not Found{" "}
//           </h1>{" "}
//         </div>

//         <div className="mx-auto">
//           <img
//             className="mx-auto"
//             src="https://thrivemyway.com/wp-content/uploads/2022/10/System-Generated-Fake-Error-Messages-scaled-e1667236077389.jpg"
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Error;


import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#3a0ca3] via-[#4361ee] to-[#4cc9f0] text-white overflow-hidden">
      <div className="relative text-center p-12 rounded-2xl shadow-2xl bg-white/15 backdrop-blur-md z-10 max-w-xl w-full">
        {/* Large 404 Text with animation */}
        <h1 className="text-9xl font-extrabold mb-4 animate-pulse">404</h1>
        {/* Page Not Found Message */}
        <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
        {/* Subtext */}
        <p className="mt-6 text-lg text-white/90">
          Oops! It seems you've wandered into uncharted digital territory.
        </p>
        {/* Home Button */}
        <button
          className="mt-8 px-8 py-3 bg-[#f72585] text-white font-semibold rounded-full shadow-lg hover:bg-[#b5179e] transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => navigate("/")}
        >
          Navigate Home
        </button>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white/20 backdrop-blur-sm"></div>
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#7209b7]/30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-[#f72585]/20 animate-float animation-delay-1000"></div>
    </div>
  );
};

export default NotFoundPage;


