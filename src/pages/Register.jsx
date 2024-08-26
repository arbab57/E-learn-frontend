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
  const [severity, setSeverity] = useState(false);
  const [res, setRes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);

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
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {showToast && (
        <Toast message={res} severity={severity} onClose={setShowToast} />
      )}
      {loader && <Loader />}
      <div className="fixed top-0 left-0 w-screen bg-[#f2f6f8] flex flex-col justify-center h-screen">
        <div className="w-full max-w-md mx-auto p-8 pb-4 bg-white rounded shadow-md">
          <form ref={boxRef} onSubmit={handleSubmit}>
            <div className="flex justify-start mb-4">
              <b className="text-2xl">Register</b>
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
                name="email"
                type="email"
                placeholder="Email*"
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
          <button
            className="mt-5 active:text-blue-400"
            onClick={() => navigate("/login")}
          >
            Login?
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
