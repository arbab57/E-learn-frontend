import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./General/Loader";
import { WebHandler } from "../data/remote/WebHandler";
import Toast from "./General/Toast";
import { URLS } from "../data/remote/URL";

const GetOpt = ({ isEmail, setOpt }) => {
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const [loader, setLoader] = useState(false);
  const [reseted, setReseted] = useState(false);
  const [res, setRes] = useState("");
  const [severity, setSeverity] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);

    try {
      setLoader(true);
      const body = JSON.stringify(obj);
      const { response, status } = await WebHandler(
        URLS.RESETPASSWORD,
        "POST",
        body
      );
      if (status === 200) {
        console.log(response.message);
        setRes(response.message);
        setShowToast(true);
        setSeverity("success");
      } else {
        setShowToast(true);
        setRes(response.message);
        setSeverity("danger");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (reseted) {
      navigate("/");
    }
  }, [reseted, navigate]);

  return (
    <>
      {showToast && (
        <Toast message={res} severity={severity} onClose={setShowToast} />
      )}
      {loader && <Loader />}
      {/* <div className="bg-[#f2f6f8]  w-screen fixed top-0 left-0 flex flex-col justify-center h-screen">
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-start mb-4">
              <b className="text-2xl">Reset Your Psswrod:</b>
            </div>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                Value={isEmail}
                name="email"
                type="email"
                placeholder="Email*"
                required
                className="w-full p-2 outline-none  text-sm text-gray-700 mt-5 border border-white border-b-2 border-b-black"
              />
            </div>
            <div>
              <input
                name="otp"
                type="OTP"
                placeholder="4 Digits Opt*"
                required
                className="w-full p-2 outline-none  text-sm text-gray-700 mt-5 border border-white border-b-2 border-b-black"
              />
            </div>
            <div>
              <input
                name="newPassword"
                type="password"
                placeholder="New Password*"
                required
                className="w-full p-2 outline-none  text-sm text-gray-700 mt-5 border border-white border-b-2 border-b-black"
              />
            </div>
            <input
              className="w-full cursor-pointer p-2 bg-[#0DAFE6] hover:bg-[white] hover:text-[#0DAFE6] active:bg-[#0DAFE6] active:text-white text-white font-bold py-2 px-4 rounded-xl mt-6"
              type="submit"
              value="Changes Password!"
            />
          </form>
          <button
            onClick={() => setOpt(false)}
            className=" cursor-pointer mt-5 active:text-blue-400 "
          >
            Get New OPT
          </button>
        </div>
      </div> */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-[#f2f6f8] flex items-center justify-center">
  <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-start mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Reset Your Password</h1>
      </div>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={isEmail}
          name="email"
          type="email"
          placeholder="Email*"
          required
          className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#0DAFE6] text-sm text-gray-700 mt-5 transition duration-200 ease-in-out"
        />
      </div>
      <div>
        <input
          name="otp"
          type="text"
          placeholder="4 Digits OTP*"
          required
          className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#0DAFE6] text-sm text-gray-700 mt-5 transition duration-200 ease-in-out"
        />
      </div>
      <div>
        <input
          name="newPassword"
          type="password"
          placeholder="New Password*"
          required
          className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#0DAFE6] text-sm text-gray-700 mt-5 transition duration-200 ease-in-out"
        />
      </div>
      <input
        className="w-full p-3 cursor-pointer bg-[#0DAFE6] hover:bg-white hover:text-[#0DAFE6] active:bg-[#0DAFE6] active:text-white text-white font-bold rounded-xl mt-6 transition duration-200 ease-in-out"
        type="submit"
        value="Change Password"
      />
    </form>
    <button
      onClick={() => setOpt(false)}
      className="mt-5 text-sm font-medium text-[#0DAFE6] hover:underline"
    >
      Get New OTP
    </button>
  </div>
</div>
    
    </>
  );
};

export default GetOpt;
