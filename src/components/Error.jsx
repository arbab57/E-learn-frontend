import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage1 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#1a237e] via-[#0d47a1] to-[#00acc1] text-white overflow-hidden">
      <div className="relative text-center p-12 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md z-10 max-w-xl w-full">
        {/* Large 404 Text with animation */}
        <h1 className="text-9xl font-extrabold mb-4 animate-pulse">404</h1>
        {/* Page Not Found Message */}
        <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
        {/* Subtext */}
        <p className="mt-6 text-lg text-white/90">
          Oops! The page you're looking for seems to have vanished into the digital abyss.
        </p>
        {/* Home Button */}
        <button
          className="mt-8 px-8 py-3 bg-white text-[#1a237e] font-semibold rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => navigate("/")}
        >
          Return to Safety
        </button>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white/20 backdrop-blur-sm"></div>
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#4fc3f7]/30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-[#80deea]/20 animate-float animation-delay-1000"></div>
    </div>
  );
};

export default NotFoundPage1;