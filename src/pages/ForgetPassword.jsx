import React, { useState } from "react";
import Loader from "../components/General/Loader";
import { WebHandler } from "../data/remote/WebHandler";
import { URLS } from "../data/remote/URL";
import Toast from "../components/General/Toast";
import ResetPassword from "../components/ResetPassword";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [showToast, setShowToast] = useState(false);
  const [res, setres] = useState("");
  const [loading, setLoading] = useState(false);
  const [opt, setOpt] = useState(false);
  const [severity, setSeverity] = useState("");
  const [isEmail, setIsEmail] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    try {
      setLoading(true);
      const body = JSON.stringify(obj);
      const { response, status } = await WebHandler(URLS.GETOTP, "POST", body);
      console.log(res);
      if (status === 200) {
        setres(response.message);
        setSeverity("success");
        setShowToast(true);
        setOpt(true);
      } else {
        setSeverity("danger");
        setres(response.message);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showToast && (
        <Toast message={res} severity={severity} onClose={setShowToast} />
      )}
      {loading && <Loader />}
      {opt ? (
        <ResetPassword setOpt={setOpt} isEmail={isEmail} />
      ) : (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#f2f6f8] flex items-center justify-center">
          <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-start mb-4">
                <h1 className="text-2xl font-bold text-gray-800">Forgot Your Password?</h1>
              </div>
              <div>
                <input
                  onChange={(e) => setIsEmail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder="Email*"
                  required
                  className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-[#0DAFE6] text-sm text-gray-700 mt-5 transition duration-200 ease-in-out"
                />
              </div>
              <input
                className="w-full p-3 cursor-pointer bg-[#0DAFE6] hover:bg-white hover:text-[#0DAFE6] active:bg-[#0DAFE6] active:text-white text-white font-bold rounded-xl mt-6 transition duration-200 ease-in-out"
                type="submit"
                value="Get OTP"
              />
            </form>
            <button
              className="w-full text-center mt-5 text-sm text-gray-700 hover:text-blue-400 transition duration-200"
              onClick={() => navigate("/login")}
            >
              Login?
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgetPassword;
