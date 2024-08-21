import React, { useRef } from "react";
import useClickOutside from "../Hooks/UseClickOutside";

const Login = ({ setShowLogin }) => {
   const  boxRef = useRef(null)
    useClickOutside(boxRef, () => setShowLogin(false))

  return (
    <>
      <div className="fixed top-0 left-0 w-screen bg-black bg-opacity-40 flex flex-col justify-center h-screen">
        <div ref={boxRef} className="w-full max-w-md mx-auto p-4 bg-white rounded shadow-md">
          <div className="flex justify-start mb-4">
            <b className="text-2xl">Login</b>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email or Username*"
              required
              className="w-full p-2 outline-none  text-sm text-gray-700 mt-5 border border-white border-b-2 border-b-black"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password*"
              required
              className="w-full p-2 outline-none  text-sm text-gray-700 mt-5 border border-white border-b-2 border-b-black"
            />
          </div>
          <div className="flex justify-start mt-8">
            <input
              type="checkbox"
              name="user"
              id="user"
              className="w-4 h-4 text-gray-700 "
            />
            <label className="ml-2 text-sm text-gray-700" htmlFor="user">
              Remember me
            </label>
          </div>
          <input
            className="w-full p-2 bg-[#0DAFE6] hover:bg-[white] hover:text-[#0DAFE6] text-white font-bold py-2 px-4 rounded-xl mt-6"
            type="button"
            value="Login"
          />
          <p className="text-sm text-gray-700 mt-3">Forget Password?</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full max-w-md mx-auto p-4 bg-white rounded shadow-md">
          <div className="flex justify-center mb-4">
            <b className="text-2xl">Register</b>
          </div>
          <div>
            <input
              type="text"
              placeholder="Name*"
              required
              className="w-full p-2 text-sm text-gray-700"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email*"
              required
              className="w-full p-2 text-sm text-gray-700"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password*"
              required
              className="w-full p-2 text-sm text-gray-700"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Confirm Password*"
              required
              className="w-full p-2 text-sm text-gray-700"
            />
          </div>
          <input
            style={{ marginTop: 13 }}
            className="w-full p-2 bg-[#0DAFE6] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            value="Register"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
