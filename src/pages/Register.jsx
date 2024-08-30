import React, { useRef, useState } from "react";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import { useNavigate } from "react-router-dom";
import Loader from "../components/General/Loader";
import Toast from "../components/General/Toast";

const Register = () => {
  const navigate = useNavigate();
  const boxRef = useRef(null);

  const [showToast, setShowToast] = useState(false);
  const [loader, setLoader] = useState(false);
  const [severity, setSeverity] = useState("");
  const [res, setRes] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  // Helper function to validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    // Email validation
    if (!validateEmail(obj.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    if (obj.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    } else {
      setPasswordError("");
    }

    try {
      const body = JSON.stringify(obj);
      setLoader(true);
      const { response, status } = await WebHandler(
        URLS.REGISTER,
        "POST",
        body
      );
      if (status === 200) {
        setShowToast(true);
        setSeverity("success");
        setRes(response.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setShowToast(true);
        setSeverity("danger");
        setRes(response.message);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setShowToast(true);
      setSeverity("danger");
      setRes("Something went wrong. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {showToast && (
        <Toast message={res} severity={severity} onClose={() => setShowToast(false)} />
      )}
      {loader && <Loader />}
      <div className="fixed top-0 left-0 w-screen bg-[#f2f6f8] flex items-center justify-center h-screen p-4">
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl">
          <form ref={boxRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-start mb-4">
              <h1 className="text-3xl font-bold text-gray-800">Register</h1>
            </div>
            <div>
              <input
                name="name"
                type="text"
                placeholder="Name*"
                required
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#0DAFE6] text-sm text-gray-700 mt-5 transition duration-200 ease-in-out"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email*"
                required
                className={`w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#0DAFE6] text-sm text-gray-700 mt-5 transition duration-200 ease-in-out ${emailError ? 'border-red-500' : ''}`}
              />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="Password*"
                required
                className={`w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#0DAFE6] text-sm text-gray-700 mt-5 transition duration-200 ease-in-out ${passwordError ? 'border-red-500' : ''}`}
              />
              {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
            </div>
            <div className="flex items-center justify-start mt-4">
              <input
                type="checkbox"
                name="user"
                id="user"
                className="cursor-pointer w-4 h-4 text-[#0DAFE6] border-gray-300 focus:ring-[#0DAFE6]"
              />
              <label className="ml-2 text-sm text-gray-700 cursor-pointer" htmlFor="user">
                Remember me
              </label>
            </div>
            <input
              className="w-full p-3 cursor-pointer bg-[#0DAFE6] hover:bg-white hover:text-[#0DAFE6] active:bg-[#0DAFE6] active:text-white text-white font-bold rounded-xl mt-6 transition duration-200 ease-in-out"
              type="submit"
              value="Register"
            />
          </form>
          <button
            className="w-full text-center mt-5 text-sm text-gray-700 hover:text-blue-400 transition duration-200"
            onClick={() => navigate("/login")}
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
