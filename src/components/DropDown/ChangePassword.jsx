import { React, useRef, useState } from "react";
import useClickOutside from "../../Hooks/UseClickOutside";
import Loader from "../General/Loader";
import { URLS } from "../../data/remote/URL";
import Toast from "../General/Toast";
import { WebHandler } from "../../data/remote/WebHandler";

const ChangePassword = ({ setPassword }) => {
  const [loader, setLoader] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [severity, setSeverity] = useState("");
  const [res, setRes] = useState("");

  const modalRef = useRef(null);
  const onClose = () => {
    setPassword(false);
  };
  useClickOutside(modalRef, onClose);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    try {
      setLoader(true);
      const body = JSON.stringify(obj);
      const { response, status } = await WebHandler(
        URLS.CHANGEPASSWORD,
        "POST",
        body
      );
      if (status === 200) {
        setRes(response.message);
        setShowToast(true);
        setSeverity("success");
      } else {
        setShowToast(true);
        setRes(response.message);
        setSeverity("danger");
        console.error("Login failed with status:", status);
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
      {/* <div className="flex justify-center items-center w-screen fixed top-0 left-0 bg-black bg-opacity-40 h-screen z-40">
        <div ref={modalRef} className="">
          <div className="bg-white flex justify-center">
            <div className="w-[600px] p-6 bg-red rounded-lg shadow dark:border md:mt-0 sm:max-w-md">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Change Password
              </h2>
              <form
                onSubmit={handleSubmit}
                className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
              >
                <div>
                  <label
                    htmlFor="oldPassword"
                    className="block mb-2 text-sm font-medium"
                  >
                    Old Password
                  </label>
                  <input
                    type="password"
                    name="oldPassword"
                    id="oldPassword"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="newPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer p-2 bg-[#0DAFE6] hover:bg-[white] hover:text-[#0DAFE6] active:bg-[#0DAFE6] active:text-white text-white font-bold py-2 px-4 rounded-xl mt-6"
                >
                  Confirm Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center w-screen fixed top-0 left-0 bg-black bg-opacity-40 h-screen z-40 transition-opacity duration-300 ease-in-out">
  <div ref={modalRef} className="relative w-full max-w-lg px-4">
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="mb-4 text-2xl font-bold text-center text-gray-900">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-700">
            Old Password
          </label>
          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-600 focus:border-primary-600"
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="••••••••"
            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-600 focus:border-primary-600"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="••••••••"
            className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-600 focus:border-primary-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[#0DAFE6] text-white font-bold rounded-lg hover:bg-white hover:text-[#0DAFE6] border border-transparent hover:border-[#0DAFE6] transition-colors duration-300 ease-in-out"
        >
          Confirm Password
        </button>
      </form>
    </div>
  </div>
</div>

    </>
  );
};

export default ChangePassword;
