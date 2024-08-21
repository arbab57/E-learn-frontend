import React, { useRef } from "react";
import useClickOutside from "../Hooks/UseClickOutside";

const Register = ({ setShowRegister }) => {
  const boxRef = useRef(null);
  useClickOutside(boxRef, () => setShowRegister(false));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);

    try {
      const response = await fetch('https://elearningportal-56538109f664.herokuapp.com/auth/register ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      const result = response.status;
      console.log('Response from API:', result);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen bg-black bg-opacity-40 flex flex-col justify-center h-screen">
        <form ref={boxRef} onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-8 bg-white rounded shadow-md">
          <div className="flex justify-start mb-4">
            <b className="text-2xl">Register</b>
          </div>
          <div>
            <input
              name="email"
              type="text"
              placeholder="Email*"
              required
              className="w-full p-2 outline-none text-sm text-gray-700 mt-5 border border-white border-b-2 border-b-black"
            />
          </div>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name*"
              required
              className="w-full p-2 outline-none text-sm text-gray-700 mt-5 border border-white border-b-2 border-b-black"
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password*"
              required
              className="w-full p-2 outline-none text-sm text-gray-700 mt-5 border border-white border-b-2 border-b-black"
            />
          </div>
          <div className="flex justify-start mt-8">
            <input
              type="checkbox"
              name="user"
              id="user"
              className="w-4 h-4 text-gray-700"
            />
            <label className="ml-2 text-sm text-gray-700" htmlFor="user">
              Remember me
            </label>
          </div>
          <input
            className="w-full p-2 active::text-[#0DAFE6] active:bg-[#0DAFE6] cursor-pointer bg-[#0DAFE6] hover:bg-[white] hover:text-[#0DAFE6] text-white font-bold py-2 px-4 rounded-xl mt-6"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </>
  );
};

export default Register;
