import React from "react";

const Register = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-screen">
        <div className="w-full max-w-md mx-auto p-4 bg-white rounded shadow-md">
          <div className="flex justify-start mb-4">
            <b className="text-2xl">Register</b>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email*"
              required
              className="w-full p-2 outline-none  text-sm text-gray-700 mt-5 border border-white border-b-2 border-b-black"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Name*"
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
            value="Register"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
